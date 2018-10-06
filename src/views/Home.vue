<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span v-once>这个将不会改变: {{ someData }}</span>
    <span v-html="rawHtml"></span>
    <span v-text="someData"></span>
    <!--<div :id="dynamicId"></div>
      <a :href="someData">...</a>
      <div v-bind:class="{ active: isActive }"></div>
      <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
      <a @click="doSomething">...</a>
      <button :disabled="isButtonDisabled">绑定属性</button>-->
    <!--<ul id="example-2">
      <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>-->
    <!-- 点击事件将只会触发一次 -->
    <!--<a v-on:click.once="doThis"></a>-->
    <router-link to="/about">goAbout</router-link>
    <!--<router-view/>-->
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  data() {
    return {
      someData: "111",
      rawHtml: "<span>插件入html</span>",
      isActive: true,

    }
  },
  methods: {
    getData() {
      console.log("请求数据");
      this.$http.get('http://127.0.0.1/php/back_buy_data_7.php?name=ffc').then(response => {
        console.log(response);
        // get bodyText data
        this.someData = response.bodyText;
        console.log(this.someData);
      }, error => {
        // error callback
      });
    },
    postDate() {
      console.log(this.someData);
      this.http_post('/php/user_login.php', { username: "123456", userpassword: "123456" }).then(response => {
        console.log(response);
        // get bodyText data
        this.someData = response.bodyText;
        console.log(this.someData);
      }, error => {
        // error callback
      });
    }
  },
  beforeCreate: function() {
    console.log('创建vue实例前');
  },
  created: function() {
    console.log('创建vue实例后');
  },
  beforeMount: function() {
    console.log('挂载到dom前');
  },
  mounted: function() {
    this.postDate();
    console.log('挂载到dom后');
  },
  beforeUpdate: function() {
    console.log('数据变化更新前');
  },
  updated: function() {
    console.log('数据变化更新后');
  },
  beforeDestroy: function() {
    console.log('vue实例销毁前');
  },
  destroyed: function() {
    console.log('vue实例销毁后');
  }
}
</script>
