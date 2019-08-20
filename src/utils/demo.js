export default {
  name: 'suzhen'
}
// 使用方式 import anyName from '../utils/demo'
// anyName就是 { name: 'suzhen' }
// 使用方式 import { anyName } from '../utils/demo' ❌

export const person2 = {
  name: 'erbao'
}
// 使用方式 import { person2 } from '../utils/demo' ✅
// person2 { name: 'erbao' }

// 使用方式 import person2 from '../utils/demo' ❌
