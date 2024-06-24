export default {
    darkMode: 'class',
    plugins: [
      require('@pinegrow/tailwindcss-plugin').default(),
    ],
  
    get content() {
      const _content = [
        '{.,app,*-layer}/components/**/*.{js,vue,ts}',
        '{.,app,*-layer}/layouts/**/*.vue',
        '{.,app,*-layer}/pages/**/*.vue',
        '{.,app,*-layer}/plugins/**/*.{js,ts}',
        '{.,app,*-layer}/app.vue',
        '{.,app,*-layer}/*.{mjs,js,ts}',
        '{.,*-layer}/nuxt.config.{js,ts}',
      ]
      return process.env.NODE_ENV === 'production'
        ? _content
        : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
    },
  }