<template>
  <Layout>
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div
            class="post-preview"
            v-for="item in $page.posts.edges"
            :key="item.node.id"
          >
            <g-link :to="'/post/' + item.node.id ">
              <h2 class="post-title">
                {{ item.node.title }}
              </h2>
              <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            </g-link>
            <p class="post-meta">
             {{item.node.content}}
              <a href="#!">{{ item.node.created_at }}</a>
              on {{ item.node.published_at }}
            </p>
            <p>
              <span v-for="flag in item.node.flags" :key="flag.id">
                <g-link :to="'/flag/'+flag.id">{{flag.title}}</g-link>
                &nbsp; &nbsp;
              </span>
            </p>
          </div>
          <!-- <div class="d-flex justify-content-end mb-4">
            <a class="btn btn-primary text-uppercase" href="#!"
              >Older Posts →</a
            >
          </div> -->
          <hr>
          <Pager :info="$page.posts.pageInfo"/>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
  query ($page: Int){
    posts: allStrapiArticles (perPage:2,page: $page) @paginate{
      pageInfo {
        totalPages
        currentPage
      }
      edges{
        node{
          id
          title
          created_at
          published_at
          updated_at
          content
          flags{
            id
            title
          }
        }
      }
    }
 general: allStrapiGeneral{
    edges{
      node{
        id
        title
        subtitle
        cover{
          url
        }
      }
    }
  }
  }

</page-query>
<script>
import { Pager } from 'gridsome'
export default {
  name: 'HomePage',
  metaInfo: {
    title: 'Hello, world!'
  },
  components:{
    Pager
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
