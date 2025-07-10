import React from 'react'

const ChatMessage = ({ message }) => {
  const isUser = message.type === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`p-3 rounded-lg max-w-[80%] whitespace-pre-wrap text-sm ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-800 border shadow-sm'
        }`}
      >
        {message.text}
        {message.citation && (
          <div className="mt-2 text-xs text-blue-600">
            <a
              href={message.citation.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {message.citation.text}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatMessage
