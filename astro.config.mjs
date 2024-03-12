import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"
import min from "astro-min"

// https://astro.build/config
export default defineConfig({
	integrations: [min(), tailwind()]
})
