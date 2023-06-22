<template>
<div class="nav-bar">
  <router-link :to="{name:'Home'}">Home</router-link>
  <router-link :to="{name:'Create'}">Create</router-link>
</div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar a {
  color: #888;
  text-decoration: none;
  margin: 10px;
}
.nav-bar a.router-link-active {
  text-decoration: underline;
  color: #333;
}
</style>