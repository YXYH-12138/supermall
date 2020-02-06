<template>
  <div class="category">
    <NavBar class="nav-bar">
      <div slot="center">分类</div>
    </NavBar>
    <div class="category-content">
      <CategoryTabMenu :categories="categories" @menuClick="menuClick" />
      <CategoryMenuContent
        ref="mentContent"
        :categoryDataItem="categoryData"
        class="category-menu-content"
        @tabClick="tabClick"
        :menuDetail="menuDetail[tabString]"
      ></CategoryMenuContent>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import GoodsList from "components/content/goodslist/GoodsList";

import CategoryMenuContent from "./childComps/CategoryMenuContent";
import CategoryTabMenu from "./childComps/CategoryTabMenu";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "network/category";

export default {
  name: "Category",
  components: {
    NavBar,
    CategoryTabMenu,
    CategoryMenuContent,
    GoodsList
  },
  data() {
    return {
      //分类数据
      categories: [],
      //每个类别的子数据
      categoryData: [],
      //类别的详情数据
      menuDetail: {
        pop: [],
        new: [],
        sell: []
      },
      tabIndex: 0,
      menuIndex: 0
    };
  },
  methods: {
    _getCategory() {
      //请求分类列表
      getCategory().then(res => {
        this.categories = res.data.category.list;
        this._menuContentData();
      });
    },
    //请求当前点击列表的子数据和分类的详情数据
    _menuContentData() {
      let maitKey = this.categories[this.menuIndex].maitKey;
      //请求当前类别的子数据
      getSubcategory(maitKey).then(res => {
        this.categoryData = res.data.list;
        this._getCategoryDetail("pop");
        this._getCategoryDetail("new");
        this._getCategoryDetail("sell");
      });
    },
    //根据类型 请求 详情页数据
    _getCategoryDetail(type) {
      //请求类别的详情数据
      getCategoryDetail(this.miniWallkey, type).then(res => {
        this.menuDetail[type] = res;
      });
    },
    //数据分类的切换
    menuClick(index) {
      this.menuIndex = index;
      this._menuContentData();
    },
    //详情数据的切换
    tabClick(index) {
      this.tabIndex = index;
      // this._getCategoryDetail();
    }
  },
  computed: {
    tabString() {
      return ["pop", "new", "sell"][this.tabIndex];
    },
    miniWallkey() {
      return this.categories[this.menuIndex].miniWallkey;
    }
  },
  created() {
    this._getCategory();
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 999;
  font-size: 20px;
}
.category-content {
  display: flex;
}
.category-menu-content {
  flex: 1;
}
</style>