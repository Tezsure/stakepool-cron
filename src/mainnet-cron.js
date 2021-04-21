const { TezosToolkit } = require('@taquito/taquito');
const { InMemorySigner } = require('@taquito/signer');
const {
    MAINNET_SECRET_KEY,
    MAINNET_CONTRACT_ADDRESS,
    MAINNET_HARBINGER_CONTRACT_ADDRESS,
    MAINNET_RPC_URL,
} = require('../config.json');

const MainnetCron = async () => {
    try {
        console.log(
            '----- Mainnet Ping contract start -----',
            MAINNET_SECRET_KEY
        );
        const rpc = MAINNET_RPC_URL;
        const Tezos = new TezosToolkit(rpc);
        const signer = new InMemorySigner(MAINNET_SECRET_KEY);
        // eslint-disable-next-line no-restricted-properties
        Tezos.setProvider({ signer });
        const contract = await Tezos.contract.at(MAINNET_CONTRACT_ADDRESS);
        const operation = await contract.methods
            .fetchPriceAndUpdateCycle(
                'XTZ-USD',
                MAINNET_HARBINGER_CONTRACT_ADDRESS,
                MAINNET_CONTRACT_ADDRESS
            )
            .send();
        console.log('----------- Mainnet operation --------', operation);
        await operation.confirmation(1).then(() => operation.opHash);
    } catch (error) {
        console.log('----------- Mainnet Error --------', error);
        console.error(error);
    }
};

exports.MainnetCron = MainnetCron;
