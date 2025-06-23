const Moralis = require("moralis").default;

const getWalletBalance = async (req, res) => {
    try {
        const address = req.params.address;
        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
            chain: "0x1", // Ethereum mainnet
            address,
        });

        res.status(200).json(response.result);
    } catch (error) {
        console.error("Error fetching token balances:", error);
        res.status(500).json({ error: "Failed to fetch token balances" });
    }
};

module.exports = { getWalletBalance };