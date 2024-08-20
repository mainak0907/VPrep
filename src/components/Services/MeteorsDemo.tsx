import React, { useState } from 'react';
import axios from 'axios';
import Modal from '@/components/Common/Modal'; 
import { Meteors } from "../ui/meteors";

interface MeteorsDemoProps {
  heading: string;
}

const MeteorsDemo: React.FC<MeteorsDemoProps> = ({ heading }) => {
  const [modalContent, setModalContent] = useState<string>('');
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state for API call

  const handleClick = async () => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.error('No JWT found');
      return;
    }

    try {
      setIsLoading(true); // Set loading state
      const response = await axios.post(
        'https://prepify-server-side.onrender.com/api/generate/generateContent',
        { interest: heading },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('API Response:', response.data.content.kwargs.content); // Debugging line
      setModalContent(response.data.content.kwargs.content || 'Success!');
      setModalOpen(true); // Open modal after successful response
    } catch (error) {
      console.error('Failed to send interest', error);
      setModalContent('Failed to send interest');
      setModalOpen(true); // Open modal even on error for feedback
    } finally {
      setIsLoading(false); // Always set loading to false after API call completes
    }
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="justify-center">
        <div className="w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-4xl text-white mb-4 relative z-50">
              {heading}
            </h1>

            <button
              onClick={handleClick}
              className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 relative z-50 flex items-center"
              disabled={isLoading} // Disable button during loading
              aria-live="polite" 
              aria-busy={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading loading-infinity loading-lg mr-2"></span>
                  Loading...
                </>
              ) : (
                'Explore'
              )}
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>

        {modalOpen && <Modal content={modalContent} onClose={closeModal} />}
      </div>
    </>
  );
};

export default MeteorsDemo;
