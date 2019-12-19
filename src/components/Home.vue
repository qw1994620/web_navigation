<template>
  <div>
    <Header></Header>
    <Search @go-home="getSonFalg"></Search>
    <div class="box" v-for="item in list" :key="item.title" v-show="falg">
      <div class="container">
        <div class="title btn btn-success">{{item.title}}</div>
        <div class="row">
          <div v-for="items in item.list" :key="items.id" class="col-lg-3 col-md-4 col-sm-6">
            <a :href="items.url" target="_blank" class="btn btn-info a">
              <img :src="items.img" alt />
              <span>{{items.name}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Search from "@/components/Search";
export default {
  props: {},
  data() {
    return {
      list: [],
      falg: true
    };
  },
  computed: {},
  filters: {},
  created() {},
  mounted() {
    this.getdata();
  },
  watch: {},
  methods: {
    getdata() {

      this.myaxios("./static/web_data.json").then(res => {
        this.list = res.data.data;
        // console.log(this.list);
      });
    },
    getSonFalg(SonFalg) {
      //  console.log(SonFalg);
      this.falg = !SonFalg;
    }
  },
  components: {
    Header,
    Footer,
    Search
  }
};
</script>
<style scoped >
</style>
