<script setup>
    defineProps({
        label: String
    })
</script>
<template>
    <button
        class="font-[inter] font-medium bg-white py-[5px] px-[10px] rounded-md text-[12px] border-solid border-[2px] border-[#E4E6E8]">
        {{label}}
    </button>
</template>