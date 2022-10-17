<template>
    <div :class="['base-heading', 'base-heading__text-' + align]">
      <component :class="['base-heading__component', {'base-heading__border': border} ]" :is="tag">
        {{ text }}
      </component>
    </div>
</template>

<script>
export default {
    name: "BaseHeading",
    props: {
        tag : { type: String, default: "h2"},
        text : { type: String, default: "Title"},
        align: { type: String, default: "left"},
        border: { type: Boolean, default: true}
    }
}
</script>

<style lang="scss">
    .base-heading {
        text-align: center;
        .base-heading__component {
            padding: 0 0 0.5em;
            margin-bottom: 1rem;
        }
        .base-heading__border {
            border-bottom: 1px solid rgba(black, 0.7);
        }
    }
    .base-heading__text-left { text-align: left }
    .base-heading__text-center { text-align: center }
    .base-heading__text-right { text-align: right }
</style>