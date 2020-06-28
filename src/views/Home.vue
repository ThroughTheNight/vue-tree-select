<template>
  <div class="home">
    <p>
      <img alt="Vue logo" src="../assets/logo.png" />
    </p>
    <tree
      style="margin: 0 auto"
      mode
      :dataSource="treeData"
      :maxTagCount="2"
      :defaltMulValue="[2, 4, 5]"
      :mulValue="mulValue"
      @change="handleChange"
    />
  </div>
</template>

<script>
// import Tree from '@/components/tree/TreeSelect.vue'

export default {
  name: "Home",

  // components: {
  //   Tree,
  // },

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
              type: 'department',
            },
            {
              label: '技术1',
              id: 3,
              type: 'organization',
              children: [
                {
                  label: '大前端组',
                  id: 4,
                  type: 'department',
                },
                {
                  label: '后台组',
                  id: 5,
                  type: 'department',
                },
                {
                  label: '运维组',
                  id: 6,
                  type: 'department',
                },
              ],
            },
            {
              label: '销售',
              id: 7,
              type: 'department',
            },
          ],
        },
      ],
      mulValue: [],
    }
  },

  methods: {
    handleChange(val) {
      this.mulValue = val
    }
  }
};
</script>
