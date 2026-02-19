'use client';

import { useEffect } from 'react';

export default function MaintenanceModal() {
  useEffect(() => {
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-8 max-w-sm mx-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Maintenance Mode
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We're currently updating our website to serve you better.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          We'll be back in a few weeks. Thank you for your patience!
        </p>
      </div>
    </div>
  );
}
