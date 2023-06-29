// require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
const SOPOLIA_RPC_URL = process.env.SOPOLIA_RPC_URL
console.log(SOPOLIA_RPC_URL)
const PRIVATE_KEY = process.env.PRIVATE_KEY
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: SOPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },
    },
    solidity: "0.8.18",
}
