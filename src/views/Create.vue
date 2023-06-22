<template>
  <h1>Create</h1>
  <form @submit.prevent="addPost">
    <label class="yellow-ttl">Post Title</label>
    <input type="text" required v-model="title">

    <label class="yellow-ttl">Body</label>
    <textarea required v-model="body"></textarea>

    <label class="yellow-ttl">Tag(hit enter to add post)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown">
    {{tags}}

    <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {db,timestamp} from '../firebase/config'

export default {
  setup(){
    let router=useRouter();

    let title=ref("");
    let body=ref("");
    let tag=ref("");
    let tags=ref([]);

    let handleKeyDown=()=>{
      if(!tags.value.includes(tag.value)){
        tags.value.push(tag.value)
      }
      tag.value="";
    }

    let addPost=async()=>{
      // await fetch('http://localhost:3000/posts',{
      //   method:"POST",
      //   headers:{
      //     "Content-type":"application/json"
      //   },
      //   body:JSON.stringify({
      //     title:title.value,
      //     body:body.value,
      //     tags:tags.value
      //   })
      // })

      // using firebase 
      let newPost= {
          title:title.value,
          body:body.value,
          tags:tags.value,
          created_at: timestamp(),
        }
      await db.collection("posts").add(newPost);

      router.push("/");
    }

    return {title,body,tag,handleKeyDown,tags,addPost}
  }
}
</script>

<style>
  form {
    width: 50%;
    margin: 0 auto;
  }
  label {
    display: block;
  }
  input,textarea {
    width: 100%;
    padding: 10px 5px;
    margin-bottom: 20px;
  }
  button {
    display: block;
    margin-left: auto;
  }
</style>