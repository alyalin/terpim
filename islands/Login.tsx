import {Client} from "https://deno.land/x/mtkruto@0.1.200/client/4_client.ts";
import {StorageLocalStorage} from "https://deno.land/x/mtkruto@0.1.200/storage/2_storage_local_storage.ts";
import { StorageDenoKV } from "https://deno.land/x/mtkruto@0.1.200/storage/1_storage_deno_kv.ts";
import {useEffect, useRef} from "https://esm.sh/stable/preact@10.19.6/denonext/hooks.js";
import {createRef} from "https://esm.sh/stable/preact@10.19.6/denonext/preact.mjs";

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

  const telegramWrapperRef = useRef(null);
  function handleAuth(e: unknown) {
    console.log(e);
  }

  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://telegram.org/js/telegram-widget.js?22';
    scriptElement.setAttribute('data-telegram-login', 'terpimcyclebot');
    scriptElement.setAttribute('data-size', 'large');
    scriptElement.setAttribute('data-onauth', 'onTelegramAuth(user)');
    scriptElement.async = true;

    telegramWrapperRef.current.appendChild(scriptElement);
  }, []);

  useEffect(() => {
    window.onTelegramAuth = handleAuth
  }, []);

  return (
    <div ref={telegramWrapperRef}>
    </div>
  );
}
