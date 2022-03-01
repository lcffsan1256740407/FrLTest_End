import {defineStore} from 'pinia'

// 定义并导出容器
// 参数1: 容器的ID,唯一 ,将来pinia会把所有的容器挂载到根容器
// 参数2: 选项对象
export const useMainStore = defineStore('main',{
	// 存储全局状态
	// 1.必须是函数,这样是为了在服务端渲染的时候避免交叉请求导致的数据污染
	// 2.必须是箭头函数,这样是为了更好的TS类型推导
	state:()=>{
		return{
            msg:'我是PINIA'
		}
	},
	
	// 用于封装计算属性,具有缓存功能
	getters:{

	},

	//	封装业务逻辑,修改state
	actions:{

	}
})