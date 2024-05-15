const { ethers, Wallet } = require("ethers");
require("dotenv").config();
const abi = require("./abi.json");

async function interact(balance, amount) {
  const contractAddress = "0x4691F60c894d3f16047824004420542E4674E621";
  const provider = new ethers.providers.JsonRpcProvider(process.env.BSC_URL);
  const wallet = new Wallet(process.env.PRIVATE_KEY, provider);

  const contract = new ethers.Contract(contractAddress, abi, wallet);

  const result = await contract.calculateRewardCycleExtension(balance, amount);

  console.log("Result :", result.toString());

  return result.toString();
}

module.exports = interact;
