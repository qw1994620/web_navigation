<template>
    
<footer>
            <div class="box">
                <div class="container">
                    <div class="title btn btn-danger">公告</div>
                    <ul>
                        <li><span>本站域名为：<span style="color: red;" class=" btn-link">lay520.cn</span> 请使用
                                <kbd><kbd>ctrl</kbd> + <kbd>D</kbd></kbd> 添加至收藏夹 或 <a href="javascript:"
                                    @click="SetHome(this,'http://lay520.cn');">设置为首页</a></span></li>
                        <li>版本：V0.2.0-beta <router-link to="./updatelog" target="_blank">更新日志</router-link></li>
                        <li>by 9907 ShaoY</li>
                    </ul>
                    <a href="http://wpa.qq.com/msgrd?v=3&uin=610762935&site=qq&menu=yes" target="_blank"
                        class="btn btn-primary a">
                        <span>点击添加地址&反馈：联系我</span></a>
                </div>
            </div>
        </footer>
  
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

</style>
