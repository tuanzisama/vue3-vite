// declare module '*.vue' {
//     import { ComponentOptions } from 'vue'
//     const componentOptions: ComponentOptions
//     export default componentOptions
// }

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, unknown>
    export default component
}