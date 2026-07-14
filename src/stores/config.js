import { writable } from 'svelte/store'

const config = writable({
  // backendURL: "http://192.168.43.214:5000",
  // backendURL: "https://nourane.pages.dev",
  currentUser: null,
});

export default config;