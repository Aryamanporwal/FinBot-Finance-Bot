import React, { useState } from "react";

export default function TopicSelection({ name }) {
  const topics = [
    { label: "Healthcare", icon: "🩺" },
    { label: "Solar Power", icon: "☀️" },
    { label: "Stealth", icon: "🕵️" },
    { label: "Information Technology & Software", icon: "💻" },
    { label: "Automobile & Electric Vehicles", icon: "🚗" },
    { label: "E-Commerce & Retail", icon: "🛒" },
    { label: "Education & EdTech", icon: "🎓" },
    { label: "Agriculture & Food Processing", icon: "🌾" },
  ];

  const [selected, setSelected] = useState([]);

  const toggleTopic = (topic) => {
    if (selected.includes(topic)) {
      setSelected(selected.filter((t) => t !== topic));
    } else if (selected.length < 3) {
      setSelected([...selected, topic]);
    }
  };

  const submitTopics = () => {
    if (selected.length === 0) return;
    console.log("Name:", name);
    console.log("Selected topics:", selected);
    // Backend dev: Save name and topics to DB here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#faf9f6] px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Logo + Title */}
        <div className="flex items-center space-x-4 mb-6">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 object-cover" />
          <div className="text-left">
            <h1 className="text-lg font-bold text-gray-800">FinBot</h1>
            <p className="text-sm font-bold text-gray-500">
              Your personal finance assistant
            </p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xl mb-6 font-bold text-gray-800 text-left">
          What are you into, {name}? Pick three topics to explore.
        </h2>

        {/* Topics in horizontal wrap layout */}
        <div className="flex flex-wrap gap-3 mb-8">
          {topics.map((t) => (
            <button
              key={t.label}
              onClick={() => toggleTopic(t.label)}
              className={`flex items-center gap-2 border rounded-full px-4 py-2 font-bold transition ${
                selected.includes(t.label)
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white border-gray-300 hover:border-gray-500"
              }`}
            >
              <span>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={submitTopics}
          className="bg-gray-700 hover:bg-gray-900 text-white rounded-full px-6 py-2 transition font-bold"
        >
          Let’s go
        </button>
      </div>
    </div>
  );
}
