<template>
  <div class="navigation">
    <router-link 
        class="navigation__link"
        v-for="(el, index) in links"
        :key="index"
        :to="'/' + el.link"
    >
        {{ el.name }}
    </router-link>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Navigation",
    data() {
        return {
            links: [
                { name: "Home", link : "home" },
                { name: "Bussines", link : "restaurants" },
                { name: "QR", link : "generate-qr" },
                { name: "Tables", link : "tables-list" }
                // { name: "Home", link : "home" },
            ]
        }
    }
}
</script>

<style lang="scss">
    .navigation {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        gap: 3px;
        max-width: 768px;
        .navigation__link {
            text-align: center;
            padding: 20px 10px;
            color: white;
            background: black;
            text-decoration: none;
            font-size: 15px;
            flex: 1;
            &:visited {
                text-decoration: none;
            }
        }
        
    }
</style>