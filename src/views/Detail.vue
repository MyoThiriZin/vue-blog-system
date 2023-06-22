<template>
  <h1>Detail{{id}}</h1>
  <div v-if="post">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
  <div>
    <button @click="deletePost">Delete</button>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import Spinner from '../components/Spinner'
import getPost from '../composable/getPost'
import {db} from '../firebase/config'
export default {
  components: { Spinner },
    props: ['id'],
    setup(props){
        let route=useRoute();
        let router=useRouter();
        let {post,error,load} = getPost(route.params.id);
        //or 
        //let {post,error,load} = getPost(props.id); 
        load();

        //delete in firebase
        let deletePost= async()=> {
          let id=props.id;
          await db.collection("posts").doc(id).delete();
          router.push('/');
        }
       
        return {post,error,deletePost};
    }
}
</script>

<style>

</style>