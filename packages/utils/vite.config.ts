import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  build: {
    target: 'modules',
    // 打包文件目录
    outDir: 'es',
    // 压缩
    minify: false,
    // css 分离
    // CSSCodeSplit: true,
    rollupOptions: {
      // 忽略打包 vue 文件
      external: ['vue'],
      input: ['src/index.ts'],
      output: [{
        format: 'es',
        // 不用打包成 .es.js, 这里我们想把它打包成 .js
        entryFileNames: '[name].js',
        // 让打包目录和我们目录对应
        preserveModules: true,
        // 配置打包根目录
        dir: 'es',
        preserveModulesRoot: 'src'
      }, {
        format: 'cjs',
        entryFileNames: '[name].js',
        // 让打包目录和我们目录相对应
        preserveModules: true,
        // 配置打包根目录
        dir: 'lib',
        preserveModulesRoot: 'src'
      }]
    },
    lib: {
      entry: './index.ts',
      formats: ['es', 'cjs']
    }
  },
  plugins: [
    vue(),
    dts({
      // 指定使用的 tsconfig.json 为我们整个项目根目录下掉，如果不配置，你也可以在 components 下新建 tsconfig.json 
      tsConfigFilePath: '../../tsconfig.json'
    }),
    // 因为这个插件默认打包到 es 下，我们想让 lib 目录下也生成声明文件需要再配置一个
    dts({
      outputDir: 'lib',
      tsConfigFilePath: '../../tsconfig.json'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})