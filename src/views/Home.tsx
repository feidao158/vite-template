import { Button } from 'ant-design-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    return () => <Button type='primary'/>
  },
})
