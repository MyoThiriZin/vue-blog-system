<template>
  <div class="spinner">
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .spinner {
        width: 40px;
        height: 40px;
        border: 3px solid transparent;
        border-top-color: red;
        border-radius: 50%;
        margin: 30px auto;
        animation: spin 1s infinite;
    }
    @keyframes spin {
        to{transform: rotate(360deg);}
    }
</style>