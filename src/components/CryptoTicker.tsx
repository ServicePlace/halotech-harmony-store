
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

  // Create pairs of ticker items for multi-line display
  const createTickerPairs = () => {
    const items = [
      { label: "HALOTECH", value: tokenInfo.price },
      { label: "Market Cap", value: tokenInfo.marketCap },
      { label: "24h Vol", value: tokenInfo.volume24h },
      { label: "Liquidity", value: tokenInfo.liquidityUsd },
      { label: "Holders", value: tokenInfo.holders },
      { label: "Circulating Supply", value: tokenInfo.circulatingSupply },
      { label: "Total Supply", value: tokenInfo.totalSupply },
    ];
    
    // Last item is the update info
    const updateInfo = {
      label: "Last Updated",
      value: lastUpdated.toLocaleTimeString(),
      isUpdate: true
    };
    
    // Group items in pairs (2 per line)
    const pairs = [];
    for (let i = 0; i < items.length; i += 2) {
      if (i + 1 < items.length) {
        pairs.push([items[i], items[i + 1]]);
      } else {
        pairs.push([items[i], updateInfo]);
      }
    }
    
    return pairs;
  };

  return (
    <div className="bg-black border-b border-halotech-yellow/30 py-0.5 text-gray-300 overflow-hidden h-8">
      <div className="ticker-wrapper relative">
        <div className="ticker-container flex items-center justify-start">
          <div className="flex flex-col animate-ticker">
            {createTickerPairs().map((pair, index) => (
              <div key={index} className="flex space-x-8 whitespace-nowrap py-1">
                {pair.map((item, itemIndex) => (
                  <span key={itemIndex} className="flex items-center mx-4">
                    <span className="font-bold text-halotech-yellow text-xs">{item.label}:</span>
                    <span className="ml-1 text-xs">
                      {item.value}
                      {item.isUpdate && (
                        <button 
                          onClick={() => fetchTokenData()} 
                          className="ml-2 text-halotech-yellow hover:text-white transition-colors"
                          disabled={loading}
                        >
                          <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
                        </button>
                      )}
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker;
