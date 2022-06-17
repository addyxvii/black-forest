import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { startStream } from "~/models/memepool.server";

type LoaderData = {
  posts: Awaited<ReturnType<typeof startStream>>;
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await startStream(),
  });
};

export default function Mempool() {
  const { mempool } = useLoaderData();
  console.log(mempool);
  return (
    <main>
      <h1>Mempool</h1>
    </main>
  );
}
