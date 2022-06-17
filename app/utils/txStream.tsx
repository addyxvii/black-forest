import { ethers } from "ethers";
const url = process.env.ETHEREUM_MAINNET_RPC;

export default function connectToMempool() {
  const customWsProvider = new ethers.providers.WebSocketProvider(url!);

  customWsProvider.on("pending", (tx) => {
    customWsProvider.getTransaction(tx).then(function (transaction) {
      console.log(transaction);
    });
  });

  customWsProvider._websocket.on("error", async () => {
    console.log(`Unable to connect retrying in 3s...`);
    setTimeout(connectToMempool, 3000);
  });
  customWsProvider._websocket.on("close", async (code: string) => {
    console.log(
      `Connection lost with code ${code}! Attempting reconnect in 3s...`
    );
    customWsProvider._websocket.terminate();
    setTimeout(connectToMempool, 3000);
  });
}
