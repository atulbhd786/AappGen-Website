import React, { useEffect, useState } from "react";
import "./Chatbot.css";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const autoReplies = {
    hello: "Hello dost 😊",
    hi: "Hi there 👋",
    price: "Please contact us for pricing details 💰",
    services: "We provide web & app development services 🚀",
    contact: "You can contact us at support@example.com 📧",
  };

  const getReply = (msg) => {
    const key = Object.keys(autoReplies).find((k) =>
      msg.toLowerCase().includes(k)
    );
    return key
      ? autoReplies[key]
      : "Thanks for your message 😊 We will get back to you soon.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    const reply = getReply(input);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
    }, 800);
  };

  return (
    <>
     <div
  className="chat-icon"
  onClick={() => {
    console.log("Chat icon clicked");
    setOpen(!open);
  }}
>💬</div>

      {open && (
        <div className="chatbox">
          <div className="chat-header">Chat Support</div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
