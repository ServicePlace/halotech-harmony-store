
import React, { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface TokenInfo {
  price: string;
  marketCap: string;
  circulatingSupply: string;
  totalSupply: string;
  holders: string;
  liquidityUsd: string;
  volume24h: string;
}

const INITIAL_TOKEN_INFO: TokenInfo = {
  price: "$0.0024",
  marketCap: "$2,400,000",
  circulatingSupply: "1,000,000,000",
  totalSupply: "10,000,000,000",
  holders: "1,248",
  liquidityUsd: "$345,678",
  volume24h: "$56,789"
};

const CryptoTicker: React.FC = () => {
  const [tokenInfo, setTokenInfo] = useState<TokenInfo>(INITIAL_TOKEN_INFO);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchTokenData = async () => {
    setLoading(true);
    try {
      // In a real implementation, this would be an API call to get real-time data
      // For demonstration, we're simulating an API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate slight changes in the data
      const randomFluctuation = () => (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.02);
      
      const newPrice = parseFloat(tokenInfo.price.replace('$', ''));
      const adjustedPrice = (newPrice * (1 + randomFluctuation())).toFixed(4);
      
      const newMarketCap = parseFloat(tokenInfo.marketCap.replace('$', '').replace(',', ''));
      const adjustedMarketCap = (newMarketCap * (1 + randomFluctuation())).toFixed(0);
      
      const newVolume = parseFloat(tokenInfo.volume24h.replace('$', '').replace(',', ''));
      const adjustedVolume = (newVolume * (1 + randomFluctuation())).toFixed(0);
      
      const newLiquidity = parseFloat(tokenInfo.liquidityUsd.replace('$', '').replace(',', ''));
      const adjustedLiquidity = (newLiquidity * (1 + randomFluctuation())).toFixed(0);
      
      // Update token info with new "data"
      setTokenInfo({
        ...tokenInfo,
        price: `$${adjustedPrice}`,
        marketCap: `$${parseInt(adjustedMarketCap).toLocaleString()}`,
        volume24h: `$${parseInt(adjustedVolume).toLocaleString()}`,
        liquidityUsd: `$${parseInt(adjustedLiquidity).toLocaleString()}`,
        holders: (parseInt(tokenInfo.holders) + Math.floor(Math.random() * 3)).toString()
      });
      
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Error fetching token data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchTokenData();
    
    // Set up auto-refresh every 3 minutes
    const intervalId = setInterval(fetchTokenData, 3 * 60 * 1000);
    
    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-black border-b border-halotech-yellow/30 py-1 text-gray-300 overflow-hidden">
      <div className="tickerWrapper relative">
        <div className="ticker-container flex items-center justify-start">
          <div className="flex items-center space-x-10 animate-ticker">
            <span className="flex items-center">
              <span className="font-bold text-halotech-yellow">HALOTECH:</span>
              <span className="ml-1">{tokenInfo.price}</span>
            </span>
            <span className="flex items-center">
              <span className="font-bold text-halotech-yellow">Market Cap:</span>
              <span className="ml-1">{tokenInfo.marketCap}</span>
            </span>
            <span className="flex items-center">
              <span className="font-bold text-halotech-yellow">24h Vol:</span>
              <span className="ml-1">{tokenInfo.volume24h}</span>
            </span>
            <span className="flex items-center">
              <span className="font-bold text-halotech-yellow">Liquidity:</span>
              <span className="ml-1">{tokenInfo.liquidityUsd}</span>
            </span>
            <span className="flex items-center">
              <span className="font-bold text-halotech-yellow">Holders:</span>
              <span className="ml-1">{tokenInfo.holders}</span>
            </span>
            <span className="flex items-center">
              <span className="font-bold text-halotech-yellow">Circulating Supply:</span>
              <span className="ml-1">{tokenInfo.circulatingSupply}</span>
            </span>
            <span className="flex items-center">
              <span className="font-bold text-halotech-yellow">Total Supply:</span>
              <span className="ml-1">{tokenInfo.totalSupply}</span>
            </span>
            
            <span className="flex items-center text-xs">
              <span className="mr-1">Last Updated:</span>
              <span>{lastUpdated.toLocaleTimeString()}</span>
              <button 
                onClick={() => fetchTokenData()} 
                className="ml-2 text-halotech-yellow hover:text-white transition-colors"
                disabled={loading}
              >
                <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker;
