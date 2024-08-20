import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ModalProps {
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  return (
    <dialog id="my_modal_4" className="modal" open>
      <div className="modal-box w-11/12 max-w-5xl text-black">
        <h3 className="font-bold text-lg">Response</h3>
        <div className="py-4">
          <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
        </div>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
