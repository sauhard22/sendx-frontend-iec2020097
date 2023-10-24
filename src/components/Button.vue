<script setup>
defineProps({
    label: String,
    buttonClass: {
        type: String,
        default: "",
    }
})

const defaultClass = "font-[inter] font-medium bg-white py-[5px] px-[10px] rounded-md text-[12px] border-solid border-[2px] border-[#E4E6E8]"
</script>
<template>
    <button :class="[defaultClass, buttonClass]">
        {{label}}
    </button>
</template>