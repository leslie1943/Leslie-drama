<template>
  <d2-container v-loading="loading">
    <template slot="header"></template>

    <el-row>
      <el-table
        :data="menuData"
        row-key="id"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column prop="name" label="name"></el-table-column>
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="flag" label="flag"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              v-if="scope.row.flag==1"
              @click="handleCreate(scope.row)"
            >新建子菜单</el-button>
            <el-button size="mini" type="text" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="text" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- Buttons -->
    <el-row>
      <el-col :span="4">
        <el-button size="small" @click="listMenus" type="primary">Show menu</el-button>
      </el-col>
    </el-row>

    <div style="height:30px;"></div>

    <el-row>
      <el-table :data="menuList">
        <el-table-column prop="_id" label="_id"></el-table-column>
        <el-table-column prop="name" label="name"></el-table-column>
      </el-table>
    </el-row>

    <template slot="footer"></template>
  </d2-container>
</template>

<script>

export default {
  name: 'egg-api-menu',
  data () {
    return {
      loading: false,
      menuList: [],
      menuData: [
        { id: 1,
          name: '工作台',
          flag: 1
        },
        {
          id: 2,
          name: '采购管理',
          flag: 1,
          children: [
            { id: 3, name: '新增采购', flag: 2 },
            { id: 4, name: '采购列表', flag: 2 }
          ]
        },
        {
          id: 5,
          name: '协议供货',
          flag: 1,
          children: [
            { id: 6, name: '协议关系', flag: 2 },
            { id: 7, name: '协议产品', flag: 2 }
          ]
        },
        { id: 8,
          name: '数据统计',
          flag: 1
        }
      ]
    }
  },
  methods: {
    listMenus () {
      this.loading = true
      this.$store.dispatch('egg/menu/list').then(res => {
        console.info(res)
        this.menuList = res
        this.loading = false
      })
    },
    handleCreate (row) {
      console.info('handleCreate', row)
    },
    handleEdit (row) {
      console.info('handleEdit', row)
    },
    handleDelete (row) {
      console.info('handleDelete', row)
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
.egg-menu-container {
  .split-section {
    height: 30px;
  }
}
</style>
