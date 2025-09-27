<template>
<div>
    <Nav></Nav>
    <Header></Header>
    <RouterView />
    <Footer></Footer>
</div>
</template>

<script setup>
import Nav from './components/Nav.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import {onMounted} from 'vue'
import { useCategoryStore } from '@/stores/category';

const categoryStore = useCategoryStore();
onMounted(()=>{
    categoryStore.getCategory()
})
</script>

<style scoped lang="scss">

</style>