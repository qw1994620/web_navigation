<template>
<header>
    <img src="../assets/logo.png">
        <h1>前端专用导航</h1>
    </header>
  
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
         SetHome(obj,url){
            try{
                obj.style.behavior='url(#default#homepage)';
                obj.setHomePage(url);
            }catch(e){
                if(window.netscape){
                    try{
                        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                    }catch(e){
                        alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
                    }
                }else{
                    alert("抱歉，您所使用的浏览器无法完成此操作。\n\n请手动将【"+url+"】设置为首页。");
                }
            }
        },
    },
    components: {

    },
};
</script>

<style scoped >

img{
    display: block;
    width: 100px;
   margin: 0 auto;
}
</style>
