<template>
  <div class="drinks">
    <ProductSlider  :tabs="tabs" :data="drinksData" />
  </div>
</template>

<script>
import ProductSlider from '@/components/products/ProductSlider.vue'
import data  from '@/assets/data/restaurantName.json'

export default {
    components: {
		ProductSlider
    },
    data() {
        return {
            drinksData: data.drinks,
            tabs: [
                { tab: 'Cocktail', icon: "cocktail", data: data.drinks.cocktail},
                { tab: 'Beer', icon: "beer", data: data.drinks.beer},
                { tab: 'Wine', icon: "wine", data: data.drinks.wine},
                { tab: 'Hot Drinks', icon: "hot", data: data.drinks.hot},
                { tab: 'Juice', icon: "juice", data: data.drinks.juice},
                { tab: 'Other', icon: "other", data: data.drinks.other},
            ]
        }
    }
}
</script>