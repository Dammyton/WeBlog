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
          <h5>{{getPost.title}}</h5>
          <i class="fas fa-comments"></i>
          <span>
            <a class="comments" href="#comments"> {{getComments.length}} Comments</a>
          </span>
        </div>
      </div>
      <p class="mt-4">{{getPost.body}}</p>
    </div>

    <!-- Comments -->
    <div id="comments">
      <div class="container mb-5">
        <h4 class="pt-4">{{getComments.length}} Comments on "{{getPost.title}}"</h4>
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

    <!-- Add Comments -->
    <div class="container mb-5">
      <div class="row">
        <div class="col-md-3">

        </div>
        <div class="col-md-6">
          <h4>Add a new comment</h4>
          <div class="add_comment">
            <form action="">
              <input type="text" placeholder="Name" class="form-control mb-2" v-model="mycomment.name" required>
              <input type="email" name="email" class="form-control mb-2"  v-model="mycomment.email"  placeholder="Email" required>
              <textarea name="body" cols="30" class="form-control mb-2"  rows="5" v-model="mycomment.body"  placeholder="Add Comment" required></textarea>
              <button  @click="submitForm" class="btn-success">Add Comment</button>
            </form>
          </div>
        </div>
        <div class="col-md-3">

        </div>
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
  data (){
    return{
      mycomment:{
        name: '',
        email:  '',
        body: ''
      },
    }
  },
  props: ["post"],
  created() {
    this.$store.dispatch('loadPost', { id: this.$route.params.id});
    this.$store.dispatch("loadComments", { id: this.$route.params.id});
  },
  computed: {
    ...mapGetters([
      "getComments",
      "getPost"
    ]),
  },
  methods: {
    submitForm() {
      if(this.mycomment === '') {
        return false
      }
        this.$store.commit("addComment", {
          e: this.mycomment,
        });
        this.mycomment = "";
    },
  }
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
