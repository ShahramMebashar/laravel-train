import axios from 'axios';

const state = {
    comments: null,
    errors: null
};
const getters = {
    comments(state) {
        return state.comments;
    },
    loading(state) {
        return state.loading;
    },
    errors(state) {
        return state.errors;
    }
};
const mutations = {
    setLoading(state) {
       state.loading = !state.loading
    },
    setErrors(state, errors) {
            state.errors = errors;
    },
    setComments(state, comments) {
        state.comments = comments;
    },
    addComment(state, comment) {
        state.comments = [comment, ...state.comments];
    }
};
const actions = {
    fetchComments({commit}, url) {
        axios.get(url)
        .then(({data: response}) => {
            setTimeout(()=> {
                commit('setComments', response.data);
            }, 3000)
        })
        .catch(({response}) => {
            commit('setErrors', response.data.errors);
        })
    },

   addComment({commit}, {postId, body}) {
        axios.post("/posts/" + postId + "/comments", {
                body
              })
              .then( (resp) => {
               commit('addComment', resp.data)
              })
              .catch((error)=> {
                const err = error.response.data.errors;
                for(let prop in err) {
                  console.log(prop)
                }
              });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
