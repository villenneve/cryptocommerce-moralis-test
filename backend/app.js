const express = require("express");
const cors = require("cors");
const Moralis = require("moralis").default;
require("dotenv").config();

const walletRoutes = require("./routes/walletRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", walletRoutes);

Moralis.start({ apiKey: process.env.MORALIS_API_KEY }).then(() => {
    console.log("✅ Moralis connected");
    app.listen(process.env.PORT, () =>
        console.log(`🚀 Backend running at http://localhost:${process.env.PORT}`)
    );
});
