const ethers = require('ethers');
const fs = require('fs-extra');
const path = require('path');

require('dotenv').config();
async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  // new ethers.providers.JsonRpcProvider('127.0.0.1:8545');
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptedJsonKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVATE_KEY
  );

  console.log(encryptedJsonKey);
  fs.writeFileSync('./.encryptedKey.json', encryptedJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
