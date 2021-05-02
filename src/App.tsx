import { defineComponent } from '@vue/runtime-core';
import { RouterView } from 'vue-router';

export default defineComponent({
  setup(){
    return ()=><RouterView/>
  }
})