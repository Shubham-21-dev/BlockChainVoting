import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

let instance;
try {
    instance = new web3.eth.Contract(
        ElectionFactory.abi,
        '0xE1a1cccD095d24B64BdA46273c5b09e744f2791d'
    );
    console.log("instance", instance);
} catch (error) {
    console.log(error);
}

export default instance;