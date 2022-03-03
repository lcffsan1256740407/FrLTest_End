export default defineComponent(() => {
  // defineProps(['dataSource'])

  /*
      dataSource : [
          {
              type:input,
              label:公司名称
          },
          {
              type:select,
              label:业务部门
              data:[
                  {name:'前端',value:1}
                  {name:'后端',value:2}
              ]
          }
      ]
  */

  const dataSource = [
    {
      type: 'input',
      label: '公司名称',
      keywords: 'companyName',
      placeholder: `请输入公司名称`
    },
    {
      type: 'select',
      label: '业务部门',
      keywords: 'yewubumen',
      data: [
        { name: '前端', value: 1 },
        { name: '后端', value: 2 }
      ]
    }
  ]

  const formInline = reactive({
    user: '',
    region: '',
  })

  const onSubmit = () => {
    console.log('submit!')
  }


  return () => (
    <el-button type="primary">按钮测试</el-button>
    
    // <el-form inline={true} v-model={formInline} class="demo-form-inline">
    //   {/*  内容渲染  */}
    //   {
    //     dataSource.map((item, index) => {
    //       item.type === 'input'
    //         ?
    //         <el-form-item key={index} label={item.label}>
    //           <el-input v-model={formInline[item.keywords]} placeholder={item.placeholder ? item.placeholder : null}></el-input>
    //         </el-form-item>
    //         :
    //         item.type === 'select' ?
    //           <el-form-item key={index} label={item.label}>

    //           </el-form-item>
    //           :
    //           null
    //     })
    //   }
    //   {/*  组件按钮  */}

    //   <el-form-item>
    //     <el-button type="primary" onclick={onSubmit}>提交</el-button>
    //   </el-form-item>

    // </el-form>
  );

})
