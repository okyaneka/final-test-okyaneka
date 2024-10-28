/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-05",
  runtimeConfig: {
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'Nuxt Template',
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'https://default.api.com',
      isRedirectSignin: process.env.NEXT_PUBLIC_REDIRECT_SIGNIN === 'true' || false,
    },
    secretKey: process.env.SECRET_KEY,
  },
  modules: [[
    "@nuxtjs/google-fonts",
    {
      families: {
        'Inter': true
      }
    }
  ], 'shadcn-nuxt',"@nuxtjs/tailwindcss", "@nuxtjs/i18n", '@pinia/nuxt', '@vite-pwa/nuxt'],
  vite: {
    resolve: {
      alias: {
        '@': '.',
      }
    }
  },
  shadcn: {
    prefix: '',
    componentDir: './_app/components/ui'
  },
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    vueI18n: './i18n.config.ts'
  },
  css: [
    './assets/css/main.css'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  build: {
    transpile: [/@typeform/]
  },
  pwa: {
    manifest: {
      name: 'Nuxt Template',
      short_name: 'Nuxt Template',
      description: 'Nuxt Template Progressive Web App',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: 'logo.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'logo.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      runtimeCaching: [
        {
          urlPattern: '^https://example.com/.*',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 300,
            }
          }
        }
      ]
    }
  }
})