import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        routerHigh:[],
    },
    getters:{  //动态获取state里面的值
      getRouterHigh(state){
        return state.routerHigh
      }
    },
    mutations: {  //定义对state里的值进行修改的方法
      setMRouterHigh(state,obj){
          state.routerHigh[obj.name] = obj.top
          //state.routerHigh.push({name:url,top})
      }
    },
    actions: {  //定义触发mutations里函数的方法
        setRouterHigh(context,obj){
            context.commit('setMRouterHigh',obj)
        }
    }
})
