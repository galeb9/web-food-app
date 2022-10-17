<template>
  <div class="food">
	<ProductSlider  :tabs="tabs" :data="foodData" />
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
            foodData: data.food,
			tabs: [
                { tab: 'Burger', icon: "burger", data: data.food.burgers},
                { tab: 'Pizza', icon: "pizza", data: data.food.pizza},
                { tab: 'Fish', icon: "fish", data: data.food.fish},
                { tab: 'Chicken', icon: "chicken", data: data.food.chicken},
                { tab: 'Beef', icon: "beef", data: data.food.beef},
                { tab: 'Vegeterian', icon: "vegetables", data: data.food.vegetables},
                { tab: 'Dessert', icon: "dessert", data: data.food.dessert},
            ]
        }
    }
}
</script>

<style>

</style>