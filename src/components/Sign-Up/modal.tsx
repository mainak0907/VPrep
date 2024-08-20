'use client';   
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div
        className="relative bg-white dark:bg-black text-black dark:text-white p-8 rounded-md shadow-lg"
        style={{
          width: '80%',
          maxWidth: '600px',
          maxHeight: '80%', 
          overflowY: 'auto', 
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
