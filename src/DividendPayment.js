import React from 'react';

const DividendPayment = () => {
  const youtubeVideoIds = [
    "kjeosZuC7Uw", // Replace with actual YouTube video ID
    
    // Add more video IDs as needed
  ];

  return (
    <div>
      <h1>Dividend Payment</h1>
      <p>Dividends are payments made by a corporation to its shareholder members. It is the portion of corporate profits paid out to stockholders. When a corporation earns a profit or surplus, it is able to pay a proportion of the profit as a dividend to shareholders. Any amount not distributed is taken to be re-invested in the business (called retained earnings).</p>
      
      <p>Dividends can be issued as cash payments, as shares of stock, or other property. A company’s dividend payments can provide investors with income and can also signal the company’s financial health and future growth prospects.</p>
      
      <ul>
        <li><strong>Cash Dividends:</strong> These are the most common form of payment and are paid out in currency, usually via electronic funds transfer or a printed paper check.</li>
        <li><strong>Stock Dividends:</strong> Rather than paying cash, companies may also issue additional shares of stock to shareholders.</li>
        <li><strong>Special Dividends:</strong> Occasionally, a company may pay a dividend that is outside of its typical dividend policy, often to distribute unexpected profits.</li>
        <li><strong>Dividend Yield:</strong> An important metric for investors, dividend yield is a dividend expressed as a percentage of a current share price.</li>
        <li><strong>Reinvestment:</strong> Shareholders often have the option to reinvest dividends to purchase additional shares, compounding their investment.</li>
      </ul>
      
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



export default DividendPayment;