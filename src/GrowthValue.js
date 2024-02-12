import React from 'react';

const GrowthValue = () => {
  // Array of YouTube video IDs related to Growth and Value investing
  const youtubeVideoIds = [
    "6sUvcWpPvFE", // Example video ID for a video on growth investing, replace with your own
    // Add more video IDs as needed
  ];

  return (
    <div>
      <h1>Growth vs. Value Investing</h1>
      <p>Growth and value are two fundamental approaches in stock investing. Each strategy has its characteristics, risks, and potential rewards. Understanding the differences can help investors align their portfolio with their investment goals and risk tolerance.</p>
      
      <h2>Growth Investing</h2>
      <ul>
        <li>Growth investing focuses on companies expected to grow at an above-average rate compared to their industry or the overall market.</li>
        <li>Growth stocks typically reinvest earnings to fuel growth, often resulting in little to no dividend payouts to shareholders.</li>
        <li>Investors are mainly interested in capital appreciation.</li>
      </ul>
      
      <h2>Value Investing</h2>
      <ul>
        <li>Value investing targets undervalued companies whose stocks are priced below their perceived true value.</li>
        <li>Value investors look for stocks trading at a discount to their intrinsic value, aiming to capitalize on market corrections when the stock's price adjusts to its "true" value.</li>
        <li>These stocks often pay dividends, making them attractive to income-focused investors.</li>
      </ul>
      
      <p>Choosing between growth and value investing depends on individual financial goals, risk tolerance, and investment horizon. Many investors may find a balanced approach, incorporating elements of both strategies, suits their overall investment strategy best.</p>
      
      {/* Video Gallery */}
      <div className="video-gallery">
        {youtubeVideoIds.map((id, index) => (
          <div key={index} className="video-item">
            <iframe
              width="320"
              height="240"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthValue;

