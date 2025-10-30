import React from "react";
import "./App.css";

const lessons = [
  {
    title: "1. Introduction to Forex",
    content:
      "Forex (Foreign Exchange) is the global marketplace for exchanging national currencies. It operates 24/5 and is the largest financial market in the world."
  },
  {
    title: "2. How Forex Trading Works",
    content:
      "Forex trading involves buying one currency and selling another at the same time. For example, when you buy EUR/USD, you are buying the Euro and selling the Dollar."
  },
  {
    title: "3. Currency Pairs Explained",
    content:
      "A currency pair is written like EUR/USD or GBP/JPY. The first is the base currency, and the second is the quote currency. The price shows how much of the quote currency you need to buy one unit of the base currency."
  },
  {
    title: "4. What is a Pip?",
    content:
      "A pip is the smallest price move that a given exchange rate can make. It’s typically 0.0001 for most pairs."
  },
  {
    title: "5. What is Leverage?",
    content:
      "Leverage allows traders to control a large position with a small amount of money. For example, 1:100 leverage means you can control $10,000 with only $100."
  },
  {
    title: "6. Understanding Lots",
    content:
      "A standard lot is 100,000 units of the base currency. Mini and micro lots are smaller and let beginners trade with less risk."
  },
  {
    title: "7. Risk Management Basics",
    content:
      "Never risk more than 2% of your account on a single trade. Use stop-loss orders to manage potential losses."
  },
  {
    title: "8. Trading Psychology",
    content:
      "Emotions like fear and greed affect trading. Always follow your strategy and avoid emotional decisions."
  },
  {
    title: "9. Types of Market Analysis",
    content:
      "There are three main types: Technical (charts & indicators), Fundamental (news & economy), and Sentiment (trader behavior)."
  },
  {
    title: "10. Demo Trading",
    content:
      "Before trading live, start with a demo account to practice and build confidence."
  },  
  {
    title: "1. Introduction to Forex",
    content:
      "Forex (Foreign Exchange) is the global marketplace for exchanging national currencies. It operates 24/5 and is the largest financial market in the world."
  },
  {
    title: "2. How Forex Trading Works",
    content:
      "Forex trading involves buying one currency and selling another at the same time. For example, when you buy EUR/USD, you are buying the Euro and selling the Dollar."
  },
  {
    title: "3. Currency Pairs Explained",
    content:
      "A currency pair is written like EUR/USD or GBP/JPY. The first is the base currency, and the second is the quote currency. The price shows how much of the quote currency you need to buy one unit of the base currency."
  },
  {
    title: "4. What is a Pip?",
    content:
      "A pip is the smallest price move that a given exchange rate can make. It’s typically 0.0001 for most pairs."
  },
  {
    title: "5. What is Leverage?",
    content:
      "Leverage allows traders to control a large position with a small amount of money. For example, 1:100 leverage means you can control $10,000 with only $100."
  },
  {
    title: "6. Understanding Lots",
    content:
      "A standard lot is 100,000 units of the base currency. Mini and micro lots are smaller and let beginners trade with less risk."
  },
  {
    title: "7. Risk Management Basics",
    content:
      "Never risk more than 2% of your account on a single trade. Use stop-loss orders to manage potential losses."
  },
  {
    title: "8. Trading Psychology",
    content:
      "Emotions like fear and greed affect trading. Always follow your strategy and avoid emotional decisions."
  },
  {
    title: "9. Types of Market Analysis",
    content:
      "There are three main types: Technical (charts & indicators), Fundamental (news & economy), and Sentiment (trader behavior)."
  },
  {
    title: "10. Demo Trading",
    content:
      "Before trading live, start with a demo account to practice and build confidence."
  },
  {
    title: "11. Understanding Forex Quotes",
    content:
      "A forex quote shows the price of one currency against another. For example, EUR/USD = 1.2000 means 1 Euro equals 1.20 USD."
  },
  {
    title: "12. Bid and Ask Price",
    content:
      "The bid price is the highest price a buyer is willing to pay for a currency, while the ask price is the lowest price a seller is willing to accept."
  },
  {
    title: "13. Spread in Forex",
    content:
      "The spread is the difference between the bid and ask price. A smaller spread means lower trading costs."
  },
  {
    title: "14. Market Orders vs Limit Orders",
    content:
      "A market order is an order to buy or sell immediately at the current market price. A limit order is an order to buy or sell at a specific price or better."
  },
  {
    title: "15. Stop-Loss Orders",
    content:
      "A stop-loss order automatically closes your position if the price moves against you by a certain amount, limiting potential losses."
  },
  {
    title: "16. Take-Profit Orders",
    content:
      "Take-profit orders allow traders to lock in profits by automatically closing a position once the price reaches a specified level."
  },
  {
    title: "17. Scalping",
    content:
      "Scalping is a short-term trading strategy where traders make small, quick profits by entering and exiting the market within minutes."
  },
  {
    title: "18. Day Trading",
    content:
      "Day trading involves opening and closing positions within a single trading day, aiming to capitalize on intraday price movements."
  },
  {
    title: "19. Swing Trading",
    content:
      "Swing trading involves holding positions for several days or weeks, aiming to capture larger price movements than day traders."
  },
  {
    title: "20. Position Trading",
    content:
      "Position trading involves holding trades for weeks, months, or even years, based on long-term trends and fundamental analysis."
  },
  {
    title: "21. Trading Session Overview",
    content:
      "The Forex market is open 24/5 and divided into major trading sessions: Sydney, Tokyo, London, and New York."
  },
  {
    title: "22. Major Currency Pairs",
    content:
      "Major currency pairs include EUR/USD, GBP/USD, USD/JPY, and others. They are the most liquid and commonly traded."
  },
  {
    title: "23. Minor and Exotic Pairs",
    content:
      "Minor pairs include currencies that are less commonly traded, such as EUR/GBP, while exotic pairs involve a major currency paired with a currency from an emerging market."
  },
  {
    title: "24. Understanding Economic Indicators",
    content:
      "Economic indicators like GDP, inflation, unemployment rates, and interest rates influence currency movements and market sentiment."
  },
  {
    title: "25. Central Banks and Interest Rates",
    content:
      "Central banks play a key role in Forex, with interest rate changes impacting the strength of a currency. For example, the Federal Reserve's decisions affect USD movement."
  },
  {
    title: "26. Forex Trading Strategies",
    content:
      "Common strategies include trend following, range trading, breakout strategies, and news trading. Your strategy should align with your risk tolerance and goals."
  },
  {
    title: "27. The Role of Technical Analysis",
    content:
      "Technical analysis involves studying past price movements, charts, and indicators to predict future price action."
  },
  {
    title: "28. The Role of Fundamental Analysis",
    content:
      "Fundamental analysis focuses on economic and geopolitical factors that affect a currency’s value, such as economic reports, political events, and natural disasters."
  },
  {
    title: "29. Understanding Indicators: RSI and MACD",
    content:
      "RSI (Relative Strength Index) measures market momentum, while MACD (Moving Average Convergence Divergence) is a trend-following momentum indicator."
  },
  {
    title: "30. Fibonacci Retracement",
    content:
      "Fibonacci retracement levels are used to identify potential support and resistance levels in a trending market, helping traders spot entry points."
  },
  {
    title: "31. Moving Averages",
    content:
      "Moving averages smooth out price data to identify trends. Simple moving averages (SMA) and exponential moving averages (EMA) are common tools."
  },
  {
    title: "32. Bollinger Bands",
    content:
      "Bollinger Bands are volatility indicators. The bands expand and contract based on market volatility, helping traders identify overbought or oversold conditions."
  },
  {
    title: "33. Stochastic Oscillator",
    content:
      "The stochastic oscillator is a momentum indicator that compares a currency's closing price to its price range over a specific period."
  },
  {
    title: "34. Trading Volatility",
    content:
      "Volatility refers to the size and speed of price movements. High volatility presents more trading opportunities but also higher risk."
  },
  {
    title: "35. How to Use Support and Resistance",
    content:
      "Support is a price level where a downtrend can pause or reverse, while resistance is a level where an uptrend may stall or reverse."
  },
  {
    title: "36. Risk-to-Reward Ratio",
    content:
      "A risk-to-reward ratio is a measure of how much you stand to gain compared to what you stand to lose. A typical ratio is 1:2."
  },
  {
    title: "37. Trading Journals",
    content:
      "Keeping a trading journal helps you track your performance, understand your decision-making, and improve your strategy over time."
  },
  {
    title: "38. Algorithmic Trading",
    content:
      "Algorithmic trading uses computer programs and algorithms to automate trading strategies, reducing human error and emotions."
  },
  {
    title: "39. Forex Broker Selection",
    content:
      "Choosing a reliable forex broker is crucial for your trading success. Look for low spreads, good customer service, and strong regulation."
  },
  {
    title: "40. Avoiding Common Forex Mistakes",
    content:
      "Common mistakes include overleveraging, trading without a plan, and ignoring risk management rules. Learn from your losses to become a better trader."
  },
  {
    title: "41. Trading Hours and Market Liquidity",
    content:
      "Liquidity is the ability to buy and sell assets without affecting the price significantly. Trading hours overlap between sessions (London-New York) offer the best liquidity."
  },
  {
    title: "42. Hedging in Forex",
    content:
      "Hedging is a strategy to protect against potential losses by opening positions that offset each other. It’s used to reduce risk when you’re uncertain about market direction."
  },
  {
    title: "43. Correlation Between Currency Pairs",
    content:
      "Currency pairs can be positively or negatively correlated. For example, EUR/USD and GBP/USD are positively correlated, while EUR/USD and USD/CHF are negatively correlated."
  },
  {
    tittle: "44. Project Skydaddys", 
    content:
     "have you ever thought about trading with an ai? yeah it's possible @project skydaddy's we got you covered, all you have to do is just request for your personal bot via whatsapp. We have already built working bots, deployable on telegram, whatsapp, discord."
  },
];

export default function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Forex Beginners Academy 💹</h1>
        <p>Learn Forex step by step — from basics to mastery</p>
      </header>

      <section className="lesson-section">
        {lessons.map((lesson, index) => (
          <div key={index} className="lesson-card">
            <h2>{lesson.title}</h2>
            <p>{lesson.content}</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>Need mentorship or legit trading links?</p>
        <p>
          Message us on WhatsApp:{" "}
          <a
            href="https://wa.me/254762048809"
            target="_blank"
            rel="noopener noreferrer"
          >
            +254 762 048 809
          </a>
        </p>
      </footer>
    </div>
  );
}