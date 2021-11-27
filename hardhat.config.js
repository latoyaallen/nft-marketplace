require("@nomiclabs/hardhat-waffle");
const projectId = "";


module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat:{
      chainId: 1337 // config standard for MetaMask
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`, // from Infura.io; add this file to .gitignore
    }
  solidity: "0.8.4", // compiler version we want to compile our entire project to
};
