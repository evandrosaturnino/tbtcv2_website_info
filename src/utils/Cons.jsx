export const MAINNET_API = "https://api.thegraph.com/subgraphs/name/suntzu93/threshold-tbtc";
export const TESTNET_API = "https://api.studio.thegraph.com/query/59264/threshold-tbtc-sepolia/version/latest";

export const RPC_ETH_MAINNET = "https://rpc.ankr.com/eth"
export const RPC_ETH_SEPOLIA = import.meta.env.VITE_RPC_ETH_SEPOLIA;

export const MAINNET_AP_BALANCE = import.meta.env.VITE_MAINNET_AP_BALANCE;
export const SEPOLIA_API_BALANCE = import.meta.env.VITE_SEPOLIA_API_BALANCE;

export const DECIMAL_ETH = 1000000000000000000;
export const SATOSHI_BITCOIN = 100000000;
export const NETWORK_MAINNET = "mainnet";
export const NETWORK_TESTNET = "testnet";
export const DEFAULT_NETWORK = NETWORK_TESTNET;
export const MAXIMUM_BATCH_SIZE = 1000;

export const TIME_LOCK_DEAUTHORIZATION = 45 * 24 * 60 * 60;//45 days

export const GROUP_LIFE_TIME = 259200; //~30days
export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export default TESTNET_API;