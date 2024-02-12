import React from 'react';

const GeographicalLocation = () => {
  // Array of YouTube video IDs related to investing based on geographical location
  const youtubeVideoIds = [
    "ZCFkWDdmXG8", // Example video ID for a video on domestic investing, replace with your own
    
    // Add more video IDs as needed
  ];

  return (
    <div>
      <h1>Geographical Location in Investing</h1>
      <p>The geographical location of a company's operations can significantly impact its stock performance. Investors consider geographical factors to diversify their portfolios and mitigate risks associated with market volatility, economic cycles, and political instability.</p>
      
      <ul>
        <li><strong>Domestic Stocks:</strong> Investing in companies based in the investor's home country. This approach offers familiarity and ease of understanding the market but may limit diversification.</li>
        <li><strong>International Stocks:</strong> Investing in companies located outside the investor's home country. This can provide diversification benefits and exposure to emerging markets with potential for higher growth rates.</li>
        <li><strong>Emerging Markets:</strong> Investing in countries with developing economies. While these markets offer high growth potential, they also come with increased risks, including political instability and currency fluctuations.</li>
        <li><strong>Developed Markets:</strong> Investing in established economies. These markets are considered more stable but may offer lower growth potential compared to emerging markets.</li>
      </ul>
      
      <p>Considering geographical location allows investors to tap into global opportunities, balancing their portfolios between stable, developed markets and high-growth emerging markets.</p>
      
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

export default GeographicalLocation;

