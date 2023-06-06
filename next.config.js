const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

const nextConfiguration = {
  images: {
    disableStaticImages: true,
  },
}

module.exports = withPlugins([optimizedImages, withPWA], nextConfiguration)
