import React from 'react';

const MarketCapitalization = () => {
  // Array of YouTube video IDs related to Market Capitalization
  const youtubeVideoIds = [
    "_JNlku5xy9Q", // Example video ID, replace with your own
     
    // Add more video IDs as needed
  ];

  return (
    <div>
      <h1>Market Capitalization</h1>
      <h1>Market capitalization, often referred to as market cap, is the total market value of a company's outstanding shares of stock. It is calculated by multiplying the company's share price by its total number of outstanding shares. Market capitalization is a significant indicator of a company's size, and it's used by investors to determine the company's risk profile and to compare its size to other companies in the market.</h1>
      
      <p>Market cap is categorized into three main types:</p>
      <ul>
        <li><strong>Large Cap:</strong> Companies with a market cap of $10 billion or more. These are usually well-established companies with a significant presence in their industry. They are considered to be more stable and safe investments.</li>
        <li><strong>Mid Cap:</strong> Companies with a market cap between $2 billion and $10 billion. These companies are in the middle of their growth curve, offering a balance between stability and growth potential.</li>
        <li><strong>Small Cap:</strong> Companies with a market cap between $300 million and $2 billion. Small-cap stocks are considered to be more volatile and risky, but they offer high growth potential.</li>
      </ul>
      
      <h1>Understanding market capitalization can help investors make informed decisions about diversifying their investment portfolios, balancing risk, and identifying potential investment opportunities.</h1>
      
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

export default MarketCapitalization;
