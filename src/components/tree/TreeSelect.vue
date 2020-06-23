<template>
  <div class="t-tree">
    <div
      class="t-tree__select"
      @click.stop="handleChangeSelect"
      ref="selectRef"
      :style="{ 
        borderColor: isShowSelectFlag ? '#1890ff' : '',
        boxShadow: isShowSelectFlag ? '0 0 0 2px rgba(24, 144, 255, 0.2)' : '',
        width: typeof width === 'number' ? `${width}px` : width,
        fontSize: multip ? '14px' : '12px',
      }"
    >
      <span>{{ selectValue.label || palceholder }}</span>
    </div>

    <Icon type="right" />

    <transition name="fade">
      <div
        class="t-tree__dropdown"
        :style="{ 
          position: 'absolute', 
          width: typeof dropdownWidth === 'number' ? `${dropdownWidth}px` : dropdownwidth,
          top: dropdownSpace.top, 
          left: dropdownSpace.left, 
        }"
        :dataKey="modalKey"
        v-show="isShowSelectFlag"
      >
        <ul>
          <template v-for="item in flatData">
            <li
              :key="item.id"
              v-if="item.isShowFlag"
              class="t-tree__dropdown--item"
              :style="{
              paddingLeft: `${item.level * 16}px`
            }"
              @click.stop="handleSelect(item)"
            >{{item.label}}</li>
          </template>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import '@/assets/svg/iconfont.js'
import Icon from './Icon.vue'

export default {
  name: "tree",

  props: {
    width: { // 设置选择器宽度
      type: [String, Number],
    },
    dropdownWidth: {
      type: [String, Number],
      default: 220,
    },
    multip: {
      type: Boolean,
      default: false
    },
    palceholder: {
      type: String,
      default: '请输入'
    },

    dataSource: { // tree 数据源
      type: Array,
      required: true
    },

    /** 单选相关的数据 */
    defaltValue: {
      type: [Number, String]
    }, // 设置单选
    value: {
      type: [Number, String]
    },

    /** 多选相关的数据 */
  },

  components: {
    Icon,
  },

  data() {
    return {
      isShowSelectFlag: false,
      modalKey: new Date().getTime(), // drop 设置key值
      dropdownSpace: {}, // 设置 dropdown 的位置


      flatData: [], // 扁平化的数据

      /** 单选相关 */
      selectValue: {},


      /** 多选相关 */
      selectMulId: [],
    }
  },

  watch: {
    value(nv) {
      this.selectId = nv
    },
  },

  methods: {
    initData() {
      this.flatData = []
      this.selectValue = {}

      this.dealData(this.dataSource, 1)
      console.log(this.flatData);

    },

    // 将 tree 扁平化处理
    dealData(data, level) {
      data.forEach((item) => {
        // 是否选中
        item.isCheckFlag = false
        item.level = level
        if (level > 2) {
          item.isShowFlag = false // 控制该数据是否显示
        } else {
          item.isShowFlag = true
        }
        // 扁平化处理数据
        this.flatData.push(item)

        if (item.children && item.type === 'organization') {
          item.isExpandFlag = false // 用来控制是否展开
          // 给子元素增加 pId
          item.children.forEach((childItem) => {
            childItem.pId = item.id
            childItem.isCheckFlag = false
          })
          const num = level + 1
          this.dealData(item.children, num)
        }
      })
    },

    // 点击选择器
    handleChangeSelect() {
      this.isShowSelectFlag = true
      this.setDropdownPlace()
    },

    // 点击下拉项
    handleSelect(record) {
      console.log(record)

      if (!this.multip && this.selectValue.id !== record.id) {
        this.isShowSelectFlag = false
        this.selectValue = record
        this.$emit('change', record.id)
      }

    },

    // 点击其他空白区域时，关闭弹框
    windowClick() {
      this.isShowSelectFlag = false
    },

    // 设置弹出框的位置
    setDropdownPlace() {
      const rectOffset = this.$refs.selectRef.getBoundingClientRect()
      this.dropdownSpace.top = `${rectOffset.top + 44}px`
      this.dropdownSpace.left = `${rectOffset.left}px`
    },
  },

  created() {

    this.initData()
  },

  mounted() {
    window.addEventListener('click', this.windowClick)
    document.body.appendChild(document.querySelector('.t-tree__dropdown'))
  },

  destroyed() {
    const result = Array.from(document.querySelectorAll('.t-tree__dropdown')).find(item => +item.getAttribute('dataKey') === this.modalKey)

    if (result) {
      document.body.removeChild(result)
    }
  },
};
</script>

<style lang="scss" scoped>
.t-tree {
  // color: #f00;
  font-size: 14px;
  box-sizing: border-box;
  &__select {
    height: 32px;
    padding: 0 12px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    cursor: pointer;
    line-height: 32px;
    text-align: left;
  }
}

// 弹框关闭隐藏动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<style lang="scss">
.t-tree__dropdown {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  max-height: 288px;
  font-size: 14px;
  color: #2c3e50;
  cursor: pointer;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    max-height: 288px;
    overflow: auto;
    background: #fff;
  }
  &--item {
    height: 36px;
    line-height: 36px;
    &:hover {
      background: #e6f7ff;
    }
  }
}
</style>