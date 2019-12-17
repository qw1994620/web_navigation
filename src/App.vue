<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body {
    width: 100%;
    min-width: 320px;
    /* background-color: #333; */
    margin: 0 auto !important;
  }
  h1{
      text-align: center;
      font-weight: 900;
      padding: 50px 0;
  }
  li{
      font-size: 16px;
  }
.box{
    width: 100%;
    margin: 30px 0;
}

.box .a{
    width: 100%;
    height: 40px;
    font-size: 18px;
    margin: 10px 0;
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.5)
}

.container{
    background-color: #eee;
    border-radius: 10px;
  padding-bottom: 15px;
}
.box .title{
    font-size: 24px;
    transform: translate(0,-30%);
    padding: 0 20px;
   line-height: 38px;
    
}
.box a img{
    position: absolute;
    left: 30px;
    width: 24px;
    height: 24px;
}

</style>
