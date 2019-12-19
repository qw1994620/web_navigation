<template>
  <div>
    <form id="bdfm" target="_blank" name="bdfm" method="get" action="http://www.baidu.com/s">
      <div class="container">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="输入关键字搜索"
            aria-label="输入关键字搜索"
            v-model="msg"
            aria-describedby="button-addon2"
            name="word"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="submit" id="button-addon2">百度一下</button>
          </div>
        </div>
      </div>
    </form>
    <div class="box" v-show="falg">
      <div class="container">
        <div class="title btn btn-success">搜索结果</div>
        <div class="row">
          <div
            v-for="items in list"
            :key="items.name"
            class="col-lg-3 col-md-4 col-sm-6"
            v-show="!items.falg"
          >
            <a :href="items.url" target="_blank" class="btn btn-info a">
              <img :src="items.img" alt />
              <span>{{items.name}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      list: [],
      msg: "",
      falg: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getdata();
  },
  watch: {
    msg(val) {
      this.list.forEach(ele => {
        if (ele.name.toLowerCase().search(val.toLowerCase()) === -1) {
          ele.falg = true;
          this.falg = true;
        } else {
          ele.falg = false;
          this.falg = false;
        }
      });
      this.sendSonVal();
    }
  },
  methods: {
    getdata() {
      this.myaxios("./static/web_data.json").then(res => {
        res.data.data.forEach(ele => {
          ele.list.forEach(ele => {
            this.list.push(ele);
          });
        });
      });
    },
    sendSonVal() {
      this.$emit("go-home", this.falg);
    }
  },
  components: {}
};
</script>
<style scoped >
.container{
        background-color: white;
}
</style>
