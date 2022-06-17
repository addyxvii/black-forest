import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to the Black Forest</h1>
      <h2>What's done in the dark will be brought to the light</h2>
      <Link to="/mempool" className="text-xl text-blue-600 underline">
        mempool
      </Link>
    </div>
  );
}
