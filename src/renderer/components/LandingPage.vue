<template>
  <div id="wrapper">
          <a-modal
            v-model="visible1"
            title="Balance"
            :ok-button-props="{ props: { display: false } }"
            :cancel-button-props="{ props: { display: false } }"
            @ok="handleOk"
          >
            <p>有效期： {{userInfo.expired_at}}</p>
            <p> 剩余赠送额度: {{quota_info.remain_free_quota}}</p>
            <p>剩余充值额度: {{quota_info.remain_pay_quota}}</p>
            <p> 剩余总额度: {{quota_info.remain_total_quota}}</p>
      </a-modal>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Web App">
  
    <div id="search">
          <a-input-search size="large" placeholder="input search text" enter-button @search="onSearch" />
    </div>
    <div class="result">
       <div style="margin-bottom: 16px">
        <div class="Btn">
          <a-button type="primary" icon="carry-out"  @click="start">
            Export
          </a-button>
          <div>
              <a-button type="primary" @click="showModal">
               查 询 语 法
              </a-button>
              <a-modal v-model="visible" title="Web 应用搜索过滤器" @ok="handleOk">
              <table>
                  <thead>
                  <tr>
                  <th>名称</th>
                  <th>类型</th>
                  <th>说明</th>
                  <th>示例</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td>app</td>
                  <td>string</td>
                  <td>Web 应用信息</td>
                  <td>webapp:wordpress</td>
                  </tr>
                  <tr>
                  <td>header</td>
                  <td>string</td>
                  <td>HTTP headers</td>
                  <td>header:server</td>
                  </tr>
                  <tr>
                  <td>keywords</td>
                  <td>string</td>
                  <td>meta 属性关键词</td>
                  <td>keywords:baidu.com</td>
                  </tr>
                  <tr>
                  <td>desc</td>
                  <td>string</td>
                  <td>HTTP description 属性</td>
                  <td>desc:hello</td>
                  </tr>
                  <tr>
                  <td>title</td>
                  <td>string</td>
                  <td>HTTP Title 标题信息</td>
                  <td>title: baidu</td>
                  </tr>
                  <tr>
                  <td>ip</td>
                  <td>string</td>
                  <td>IP 地址</td>
                  <td>ip:192.168.1.1</td>
                  </tr>
                  <tr>
                  <td>site</td>
                  <td>string</td>
                  <td>site 搜索</td>
                  <td>site:baidu.com</td>
                  </tr>
                  <tr>
                  <td>city</td>
                  <td>string</td>
                  <td>城市名称</td>
                  <td>city:beijing</td>
                  </tr>
                  <tr>
                  <td>country</td>
                  <td>string</td>
                  <td>国家名称</td>
                  <td>country:china</td>
                  </tr>
                  </tbody>
                  </table>
              </a-modal>
          </div>
        </div>
      <!-- <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{ `Selected ${selectedRowKeys.length} items` }}
        </template>
      </span> -->
    </div>
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="searchList"
      :scroll="{ x: 1500, y: 800 }"
      :pagination="pagination"
      :loading="loading"
      size="small"
    /> 
     <!-- <a-pagination
      v-model="current"
      show-size-changer
      :page-size.sync="pageSize"
      :total="total"
      @showSizeChange="onShowSizeChange"
    /> -->
    <!-- <a-pagination v-model="current" :default-current="1" :total="total" :page-size.sync="pageSize"/> -->
    </div>
       </a-tab-pane>
       <!--                                                  tab 2                             -->
       <a-tab-pane key="2" tab="Domain" force-render>
        <div id="search">
          <a-input-search size="large" placeholder="input search text" enter-button @search="onSearch2" />
    </div>
    <div class="result">
       <div style="margin-bottom: 16px">
        <div class="Btn">
          <a-button type="primary" icon="carry-out"  @click="start2">
            Export
          </a-button>
          <div>
             <a-select default-value="关联域名" style="width: 120px" @change="handleChange">
                <a-select-option value="0">
                  关联域名
                </a-select-option>
                <a-select-option value="1">
                  子域名
                </a-select-option>
              </a-select>
            </div>
        </div>
      <!-- <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{ `Selected ${selectedRowKeys.length} items` }}
        </template>
      </span> -->
    </div>
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns2"
      :data-source="searchList2"
      :scroll="{ x: 1500, y: 800 }"
      :pagination="pagination2"
      :loading="loading2"
     
      size="small"
    /> 

    </div>
       </a-tab-pane>

       <!--                                                       tab 3                                                                 -->
      <a-tab-pane key="3" tab="Host" force-render>
    <div id="search">
          <a-input-search size="large" placeholder="input search text" enter-button @search="onSearch3" />
    </div>
    <div class="result">
       <div style="margin-bottom: 16px">
        <div class="Btn">
          <a-button type="primary" icon="carry-out"  @click="start3">
            Export
          </a-button>
          <div>
              <a-button type="primary" @click="showModal2">
               查 询 语 法
              </a-button>
              <a-modal v-model="visible2" title="主机设备搜索过滤器" @ok="handleOk3">
              <table class="table">
                      <thead>
                      <tr>
                      <th>名称</th>
                      <th>类型</th>
                      <th>说明</th>
                      <th>示例</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                      <td>app</td>
                      <td>string</td>
                      <td>应用，产品</td>
                      <td>app: ProFTPD</td>
                      </tr>
                      <tr>
                      <td>ver</td>
                      <td>string</td>
                      <td>版本</td>
                      <td>ver:2.1</td>
                      </tr>
                      <tr>
                      <td>device</td>
                      <td>string</td>
                      <td>设备类型</td>
                      <td>device:router</td>
                      </tr>
                      <tr>
                      <td>os</td>
                      <td>string</td>
                      <td>操作系统</td>
                      <td>os:windows</td>
                      </tr>
                      <tr>
                      <td>service</td>
                      <td>string</td>
                      <td>服务类型</td>
                      <td>service:http</td>
                      </tr>
                      <tr>
                      <td>ip</td>
                      <td>string</td>
                      <td>IP 地址</td>
                      <td>ip:192.168.1.1</td>
                      </tr>
                      <tr>
                      <td>cidr</td>
                      <td>string</td>
                      <td>CIDR 格式地址</td>
                      <td>cidr:192.168.1.1/24</td>
                      </tr>
                      <tr>
                      <td>hostname</td>
                      <td>string</td>
                      <td>主机名称</td>
                      <td>hostname:google.com</td>
                      </tr>
                      <tr>
                      <td>port</td>
                      <td>string</td>
                      <td>端口号</td>
                      <td>port:80</td>
                      </tr>
                      <tr>
                      <td>city</td>
                      <td>string</td>
                      <td>城市名称</td>
                      <td>city:beijing</td>
                      </tr>
                      <tr>
                      <td>country</td>
                      <td>string</td>
                      <td>国家名称</td>
                      <td>country:china</td>
                      </tr>
                      <tr>
                      <td>asn</td>
                      <td>integer</td>
                      <td>ASN 号码</td>
                      <td>asn:8978</td>
                      </tr>
                      </tbody>
                </table>
              </a-modal>
          </div>
        </div>
      <!-- <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{ `Selected ${selectedRowKeys.length} items` }}
        </template>
      </span> -->
    </div>
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns3"
      :data-source="searchList3"
      :scroll="{ x: 1500, y: 800 }"
      :pagination="pagination3"
      :loading="loading3"
      size="small"
    /> 
     <!-- <a-pagination
      v-model="current"
      show-size-changer
      :page-size.sync="pageSize"
      :total="total"
      @showSizeChange="onShowSizeChange"
    /> -->
    <!-- <a-pagination v-model="current" :default-current="1" :total="total" :page-size.sync="pageSize"/> -->
    </div>
       </a-tab-pane>
