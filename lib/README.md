# @bieyanghong/vue-select-tree

## Installation
```
npm install @bieyanghong/vue-select-tree --save
```

### Usage
```js
import tree from '@bieyanghong/vue-select-tree'
import '@bieyanghong/vue-select-tree/lib/vue-tree-select.css'
Vue.use(tree)
```

### Example
```vue
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <tree width="240px" :dataSource="treeData" @change="handleChange" />
  </div>
</template>

<script>

export default {
  name: 'Home',

  data() {
    return {
      treeData: [
        {
          label: '总部1',
          id: 1,
          type: 'organization',
          children: [
            {
              label: '产品1',
              id: 2,
              type: 'department'
            },
            {
              label: '技术1',
              id: 3,
              type: 'organization',
              children: [
                {
                  label: '大前端组',
                  id: 4,
                  type: 'department'
                },
                {
                  label: '后台组',
                  id: 5,
                  type: 'department'
                },
              ]
            },
            {
              label: '销售',
              id: 7,
              type: 'department'
            },
          ]
        }
      ]
    }
  },
}
</script>
```

