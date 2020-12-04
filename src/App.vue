<template>
  <div id="app">

    <div class="container">
      <div class="row">
        <div class="col-12">
          <img alt="Vue logo" src="./assets/logo.png">
          <h1 class="mt-5 mb-4">Temas:  Programación e IoT</h1>
          <sg-card-list></sg-card-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
body {
  background: #efefef;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;

}
</style>
