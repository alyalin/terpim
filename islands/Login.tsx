import {Client} from "https://deno.land/x/mtkruto@0.1.200/client/4_client.ts";
import {StorageLocalStorage} from "https://deno.land/x/mtkruto@0.1.200/storage/2_storage_local_storage.ts";
import { StorageDenoKV } from "https://deno.land/x/mtkruto@0.1.200/storage/1_storage_deno_kv.ts";
import {useEffect} from "https://esm.sh/stable/preact@10.19.6/denonext/hooks.js";

interface Props {
  API_ID: number | null,
  API_HASH: string,
  BOT_KEY: string
}

declare global {
  interface Window {
    onTelegramAuth?: any;
  }
}
export default function Login() {

  function handleAuth(e: unknown) {
    console.log(e);
  }

  useEffect(() => {
    window.onTelegramAuth = handleAuth
  }, []);

  return (
    <div>
      <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="terpimcyclebot"
              data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>

    </div>
  );
}
