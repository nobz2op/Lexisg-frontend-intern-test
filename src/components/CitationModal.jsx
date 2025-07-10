import React from 'react'

const CitationModal = ({ link, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-4 w-11/12 h-5/6 shadow-lg relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-red-600 text-xl font-bold"
      >
        &times;
      </button>
      <h2 className="text-lg font-semibold mb-2">Judgment PDF – Paragraph 7</h2>
      <iframe
        src={link}
        title="PDF Viewer"
        className="w-full h-full border rounded"
      ></iframe>
    </div>
  </div>
)

export default CitationModal
