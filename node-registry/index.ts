import { registerPeerService } from './main.js'
import { Fluence } from "@fluencelabs/js-client";

const nodes = [
    {
      "peerId": "12D3KooWFbasz6SnGxhPq3KWn8KgNW4asNKskxR5JizMdszM4KCN",
      "multiaddr": "/ip4/127.0.0.1/tcp/9991/ws/p2p/12D3KooWFbasz6SnGxhPq3KWn8KgNW4asNKskxR5JizMdszM4KCN"
    },
    {
      "peerId": "12D3KooWBCAWAGNMfqaBG1kUv49dkK8wSNeiTfGubLLjGQaFBf6z",
      "multiaddr": "/ip4/127.0.0.1/tcp/9992/ws/p2p/12D3KooWBCAWAGNMfqaBG1kUv49dkK8wSNeiTfGubLLjGQaFBf6z"
    },
    {
      "peerId": "12D3KooWEqbHHE1bzk1nJ8LE2Wbm2UaycYjRsSB4CTxDS342Boip",
      "multiaddr": "/ip4/127.0.0.1/tcp/9993/ws/p2p/12D3KooWEqbHHE1bzk1nJ8LE2Wbm2UaycYjRsSB4CTxDS342Boip"
    }
];

(async () => {

    await Fluence.connect(nodes[0].multiaddr, {debug: {printParticleId: true}});
    console.log('connected ',(await Fluence.getClient()).getPeerId())

    registerPeerService({
        peers: async () => {
            console.log('here')
            return ['12D3KooWGtShVkXnkYHQgcCpP7a5EoS1YC9Nqg86uQC4iwWs1CzR']
        }
    })
})()