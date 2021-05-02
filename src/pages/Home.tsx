import { defineComponent } from '@vue/runtime-core';
import Menu from 'ant-design-vue/lib/vc-menu';

export default defineComponent({
  name:"Home",
  setup(){
    return ()=><Menu></Menu>
    
  }
})