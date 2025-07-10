import React, { useState, useRef, useEffect } from 'react'
import ChatInput from './components/ChatInput'
import ChatMessage from './components/ChatMessage'

function App() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const handleSubmit = (query) => {
    if (!query.trim()) return

    setMessages([...messages, { type: 'user', text: query }])
    setLoading(true)

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text:
            'Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.',
          citation: {
            text:
              '“as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)',
            link:
              'https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz'
          }
        }
      ])
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex flex-col h-screen bg-[#f7f7f8]">
      <header className="p-4 text-xl font-bold bg-white border-b shadow-sm text-center">
        Lexi Legal Assistant
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
        {loading && (
          <div className="text-gray-500 bg-white rounded-lg p-4 w-fit max-w-[80%]">
            Generating response...
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      <footer className="p-4 bg-white border-t">
        <ChatInput onSubmit={handleSubmit} />
      </footer>
    </div>
  )
}

export default App
