<template>
   <div class="order-list__item">
        <img v-if="item.img" :src="getImgUrl(item.img)" alt="Product image"> 
        <!--  v-else save its type (burger, juice) and get an icon here instead -->
        <div class="order-list__item__info">
            <h4 class="order-list__item__name">{{ item.name }}</h4>
            <p class="order-list__item__price">{{ calculateSameProductPrice(item) }}</p> 
        </div>
        <QuantityCounter 
            kind="dark"
            size="l"
            direction="down"
            :quantity="quantity" 
            @add="addToQuantity" 
            @subtract="removeFromQuantity" 
        />
        <!-- have to move to new component so it will have quantity switch functionality -->
    </div>
</template>

<script>
import QuantityCounter from '@/components/order/QuantityCounter.vue'

export default {
    name: "OrderListItem",
    components: {
        QuantityCounter
    },
    props: {
        item : { type: Object, default: () => {} },
        currentIndex : { type: Number, default: 0 }
    },
    data() {
        return {
            quantity: null
        }
    }, 
    methods: {
        calculateSameProductPrice(item) {
            let finalPrice = item.price * this.quantity
            return finalPrice.toFixed(2)  + ' €'
        },
        getImgUrl(pic) {
          return require('@/assets/images/products/food/' + pic)
        },
        addToQuantity() {
            // eslint-disable-next-line no-unused-vars
            this.quantity++
            const data = {
                quantity: this.quantity,
                index: this.currentIndex
            }
            this.$emit("quantityChange", data)
        },
        removeFromQuantity() {
            if(this.quantity > 0) {
                this.quantity--
                const data = {
                    quantity: this.quantity,
                    index: this.currentIndex
                }
                
                this.$emit("quantityChange", data)
            }
        },
    },
    created() {
        this.quantity = this.item.quantity
    }
}
</script> 

<style lang="scss">
    .order-list__item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .order-list__item__info {

                .order-list__item__name {
                    margin-bottom: 10px;
                }   
                .order-list__item__price {
                    font-size: 15px;

                }
            }
        }
</style>