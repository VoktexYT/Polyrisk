const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
		configureWebpack: {
		cache: {
			type: 'filesystem', // Use file system caching for faster rebuilds
		},
	},
})
