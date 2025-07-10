import React, { useState } from 'react'

const ChatInput = ({ onSubmit }) => {
  const [input, setInput] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    onSubmit(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSend} className="flex gap-2">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a legal question..."
        className="flex-1 p-3 border rounded resize-none focus:outline-none focus:ring focus:border-blue-400 h-12"
      />
      <button
        type="submit"
        className="px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Send
      </button>
    </form>
  )
}

export default ChatInput
