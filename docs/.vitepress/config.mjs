import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Arid's portfolio",
	description: "A VitePress Site",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Parallelity", link: "/parallelity" }
		],


		socialLinks: [
			{ icon: "github", link: "https://github.com/AridDev/AridDev.github.io" }
		]
	}
})
