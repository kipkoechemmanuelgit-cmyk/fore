import React from "react";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Paywall() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Advanced Forex Lessons</h1>
      <p className="text-gray-700 mb-8 max-w-lg mx-auto">
        To access advanced strategies and mentorship, please contact us via
        WhatsApp. We’ll link you up with legit trading sources and private
        lessons.
      </p>

      <WhatsAppButton
        phone="254762048809"
        message="Hi, I’m interested in advanced forex mentorship and trading sources."
      />
    </div>
  );
}