<!--                                                tab 4                                                  -->
       <!-- <a-tab-pane key="4" tab="Balance" force-render>
             <a-table
      :columns="columns4"
      :data-source="searchList4"
      :scroll="{ x: 1500, y: 800 }"
      :loading="loading4"
      size="small"
    /> 

       </a-tab-pane> -->

     </a-tabs>
  </div>
 
</template>

<script>
  //import SystemInformation from './LandingPage/SystemInformation'
  import nodeXlsx from 'node-xlsx'
  import fs from 'fs'
 // const xlsx = require('node-xlsx');
 // const path = require('path');
  const columns = [
  {
    title: 'Site',
    dataIndex: 'site',
  },
  {
    title: 'IP',
    dataIndex: 'ip',
    size:'small'
  },
  {
    title: 'Server',
    dataIndex: 'server[0].chinese',
  },
   {
    title: 'FranmeWork',
    dataIndex: 'franmework',
  },
    {
    title: 'Waf',
    dataIndex: 'waf[0].chinese',
  },
     {
    title: 'City',
    dataIndex: 'geoinfo.city.names.en',
    size:'small'
  },
    {
    title: 'ISP',
    dataIndex: 'geoinfo.isp',
    size:'small'
  },
   {
    title: 'Description',
    dataIndex: 'description',
    ellipsis:true
  },
];
  const columns2 = [
  {
    title: 'Site',
    dataIndex: 'name',
  },
  {
    title: 'IP',
    dataIndex: 'ip',
    size:'small'
  },
  ];
  const columns3 = [

  {
    title: 'IP',
    dataIndex: 'ip',
    size:'small'
  },
    {
    title: 'Port',
    dataIndex: 'portinfo.port',
  },
  {
    title: 'OS',
    dataIndex: 'portinfo.os',
  },
   {
    title: 'Host Name',
    dataIndex: 'portinfo.hostname',
  },
    {
    title: 'Banner',
    dataIndex: 'portinfo.banner',
    ellipsis:true
  },
     {
    title: 'City',
    dataIndex: 'geoinfo.city.names.en',
    size:'small'
  },
    {
    title: 'Service',
    dataIndex: 'portinfo.service',
    size:'small'
  },
   {
    title: 'Product Name',
    dataIndex: 'portinfo.app',
    ellipsis:true
  },
];

  export default {
    
    mounted(){
        // this.accesstoken=this.$route.params.accesstoken;
      //  console.log(this.$route.params.accesstoken);
      this.getResources();
    },
    name: 'landing-page',
    data:function(){
      return{ 
        pagination: {
        current: 1,
        pageSize: 20,
        total: 0,
        onChange: this.pageChange,
        }, 
        pagination2: {
        current: 1,
        pageSize: 30,
        total: 0,
        onChange: this.pageChange2,
        }, 
        pagination3: {
        current: 1,
        pageSize: 20,
        total: 0,
        onChange: this.pageChange3,
        },
        searchList:[],
        searchList2:[],
        searchList3:[],
        columns,
        columns2,
        columns3,
        selectedRowKeys: [],
      //pageSize: 20,
        loading: false,
        loading2: false,
        loading3: false,
      //  current:1,
        value:'',
        value2:'',
        value3:'',
        url:'https://api.zoomeye.org/web/search?query=',
        page:1,
        facets:'app',
        accesstoken:'',
        visible: false,
        visible1: true,
        visible2: false,
        type:'0',
        userInfo:{},
        quota_info:{}
      }
    },
     computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },
  //   watch: {
  //   pageSize(val) {
  //     console.log('pageSize', val);
  //   },
  //   current(val) {
  //     console.log(val);
  //     console.log(this.value);
  //     let url = 'https://api.zoomeye.org/web/search?query='+this.value+'&facets=app&page='+val
  //     let result =this.$http.get(url,{timeout:100000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','API-KEY':'E6C5AA6c-ae62-98454-996f-81ef3527125'}})
      
  //     console.log(result)
  //     this.total = result.data.available
  //     console.log(this.total)
  //     this.searchList = result.data.matches
  //   },
  // },
    methods:{
      onSearch:async function(keywords){
        this.loading=true
      console.log(keywords)
      this.value=keywords
     let url = 'https://api.zoomeye.org/web/search?query='+encodeURI(this.value) +'&facets=app&page='+this.pagination.current
     console.log("url:",url)
     let result=''
     if(this.$route.params.accesstoken!=null){
       console.log("token: ",this.$route.params.accesstoken)
        result =await this.$http.get(url,{timeout:100000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','Authorization':'JWT '+this.$route.params.accesstoken}})
     }else{
       console.log(this.$route.params.value)
       result =await this.$http.get(url,{timeout:100000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','API-KEY':this.$route.params.value}})
     }
    // let result =await this.$http.get(url,{timeout:100000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','API-KEY':'E6C5AA6c-ae62-98454-996f-81ef3527125'}})
        console.log(result)
        this.pagination.total = result.data.available
        console.log(this.pagination.total)
        this.searchList = result.data.matches
          this.loading=false
      },
        onSearch2:async function(keywords){
        this.loading2=true
      console.log(keywords)
      this.value2=keywords
     let url = 'https://api.zoomeye.org/domain/search?q='+encodeURI(this.value2) +'&type='+this.type+'&page='+this.pagination2.current
     console.log("url:",url)
     let result=''
     if(this.$route.params.accesstoken!=null){
       console.log("token: ",this.$route.params.accesstoken)
        result =await this.$http.get(url,{timeout:100000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','Authorization':'JWT '+this.$route.params.accesstoken}})
     }else{
       console.log(this.$route.params.value)
       result =await this.$http.get(url,{timeout:100000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','API-KEY':this.$route.params.value}})
     }
    // let result =await this.$http.get(url,{timeout:100000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','API-KEY':'E6C5AA6c-ae62-98454-996f-81ef3527125'}})
        console.log(result)
        this.pagination2.total = result.data.total
        console.log(this.pagination2.total)
        this.searchList2 = result.data.list
          this.loading2=false
      },
      onSearch3:async function(keywords){
        this.loading3=true
      console.log(keywords)
      this.value3=keywords
     let url = 'https://api.zoomeye.org/host/search?query='+encodeURI(this.value3) +'&type='+this.type+'&page='+this.pagination3.current+'&facets=app,os'
     console.log("url:",url)
     let result=''
     if(this.$route.params.accesstoken!=null){
       console.log("token: ",this.$route.params.accesstoken)
        result =await this.$http.get(url,{timeout:100000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','Authorization':'JWT '+this.$route.params.accesstoken}})
     }else{
       console.log(this.$route.params.value)
       result =await this.$http.get(url,{timeout:100000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','API-KEY':this.$route.params.value}})
     }
    // let result =await this.$http.get(url,{timeout:100000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','API-KEY':'E6C5AA6c-ae62-98454-996f-81ef3527125'}})
        console.log(result)
        this.pagination3.total = result.data.total
        console.log(this.pagination3.total)
        this.searchList3 = result.data.matches
          this.loading3=false
      },
       start:function() {
      // this.loading = true;
      // // ajax request after empty completing
      // setTimeout(() => {
      //   this.loading = false;
      //   this.selectedRowKeys = [];
      // }, 1000);
      // let path = 'D://cccc.xls'   
      // let sheets = nodeXlsx.parse(path)
      // let data = []
      // let title = ['id','Site','IP','Server','FranmeWork','Waf','City','ISP']

      // // 解析所有sheet
      // sheets.forEach(sheet => {
      //     // sheet.data是所有行数据
      //     let rows = sheet.data
      //     for (var i = 0; i < rows.length; i++) {
      //         console.log(`第${i + 1}行第一列数据：${rows[i][0]}`)
      //         console.log(`第${i + 1}行第二列数据：${rows[i][1]}`)
      //     }
      // });
      let title = ['ID','Site','IP','Server','FranmeWork','Waf','City','ISP']
      let data = [];
      data.push(title)
      console.log(this.searchList)
      this.searchList.forEach((element,index)=>{
        let temp = []
        temp.push(index+1)
        temp.push(element.site)
        temp.push(element.ip)
        temp.push(element.server.chinese)
        temp.push(element.franmework)
        temp.push(element.waf.chinese)
        temp.push(element.geoinfo.city.names.en)
        temp.push(element.geoinfo.isp)
        data.push(temp)
      })
      this.writeXls(data)
    
    },
    start2:function() {
      let title = ['ID','Site','IP']
      let data = [];
      data.push(title)
      console.log(this.searchList2)
      this.searchList2.forEach((element,index)=>{
        let temp = [] 
        temp.push(index+1)
        temp.push(element.data.name)
        temp.push(element.data.ip)
        data.push(temp)
      })
      this.writeXls(data)
    
    },
     start3:function() {
      let title = ['ID','IP','Port','OS','Host Name','Banner','City','Service','Product Name']
      let data = [];
      data.push(title)
      console.log(this.searchList3)
      this.searchList3.forEach((element,index)=>{
        let temp = [] 
        temp.push(index+1)
        temp.push(element.data.ip)
        temp.push(element.data.port)
        temp.push(element.data.portinfo.os)
        temp.push(element.portinfo.hostname)
        temp.push(element.data.portinfo.banner)
        temp.push(element.data.geoinfo.city.names.en)
        temp.push(element.data.portinfo.service)
        temp.push(element.data.portinfo.app)
        data.push(temp)
      })
      this.writeXls(data)
    
    },
    handleChange(value) {
      console.log(`selected ${value}`);
      this.type= value
    },
    writeXls:function(datas){
        let buffer = nodeXlsx.build([
        {
            name:'sheet1',
            data:datas
        }
    ]);
    fs.writeFileSync(`./${new Date().getTime()}.xlsx`,buffer,{'flag':'w'});
    },
    onSelectChange:function(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
       onShowSizeChange:function(current, pageSize) {
      console.log(current, pageSize);
      console.log(123123123)
    },
      pageChange:function(page) {
        this.loading = true
        this.pagination.current = page
        this.onSearch(this.value) //获取列表数据
        },
        showModal() {
      this.visible = true;
    },
         pageChange2:function(page) {
        this.loading2 = true
        this.pagination2.current = page
        console.log(this.value2)
        this.onSearch2(this.value2) //获取列表数据
        },
         pageChange3:function(page) {
        this.loading3 = true
        this.pagination3.current = page
        console.log(this.value3)
        this.onSearch3(this.value3) //获取列表数据
        },
        showModal2() {
      this.visible2 = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
        handleOk3(e) {
      console.log(e);
      this.visible2 = false;
    },
    callback(key) {
      console.log(key);
      if(key==4){

      }
    },
    getResources:async function(){
      let url = 'https://api.zoomeye.org/resources-info'
       console.log("url:",url)
     let result=''
     if(this.$route.params.accesstoken!=null){
       console.log("token: ",this.$route.params.accesstoken)
        result =await this.$http.get(url,{timeout:100000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','Authorization':'JWT '+this.$route.params.accesstoken}})
     }else{
       console.log(this.$route.params.value)
       result =await this.$http.get(url,{timeout:100000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','API-KEY':this.$route.params.value}})
     }
       console.log(result)
       this.userInfo = result.data.user_info
       this.quota_info= result.data.quota_info
       
    },
    }
  }
</script>

<style>
#wrapper{
  padding: 20px;

}
.exportBtn{
  padding: 10px;

}
.search{
  margin-bottom: 5px;
}
.Btn{
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.table {
    width: 100%;
    border: 1px solid #efefef;
    border-collapse: collapse;
}
.table tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
.table th {
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    text-align: -internal-center;
}
.table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.table td {
    display: table-cell;
    vertical-align: inherit;
}
</style>
