<template>
  <div>
    <div v-if="route.path === '/'">
      <h1>Recipes</h1>
      <ul>
        <li v-for="recipe in recipeStore.recipes" :key="recipe._id">
          <router-link :to="`/details/${recipe._id}`">{{ recipe.recipe_name }}</router-link>
        </li>
      </ul>
    </div>
    <div v-else-if="route.path.startsWith('/details')">
      <DetailsPage />
    </div>
  </div>
</template>

<script setup>
import { useRecipeStore } from '@/stores/recipeStore'
import DetailsPage from '@/pages/DetailsPage.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const recipeStore = useRecipeStore()
</script>
