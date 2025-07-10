import React from 'react'

const AnswerCard = ({ response }) => (
  <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-6">
    <p className="text-gray-800 text-lg">
      <strong>Answer:</strong> {response.answer}
    </p>
    <div className="mt-4 text-sm">
      <p className="font-semibold text-gray-600">Source:</p>
      <a
        href={response.citations[0].link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {response.citations[0].text}
      </a>
    </div>
  </div>
)

export default AnswerCard
