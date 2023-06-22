import { ref } from 'vue';
import {db,timestamp} from '../firebase/config'
let getPosts=()=>{
    let posts=ref([]);
      let error=ref("");

      let load=async()=>{
        try{
          // await new Promise((resolve,reject)=>{
          //   setTimeout(resolve,2000)
          // })
          // let response=await fetch('http://localhost:3000/posts')
          // if(response.status===404){
          //   throw new Error("Not found url");
          // }
          // let datas=await response.json();
          // posts.value=datas

          // fatch with firebase 
          let res = await db.collection("posts").orderBy("title","desc").get();
          posts.value = res.docs.map((doc)=>{
            return { id:doc.id, ...doc.data() }
          });

        }catch(err){
          error.value=err.message;
        }
      }
      return {posts,error,load};
}
export default getPosts;