import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useRecipeStore = defineStore('recipes', () => {
  const recipes = ref([]) // Holds the cached data

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/recipes') // Fetch data from API
      recipes.value = response.data // Cache the data
      console.log('Data fetched:', recipes.value) // Debugging: Log the data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return { recipes, fetchRecipes }
})
