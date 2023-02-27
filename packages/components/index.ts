import components from './src/index'
import { App } from 'vue'
export * from 'vue'
// const result = testfunc(1,1)
// console.log('res===>', result)

export default{
  install: (app: App) => {
    components.forEach(c => app.use(c))
  }
}


