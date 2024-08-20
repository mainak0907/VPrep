import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchUserData } from '@/utils/fetchUserData';
import Modal from '@/components/Common/modalCard';

const ThreeCardsComponent: React.FC = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [headings, setHeadings] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        try {
          const data = await fetchUserData(token);
          console.log(data.aoi);
          setHeadings(data.aoi || []);
        } catch (error) {
          console.error('Failed to fetch user data', error);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleGenerate = (difficulty: string) => {
    setIsModalOpen(false);
    //router.push(`/generate?difficulty=${difficulty}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12 p-6">
      
      <div className="card bg-white border border-gray-200 rounded-lg shadow-md w-full max-w-sm">
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-semibold mb-4 text-black">Job Description</h2>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Enter job description here"
            className="textarea textarea-bordered w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-accent">Next</button>
      </div>
      
      <div className="card bg-white border border-gray-200 rounded-lg shadow-md w-full max-w-sm">
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-semibold mb-4 text-black">Technical Topic</h2>
          <textarea
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            placeholder="Enter technical topic here"
            className="textarea textarea-bordered w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-accent">Next</button>
      </div>
      
      <div className="card bg-white border border-gray-200 rounded-lg shadow-md w-full max-w-sm">
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-semibold mb-4 text-black">Area of Interest</h2>
          <select
            value={areaOfInterest}
            onChange={(e) => setAreaOfInterest(e.target.value)}
            className="select select-bordered w-full text-black p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {headings.map((heading, index) => (
              <option key={index} value={heading}>
                {heading}
              </option>
            ))}
          </select>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="btn btn-accent">Next</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onGenerate={handleGenerate} />
      
    </div>
  );
};

export default ThreeCardsComponent;
