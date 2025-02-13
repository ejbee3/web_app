<template>
  <div>
    <div v-if="recipe">
      <header>
        <router-link :to="`/`">&#60;&#60;Back</router-link>
      </header>
      <h1 class="recipe-name">
        {{ recipe.recipe_name }} - <span><a v-bind:href="recipe.source">Source</a></span>
      </h1>
      <section>
        <h2>Ingredients</h2>
        <ul>
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
            {{ ingredient }}
          </li>
        </ul>
      </section>
      <section>
        <h2>Directions</h2>
        <ol>
          <li v-for="(step, index) in recipe.directions" :key="index">
            {{ step }}
          </li>
        </ol>
      </section>
    </div>
    <div v-else>
      <p>Item not found.</p>
    </div>
  </div>
</template>

<script setup>
import { useRecipeStore } from '@/stores/recipeStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const recipeStore = useRecipeStore()
const route = useRoute()
const recipeId = route.params.id // Get the ID from the route

// Find the item in the cached data
const recipe = computed(() => recipeStore.recipes.find((recipe) => recipe._id === recipeId))
</script>
