/** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./src/**/*.{html,js,svelte,ts}'],
//   theme: {
//     extend: {}
//   },
//   plugins: [
//     '@tailwindcss/jit',
//   ]
// };

module.exports = {
  purge:['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    '@tailwindcss/jit',
  ],
}