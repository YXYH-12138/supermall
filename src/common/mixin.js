import BackTop from "components/content/backtop/BackTop";

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      backTopShow: false,
    }
  },
  methods: {
    topClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  }
}
