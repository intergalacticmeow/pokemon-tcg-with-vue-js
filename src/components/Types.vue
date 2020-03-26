<template>
    <div>
        <div class="w-1/2 mx-auto text-center pb-20 pt-20" v-if="loading">
            Loading...
        </div>

        <div class="w-full mt-4">
            <h1 class="text-center">Types</h1>
        </div>

        <div class="flex flex-wrap max-w-screen-xl mx-auto">
            <div class="w-full" v-for="type in types" :key="type">
                <h4>• {{ type }}</h4>
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
            types: []
        }
    },

    created() {
         PokemonAPI.getTypes()
            .then(types => {
                this.types = types
            })
            .catch(error => console.log(error))
            .finally(() => {
                this.loading = false;
            })
    }
}
</script>