<template>
<div class="single">

  <div v-for="item in filteredData" v-bind:key="item.ids">
   <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><router-link to="/">Home</router-link> <span class="mx-2 mb-0">/</span> <router-link to="/shop">Shop</router-link> <span class="mx-2 mb-0">/</span> <strong class="text-black">{{item.itemName}}</strong></div>
        </div>
      </div>
    </div>  

    <div class="site-section">
      <div class="container">

            <div class="row">
               <div class="col-md-6">
                  <div class="item-entry">
                    <a href="#" class="product-item md-height bg-gray d-block">
                      <img v-bind:src="'/template/images/' +item.img" alt="Image" class="img-fluid">
                    </a>
                  </div>
               </div>

               <div class="col-md-6">
                  <h2 class="text-black">{{item.itemName}}</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.</p>
                  <p class="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
                  <p><strong class="text-primary h4">{{item.priceTag}}</strong></p>
                  <div class="mb-1 d-flex">
                  <label for="option-sm" class="d-flex mr-3 mb-3">
                     <span class="d-inline-block mr-2" style="top:-2px; position: relative;"><input type="radio" id="option-sm" name="shop-sizes"></span> <span class="d-inline-block text-black">Small</span>
                  </label>
                  <label for="option-md" class="d-flex mr-3 mb-3">
                     <span class="d-inline-block mr-2" style="top:-2px; position: relative;"><input type="radio" id="option-md" name="shop-sizes"></span> <span class="d-inline-block text-black">Medium</span>
                  </label>
                  <label for="option-lg" class="d-flex mr-3 mb-3">
                     <span class="d-inline-block mr-2" style="top:-2px; position: relative;"><input type="radio" id="option-lg" name="shop-sizes"></span> <span class="d-inline-block text-black">Large</span>
                  </label>
                  <label for="option-xl" class="d-flex mr-3 mb-3">
                     <span class="d-inline-block mr-2" style="top:-2px; position: relative;"><input type="radio" id="option-xl" name="shop-sizes"></span> <span class="d-inline-block text-black"> Extra Large</span>
                  </label>
                  </div>
                  <div class="mb-5">
                  <div class="input-group mb-3" style="max-width: 120px;">
                  <div class="input-group-prepend">
                     <button class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                  </div>
                  <input type="text" class="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                  <div class="input-group-append">
                     <button class="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
                  </div>
                  </div>

                  </div>
                  <p><a href="cart.html" class="buy-now btn btn-sm height-auto px-4 py-3 btn-primary">Add To Cart</a></p>

               </div>
          </div>
        </div>
    </div>
  </div>

</div>
</template>

<script>
export default {

   name: 'items',
    data() {
      return{
         router: this.$router.history.current.params.id,
         dataSource: [
            {id: '1', img: 'prod_2.png', itemName: 'Gray Shoe', priceTag: '$20.00'},
            {id: '2', img: 'prod_3.png', itemName: 'Blue Shoe High Heels', priceTag: '$46.00'},
            {id: '3', img: 'model_5.png', itemName: 'Denim Jacket', priceTag: '$34.00'},
            {id: '4', img: 'prod_1.png', itemName: 'Leather Green Bag', priceTag: '$37.00'},
            {id: '5', img: 'model_1.png', itemName: 'Smooth Cloth', priceTag: '$46.00'},
            {id: '6', img: 'model_7.png', itemName: 'Yellow Jacket', priceTag: '$54.00'}
          ]
      } //return
   }, //data
   computed: {
    filteredData: function(){
      return this.dataSource.filter((item) => {
         return item.id.match(this.router)
      });
    }
   }

} // export
</script>
