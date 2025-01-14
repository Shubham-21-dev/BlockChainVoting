// const assert = require('assert');
// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const Web3 = require('web3');
// const eF = require('./Build/ElectionFact.json');
// const mnemonicPhrase = "fee together game festival define harsh worry license tank celery radio typical";

// // const mnemonicPhrase = process.env.MNEMONIC;
// const provider = new HDWalletProvider(
// 	{
// 		mnemonic: {
// 			phrase: mnemonicPhrase
// 		  },
// 		  providerOrUrl: "http://localhost:7545",
// 		// providerOrUrl: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
// 		//   derivationPath: "m/44'/60'/0'/0/",
// 		//   pollingInterval: 8000
// 	}
// );
// const web3 = new Web3(provider);

// const deploy = async () => {
// 	const accounts = await web3.eth.getAccounts();

// 	console.log('Attemping to deploy from account', accounts[0]);
// 	console.log("eF", eF);

// 	const result = await new web3.eth.Contract(eF.abi)
// 		.deploy({ data: '0x' + eF.bytecode })
// 		.send({ gas: '3000000', from: accounts[0] });

// 	console.log('Contract deployed to: ', result.options.address);
// };
// // await deploy();
