<template>
  <div class="order-success">
    <div class="order-success__main">
        <div class="order-success__info">
            <font-awesome-icon class="order-success__icon-check" :icon="['fa', 'circle-check']"/>
            <p>Order successfully placed</p>
        </div>
    </div>
    <BaseButton 
        text="iOrder App" 
        size="l"
        align="center"
        kind="black"
        font-weight="bold"
        width="100%"
        @click-btn="goToApp"
    />
  </div>
</template>

<script>
export default {
    name: "OrderSuccess",
    data() {
        return {

        }
    },
    methods: {
        goToApp() {
            setTimeout(() => {
                location.reload();
            }, 0);
            this.$router.push('/welcome')
        }
    }
}
</script>

<style lang="scss">
    .order-success {
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .order-success__main {
            min-height: 80vh;
            padding-bottom: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            .order-success__info {
                text-align: center;
                .order-success__icon-check {
                    font-size: 70px;
                    margin-bottom: 20px;
                    color: $success
                }
            }
        }
    }
</style>