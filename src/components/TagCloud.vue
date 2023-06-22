<template>
    <div class="tags-cloud">
        <h1>Tag Cloud</h1>
        <div v-for="tag in uniqueTag" :key="tag" class="tags">
            <router-link :to="{name:'Tag', params:{tag:tag} }">{{tag}}</router-link>
        </div>
    </div>
  
</template>

<script>
import { ref } from 'vue';
export default {
    props: ["posts"],
    setup(props){
        let tags=ref([])
        props.posts.forEach((post) => {
            // console.log(post)
            post.tags.forEach((tag)=>{
                // console.log(tag)
                tags.value.push(tag)
            })

        });
        let uniqueTag = tags.value.filter((tags,index,array)=>{
            return array.indexOf(tags)===index;
        })
        console.log(uniqueTag);
        return {uniqueTag}
    }
    

}
</script>

<style>
.tags-cloud a {
    color: #888;
    text-decoration: none;

}
.tags-cloud .tags {
    display: inline;
    margin-right: 20px;
}
.tags-cloud a.router-link-active {
    color: #333;
}
</style>