<template>
  <div class="container mt-5 pt-4 mb-5">
    <b-card-group>
      <b-card no-body header="Latest Posts">
        <!-- All Posts -->
        <b-list-group flush>
            <b-list-group-item
              :to="{name: 'BlogPostDetails',
                params: { id:post.id, post:post}
              }"
              v-for="post in getAllPosts"
              :key="post.id"
            >
              <i class="fas fa-blog"></i>
              {{post.title}}
              <router-link
                :to="{name: 'BlogPostDetails',
                params: { id:post.id, post:post}
                }"
              >read more...</router-link>
            </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BlogPost",
  created() {
    this.$store.dispatch("loadAllPosts");
  },
  computed: {
    ...mapGetters(["getAllPosts"]),
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
a.list-group-item.list-group-item-action {
  color: #483737;
  text-decoration: none;
}
a:hover {
  color: #2e805b;
  text-decoration: underline;
}
</style>