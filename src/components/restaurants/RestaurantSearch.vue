<template>
    <div class="restaurant__container">

      <div class="restaurant-search">
        <input class="restaurant-search__input" type="text" v-model="search">
        <button class="restaurant-search__button" @click="getRestaurant(search)" >
          <font-awesome-icon class="loupe-icon" :icon="['fa', 'magnifying-glass']"/>
        </button>
      </div>

      <div class="restaurant-card">
        <h2 class="restaurant-card__name">{{ name }} <span v-if="location"> ({{ location }})</span></h2>
        <p class="restaurant-card__description">{{ desc }}</p>
      </div>
      
    </div>
</template>

<script>
import { db } from '@/components/firebaseInit.js'

export default {
    
  data() {
    return {
      search: "SpaceBurgers",
      name: null,
      location: null,
      desc: null
    }
  },
  methods: {
    getRestaurant(name) {
      db.collection("restaurants")
        .doc(name)
        .get()
        .then(item => {
          this.name = item.data().name
          this.desc = item.data().description
          this.location = item.data().location
          console.log(item.data().name)
        })
    }
  },
}
</script>

<style lang="scss">
.restaurant__container {
  .restaurant-search {
    display: flex;
    justify-content: space-between;
    background: white;
    border-radius: $radius;
    .restaurant-search__input {
      border: none;
      background: transparent;
      padding: 10px 15px;

    }
    .restaurant-search__button {
      border: none;
      background: transparent;
      border-left: 1px solid rgba(black, 0.2);
      padding: 0.5rem 1rem;
      .loupe-icon {
        font-size: 20px;
      }
    }
  }
}
</style>