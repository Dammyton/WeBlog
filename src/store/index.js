import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    comments: []
  },
  getters: {
    // Get All Posts
    getAllPosts: (state) => {
      for (let i = 0; i < state.posts.length; i++) {
        return state.posts[i]
      }
    },
    // Get All Comments by id
    getComments: (state) => {
      for (let i = 0; i < state.comments.length; i++) {
        return state.comments[i]
      }
    }
  },
  mutations: {
    ADD_ALLPOSTS(state, posts) {
      state.posts.push(posts)
    },
    SET_COMMENTS(state, comments) {
      state.comments.push(comments)
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
    // Load All Comments
    loadComments({ commit },id) {
      // let id = this.$route.params.id
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${id.id}`)
        .then((response) =>  {
          commit('SET_COMMENTS', response.data)

        })
    }
  },
  modules: {
  }
})
