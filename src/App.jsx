
import React, { useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [quote, setQuote] = useState('');
  const [animKey, setAnimKey] = useState(0);
  const [cornerStyle, setCornerStyle] = useState('flyFromTop');

  const quotesList = [
    { text: "“Quiet moments shape the loudest masterpieces.”" },
    { text: "“Creativity is intelligence having pure fun.”" },
    { text: "“Every line of code brings your vision to life.”" },
    { text: "“Great things are built with passion and patience.”" },
    { text: "“Art and code weave the future of digital experiences.”" },
    { text: "“Simplicity is the ultimate sophistication in design.”" }
  ];

  const handleGenerate = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(num);

    const randomIndex = Math.floor(Math.random() * quotesList.length);
    setQuote(quotesList[randomIndex].text);

    const corners = [
      'flyFromTop',
      'flyFromLeft',
      'flyFromRight',
      'flyFromBottom'
    ];

    const randomCorner =
      corners[Math.floor(Math.random() * corners.length)];

    setCornerStyle(randomCorner);
    setAnimKey(prev => prev + 1);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000000',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      color: '#FFFFFF',
      overflowX: 'hidden'
    }}>

      <style>
        {`
          @keyframes flyFromTop {
            0% { opacity: 0; transform: translateY(-150px) scale(0.2); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }

          @keyframes flyFromLeft {
            0% { opacity: 0; transform: translateX(-200px) scale(0.2) rotate(-20deg); }
            100% { opacity: 1; transform: translateX(0) scale(1) rotate(0deg); }
          }

          @keyframes flyFromRight {
            0% { opacity: 0; transform: translateX(200px) scale(0.2) rotate(20deg); }
            100% { opacity: 1; transform: translateX(0) scale(1) rotate(0deg); }
          }

          @keyframes flyFromBottom {
            0% { opacity: 0; transform: translateY(150px) scale(0.2); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }

          @keyframes fadeInQuote {
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .flyFromTop {
            animation: flyFromTop 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .flyFromLeft {
            animation: flyFromLeft 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .flyFromRight {
            animation: flyFromRight 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .flyFromBottom {
            animation: flyFromBottom 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .fade-quote {
            animation: fadeInQuote 0.8s ease forwards;
          }

          button:hover {
            opacity: 0.85;
            transform: translateY(-1px);
          }
        `}
      </style>

      {/* Main Container */}
      <div style={{
        maxWidth: '420px',
        width: '100%',
        textAlign: 'center'
      }}>

        {/* Heading */}
        <div style={{ marginBottom: '36px' }}>
          <h1 style={{
            fontSize: '22px',
            fontWeight: '700',
            margin: 0,
            letterSpacing: '1px',
            color: '#DDDDDD'
          }}>
            Random Number Generator
          </h1>

          <p style={{
            fontSize: '12px',
            color: '#666666',
            margin: '6px 0 0 0',
            letterSpacing: '0.5px'
          }}>
            React State & Conditional Rendering
          </p>
        </div>

        {/* Number Display */}
        <div style={{
          marginBottom: '32px',
          minHeight: '110px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          {randomNumber === null ? (
            <p style={{
              fontSize: '16px',
              color: '#666666',
              fontStyle: 'italic',
              margin: '20px 0',
              letterSpacing: '1px'
            }}>
              “No number generated yet”
            </p>
          ) : (
            <span
              key={animKey}
              className={cornerStyle}
              style={{
                fontSize: '84px',
                fontWeight: '900',
                color: '#FFFFFF',
                lineHeight: 1,
                display: 'block',
                textShadow: '0 0 35px rgba(255,255,255,0.3)',
                letterSpacing: '2px'
              }}
            >
              {randomNumber}
            </span>
          )}

        </div>

        {/* Quote Display */}
        <div style={{
          marginBottom: '36px',
          minHeight: '90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 10px'
        }}>

          {randomNumber === null ? (
            <p style={{
              fontSize: '13px',
              color: '#555555',
              margin: 0,
              letterSpacing: '0.5px'
            }}>
              Click the button below to start.
            </p>
          ) : (
            <p
              key={animKey}
              className="fade-quote"
              style={{
                fontSize: '19px',
                color: '#FFFFFF',
                margin: 0,
                fontStyle: 'italic',
                fontWeight: '600',
                lineHeight: '1.8',
                letterSpacing: '1.5px',
                wordSpacing: '3px',
                textShadow: 'none',
                textAlign: 'center',
                maxWidth: '390px'
              }}
            >
              {quote}
            </p>
          )}

        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            color: '#000000',
            border: 'none',
            padding: '14px',
            borderRadius: '14px',
            fontWeight: '700',
            fontSize: '15px',
            cursor: 'pointer',
            letterSpacing: '0.5px',
            transition: 'all 0.2s ease'
          }}
        >
          Generate Random Number
        </button>

      </div>
    </div>
  );
}

export default App;
