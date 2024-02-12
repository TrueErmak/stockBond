import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './index.css';

import MarketCapitalization from './MarketCapitalization';
import SectorIndustry from './SectorIndustry';
import GrowthValue from './GrowthValue';
import DividendPayment from './DividendPayment';
import GeographicalLocation from './GeographicalLocation';

import backgroundGif from './background.gif';

const StockData = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const symbols = ['AAPL', 'MSFT', 'AACG'];
        const results = await Promise.all(symbols.map(async symbol => {
          const response = await fetch(`http://localhost:5000/api/stock/${symbol}`);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return { symbol, data };
        }));
        // Filter out any undefined results due to network errors or missing data
        const filteredResults = results.filter(result => result && result.data && Object.keys(result.data).length > 0);
        setStocks(filteredResults);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  return (
    <Router>
      <div> 
        <h1>Top Stocks</h1>
        {loading ? (
          <p>Loading stocks...</p>
        ) : stocks.length > 0 ? (
          <ul>
            {stocks.map((stock, index) => (
              <li key={index}>
                <h2>{stock.symbol}</h2>
                <p>Stock Data: {JSON.stringify(stock.data, null, 2)}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No stock data available.</p>
        )}
        
        
        
        <nav>
          <ul style={{ listStyleType: 'none', textAlign: 'center', padding: 0 }}>
          <li><Link to="/market-capitalization">Market Capitalization</Link></li>
            <li><Link to="/sector-industry">Sector and Industry</Link></li>
            <li><Link to="/growth-value">Growth vs. Value</Link></li>
            <li><Link to="/dividend-payment">Dividend Payment</Link></li>
            <li><Link to="/geographical-location">Geographical Location</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route path="/market-capitalization" element={<MarketCapitalization />} />
          <Route path="/sector-industry" element={<SectorIndustry />} />
          <Route path="/growth-value" element={<GrowthValue />} />
          <Route path="/dividend-payment" element={<DividendPayment />} />
          <Route path="/geographical-location" element={<GeographicalLocation />} />
        </Routes>
      </div>
      
      
    </Router>
  );
};

ReactDOM.render(<StockData />, document.getElementById('root'));
