
import React from 'react';

const Toast = ({ message }: { message: string }) => {
  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg rounded-lg p-4 z-50">
      {message}
    </div>
  );
};

export default Toast;
