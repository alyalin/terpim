import { useSignal } from "@preact/signals";
import Login from "../islands/Login.tsx";

export default function Home() {
  const count = useSignal(3);

// Replace these with your app's credentials.

  const apiId = Deno.env.get("API_ID") as unknown as number || null;
  const apiHash = Deno.env.get("API_HASH") || '';
  const botKey = Deno.env.get("BOT_KEY") || '';

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <Login API_HASH={apiHash} API_ID={apiId} BOT_KEY={botKey} />
    </div>
  );
}
