/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  printWidth: 100,

  // plugin tailwind untuk auto-sort class
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
