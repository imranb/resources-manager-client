<template>
  <div class="flex">
    <Sidebar type="client"></Sidebar>  
    <div class="w-full">
        <router-view /> 
    </div>
  </div>
</template>

<script>
import Sidebar from '../../components/Sidebar.vue'
export default {
    name: 'Client Dashboard',
    components: { Sidebar }
}
</script>

<style>

</style>