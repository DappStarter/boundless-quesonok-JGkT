require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile purchase install clog swift tank'; 
let testAccounts = [
"0x027437c6435d15805ce6adf8839c050898c8664d01f08442a8dfe675afe8fdea",
"0x112ff2afb5bc1e2b311f42366b9e4b528541df11c66c4f026e4cc011a848ca1f",
"0xebd58429d1d44259ec14e0facaa0d847ee7db7584ce05c3c8691427e11be60eb",
"0x0556d55785b1f244ae9f0326052d0ebf347503b4dcb8faf758e2b16e09c4e3db",
"0x1970d094ce81245fd1c9ed969911da6ff60fe2ac898af21ff01b8cce4909be57",
"0x6a6c4d7e7a561a893daa63e5224a6b5de0a16b2c8a977e27a937acce8426138d",
"0xa54a733de7dd2ab7fae73775f0698d9c5ff2dbdd7d7324d291d8bb034b458648",
"0x4973cd7630efaf9b607ab45486e58b56bcca0edee09732f2e4093fe275703dce",
"0xd3df32614c1958f3e2e77980c5c43e83d4b0aae20fd01809955fb623956cbfd0",
"0xb06545bc9a96e42533167cde00ae0083c036e3b0937999b3620b1a29b1a27217"
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


