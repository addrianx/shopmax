<template>
   <div class="category">


    <div class="custom-border-bottom py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><router-link to="/">Home</router-link> <span class="mx-2 mb-0">/</span>       <strong class="text-black">Shop</strong>
          </div>
        </div>
      </div>
    </div>


    <div class="site-section">
      <div class="container">

        <div class="row mb-5">
          <div class="col-md-9 order-1">

            <div class="row align">
              <div class="col-md-12 mb-5">
                <div class="float-md-left"><h2 class="text-black h5">Shop All</h2></div>
                <div class="d-flex">
                  <div class="dropdown mr-1 ml-md-auto">
                    <button type="button" class="btn btn-white btn-sm dropdown-toggle px-4" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Latest
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                      <a class="dropdown-item" href="#">Men</a>
                      <a class="dropdown-item" href="#">Women</a>
                      <a class="dropdown-item" href="#">Children</a>
                    </div>
                  </div>
                  <div class="btn-group">
                    <button type="button" class="btn btn-white btn-sm dropdown-toggle px-4" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                      <a class="dropdown-item" href="#">Relevance</a>
                      <a class="dropdown-item" href="#">Name, A to Z</a>
                      <a class="dropdown-item" href="#">Name, Z to A</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Price, low to high</a>
                      <a class="dropdown-item" href="#">Price, high to low</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-5">

              <div class="col-lg-6 col-md-6 item-entry mb-4" v-for="category in filteredData" v-bind:key="category.ids">
                <a href="#" class="product-item md-height bg-gray d-block">
                  <img :src="'/template/images/' +category.img" alt="Image" class="img-fluid">
                </a>
                <h2 class="item-title"><a href="#">{{category.itemName}}</a></h2>
                <strong class="item-price">{{category.priceTag}}</strong>
              </div>

            </div>
            <div class="row">
              <div class="col-md-12 text-center">
                <div class="site-block-27">
                  <ul>
                    <li><a href="#">&lt;</a></li>
                    <li class="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 order-2 mb-5 mb-md-0">

            <div class="border p-4 rounded mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
              <ul class="list-unstyled mb-0">
                <li class="mb-1"><router-link to="/shop/category/man" class="d-flex"><span>Men</span> <span class="text-black ml-auto">(2,220)</span></router-link></li>
                <li class="mb-1"><router-link to="/shop/category/girl" class="d-flex"><span>Women</span> <span class="text-black ml-auto">(2,550)</span></router-link></li>
                <li class="mb-1"><router-link to="/shop/category/shoes" class="d-flex"><span>Children</span> <span class="text-black ml-auto">(2,124)</span></router-link></li>
              </ul>
            </div>

            </div>
          </div>
        </div>
      </div>

  </div>
</template>


<script>
import json from '../json/product.json'
export default {
    name: 'category',
    data() {
      return{
         category: this.$router.history.current.params.category,
         dataSource: json[0]
      } //return
   },
   methods: {
     fetchData (){
       this
     }
   }, //data
   computed: {
    filteredData: function(){
      return this.dataSource.filter((category) => {
         return category.category.match(this.category)
      });
    }
   }, //computed
   mounted () {
      window.scrollTo(0, 0)
    }
}
</script>
