<template>
    <div>
        <div class="w-1/2 mx-auto text-center pb-20 pt-20" v-if="loading">
            Loading...
        </div>

        <div class="flex flex-wrap max-w-screen-xl mx-auto">
            <div class="w-1/4" v-for="card in cards" :key="card.id">
                <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 border border-gray-400 m-3 p-2 mb-2">
                    <router-link :to="`/card/${ card.id }`">
                        <img class="h-75 w-full object-cover mt-2 mb-2" :src="card.imageUrl" />
                        <div class="flex items-center justify-between px-4 py-2 bg-red-700 rounded">
                            <h1 class="text-gray-200 font-bold text-xl" v-if="card.hp">HP: {{ card.hp }}</h1>
                            <h1 class="text-gray-200 font-bold text-xl" v-else>&nbsp;</h1>
                            <button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Details</button>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
import PokemonAPI from "@/services/api/pokemontcg"

export default {    
    data () {
        return {
            loading: true,
            cards: []
        }
    },

    created() {
         PokemonAPI.getCards()
            .then(cards => {
                this.cards = cards
            })
            .catch(error => console.log(error))
            .finally(() => {
                this.loading = false;
            })
    }
}
</script>