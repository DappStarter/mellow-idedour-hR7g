require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index regret muscle prosper hunt process metal gas'; 
let testAccounts = [
"0x8ba741719f4c460e0c9e4cfa35ae67c70d6f7062a9f26e9ec70b73718cd2dc87",
"0x9f03b27ccc20545c35cb440aed6198f32089be49db90fa643d77c737438e096e",
"0x1cca4b28c268e60c92e66950efd4826ff874beaa1de70d80d4009b75b9138d11",
"0x1886388b4f49cf9d2d245e6e57eab05efada0b36edbad9ed68ffeddfe1dd176c",
"0xa231e4e8a1c4045974e67cc2fe9a734f21bb5bce15fd688cdaa3960ca4a98817",
"0xbec1c310e656631f358bc69411978ec447edcd41321900ff1525211f5d8bda84",
"0x8125934d62b41180062e760aafea0c2d7d6b0ae57599e16d7e25fded9d1f0f13",
"0x4400699b258d6b8be1efaa1866821a2523a4694be78ba15db1c8e7a7c56fc5eb",
"0x05bbf28df20b3b172bbde366aa803586c313fea2e1a7ccce723f9929d36a1105",
"0xaa599d5acf6dbcf03f308339e0d47e6bf47f1c361d77733a70be0e4ecb6846d8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


