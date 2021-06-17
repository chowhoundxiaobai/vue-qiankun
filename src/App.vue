<template>
  <div>
    <el-header>Header</el-header>
    <el-container>
      <el-aside>
        <el-menu>
          <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.url" :disabled="item.disabled" @click="menuClick(item)">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main >
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menuList: [
        {
          url: "/",
          title: "导航一",
          icon: "el-icon-location",
          disabled: false,
        },
        {
          url: "/qiankunVue",
          title: "Vue",
          icon: "el-icon-menu",
          disabled: false,
        },
        {
          url: "",
          title: "导航三",
          icon: "el-icon-document",
          disabled: true,
        },
        {
          url: "/about",
          title: "导航四",
          icon: "el-icon-setting",
          disabled: false,
        },
      ]
    }
  },
  components: {
  },
  methods: {
    menuClick(item) {
      // console.log(item);
      this.$router.push({path: item.url})
    },
  }
}
</script>

<style>
* {
  margin: 0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
