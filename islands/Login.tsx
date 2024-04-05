import {Client} from "https://deno.land/x/mtkruto@0.1.200/client/4_client.ts";
import {StorageLocalStorage} from "https://deno.land/x/mtkruto@0.1.200/storage/2_storage_local_storage.ts";

interface Props {
  API_ID: number | null,
  API_HASH: string,
  BOT_KEY: string
}

declare global {
  interface Window {
    handleCredentialResponse?: any;
  }
}
export default function Login({ BOT_KEY, API_HASH, API_ID }: Props) {

  const client = new Client(new StorageLocalStorage("client"), API_ID, API_HASH);

  const login = async function () {
    await client.start(BOT_KEY);
  }

  return (
    <div>
      {/*<script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="terpimcyclebot"*/}
      {/*        data-size="large" data-onauth="onTelegramAuth(user)" data-request-access="write"></script>*/}

      <button type="button" onClick={login}>Войти</button>
    </div>
  );
}
