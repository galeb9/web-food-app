<template>
    <div :class="['quantity-container', 'active-product__button', direction, size, kind ]">
        <div @click="$emit('subtract')" class="quantity__subtract">-</div>
        <div class="quantity__num">{{ quantity }}</div>
        <div @click="$emit('add')" class="quantity__add">+</div>
    </div>
</template>

<script>
export default {
    name: "QuantityCounter",
    props: {
        direction: { type: String, default: "normal"},
        size: { type: String, default: "l"},
        quantity: { type: Number, default: 0},
        kind : { type: String, default: "light"},
    },
}
</script>

<style lang="scss">
    .quantity-container {
        display: flex;
        padding: 0.5rem;
        border-radius: $radius;
        transition: all 0.3s ease-in;
    }
    // direction
    .normal {
        // font-size: 30px;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        .quantity__subtract {
            transform: translateY(-2px) scale(1.3);
        }
        .quantity__num {
            font-size: 26px;
            transform: translateX(3.5px);
        }
        .quantity__add {

        }
    }
    .down {
        // font-size: 20px;
        flex-direction: column-reverse;
        align-items: center;
    }
    // font sizes
    .s { font-size: 16px }
    .m { font-size: 20px }
    .l { font-size: 30px }
    // type 
    .light {
        background: $secondary;
        border: 1px solid $secondary;
    }
    .dark {
        .quantity__subtract,
        .quantity__add {
            font-size: 1.2em;
            // border: 1px solid black;
            min-width: 30px;
            text-align: center;
        }
        .quantity__num {
            background: $primary;
            padding: 8px;
            min-width: 30px;
            text-align: center;
            border-radius: $radius;
            color: $lightText;
        }
    }
</style>