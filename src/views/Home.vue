<template>
    <div class="app">


    <div class="site-blocks-cover" data-aos="fade">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto order-md-2 align-self-start">
            <div class="site-block-cover-content">
            <h2 class="sub-title">2019 Summer Overing</h2>
            <h1>Arrivals Sales</h1>
            <p><router-link to="/shop" class="btn btn-black rounded-0">Shop Now</router-link></p>
            </div>
          </div>
          <div class="col-md-6 order-1 align-self-end">
            <img src="/template/images/model_3.png" alt="Image" class="img-fluid">
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

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="title-section mb-5 col-12">
            <h2 class="text-uppercase">{{heading}}</h2>
          </div>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6 item-entry mb-4" v-for="source in dataSource" v-bind:key='source.ids'>
            <router-link :to="{ name: 'item', params: {id: source.id } }" class="product-item md-height bg-gray d-block">
              <img v-bind:src="'/template/images/' + source.img" alt="Image" class="img-fluid">
            </router-link>
            <h2 class="item-title"><router-link :to="'/shop/item/' + source.id">{{source.itemName}}</router-link></h2>
            <strong class="item-price">{{source.priceTag}}</strong>
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
          dataSource: [
            {
              id: '1', img: 'prod_2.png', itemName: 'Gray Shoe', priceTag: '$20.00'
            },
            {
              id: '2', img: 'prod_3.png', itemName: 'Blue Shoe High Heels', priceTag: '$46.00'              
            },
            {
              id: '3', img: 'model_5.png', itemName: 'Denim Jacket', priceTag: '$34.00'              
            },
            {
              id: '4', img: 'prod_1.png', itemName: 'Leather Green Bag', priceTag: '$37.00'
            },
            {
              id: '5', img: 'model_1.png', itemName: 'Smooth Cloth', priceTag: '$46.00'
            },
            {
              id: '6', img: 'model_7.png', itemName: 'Yellow Jacket', priceTag: '$54.00'
            }
          ]
      }
   }

}

</script>



