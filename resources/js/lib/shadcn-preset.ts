import type { Config } from 'tailwindcss';
import { shadcnPlugin } from './shadcn-plugin';

const shadcnPreset = {
    content: [],
    plugins: [shadcnPlugin],
} satisfies Config;

export default shadcnPreset;
