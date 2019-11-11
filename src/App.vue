<template>
  <div id="app">

    <div class="site-wrap">
      <my-header></my-header>
      <router-view></router-view>
      <my-footer></my-footer>
    </div>

  </div>
</template>



<script>
import Header from './components/Header';
import Footer from './components/Footer';
  export default {

     components:{
         'my-header':Header,
         'my-footer':Footer
     },
     mounted () {
      window.scrollTo(0, 0)
    }
     
  }
</script>



<style>

 nav.site-navigation li a.router-link-active,
 nav.site-navigation li a.router-link-exact-active {
   color: #ee4266 !important;
   text-decoration: underline;
 }

</style>

