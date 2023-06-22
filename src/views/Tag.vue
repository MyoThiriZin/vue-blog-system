<template>
    <div class="home">
        <div v-if="error">{{error}}</div>
        <div v-if="posts.length" class="layout">
            <div>
                <PostsList :posts="filteredPost"></PostsList>
            </div>
            <div>
                <TagCloud :posts="posts"></TagCloud>
            </div>
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostsList from '../components/PostsList'
import {computed} from 'vue';
import getPosts from "../composable/getPosts"
export default {
  components: {
    TagCloud, PostsList },
    props:["tag"],
    setup(props){
        let {posts,error,load} =getPosts();
        load();
        let filteredPost=computed(()=>{
            return posts.value.filter((posts)=>{
                return posts.tags.includes(props.tag)
            })
        })
        return {posts,error,filteredPost}
    }
}
</script>

<style>

</style>