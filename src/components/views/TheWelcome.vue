<template>
  <div class="welcome bg__img">
    <div class="welcome__text">
        <h2>Welcome to</h2>
        <h1 class="welcome__main-title">{{ currentRestaurant }}</h1>
    </div>

    <div class="welcome__btns">
      <BaseButton 
        text="order food" 
        size="xl"
        align="center"
        width="80%"
        font-weight="bold"
        @click="goToApp"
      />
    </div>
    <div class="bg__gradient">
    </div>
  </div>
</template>

<script>
export default {
    name: "TheWelcome",
    data() {
        return {
            name: "Space Burgers",
            currentRestaurant: "test-restaurant"
        }
    },
	methods: {
		goToApp () {
			this.$router.push('order')
		}
	}
}
</script>

<style lang="scss">
  .welcome {
    color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
    .welcome__text {
      // border: 1px solid white;
      text-align: center;
      padding: 2rem 1rem 1rem;
      .welcome__main-title {
        margin: 0px 0 15px;
      }
      .welcome__table-text {
        border: 1px solid white;
        width: max-content;
        margin: 0 auto;
        padding: 1rem;
        border-radius: $radius;
      }
    }
    .welcome__btns {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-bottom: 62px;
    }
  }
  .bg__img {
    position: fixed;
    top: 0;
    right: 0;
    background: no-repeat center url("@/assets/images/restaurant-bg/test.png") ;
    width: 100%;
    height: 100vh;
    z-index: 0;
    .bg__gradient {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: -1;
		background: linear-gradient(359.41deg, #050603 -29.46%, rgba(90, 83, 83, 0) -29.45%, rgba(62, 57, 57, 0.31764) 11.63%, #000000 99.86%);
		// background: linear-gradient(166.34deg, #000000 5.73%, rgba(0, 0, 0, 0) 96.68%);
    }
  }

</style>