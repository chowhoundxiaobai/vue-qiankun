import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element';

import { registerMicroApps, start } from "qiankun";


const apps = [
    {
        name: "vue-project",//应用名字
        entry: "//localhost:10000/",//默认会加载这个HTML 解析里面的js 动态的执行（子应用必须支持跨域）
        container: "#qiankun",// 容器名
        activeRule: '/qiankunVue',//激活的路径
        props: {a: 1}
    }
];
registerMicroApps(apps);//注册应用
start({
    // prefetch: false,//取消预加载
});//开启



const app = createApp(App)
installElementPlus(app)
app.use(router).mount('#app')