<template>
  <div>
    <div class="container">
      <!-- breadcrumb -->
      <breadcrumb />
      
      <!-- Post Details -->
      <div class="row">
        <div class="col-sm-1 text-center">
          <i class="fas fa-3x fa-clipboard-check"></i>
        </div>
        <div class="col-sm-11">
          <h5>{{post.title}}</h5>
          <i class="fas fa-comments"></i>
          <span>
            <a class="comments" href="#comments"> {{getComments.length}} Comments</a>
          </span>
        </div>
      </div>
      <p class="mt-4">{{post.body}}</p>
    </div>

    <!-- Comments -->
    <div id="comments">
      <div class="container mb-5">
        <h4 class="pt-4">{{getComments.length}} Comments on "{{post.title}}"</h4>
        <b-card
          class="mb-2"
          bg-variant="success"
          text-variant="white"
          v-for="comment in getComments"
          :key="comment.id"
        >
          <div class="row">
            <div class="col-sm-1 text-center">
              <i class="fas fa-2x fa-user"></i>
            </div>
            <div class="col-sm-11">
              <h5>{{comment.name}}</h5>
              <span class="email">{{comment.email}}</span>
            </div>
            <p>{{comment.body}}</p>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import breadcrumb from "../components/breadcrumb";
import { mapGetters } from "vuex";

export default {
  name: "blogpost_details",
  components: {
    breadcrumb,
  },
  props: ["post"],
  created() {
    this.$store.dispatch("loadComments", { id: this.post.id });
  },
  computed: {
    ...mapGetters(["getComments"]),
  },
};
</script>

<style scoped>
.email {
  font-style: italic;
}
.col-sm-1,
.col-sm-11 {
  width: auto;
}
.col-sm-1.text-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
i.fas.fa-comments {
  color: #607d8b;
}
h5,
h4 {
  font-weight: 600;
}
a.comments {
  font-weight: 550;
  color: #42b983;
}
a.comments:hover {
  color: #2e805b;
  text-decoration: none;
}
.b-card {
  width: 100%;
}
</style>