# 👁️ CryptoCart Balance Viewer

CryptoCart Balance Viewer is a full-stack application that allows users to check the token balances of any Ethereum wallet address in a clean, modern UI.

## 🚀 Features

- Neon-themed UI with smooth UX
- Search ERC-20 token balances via Moralis API
- View token symbol, balance (formatted), and contract address
- Built with React.js, Node.js, Express, and Moralis

## 🧱 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Web3 API**: Moralis
- **Styling**: Custom CSS

## 📦 Folder Structure

```
cryptocommerce-moralis-test/
├── backend/
│   ├── controllers/
│   │   └── walletController.js
│   ├── routes/
│   │   └── walletRoutes.js
│   ├── .env
│   ├── app.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   └── ...
└── README.md

```

## 🔧 How It Works

1. User enters a wallet address
2. Frontend sends a `GET` request to:
   ```
   http://localhost:4000/api/wallet-balance/:address
   ```
3. Backend uses Moralis API to fetch all token balances
4. Response is returned to the client and shown in a styled card layout

## 📄 Example Token Card

- **Symbol**: USDT
- **Balance**: 10.2543
- **Contract**: 0xdAC17F... (truncated)

## 🔐 Environment Variables

Make sure to set your Moralis API key in a `.env` file:

```env
MORALIS_API_KEY=your_moralis_api_key_here
PORT=4000
```

## 🏃‍♂️ Running the App

### Backend
```bash
cd server
npm install
npm start
```

### Frontend
```bash
cd client
npm install
npm start
```

## 👨‍💻 Author

Made with ❤️ by Gilly Lopes