 import Toast from "./Toast.vue"

 const toast = {}

 toast.install = function (vue) {
   //1.创建组件构造器
   const toastConstructor = vue.extend(Toast)
   //2.根据组件构造器，可以创建出来一个组件对象
   const toast = new toastConstructor()
   //3.将组件对象，手动挂载到某一个元素上
   toast.$mount(document.createElement("div"))
   //添加到body中 $el就是div
   document.body.appendChild(toast.$el)
   vue.prototype.$toast = toast
 }

 export default toast
