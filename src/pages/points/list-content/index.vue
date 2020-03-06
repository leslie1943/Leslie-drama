<template>
  <div class="list-content-container">
    <el-row>
      <!-- List -->
      <ListContent>
        <div slot="list">
          <el-table
            :show-header="false"
            :data="dataList"
            @row-click="handleRowChange"
            :highlight-current-row="true"
          >
            <el-table-column align="left">
              <template slot-scope="scope">
                <el-radio
                  style="margin-right:0px"
                  v-model="selectedId"
                  :label="scope.row.index"
                  @change="handleRowChange(scope.row)"
                >{{""}}</el-radio>
                {{scope.row.materialName}}
              </template>
            </el-table-column>
            <!-- <el-table-column prop="materialName"></el-table-column> -->
          </el-table>
        </div>

        <div slot="content">
          <el-form label-position="left" label-width="180px" v-model="currentBidding">
            <el-form-item label="响应报价">
              <el-input placeholder="响应报价" v-model="currentBidding.price"></el-input>
            </el-form-item>

            <el-form-item label="响应产地">
              <el-select placeholder="响应产地" v-model="currentBidding.origin">
                <el-option label="不限" :value="1"></el-option>
                <el-option label="国产" :value="2"></el-option>
                <el-option label="进口" :value="3"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="响应品牌型号">
              <el-radio-group placeholder="响应品牌型号" v-model="currentBidding.brand">
                <el-radio label="1">海尔|T333</el-radio>
                <el-radio label="2">小米|R2222</el-radio>
                <el-radio label="3">KUN|BAO</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item>
              <div slot="label" style="line-height:22px;">技术参数与配置偏离情况</div>
              <el-switch v-model="currentBidding.delivery"></el-switch>
            </el-form-item>

            <el-form-item>
              <div slot="label" style="line-height:22px;">响应技术参数与配置</div>
              <el-input type="textarea" v-model="currentBidding.config"></el-input>
            </el-form-item>

            <el-form-item>
              <div slot="label" style="line-height:22px;">产品资质要求</div>
              <el-table :show-header="false" :data="currentBidding.certs">
                <el-table-column prop="name"></el-table-column>
              </el-table>
            </el-form-item>

            <el-form-item>
              <div slot="label" style="line-height:22px;">备 注</div>
              <el-input type="textarea" v-model="currentBidding.remark"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </ListContent>
    </el-row>
  </div>
</template>

<script>
import ListContent from '@/components/list-content/'

export default {
  components: { ListContent },
  data: function () {
    return {
      selectedId: '',
      currentBidding: {
        price: 1000,
        origin: 1,
        brand: 1,
        delivery: true,
        config: '',
        certs: [
          { name: '实名证件-身份证' },
          { name: '产品证件-说明书' },
          { name: '代理证件-营业执照' },
          { name: '厂商证件-许可证' }
        ]
      },
      dataList: [
        { index: 0,
          materialName: 'KKKKKKKKKK1',
          brand1: '联想1',
          speci1: 'T430'
        },
        { index: 1, materialName: 'KKKKKKKKKK2', brand1: '联想1', speci1: 'T430' },
        { index: 2, materialName: 'KKKKKKKKKK3', brand1: '联想1', speci1: 'T430' },
        { index: 3, materialName: 'KKKKKKKKKK4', brand1: '联想1', speci1: 'T430' },
        { index: 4, materialName: 'KKKKKKKKKK5', brand1: '联想1', speci1: 'T430' },
        { index: 5, materialName: 'KKKKKKKKKK6', brand1: '联想1', speci1: 'T430' },
        { index: 6, materialName: 'KKKKKKKKKK7', brand1: '联想1', speci1: 'T430' },
        { index: 7, materialName: 'KKKKKKKKKK8', brand1: '联想1', speci1: 'T430' },
        { index: 8, materialName: 'KKKKKKKKKK9', brand1: '联想1', speci1: 'T430' },
        { index: 9, materialName: 'KKKKKKKKKK10', brand1: '联想1', speci1: 'T430' }
      ]
    }
  },
  methods: {
    handleRowChange (item) {
      this.selectedId = item.index
    }
  },
  computed: {

  }
}
</script>
<style lang="scss">
.list-content-container {
  padding: 20px;
}
</style>
