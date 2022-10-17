<template>
<div class="input-item__container">
    <label class="label-item" for="">{{ label }}</label>
    <input 
        class="input-item"
        :type="type" 
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
    >
</div>

</template>

<script>
export default {   
    props:{
        modelValue: { type: String, default: "" },
        placeholder: { type: String, default: "" },
        type: { type: String, default: "text" },
        kind: { type: String, default: "text"},
        label: { type: String, default: "label" },
    }, 
    methods: {
        updateValue(event){
            this.$emit("update:modelValue", event.target.value)
        }
    },

}
</script>

<style lang="scss">
@import  '../../assets/scss/_variables.scss';
    .input-item__container {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .input-item{
            outline: none;
            padding: .8rem 1rem;
            border: none;
            border-radius: $radius;
            border: 1px solid $primary;
            background: transparent;
            &::placeholder{
                color: grey;
            }
        }
        .label-item {
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 1px;
        }
    }

</style>