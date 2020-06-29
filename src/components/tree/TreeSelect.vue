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
        fontSize: mode  === 'default' ? '14px' : '12px',
      }"
    >
      <span v-if="mode === 'default'">{{ selectValue.label || palceholder }}</span>
      <template v-else-if="mode === 'multiple' && selectMulValue.length > 0">
        <span
          v-for="item in  selectMulValue.slice(0, maxTagCount)"
          :key="item.id"
          class="t-tree__select--item"
          @click.stop="()=>{}"
        >
          <span>{{ item.label }}</span>
          <span class="t-tree__select--item-delete" @click="handleDelete(item)">x</span>
        </span>
        <span
          class="t-tree__select--item"
          v-if="maxTagCount && selectMulValue.length > maxTagCount"
        >...</span>
      </template>
      <span v-else>{{ palceholder }}</span>
    </div>

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
            >
              <span
                class="t-tree__dropdown--item-icon"
                v-if="item.type === 'organization' && item.children && item.children.length > 0"
                @click.stop="handleChangeExpand(item)"
              >
                <Icon :type="item.isExpandFlag ? 'right1-copy' : 'right'" style="fontSize: 14px" />
              </span>

              <span class="t-tree__dropdown--item-icon" @click.stop="handleChangeExpand(item)">
                <Icon
                  :type="item.type === 'organization' ? 'organization' : 'department'"
                  style="fontSize: 14px"
                />
              </span>

              <span>{{item.label}}</span>

              <span class="t-tree__dropdown--item-check" v-show="item.isCheckFlag">
                <Icon type="check1" style="color: #1890ff" />
              </span>
            </li>
          </template>
          <li
            v-if="flatData.length === 0"
            class="t-tree__dropdown--item"
            style="paddingLeft: 16px"
          >暂无数据</li>
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
    mode: { // default 表示单选， multiple 多选
      type: String,
      default: 'default'
    },
    palceholder: {
      type: String,
      default: '请输入'
    },

    dataSource: { // tree 数据源
      type: Array,
      required: true
    },

    // 是否可以选中部门
    allowSelectOrganization: {
      type: Boolean,
      default: false
    },

    /** 单选相关的数据 */
    defaultValue: {
      type: [Number, String]
    }, // 设置单选
    value: {
      type: [Number, String]
    },

    /** 多选相关的数据 */
    defaultMulValue: { // 设置默认值
      type: Array,
    },
    mulValue: { // 绑定默认值
      type: Array
    },
    maxTagCount: { // 最多显示多少个 tag
      type: Number
    },
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
      selectMulValue: [],
    }
  },

  watch: {
    value(nv) {
      this.selectValue = this.flatData.find(item => item.id === nv)
    },
    mulValue: {
      handler(nv) {
        this.setDefaultValue(nv)
      },
      deep: true
    }
  },

  methods: {
    initData() {
      this.flatData = []
      this.dealData(this.dataSource, 1)

      this.selectValue = {}
      this.selectMulValue = []

      if (this.mode === 'multiple' && (this.defaultMulValue?.length > 0 || this.mulValue?.length > 0)) {
        this.setDefaultValue(this.mulValue || this.defaultMulValue)
      } else if (this.mode === 'default' && (this.value || this.defaultValue)) {
        const result = this.flatData.find(item => item.id === (this.value || this.defaultValue))
        if ((this.allowSelectOrganization && result.type === 'organization')
          || (!this.allowSelectOrganization && result.type !== 'organization')) {
          this.selectValue = result
        }
      }

    },

    // 将 tree 扁平化处理
    dealData(data, level) {
      data.forEach((item) => {
        // 是否选中
        item.isCheckFlag = false
        item.level = level

        // 默认展示两层数据 
        if (level > 2) {
          item.isShowFlag = false // 控制该数据是否显示
        } else {
          item.isShowFlag = true
        }
        // 扁平化处理数据
        this.flatData.push(item)

        if (item.children && item.type === 'organization') {
          // 默认打开最顶层
          if (level > 1) {
            item.isExpandFlag = false // 用来控制是否展开
          } else {
            item.isExpandFlag = true
          }

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
    handleChangeExpand(record) { // 控制展开还是收起
      record.isExpandFlag = !record.isExpandFlag
      this.hideItem(record.id, record.isExpandFlag)
    },
    hideItem(id, flag) { // 递归关闭子级
      this.flatData.forEach((item) => {
        if (item.pId === id) {
          item.isShowFlag = flag
          if (!flag && item.children) {
            item.isExpandFlag = false
            this.hideItem(item.id, flag)
          }
        }
      })
      this.$forceUpdate()
    },
    handleDelete(record) { // 多选时删除
      record.isCheckFlag = false

      if (record.type === 'organization') {

        this.operationAll(record.id, record.isCheckFlag)
      } else {
        this.operationShop(record.pId, record.isCheckFlag)
      }

      // 将选中的数据保存起来
      const result = this.flatData.filter(item => item.isCheckFlag)
      this.selectMulValue = result

      this.$nextTick(() => {
        this.setDropdownPlace()
        this.$forceUpdate()
      })
    },

    // 点击下拉项，选中数据
    handleSelect(record) {

      if (this.mode === 'default' && this.selectValue.id !== record.id) {
        // 单选时，需要判断是否能点击部门，
        if (record.type === 'organization' && !this.allowSelectOrganization) return
        this.isShowSelectFlag = false
        this.selectValue = record
        this.$emit('change', record.id)
      } else {
        record.isCheckFlag = !record.isCheckFlag

        if (record.type === 'organization') {

          this.operationAll(record.id, record.isCheckFlag)
        } else {
          this.operationShop(record.pId, record.isCheckFlag)
        }

        // 将选中的数据保存起来
        this.selectMulValue = []
        const result = this.flatData.filter(item => item.isCheckFlag)
        this.$emit('change', result.map(item => item.id))
        // 最多显示多少tag
        this.selectMulValue = result

        this.$nextTick(() => {
          this.setDropdownPlace()
          this.$forceUpdate()
        })
      }

    },
    // 操作部门的选中时，需要全选，反选 部门下面的成员
    operationAll(id, flag) {

      this.flatData.forEach((item) => {

        if (item.pId === id) {

          item.isCheckFlag = flag

          // 递归处理部门下成员的 全选，反选
          if (item.children && item.type === 'organization') this.operationAll(item.id, flag)
          // 如果同级全部选择，则让父级选中，如果同级有一个没选中，则让父级去掉选中
          if (item.pId) this.operationShop(item.pId, flag)
        }
      })
    },
    // 操作门店时，需要反向计算部门是否选中
    operationShop(pId, flag) {
      const result = this.flatData.find(item => item.pId === pId && item.isCheckFlag === !flag)

      // 如果同级的没有任何一个状态不相同，则向上选中
      if (!result) {
        const deptResult = this.flatData.find(item => item.id === pId)
        deptResult.isCheckFlag = flag
        if (deptResult.pId) this.operationShop(deptResult.pId, flag)
      } else {
        // 如果同级有一个状态不相同，如果父级有选中，则清除选中
        const deptResult = this.flatData.find(item => item.id === pId)
        deptResult.isCheckFlag = false
        if (deptResult.pId) this.operationShop(deptResult.pId, flag)
      }
    },

    // 点击其他空白区域时，关闭弹框
    windowClick() {
      this.isShowSelectFlag = false
    },

    // 设置多选默认值
    setDefaultValue(list) {
      this.selectMulValue = []
      this.flatData.forEach((item) => {
        item.isCheckFlag = false
      })
      list?.forEach((item) => {
        const result = this.flatData.find(it => it.id === item)
        result.isCheckFlag = true
        this.selectMulValue.push(result)
      })

      this.$forceUpdate()
    },
    // 设置弹出框的位置
    setDropdownPlace() {
      const rectOffset = this.$refs.selectRef.getBoundingClientRect()

      this.dropdownSpace.top = `${rectOffset.top + rectOffset.height + 6}px`
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
  display: inline-block;
  box-sizing: border-box;
  &__select {
    box-sizing: border-box;
    width: 220px;
    min-height: 32px;
    overflow: hidden;
    line-height: 32px;
    padding: 0 12px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    cursor: pointer;
    text-align: left;
    &--item {
      max-width: 94%;
      height: 24px;
      float: left;
      padding: 0 4px;
      margin: 3px 4px 3px 0;
      line-height: 24px;
      font-size: 12px;
      background-color: #fafafa;
      border: 1px solid #e8e8e8;
      border-radius: 2px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &-delete {
        font-size: 14px;
        cursor: pointer;
        margin-left: 4px;
      }
    }
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:hover {
      background: #e6f7ff;
    }

    &-icon {
      display: inline-block;
      margin-right: 6px;
    }

    &-check {
      float: right;
      margin-right: 12px;
      color: #1890ff;
    }
  }
}
</style>