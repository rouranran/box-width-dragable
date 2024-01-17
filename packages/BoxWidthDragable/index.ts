import type { App } from "vue";
import BoxWidthDragable from './BoxWidthDragable.vue'
BoxWidthDragable.install = (app:App) =>{
  app.component(BoxWidthDragable.__name as string,BoxWidthDragable)
}
export default BoxWidthDragable