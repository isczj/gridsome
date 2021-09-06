const c1 = () => import(/* webpackChunkName: "page--src-templates-articles-vue" */ "C:\\Users\\chengzhijin\\Desktop\\新建文件夹\\gridsome\\src\\templates\\Articles.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-flag-vue" */ "C:\\Users\\chengzhijin\\Desktop\\新建文件夹\\gridsome\\src\\templates\\Flag.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\Users\\chengzhijin\\Desktop\\新建文件夹\\gridsome\\src\\pages\\Contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\chengzhijin\\Desktop\\新建文件夹\\gridsome\\src\\pages\\About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\chengzhijin\\Desktop\\新建文件夹\\gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\chengzhijin\\Desktop\\新建文件夹\\gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/post/:id/",
    component: c1
  },
  {
    path: "/flag/:id/",
    component: c2
  },
  {
    path: "/contact/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
