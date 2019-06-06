<template>
  <div id="app">
    <note-handler/>
    <header>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Deutsche_Bahn_AG-Logo.svg/1200px-Deutsche_Bahn_AG-Logo.svg.png"/>
      <h1>Deutsche Bahn Anlagen Information</h1>
    </header>
    <router-view/>
  </div>
</template>

<script>
  import NoteHandler from "@/components/noteHandler";

  export default {
    components: {NoteHandler}
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800,900');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  html {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #272d33;
    font-size: 14px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background-color: #fff;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  input{
    outline: none;
  }

  ul{
    width: 100%;
    list-style: none;
    padding:25px;

    li{
      margin: auto;
      margin-bottom: 4px;
      width: 50%;
    }
  }

  .round-box{
    padding: 16px;
    border-radius: 10px;
  }

  header{
    padding: 43px;

    img{
      width: 20%;
      display: block;
      margin: auto;
    }
    h1{
      margin-top: 25px;
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    ul{
      li{
        width: 100%;
      }
    }
  }

</style>