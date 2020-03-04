<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        <a href="#" @click="add" v-if="user">Favorite</a>   I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: null
            }
        },
        mounted() {
            this.user = window.user;
        },
        methods: {
            add() {
                alert('post favorited')
            }
        }
    }
</script>
