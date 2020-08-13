<template>
  <div class="container mt-5 pt-4 mb-5">
            <paginate name="getAllPosts" :list="getAllPosts" :per="10">
    <b-card-group>
      <b-card no-body header="Latest Posts">
        <!-- All Posts -->
        <b-list-group flush>
            <b-list-group-item
              :to="{name: 'BlogPostDetails',
                params: { id:post.id, post:post}
              }"
              v-for="(post, index) in paginated('getAllPosts')"
              :key="index"
            >
              <i class="fas fa-blog"></i>
              {{post.title}}
              <router-link
              class="read_more"
                :to="{name: 'BlogPostDetails',
                params: { id:post.id, post:post}
                }"
              >read more...</router-link>
            </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
            </paginate>


    <!-- pagination -->
        <div class="pagination text-center">
            <paginate-links for="getAllPosts" :async="true" :show-step-links="true" 
              class="page-links pagination ">
            </paginate-links>
        </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BlogPost", 
  data() {
    return {
      paginate: ["getAllPosts"],
    };
  },
  created() {
    this.$store.dispatch("loadAllPosts");
  },
  computed: {
    ...mapGetters(["getAllPosts"]),
  },
};
</script>

<style>
a.read_more {
  color: #42b983 !important;
}
a.list-group-item.list-group-item-action {
  color: #483737;
  text-decoration: none;
}
a:hover {
  color: #2e805b;
  text-decoration: underline;
}
ul{ 
  padding: inherit;
}
.pagination{
    margin: 0 auto ;
}
.pagination li a{
    color: #42b983 !important;
    margin-left: 10px;
    cursor: pointer ;
}
li.active a,  .pagination .left-arrow a, .pagination .right-arrow a{
  background: #42b983 !important;
  color: #fff !important;
  padding: 8px 12px;
  border-radius: 50%;
}

</style>