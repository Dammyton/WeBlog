import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    comments: [],
    singlepost: ""
  },
  getters: {
    // Get All Posts
    getAllPosts: (state) => {
      for (let i = 0; i < state.posts.length; i++) {
        return state.posts[i]
      }
    },
    // Get All Posts
    getPost: (state) => {
        return state.singlepost
    },
    // Get All Comments by id
    getComments: (state) => {
        return state.comments
    }
  },
  mutations: {
    ADD_ALLPOSTS(state, posts) {
      state.posts.push(posts)
    },
    ADD_POST(state, posts) {
      state.singlepost = posts
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments
    },
    addComment(state, e) {
      if (e.e == ''){
        return false
      }
      state.comments.push(e.e)
      console.log(state.comments,"c")
    },
  },
  actions: {
    // Load All Posts
    loadAllPosts({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then(posts => {
          commit('ADD_ALLPOSTS', posts)

        })
    },
    loadPost({ commit }, id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id.id}`)
        .then(response => response.data)
        .then(posts => {
          commit('ADD_POST', posts)

        })
    },
    // Load All Comments
    loadComments({ commit },id) {
      // let id = this.$route.params.id
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${id.id}`)
        .then((response) =>  {
          commit('SET_COMMENTS', response.data)

        })
    },
  },
  modules: {
  }
})
