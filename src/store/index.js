import { createStore } from 'vuex'
//引入firebase
import { auth } from '../firebase/config.js'
//引入firebase中用邮件用户注册、登录、退出、初始时是否登录的验证服务
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const store = createStore({
  state: {
    //设置初始用户为null
    user: null,
    //设置初始登录状态为false
    isLogin: false
  },
  getters: {
  },
  mutations: {
    //用户发生变化
    setUser(state, user) {
      state.user = user
      console.log('用户发生了变化：', state.user)
    },
    //登录状态发生变化
    setAuthIsLogin(state, playload) {
      state.isLogin = playload
    }
  },
  actions: {
    //注册
    async signup(context, { email, password }) {
      console.log("用户注册")
      //利用延时异步调用，模拟注册
      // setTimeout(() => {
      //注册成功
      //   context.commit('setUser', { email, password })
      // }, 1000);
      //利用firebase注册
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('注册失败')
      }
    },
    //登录
    async login(context, { email, password }) {
      console.log("用户登录")
      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user);
      } else {
        throw new Error('登录失败')
      }
    },
    //注销
    async logout(context) {
      console.log("注销用户")
      await signOut(auth)
      context.commit('setUser', null)

    }
  },
  modules: {
  },
})
//因为在其他的地方不需要调用，所以写在外面
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsLogin', true)
  store.commit('setUser', user)
  unsub();

})
export default store


