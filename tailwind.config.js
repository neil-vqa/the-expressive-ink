/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
  	extend: {
    	fontFamily: {
    		lora: ['Lora'],
    		merri: ['Merriweather']
    	},
    	maxWidth: {
    		'screen-2xl': '1440px'
    	},
    },
    lineClamp: {
      1: 1,
      2: 2,
      3: 3
    },	
  },
  variants: {},
  plugins: [
  	require('tailwindcss-line-clamp'),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
