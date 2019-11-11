<template>
   
   <div class="shop">

      <div class="site-blocks-cover inner-page" data-aos="fade">
         <div class="container">
            <div class="row">
               <div class="col-md-6 ml-auto order-md-2 align-self-start">
                  <div class="site-block-cover-content">
                  <h2 class="sub-title">#New Summer Collection 2019</h2>
                  <h1>Arrivals Sales</h1>
                  <p><a href="#" class="btn btn-black rounded-0">Shop Now</a></p>
                  </div>
               </div>
               <div class="col-md-6 order-1 align-self-end">
                  <img src="/template/images/model_4.png" alt="Image" class="img-fluid">
               </div>
            </div>
         </div>
      </div>

      <div class="custom-border-bottom py-3">
         <div class="container">
            <div class="row">
               <div class="col-md-12 mb-0">
                  <router-link to="/">Home</router-link> <span class="mx-2 mb-0">/</span> 
                  <strong class="text-black">Shop</strong>
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
                        <router-link class="dropdown-item" to="/shop/category/man">Men</router-link>
                        <router-link class="dropdown-item" to="/shop/category/girl">Women</router-link>
                        <router-link class="dropdown-item" to="/shop/category/shoes">Shoes</router-link>
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

               <div class="col-lg-6 col-md-6 item-entry mb-4"  v-for="source in dataItem" v-bind:key='source.ids'>
                  <router-link :to="{name: 'item', params: {id: source.id}}" class="product-item md-height bg-gray d-block">
                     <img :src="'/template/images/' +source.img" alt="Image" class="img-fluid">
                  </router-link>
                  <h2 class="item-title"><a href="#">{{source.itemName}}</a></h2>
                  <strong class="item-price">{{source.priceTag}}</strong>
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
                  <li class="mb-1"><router-link to="/shop/category/shoes" class="d-flex"><span>Shoes</span> <span class="text-black ml-auto">(2,124)</span></router-link></li>
               </ul>
               </div>

               <div class="border p-4 rounded mb-4">
               <div class="mb-4">
                  <h3 class="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                  <div id="slider-range" class="border-primary"></div>
                  <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white" disabled="" />
               </div>

               <div class="mb-4">
                  <h3 class="mb-3 h6 text-uppercase text-black d-block">Size</h3>
                  <label for="s_sm" class="d-flex">
                     <input type="checkbox" id="s_sm" class="mr-2 mt-1"> <span class="text-black">Small (2,319)</span>
                  </label>
                  <label for="s_md" class="d-flex">
                     <input type="checkbox" id="s_md" class="mr-2 mt-1"> <span class="text-black">Medium (1,282)</span>
                  </label>
                  <label for="s_lg" class="d-flex">
                     <input type="checkbox" id="s_lg" class="mr-2 mt-1"> <span class="text-black">Large (1,392)</span>
                  </label>
               </div>

               <div class="mb-4">
                  <h3 class="mb-3 h6 text-uppercase text-black d-block">Color</h3>
                  <a href="#" class="d-flex color-item align-items-center" >
                     <span class="bg-danger color d-inline-block rounded-circle mr-2"></span> <span class="text-black">Red (2,429)</span>
                  </a>
                  <a href="#" class="d-flex color-item align-items-center" >
                     <span class="bg-success color d-inline-block rounded-circle mr-2"></span> <span class="text-black">Green (2,298)</span>
                  </a>
                  <a href="#" class="d-flex color-item align-items-center" >
                     <span class="bg-info color d-inline-block rounded-circle mr-2"></span> <span class="text-black">Blue (1,075)</span>
                  </a>
                  <a href="#" class="d-flex color-item align-items-center" >
                     <span class="bg-primary color d-inline-block rounded-circle mr-2"></span> <span class="text-black">Purple (1,075)</span>
                  </a>
               </div>

               </div>
            </div>
         </div>

         </div>
      </div>

      <div class="site-section">
         <div class="container">
         <div class="title-section mb-5">
            <h2 class="text-uppercase"><span class="d-block">Discover</span> The Collections</h2>
         </div>
         <div class="row align-items-stretch">
            <div class="col-lg-8">
               <div class="product-item sm-height full-height bg-gray">
               <a href="#" class="product-category">Women <span>25 items</span></a>
               <img src="/template/images/model_4.png" alt="Image" class="img-fluid">
               </div>
            </div>
            <div class="col-lg-4">
               <div class="product-item sm-height bg-gray mb-4">
               <a href="#" class="product-category">Men <span>25 items</span></a>
               <img src="/template/images/model_5.png" alt="Image" class="img-fluid">
               </div>

               <div class="product-item sm-height bg-gray">
               <a href="#" class="product-category">Shoes <span>25 items</span></a>
               <img src="/template/images/model_6.png" alt="Image" class="img-fluid">
               </div>
            </div>
         </div>
         </div>
      </div>

   </div>

</template>


<script>
export default {

   name: 'sources',
   data () {
      return {
          heading: 'Popular Product',
          dataItem: [
            {id: '1', img: 'prod_2.png', itemName: 'Gray Shoe', priceTag: '$20.00', kategory: 'shoes'},
            {id: '2', img: 'prod_3.png', itemName: 'Blue Shoe High Heels', priceTag: '$46.00' , kategory: 'shoes'},
            {id: '3', img: 'model_5.png', itemName: 'Denim Jacket', priceTag: '$34.00', kategory: 'men'},
            {id: '4', img: 'prod_1.png', itemName: 'Leather Green Bag', priceTag: '$37.00', kategory: 'woman'},
            {id: '5', img: 'model_1.png', itemName: 'Smooth Cloth', priceTag: '$46.00', kategory: 'woman'},
            {id: '6', img: 'model_7.png', itemName: 'Yellow Jacket', priceTag: '$54.00', kategory: 'men'}
          ]
      }
   }

}

</script>