import connectToMempool from "~/utils/txStream";

export async function startStream() {
    return connectToMempool();
  }