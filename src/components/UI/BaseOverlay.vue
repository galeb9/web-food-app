<template>
    <div class="base-overlay" @click="$emit('close', false)"></div>
</template>

<script>
export default {
    name: "base-overlay",
}
</script>

<style lang="scss">
    .base-overlay {
		position: fixed;
		z-index: 2;
		top: 0;
		left: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		overflow-x: hidden;
		background: rgba(black, 0.6);
    }
</style>