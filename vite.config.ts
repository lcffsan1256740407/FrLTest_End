const path = require('path');
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'  //自动加载API
import Components from 'unplugin-vue-components/vite' //自动加载组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueJsx from '@vitejs/plugin-vue-jsx';  //VUE JSX语法


export default defineConfig({
  server:{
    open:true //服务启动自动打开浏览器
  },
  plugins: [
    vueJsx(),
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],// 自动导入vue和vue-router相关函数
      dts: "src/auto-import.d.ts", // 生成 `auto-import.d.ts` 全局声明
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css:{
    preprocessorOptions:{
      less:{
        javascriptEnabled:true
      }
    }
  }
})
