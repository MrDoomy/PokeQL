declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

// FIX: Cannot Find 'GlobalFetch' Due To Typescript >= 3.6.2
declare type GlobalFetch = WindowOrWorkerGlobalScope;
