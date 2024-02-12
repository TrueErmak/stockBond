import React from 'react';

const SectorIndustry = () => {
  // Array of YouTube video IDs related to different sectors and industries
  const youtubeVideoIds = [
    "ze_aLOZTfg4", // Example video ID, replace with your own
    
    // Add more video IDs as needed
  ];

  return (
    <div>
      <h1>Sector and Industry</h1>
      <p>Sectors and industries are ways of grouping companies that operate in similar markets or fields. The stock market is often divided into sectors to categorize the broader economy's various parts. Each sector can be further broken down into industries, where companies share even more specific characteristics, products, or services.</p>
      
      <p>Key sectors include:</p>
      <ul>
        <li><strong>Technology:</strong> Companies involved in the development and production of technology products or services.</li>
        <li><strong>Healthcare:</strong> Companies in the medical and healthcare industry, including pharmaceuticals, biotechnology, and healthcare facilities.</li>
        <li><strong>Financials:</strong> Institutions that provide financial services, such as banks, investment companies, insurance companies, and real estate firms.</li>
        <li><strong>Consumer Discretionary:</strong> Companies that sell goods and services considered non-essential by consumers, such as luxury goods, automobiles, and entertainment.</li>
        <li><strong>Energy:</strong> Companies involved in the production and distribution of energy, including oil and gas exploration, renewable energy sources, and utilities.</li>
        {/* Add more sectors as needed */}
      </ul>
      
      <p>Understanding the differences between sectors and industries can help investors diversify their portfolios and identify investment opportunities based on market trends and economic cycles.</p>
      
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




export default SectorIndustry;