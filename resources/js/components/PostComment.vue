<template>
    <section>
        <div class="loader-container flex justify-center">
          <bar-loader  class="custom-class" color="#5a67d8" :loading="loading" size="150" sizeUnit="px"></bar-loader>
        </div>
        <div v-if="!loading">
            <comment v-for="comment in comments"
            :key="comment.id"
            :author="comment.owner.name"
            :date="comment.created_at"
            :body="comment.body"
            :replies = "comment.replies"
            />
            <button type="button" @click="loadMore" v-if="nextPage">Load more comments....</button>
        </div>


        <hr class="py-2">
        <section>
          <h2 class="font-bold text-lg mb-2">New comment</h2>
          <form action="post">
            <textarea  cols="60" rows="4" class="w-full mb-1 p-4 outline-none" v-model="body"></textarea>
            <button type="button" @click="newComment" class="block border rounded bg-indigo-600 text-indigo-100 py-3 px-4 outline-none font-bold trakcing-wide">Add comment</button>
          </form>
        </section>
    </section>

</template>

<script>
    import Comment from './Comment.vue';
    import { BarLoader } from '@saeris/vue-spinners'
    import {mapActions, mapGetters} from 'vuex';

    export default {
       name: 'PostComment',
       props: ['url', 'postId'],
       components: {Comment, BarLoader},
        data() {
            return {
                nextPage: null,
                loading: false,
                body: ''
            };
        },
        computed: {
          ...mapGetters(['comments', 'errors'])
        },
        mounted() {

            this.fetchComments(this.url);

        },
        created() {
          this.loading = true;
        },
        methods: {
          ...mapActions(['fetchComments']),
          loadMore() {
                axios.get(this.nextPage)
               .then((resp) => {
                    console.log(resp)
                    this.comments = [...this.comments, ...resp.data.data]
                    this.nextPage = resp.data.next_page_url;
               })
               .catch((err) => {
                    console.log(err);
               });
          },
          newComment() {
            this.addComment({
              body: this.body,
              postId: this.postId
            })
          }
      },
      watch: {
        comments: function () {
          this.loading = false;
        }
      }

    }
</script>

<style>

</style>
