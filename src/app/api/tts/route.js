import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import { PassThrough } from "stream";

export async function GET(req) {
  const speechConfig = sdk.SpeechConfig.fromSubscription(
    process.env["SPEECH_KEY"],
    process.env["SPEECH_REGION"]
  );

  const teacher = req.nextUrl.searchParams.get("teacher") || "Nanami";
  speechConfig.speechSynthesisVoiceName = `en-US-AvaMultilingualNeural`;

  const speechSynthesizer = new sdk.SpeechSynthesizer(speechConfig);
  const visemes = [];

  speechSynthesizer.visemeReceived = function (s, e) {
    visemes.push([e.audioOffset / 10000, e.visemeId]);
  };

  const audioStream = await new Promise((resolve, reject) => {
    speechSynthesizer.speakTextAsync(
      req.nextUrl.searchParams.get("text") ||
        "I'm excited to try text to speech",
      (result) => {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
          const { audioData } = result;

          if (!audioData) {
            reject(new Error("Audio data is undefined"));
            return;
          }

          speechSynthesizer.close();

          const bufferStream = new PassThrough();
          bufferStream.end(Buffer.from(audioData));
          resolve(bufferStream);
        } else {
          reject(new Error(`Speech synthesis failed: ${result.errorDetails}`));
        }
      },
      (error) => {
        console.error("Error during speech synthesis:", error);
        speechSynthesizer.close();
        reject(error);
      }
    );
  });

  return new Response(audioStream, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Disposition": `inline; filename=tts.mp3`,
      Visemes: JSON.stringify(visemes),
    },
  });
}
