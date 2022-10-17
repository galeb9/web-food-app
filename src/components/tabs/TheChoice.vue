<template>
<div class="tab-choice">
    <BaseHeader 
        @click-arrow="goToWelcome" 
        @click-cart="gotToOrderList"
    />
    <div class="tabs">
        <div 
            v-for="(item, index) in data" 
            :key="index"
            :class="['tabs__item', { active: currentTab === item.tab }]"
            @click="changeTab(item.tab)"
        >
            {{ item.text }}
        </div>
    </div>

    <transition name="fade-in" mode="out-in">
        <component class="active-tab" :is="currentTab"></component>
    </transition>
</div>

</template>

<script>
import TheFood from '@/components/tabs/TheFood.vue'
import TheDrinks from '@/components/tabs/TheDrinks.vue'

export default {
  components: {
    TheFood,
    TheDrinks
  },
  data(){
    return{
		currentTab: 'TheFood',
        data: [
            { tab: 'TheFood', text: "Food"},
            { tab: 'TheDrinks', text: "Drinks"},
        ]
    }
  },
  computed: {

  },
  methods: {
    changeTab(tabName) {
        this.currentTab = tabName
    },
    goToWelcome() {
       this.$router.push('/welcome')
    },
    gotToOrderList() {
        this.$router.push('/order-list')
    }
  }
}
</script>

<style lang="scss">
    .tab-choice {
        // border: 1px solid black;
        display: flex;
        flex-direction: column;
        .tabs {
            z-index: 2;
            transform: translateY(-54px);
            align-self: center;
            display: flex;
            align-items: center;
            background: $secondary;
            width: max-content;
            padding: 6px;
            border-radius: $radius;
            .tabs__item {
                font-size: 20px;
                padding: 10px 18px;
            }
            .active{
                background: black;
                color: white;
                border-radius: $radius;
            }
        }
        .active-tab {
            min-height: 80vh;
            margin-top: -20px;
        }
    }
</style>