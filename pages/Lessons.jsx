import React from "react";
import LessonCard from "../components/LessonCard";

export default function Lessons() {
  const lessons = [
    {
      id: 1,
      title: "What is Forex Trading?",
      content:
        "Forex (foreign exchange) trading is the global marketplace where currencies are bought and sold. Traders profit from changes in currency values.",
    },
    {
      id: 2,
      title: "Currency Pairs Explained",
      content:
        "Currencies are traded in pairs (like EUR/USD). The first is the base currency, and the second is the quote currency. Their ratio shows how much of one you need to buy the other.",
    },
    {
      id: 3,
      title: "Understanding Pips and Lots",
      content:
        "A 'pip' is the smallest price change in a currency pair. 'Lots' refer to the size of a trade. 1 standard lot = 100,000 units of currency.",
    },
    {
      id: 4,
      title: "What is Leverage?",
      content:
        "Leverage allows you to control larger positions with less money. It increases both potential profits and risks, so it must be used carefully.",
    },
    {
      id: 5,
      title: "The Role of Brokers",
      content:
        "Forex brokers connect traders to the interbank market. Always choose regulated brokers for safety and transparency.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Beginner Forex Lessons
      </h1>

      <div className="grid gap-6">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} title={lesson.title} content={lesson.content} />
        ))}
      </div>
    </div>
  );
}