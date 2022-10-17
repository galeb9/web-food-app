<template>
    <div class="order-list__container">
        <BaseHeader @click-arrow="goToOrderApp" secondIcon="text" text="Your order list" />
        <transition name="fade-in">
            <div v-if="notification" class="order-notification">
                <p class="">{{ notification }}</p>
                <font-awesome-icon @click="notification = null" class="" :icon="['fa', 'xmark']"/>
            </div>
        </transition>
        <div class="order-list">
            <OrderListItem 
                v-for="(item, index) in list"
                :key="index"
                :item="item"
                :current-index="index"
                @quantityChange="changeQuantity"
            />
        </div>
        <div class="payment-method__container">
            <p class="payment-method__title">Payment method</p>
            <div class="payment-method__list">
                <div class="payment-method__list-item"></div>
                <div class="payment-method__list-item"></div>
            </div>
            <div class="payment-method__add-card">
                <div class="payment-method__add-card__head">
                    <BaseSvg icon="add-card" />
                </div>
                <div class="payment-method__add-card__tail">
                    <BaseSvg icon="add-plus" @click="openAddCreditCard" />
                </div>
            </div>
            <div class="payment-method__cards-list">
                <div 
                    v-for="(item, index) in creditCards"
                    :key="index"
                    :class="['payment-method__card__item', { 'this-card--active' : choosenCardIndex === index }]"
                    @click="chooseThisCard(item, index)"
                >
                    <div class="payment-method__card__item__main">
                        <font-awesome-icon class="payment-method__card__item__icon" :icon="['fa', 'credit-card']"/>
                        <p>Card ending in <b>{{ item.last4digits }}</b></p>
                    </div>
                    <font-awesome-icon v-if="choosenCardIndex === index" class="payment-method__card__item__icon" :icon="['fa', 'circle-check']"/>
                </div>
            </div>
        </div>

        <div class="delivery-location__container">
            <BaseInput 
                class="delivery-location__location"
                v-model="location" 
                placeholder="Street name & number"
                label="Address for delivery"
                type="text"
            />
        </div>

        <transition name="move-from-bottom">
            <BaseDrawer v-if="isOpen">
                <AddCreditCard @close="closeAddCreditCard" @creditCardData="addToCards" />
            </BaseDrawer>
        </transition>
        <transition name="fade-in">
            <BaseOverlay v-if="isOpen" @close="closeAddCreditCard" />
        </transition>

        <div class="order-list__total__container">
            <div class="order-list__total">
                <h2 class="order-list__text">Total</h2>
                <h3 class="order-list__sum">{{ bill.toFixed(2) + ' €' }} </h3>
            </div>
            <BaseButton 
                text=" Place order & pay " 
                size="l"
                align="center"
                kind="black"
                font-weight="bold"
                width="100%"
                @click="placeOrder"
            />
        </div>
    </div>
</template>

<script>
import { db } from '@/components/firebaseInit.js'
import OrderListItem from '@/components/order/OrderListItem.vue'
import AddCreditCard from '@/components/order/AddCreditCard.vue'

export default {
    name:"OrderList",
    components: {
        OrderListItem,
        AddCreditCard
    },
    data() {
        return {
            order: null,
            round: null,
            list: [],
            currentRestaurant: "SpaceBurgers",
            quantity: 0, 
            bill: 0,
            isOpen: false,
            creditCards: [],
            choosenCardIndex: 0,
            location: null,
            notification: null
        }
    },
    computed: {
        currentOrderItemsCount() {
            return this.$store.getters.currentOrderItemsCount
        }
    },
    methods: {
        chooseThisCard (card, index) {
            this.choosenCardIndex = index
            console.log("choosen card is: ", card)
        },
        addToCards(creditCard) {
            this.creditCards.unshift(creditCard)
        },
        openAddCreditCard() {
            this.isOpen = true
        },
        closeAddCreditCard() {
            this.isOpen = false
        },
        changeQuantity (data) {
            this.list[data.index].quantity = data.quantity
            this.calculateBill()
        },
        getImgUrl(pic) {
          return require('@/assets/images/products/food/' + pic)
        },
        goToOrderApp() {
            this.$router.push('/order')
        },
        getOrder() {
            this.order = db.collection("order")
        },
        getOrderList() {
            this.order.get()
                .then(snapshot => {
                    snapshot.forEach((doc) => {
                        this.list.push({
                            name: doc.data().name,
                            price: doc.data().price,
                            quantity: doc.data().quantity,
                        })
                    })
                    this.calculateBill()
                })

        },
        calculateBill () {
            this.bill = 0
            for(let i = 0; i < this.list.length; i++) {
                let result = this.list[i].price * this.list[i].quantity 
                this.bill += result
            }
        },
        payBill() {
            console.log("Bill paid! (dummmy)")
        },
        deleteOrderList() {
            this.list.forEach(item => {
                this.order.doc(item.name).delete()
            })
        },

        placeOrder() {
            console.log(this.list)
            this.notification = null;
            if(this.creditCards[0] && this.list.length && this.location ) {
                this.payBill()
                this.deleteOrderList()
                this.$router.push('/order-success')
            } else {
                const noList = "Please select some food or drinks."
                const noCard = "Please add your credit card"
                const noLocation ="Please add your address for delivery!"

                this.notification = this.list.length === 0 ? noList : 
                    (this.creditCards.length === 0 ? noCard : noLocation)
            }
        }
    },
    created() {
        this.getOrder()
        this.getOrderList()
        if(this.creditCards[0]) {
            this.creditCard(this.creditCards[0])
        }
    }
}
</script>

<style lang="scss">
.order-list__container {
    height: calc(100vh - 150px);
    overflow-y: scroll;
    .order-notification {
        background: #DC8433;
        color: $lightText;
        padding: 16px;
        border-radius: $radius;
        position: absolute;
        top: 20px;
        left: 10px;
        right: 10px;
        font-size: 14px;
        z-index: 100;

        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    .order-list {
        margin: 30px 0 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .payment-method__container {
        padding-bottom: 12px;
        .payment-method__title {
            font-size: 14px;
            border-bottom: 1px solid rgba(black, 0.4);
            padding: 4px;
        }
        .payment-method__add-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0 15px;
        }
    }
    .payment-method__cards-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 10px 0;
        .payment-method__card__item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .payment-method__card__item__main {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .payment-method__card__item__icon {
                font-size: 20px;
            }
        }
        .this-card--active {
            .payment-method__card__item__icon {
                transition: all 0.2s ease ;
                color: $success;
                display: block;
            }
        }
    }
    .delivery-location__container {
        padding-bottom: 30px;
    }
    .order-list__total__container {
        max-width: 768px;
        margin: 0 auto;
        max-height: 160px;
        position: fixed;
        z-index: 4;
        bottom: 0vh;
        left: 0;
        right: 0;
        background: linear-gradient(to top, $bg 90%, rgba($bg, 0.0));
        padding: 20px 20px 25px;
        .order-list__total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 2px dashed rgba($primary, 0.7);
            padding-top: 20px;
            margin-bottom: 20px;
        }
    }


}
 
</style>