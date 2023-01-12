// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/styles/main.scss'
  ],
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/styles/variables.scss";
                                 @import "@/assets/styles/mixins.scss";`                              
            },
        },
    },
},
})
