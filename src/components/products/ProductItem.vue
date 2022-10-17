<template>
  <div class="product-item">
    <div class="product-item__head">
        <h4>{{ data.name }}</h4>
        <h5 class="product-item__head__price">{{ data.price }} €</h5>
    </div>
    <div class="product-item__body">
        <p>{{ data.description }}</p>
        <div class="alergies__list">
            <p 
                class="alergies__item"
                v-for="(item, index) in data.ingredients"
                :key="index"
            >
                #{{ item }}
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, default: () => {} }
    }
}
</script>

<style lang="scss">
    .product-item {
        max-width: 100%;
        border-radius: $radius;
        background: $secondary;
        .product-item__head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            padding: 20px 30px 15px;
            border-bottom: 4px solid $bg;
            .product-item__head__price {
                width: max-content;
                min-width: 30px;
            }
        }
        .product-item__body {
            padding: 18px 30px 20px;
            .alergies__list {
                margin-top: 10px;
                display: flex;
                gap: 5px;
                .alergies__item {
                    color: rgba($primary, 0.5);
                }
            }
        }
    }
</style>