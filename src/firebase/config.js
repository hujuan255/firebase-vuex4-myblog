import { initializeApp } from 'firebase/app';
//引入验证服务
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCgXwsZdEtbfEdxcig3TVKigeKsEPkcYjA",
  authDomain: "my-blog-vuex4.firebaseapp.com",
  projectId: "my-blog-vuex4",
  storageBucket: "my-blog-vuex4.appspot.com",
  messagingSenderId: "855015744704",
  appId: "1:855015744704:web:e607507ef021be1decb925"
};
//初始化
initializeApp(firebaseConfig);
//实例化验证
const auth = getAuth();

export { auth }