/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly VITE_EMAILJS_KEY: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_SERVICE_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }