<template>
<div class="post">
    <router-link :to="{name:'Detail', params:{id:post.id} }"><h2 class="yellow-ttl">{{post.title}}</h2></router-link>
    <p>{{cutPostBody}}</p>
    <div v-for="tag in post.tags" :key="tag" class="pill">
        <router-link :to="{name:'Tag',params:{tag:tag} }">{{tag}}</router-link>
    </div>
</div>
</template>

<script>
import { computed } from 'vue'
export default {
    props:['post'],
    setup(props){
        let cutPostBody=computed(()=>{
            return props.post.body.substring(0,100)+"...";
        })
        return {cutPostBody}
    }
}
</script>

<style>
.post {
    border-bottom: 1px solid #ddd;
}
.yellow-ttl {
    color: #888;
    background-color: #facd52;
    display: inline-block;
}
.pill {
    display: inline-block;
    padding: 8px;
    border-radius: 10px;
    margin: 8px;
    background: #ddd;
}
</style>