<template>
	<div class="base-header">
		<img 
			@click="$emit('clickArrow')" 
			class="base-header__item" src="@/assets/images/icons/arrow-back.svg" 
			alt="arrow back image"
		>
		<div v-if="secondIcon === 'cart'" class="cart-item__container">
			<img 
				@click="$emit('clickCart')" 
				class="base-header__item" 
				src="@/assets/images/icons/cart.svg" 
				alt=""
			>
			<div v-if="currentOrderItemsCount > 0 " class="cart-item__count">{{ currentOrderItemsCount }}</div>
		</div>

		<h4 
			v-if="secondIcon === 'text'"
			class="base-header__text">{{ text }}</h4>
	</div>
</template>

<script>

export default {
  name: "BaseHeader",
  props: {
	secondIcon: { type: String, default: "cart" },
	text: { type: String, default: "Some text" },
	itemCount: { type: Number, default: 3 }
  },
  computed: {
	currentOrderItemsCount() {
		return this.$store.getters.currentOrderItemsCount
	}
  }
}
</script>

<style lang="scss">
.base-header {
	position: relative;
	z-index: 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.base-header__item {
		// border: 1px solid;
		padding: 10px;
		&:hover {
			// border: 3px solid $primary;
		}
		&:nth-child(1) { 
			padding-left: 0;
			width: 40px;
		}
		&:nth-child(2) { 
			padding-right: 0;
			width: 38px;
		}
		@media only screen and (max-width: 330px) {
			&:nth-child(1) { 
				padding-left: 0;
				width: 37px;
				transform: translateY(-8px);
			}
			&:nth-child(2) { 
				padding-right: 0;
				width: 30px;
				transform: translateY(-8px);
			}
		}
	}
	.cart-item__container {
		position: relative;
		.cart-item__count {
			z-index: 100;
			position: absolute;
            top: -0.55em;
            left: 0.7em;
			width: 1.5em;
			height: 1.5em;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 2px;
			background: $warning;
			font-size: 12px;
			color: white;
		}
	}
}

</style>