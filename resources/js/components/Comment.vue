<template>
    <article class="bg-white py-3 px-4 rounded shadow-sm mb-6">
        <div  class="flex items-end mb-2">
            <div class="flex-1 text-gray-800 text-lg font-bold"> <span class="text-indigo-600 author">{{author}}</span> says</div>
            <time class="ml-auto text-sm text-muted">{{date}}</time>
        </div>
        <p class="text-gray-700">{{body}}</p>
        <div class="flex mt-4">
            <a href="#" class="text-blue-600 hover:text-blue-800 ml-auto" @click.prevent="showReplies = !showReplies">
                <span v-if="this.replies.length > 0">{{this.replies.length}}</span>
                {{replyText}}
        </a>
        </div>
        <div class="replies" v-if="showReplies">
                <div v-for="reply in replies">
                    {{reply.body}}
                </div>
        </div>
    </article>
</template>

<script>
    export default {
       name: 'Comment',
       props: ['body', 'author', 'date', 'replies'],
       data() {
        return {
              replyText: 'No replies',
              showReplies: false
        }
       },
       mounted() {
            this.replyText = this.replies.length > 0 ? this.replies.length == 1 ? 'one reply' : 'replies' : 'No replies'
       },
    }
</script>

