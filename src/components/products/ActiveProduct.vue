<template>
  <div class="active-product">
    <div v-if="data.img" class="active-product__image-container">
        <img 
            class="active-product__image"
            :src="getImgUrl(data.img)" 
            alt="food image"
        >
    </div>
    <div class="active-product__text-container">
        <div class="active-product__text__head">
            <h4 class="active-product__name">{{ data.name }}</h4>
            <h4 class="active-product__price">{{ data.price + ' €'}}</h4>
        </div>
        <div class="active-product__text__body">
            <p class="active-product__description">{{data.description}}</p>
            <div class="hashtag__list">
                <p class="hashtag__item" v-for="(item, index) in data.ingredients" :key="index">#{{ item }}</p>
            </div>
        </div>
        <div class="warning-message__container">
            <transition name="fade-in" >
                <p v-if="notificationVisible" class="warning-message">{{ warningText }}</p>
            </transition>
        </div>
        <div class="active-product__buttons">
            <QuantityCounter 
                :quantity="quantity" 
                @add="addToQuantity" 
                @subtract="removeFromQuantity" 
            />
            <BaseButton 
                class="active-product__button"
                text="Add to order" 
                size="l"
                width="max-content"
                align="center"
                kind="black"
                type="link"
                font-weight="bold"
                @click="addToOrderCollection"
            />
        </div>
    </div>

  </div>
</template>

<script>
import { db } from '@/components/firebaseInit.js'
import QuantityCounter from '@/components/order/QuantityCounter.vue'

export default {
    name: "ActiveProduct",
    components: {
        QuantityCounter
    },
    props: {
        data: { type: Object, default: () => {} }
    },
    data() {
        return {
            quantity: 0,
            currentRestaurant: "SpaceBurgers",
            order: null,
            warningText: null,
            notificationVisible: false
        }
    },
    methods: {
        getImgUrl(pic) {
          return require('@/assets/images/products/food/' + pic)
        },
        addToQuantity() {
            this.quantity++
        },
        removeFromQuantity() {
            if(this.quantity > 0) {
                this.quantity--
            }
        },
        getOrder() {
            this.order = db.collection("order")
        },
        addToOrderCollection() {
            if(this.quantity) {
                this.order.doc(this.data.name).set({
                    name: this.data.name,
                    quantity: this.quantity,
                    price: parseFloat(this.data.price),
                    img: this.data.img || ""
                })
                console.log("it ran")
                this.$store.dispatch("countItems")
                this.$emit("close")
            } else {
                this.warningText = "Please select a quantity"
                this.notificationVisible = true
                document.querySelector(".quantity-container").style.border = "1px solid #DC8433"
            }
         }
    },
    created() {
        this.getOrder()
    }
}
</script>

<style lang="scss">
    .active-product {
        .active-product__image-container {
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
            .active-product__image {
                // width: 85%;
                max-height: 25vh;
                max-width: 100%;
            }
        }
        .active-product__text-container {
            .active-product__text__head {
                margin-bottom: 14px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .active-product__text__body {
                .active-product__description {

                }
                .hashtag__list {
                    margin-top: 10px;
                    display: flex;
                    gap: 5px;
                    .hashtag__item {
                        color: rgba($primary, 0.5);
                    }
                }
            }
        }
        .warning-message__container {
            min-height: 40px;
            margin: 1rem 0;
            .warning-message {
                color: $lightText;
                background: $warning;
                border-radius: $radius;
                padding: 0.6em 1em;
                font-size: 15px;
                letter-spacing: 1px;
            }
        }
        .active-product__buttons {
            display: flex;
            align-items: center;
            gap: 1rem;
            .active-product__button {
                flex: 1;
            }
        }
      
    }
</style>