
import React, { useEffect, useState } from 'react';

interface TokenInfo {
  price: string;
  marketCap: string;
  circulatingSupply: string;
  totalSupply: string;
  holders: string;
  liquidityUsd: string;
  volume24h: string;
}

interface SolanaResponse {
  solana: {
    usd: number;
  };
}

interface HeliusResponse {
  priceUsd?: number;
  marketCapUsd?: number;
  circulatingSupply?: number;
  totalSupply?: number;
  holders?: number;
  liquidityUsd?: number;
  volume24hUsd?: number;
}

const CryptoTicker: React.FC = () => {
  const [solanaPrice, setSolanaPrice] = useState<string>('Fetching...');
  const [haloTechInfo, setHaloTechInfo] = useState<TokenInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTokenData = async () => {
    try {
      setLoading(true);

      // Fetch Solana price
      const solanaResponse = await fetch(`${import.meta.env.VITE_CRYPTO_API_URL}/simple/price?ids=solana&vs_currencies=usd`);
      if (!solanaResponse.ok) throw new Error('Failed to fetch Solana price');
      const solanaData = await solanaResponse.json() as SolanaResponse;
      setSolanaPrice(`$${solanaData.solana.usd.toFixed(2)}`);

      // Fetch HALOTECH token data using Helius API
      const heliusResponse = await fetch(`https://api.helius.xyz/v0/tokens/${import.meta.env.VITE_ACCEPTED_TOKEN_MINT}/metadata?api-key=${import.meta.env.VITE_HELIUS_API_KEY}`);
      if (!heliusResponse.ok) throw new Error('Failed to fetch HALOTECH token data');
      const heliusData = await heliusResponse.json() as HeliusResponse;

      setHaloTechInfo({
        price: `$${heliusData.priceUsd?.toFixed(4) || '0.00'}`,
        marketCap: `$${(heliusData.marketCapUsd || 0) / 1e6?.toFixed(2) || '0.00'}M`,
        circulatingSupply: heliusData.circulatingSupply?.toLocaleString() || '0',
        totalSupply: heliusData.totalSupply?.toLocaleString() || '0',
        holders: heliusData.holders?.toLocaleString() || '0',
        liquidityUsd: `$${heliusData.liquidityUsd?.toLocaleString() || '0'}`,
        volume24h: `$${heliusData.volume24hUsd?.toLocaleString() || '0'}`,
      });
    } catch (error) {
      console.error('Error fetching token data:', error);
      // Set default values in case of error
      setSolanaPrice('$0.00');
      setHaloTechInfo({
        price: '$0.00',
        marketCap: '$0.00M',
        circulatingSupply: '0',
        totalSupply: '0',
        holders: '0',
        liquidityUsd: '$0',
        volume24h: '$0',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTokenData();
    const interval = setInterval(fetchTokenData, 60000); // Refresh every 60 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker-wrapper bg-halotech-dark text-halotech-yellow py-2">
      <div className="ticker-container">
        {loading ? (
          <div className="animate-ticker">Loading...</div>
        ) : (
          <div className="animate-ticker flex items-center space-x-6">
            {/* Solana price at the beginning */}
            <div>
              <strong className="ticker-header">Solana:</strong> <span className="ticker-data">{solanaPrice}</span>
            </div>

            {/* HALOTECH token information */}
            <div>
              <strong className="ticker-header">HALOTECH Price:</strong> <span className="ticker-data">{haloTechInfo?.price || ''}</span>
            </div>
            <div>
              <strong className="ticker-header">Market Cap:</strong> <span className="ticker-data">{haloTechInfo?.marketCap || ''}</span>
            </div>
            <div>
              <strong className="ticker-header">Circulating Supply:</strong> <span className="ticker-data">{haloTechInfo?.circulatingSupply || ''}</span>
            </div>
            <div>
              <strong className="ticker-header">Total Supply:</strong> <span className="ticker-data">{haloTechInfo?.totalSupply || ''}</span>
            </div>
            <div>
              <strong className="ticker-header">Holders:</strong> <span className="ticker-data">{haloTechInfo?.holders || ''}</span>
            </div>
            <div>
              <strong className="ticker-header">Liquidity:</strong> <span className="ticker-data">{haloTechInfo?.liquidityUsd || ''}</span>
            </div>
            <div>
              <strong className="ticker-header">24h Volume:</strong> <span className="ticker-data">{haloTechInfo?.volume24h || ''}</span>
            </div>

            {/* Solana price at the end */}
            <div>
              <strong className="ticker-header">Solana:</strong> <span className="ticker-data">{solanaPrice}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoTicker;
