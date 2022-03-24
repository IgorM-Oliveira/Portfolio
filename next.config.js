module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
