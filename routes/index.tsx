import { useSignal } from "@preact/signals";
import Login from "../islands/Login.tsx";
import {StorageDenoKV} from "https://deno.land/x/mtkruto@0.1.200/storage/1_storage_deno_kv.ts";

export default function Home() {
  const count = useSignal(3);

// Replace these with your app's credentials.

  const apiId = Deno.env.get("API_ID") as unknown as number || null;
  const apiHash = Deno.env.get("API_HASH") || '';
  const botKey = Deno.env.get("BOT_KEY") || '';
  const storage = new StorageDenoKV();



  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <Login />
    </div>
  );
}
