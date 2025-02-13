<script setup>
import { useRecipeStore } from './stores/recipeStore'
import { onMounted } from 'vue'
import DisplayRecipes from './components/DisplayRecipes.vue'

const recipeStore = useRecipeStore()

onMounted(() => {
  recipeStore.fetchRecipes() // Fetch data when the app loads
})
</script>
<template>
  <main>
    <DisplayRecipes />
  </main>
</template>

<style scoped></style>
