<template>
    <div>
        <div class="w-1/2 mx-auto text-center pb-20 pt-20" v-if="loading">
            Loading...
        </div>

        <div class="w-full mt-4">
            <h1 class="text-center">Sets:</h1>
        </div>

        <div class="flex flex-wrap max-w-screen-xl mx-auto">

            <div class="w-1/4" v-for="set in sets" :key="set.code">
                <div class="overflow-hidden rounded border bg-white shadow bg-white shadow-lg rounded-lg overflow-hidden m-2 border border-gray-400 m-3 p-2">
                    <div class="relative">
                        <div class="h-48 bg-cover bg-no-repeat bg-contain bg-center" :style="{ backgroundImage: `url('${set.logoUrl}')` }"></div>
                        <div style="background-color: rgba(0,0,0,0.6)" class="absolute bottom-0 mb-2 ml-3 px-2 py-1 rounded text-sm text-white">Total Cards: {{ set.totalCards }}</div>
                        <div style="bottom: -20px;" class="absolute right-0 w-10 mr-2">
                            <a href="#">
                                <img class="rounded-full border-2 border-white" :src="set.symbolUrl" >
                            </a>
                        </div>
                    </div>
                    
                    <div class="p-3">
                        <h3 class="mr-10 text-sm truncate-2nd">
                            {{ set.name }}
                        </h3>
                        <div class="flex items-start justify-between">
                            <p class="text-xs text-gray-500">Series: {{ set.series }}</p>
                            <button class="outline text-xs text-gray-500 hover:text-blue-500" title="Bookmark this ad"><i class="far fa-bookmark"></i></button>
                        </div>
                        
                        <p class="text-xs text-gray-500">
                            Standard: <span v-if="set.standardLegal == false">No</span><span v-else>True</span> • 
                            Expanded: <span v-if="set.expandedLegal == false">No</span><span v-else>True</span> • 
                            Released: {{ set.releaseDate }} 
                        </p>
                    </div>
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
            sets: []
        }
    },

    created() {
         PokemonAPI.getSets()
            .then(sets => {
                this.sets = sets
            })
            .catch(error => console.log(error))
            .finally(() => {
                this.loading = false;
            })
    }
}
</script>