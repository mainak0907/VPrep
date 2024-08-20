import React from 'react';
import { useRouter } from "next/navigation";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (difficulty: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onGenerate }) => {
  const [selectedDifficulty, setSelectedDifficulty] = React.useState('');

  if (!isOpen) return null;
 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4 text-black">Select Difficulty Level of Interview</h2>
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="select select-bordered w-full mb-4 text-black"
        >
          <option value="" disabled>Select difficulty Level </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="btn btn-secondary">Cancel</button>
          <button  className="btn btn-primary">Generate</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
