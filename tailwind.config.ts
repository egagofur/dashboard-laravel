import type { Config } from "tailwindcss";
import shadcnPreset from "./resources/js/lib/shadcn-preset";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./resources/js/**/*.{ts,tsx}",
    ],
    presets: [shadcnPreset],
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
