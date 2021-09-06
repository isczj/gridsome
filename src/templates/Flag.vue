<template>
  <Layout>
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1># {{ $page.flag.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div
            class="post-preview"
            v-for="(item,i) in $page.flag.articles"
            :key="i"
          >
            <g-link :to="'/post/' + item.id">
              <h2 class="post-title">
                {{ item.title }}
              </h2>
            </g-link>
            <p class="post-meta">
              {{ item.content }}
              <a href="#!">{{ item.created_at }}</a>
            </p>
            <p>
              <!-- <span v-for="flag in item.flags" :key="flag.id">
                <g-link :to="'/flag/' + flag.id">{{ flag.title }}</g-link>
                &nbsp; &nbsp;
              </span> -->
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
  query($id:ID!){  
    flag:strapiFlag(id:$id){
      title
      articles {
      title
      id
      content
      created_at
      }
    }
}
</page-query>
<script>
export default {
  name: 'FlagPage'
}
</script>
<style scoped>
</style>