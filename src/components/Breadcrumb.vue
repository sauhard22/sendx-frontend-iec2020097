<script setup>
import BreadcrumbHeader from './BreadcrumbHeader.vue';
import { useRoute } from 'vue-router';
const route = useRoute();

defineProps({
    data: Object
})

</script>
<template>
    <div class="flex flex-row">
        <BreadcrumbHeader :selected="route.name" v-for="(item, i) in data.links" :icon="data.icon" :label="item.label"
        :index="i"    
        :showLeftIcon="item.showLeftIcon" :showRightIcon="item.showRightIcon" :key="i" />
    </div>
</template>
