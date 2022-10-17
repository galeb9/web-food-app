<template>
		<div class="base-drawer">
			<div class="top-bar" @click="$emit('topBarClose', false)"></div>
			<div class="base-drawer__head">
				<h3 class="base-drawer__head__title">{{ title }}</h3>
			</div>
			<div class="base-drawer__body">
				<!-- <button @click="$emit('clickBtn', false)">close</button> -->
				<slot></slot>
			</div>
		</div>
</template>

<script>
export default {
	name: "BaseDrawer",
	props: {
		title: { type: String, default: ""}
	}	
}
</script>

<style lang="scss">
	.base-drawer {
		max-width: 768px;
		z-index: 100;
		position: fixed;
		bottom: 0vh;
		left: 0;
		right: 0;
		width: 100vw;
		height: max-content;
		box-shadow: $shadow;
		border-radius: 35px 35px 0 0;
		background: $bg;
		overflow-x: hidden;
        padding:  20px 30px;
		// transform: translateX(-20px);
		.top-bar {
            width: 90px;
            height: 6px;
            margin: 0 auto 40px;
            background: $primary;
            border-radius: $radius;
        }
	}
</style>