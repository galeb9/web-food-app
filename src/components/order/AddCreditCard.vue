<template>
  <div class="add-credit-card__container">
    <div class="add-credit-card__main">
        <BaseInput 
            v-model="cardNumber" 
            placeholder="xxxx xxxx xxxx xxxx"
            label="CARD NUMBER"
            type="number"
            class="add-credit-card__main__item"
        />
        <BaseInput 
            v-model="nameOnCard" 
            label="NAME ON CARD"
            class="add-credit-card__main__item"
        />
        <BaseInput 
            v-model="expiryDate" 
            label="EXPIRY DATE"
            type="text"
            class="add-credit-card__main__item"
        />
        <BaseInput 
            class="add-credit-card__main__item"
            v-model="cvvCode" 
            placeholder="xxx"
            label="CVV/CVC"
            type="number"
        />
    </div>
    <div class="add-credit-card__main">
        <BaseButton 
            text="Add credit card" 
            size="l"
            align="center"
            kind="black"
            font-weight="bold"
            width="100%"
            @click="sendCreditCard"
        />
        <BaseButton 
            text="Cancel" 
            size="l"
            align="center"
            kind="black"
            font-weight="bold"
            width="100%"
            @click="$emit('close')"
        />
    </div>
  </div>
</template>

<script>
export default {
    name: "AddCreditCard",
    data() {
        return {
            // cardNumber: null,
            cardNumber: "1234567891012131",
            // nameOnCard: null,
            nameOnCard: "JANEZ NOVAK",
            // expiryDate: null,
            expiryDate: "11/25",
            // cvvCode: null
            cvvCode: "123"
        }
    },
    watch: {
        expiryDate() {
            if(this.expiryDate.length == 2) {
                this.expiryDate += '/'
            }
        }
    },
    // must make a safety thingy for what input count for all
    methods: {
        getLast4Digits(num) {
            return num.slice(num.length - 4)
        },
        sendCreditCard() {
            let data = {
                cardNumber: this.cardNumber,
                nameOnCard: this.nameOnCard,
                expiryDate: this.expiryDate,
                cvvCode: this.cvvCode,
                last4digits: this.getLast4Digits(this.cardNumber) 
            }
            this.$emit("creditCardData", data)
            this.$emit("close")
        }
    }, 
    created() {
        this.getLast4Digits("12345678910")
    }
}
</script>

<style lang="scss">
    .add-credit-card__container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        max-height: 100vh;
        .add-credit-card__main {
            display: flex;
            flex-direction: column;
            gap: 15px;
            max-height: 50vh;
            height: 100%;
            overflow-y: scroll;
            .add-credit-card__main__item {
                flex: 1;
                width: 100%;
                max-width: 768px;
            }
            // .add-credit-card__other {
            //     display: flex;
            //     align-items: center;
            //     justify-content: space-between;
            //     flex-wrap: wrap;
            //     gap: 20px;
            //     .add-credit-card__other__item {
            //         flex: 1;
            //     }
            // }
        }
    }

</style>