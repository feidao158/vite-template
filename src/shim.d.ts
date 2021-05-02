// eslint-disable-next-line @typescript-eslint/no-empty-interface
declare interface Window {
  // extend the window
}

// 声明.vue文件类型提供ts支持
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
