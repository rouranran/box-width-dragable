import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base:'/',
  build: {
    lib: {
      entry:path.resolve(__dirname, './packages/index.ts'),
      name:'BoxWidthDragable',
      fileName:'box-width-dragable'
    },
    rollupOptions: {
      external: ['vue', 'swiper', '@vuepic/vue-datepicker', 'qrcode'],
      output: {
        exports: 'named',
        globals: {
          vue:'Vue',
          swiper: 'Swiper',
          '@vuepic/vue-datepicker': 'VueDatePicker',
          qrcode: 'qrcode'
        }
      }
    },
    minify:'terser',
    terserOptions:{
      compress:{
        drop_console:true,
        drop_debugger:true
      },
      format:{
        comments:false
      }
    }
  }
})
