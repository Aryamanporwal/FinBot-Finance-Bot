import React, { useState } from "react";

export default function NamePrompt() {
  const [name, setName] = useState("");

  const submitName = () => {
    if (!name.trim()) return;
    console.log("Name submitted:", name);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#faf9f6] px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6">
        {/* Logo + Small Title */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="/logo.png" // from public folder
            alt="Stock Market"
            className="w-16 h-16 object-contain bg-white"
          />
          <div>
            <h1 className="text-lg font-semibold text-gray-800">FinBot</h1>
            <p className="text-sm text-gray-500">
              Your personal finance assistant
            </p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xl mb-6 font-medium text-gray-800">
          Before we get started, what should I call you?
        </h2>

        {/* Input + Button */}
        <div className="flex items-center border-2 border-gray-300 rounded-full px-3 py-2 focus-within:border-gray-500 shadow-sm transition">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 outline-none px-2 text-gray-700"
          />
          <button
            onClick={submitName}
            className="bg-gray-700 hover:bg-gray-900 text-white rounded-full px-4 py-2 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
