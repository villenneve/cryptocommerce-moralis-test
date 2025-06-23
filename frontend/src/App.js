import React, { useState } from 'react';
import './App.css';

function App() {
    const [walletAddress, setWalletAddress] = useState('');
    const [tokens, setTokens] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTokens = async () => {
        if (!walletAddress) {
            setError('Please enter a wallet address.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:4000/api/wallet-balance/${walletAddress}`);
            if (!response.ok) {
                throw new Error('Server responded with an error.');
            }

            const data = await response.json();
            console.log('✅ API response:', data);
            setTokens(data || []);
        } catch (err) {
            console.error('❌ Error fetching token data:', err);
            setError('An error occurred while fetching token data.');
        }

        setLoading(false);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src="https://em-content.zobj.net/source/microsoft-teams/363/eye_1f441-fe0f.png" alt="eye" />
                CryptoCart Balance Viewer
            </header>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter wallet address (0x...)"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                />
                <button onClick={fetchTokens}>Search</button>
            </div>

            {loading && <p className="loading-text">Loading token balances...</p>}
            {error && <p className="error-text">{error}</p>}

            <div className="token-list">
                {tokens.length > 0 ? (
                    tokens
                        .filter(item => parseFloat(item.value) > 0)
                        .map((item, index) => (
                            <div key={index} className="token-card">
                                <h3>{item.token?.symbol || 'Unknown Token'}</h3>
                                <p><strong>Balance:</strong> {(parseFloat(item.value) / Math.pow(10, item.token?.decimals || 18)).toFixed(4)}</p>
                                <p><strong>Contract:</strong> {`${item.token.contractAddress.slice(0, 6)}...${item.token.contractAddress.slice(-4)}`}</p>
                            </div>
                        ))
                ) : (
                    !loading && !error && <p className="loading-text">No tokens found.</p>
                )}
            </div>
        </div>
    );
}

export default App;
