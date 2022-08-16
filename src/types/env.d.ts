// envの型拡張

declare namespace NodeJS {
  interface ProcessEnv {
    readonly SERVICE_DOMAIN: string;
    readonly API_KEY: string;
    readonly SEND_GRIDE_MAIL_API_KEY: string;
    readonly MY_MAIL_ADDRESS: string;
  }
}
