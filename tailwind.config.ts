import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#0a2540", brand: "#0a66c2", mist: "#f3f6f8", coral: "#e76f51" }, boxShadow: { card: "0 1px 2px rgba(0,0,0,.08)" } } }, plugins: [] } satisfies Config;
