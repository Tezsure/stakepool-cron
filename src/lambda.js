const { TestnetCron } = require('./testnet-cron');
const { MainnetCron } = require('./mainnet-cron');

export async function handler() {
    await Promise.all([MainnetCron(), TestnetCron()]);
    return {};
}
