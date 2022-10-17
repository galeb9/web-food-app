<template>
    <div class="products-list__container">
        <div class="products-list" v-if="data.length">
            <div 
                class="products-list__item-container"
                v-for="(item, index) in data"
                :key="index"
            >
                <ProductItem 
                    :data="item"
                    @click="$emit('openProductItem', item)"
                />
            </div>
        </div>
        <div v-else class="not-on-menu">
            <p>Not on the menu.</p>
        </div>
    </div>
</template>

<script>
import ProductItem from "./ProductItem.vue"
export default {
    name: "ProductList",
    components: {
        ProductItem
    },
    props: {
        data: { type: Array, default: () => [] }
    }

}
</script>

<style lang="scss">
    .products-list__container {
        .products-list {
            display: flex;
            flex-direction: column;
            gap: 24px;
            // height: 60vh;
            // background: red;
            // overflow-y: scroll;
        }
        .not-on-menu {
            height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        }
    }
</style>