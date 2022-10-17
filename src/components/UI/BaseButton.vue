<template>
<div :class="['base-button__container', align]">
    <!-- router link -->
    <router-link 
        v-if="type === 'link'" 
        :to="linkPath"
        :class="['base-button', size, kind, fontWeight]"
        :style="{ width : width }"
        @click="$emit('click-btn')"
    >
        {{ text }}
    </router-link>

    <!-- normal/external link -->
    <a 
        v-else-if="type === 'external'" 
        :href="linkPath"
        :class="['base-button', size, kind, fontWeight]"
        :style="{ width : width }"
        @click="$emit('click-btn')"
    >
        {{ text }}
    </a>
    
    <!-- classic btn (default) -->
    <button 
        v-else
        :class="['base-button', size, kind, fontWeight]"
        :style="{ width : width }"
        @click="$emit('click-btn')"
    >
        {{ text }}
    </button>
</div>

</template>

<script>
export default {
    name: "BaseButton",
    props: {
        text: { type: String, default: "text" },
        size: { type: String, default: "m" },
        kind: { type: String, default: "white" },
        type: { type: String, default: "" },
        align: { type: String, default: "" }, 
        width: { type: String, default: "100%" },
        fontWeight: { type: String, default: "" },
        linkPath: { type: String, default: "" },
    }
}
</script>

<style lang="scss">
    .base-button { // basic btn
        border: none;
        padding: 0.8em 1.6em;
        border-radius: $radius;
        max-width: 300px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
    }

    // sizes
    .s { font-size: 14px}
    .m { font-size: 16px}
    .l { font-size: 18px}
    .xl {font-size: 20px;}
    // kinds of btns
    .black {
        background: black;
        color: white;
    }
    .white {
        background: white;
        color: black
    }
    // aligment
    .center {
        // margin: 0 auto;
        display: flex;
        justify-content: center;
    }
    // font weight
    .bold {
        font-weight: 700;
    }
    .extra-bold {
        font-weight: 900;
    }
</style>