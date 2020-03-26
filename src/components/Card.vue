<template>
    <div>

        <div class="w-1/2 mx-auto text-center pb-20 pt-20" v-if="loading">
            Loading...
        </div>


        <div v-for="details in card" :key="details.id">
            <div class="lg:py-12 lg:flex lg:justify-center">
                <div class="bg-white max-w-screen-xl w-full lg:shadow-lg lg:rounded-lg flex">
                    <div class="w-1/5">
                        <div class="h-64 bg-cover bg-no-repeat lg:rounded-lg lg:h-full bg-contain" :style="{ backgroundImage: `url('${details.imageUrlHiRes}')` }"></div>
                    </div>
                    
                    <div class="py-12 px-6 w-2/5 pt-2">
                        <h2 class="text-3xl text-gray-800 font-bold"><span class="text-indigo-600">Card: </span> {{ details.name }}</h2>
                        <div class="mt-4 text-gray-600">
                            <span class="font-semibold block" v-if="details.nationalPokedexNumber">
                                Pokedex Number: 
                                <em class="not-italic font-light">{{ details.nationalPokedexNumber }}</em>
                            </span> 

                            <span class="font-semibold block" v-if="details.supertype">
                                Super Type: 
                                <em class="not-italic font-light">{{ details.supertype }}</em>
                            </span>                             

                            <span class="font-semibold block" v-if="details.subtype">
                                Sub Type: 
                                <em class="not-italic font-light">{{ details.subtype }}</em>
                            </span>                             

                            <span class="font-semibold block" v-if="details.nationalPokedexNumber">
                                Evolves From: 
                                <em class="not-italic font-light">{{ details.evolvesFrom }}</em>
                            </span>                              

                            <span class="font-semibold block" v-if="details.hp">
                                Hit Points: 
                                <em class="not-italic font-light">{{ details.hp }}</em>
                            </span>                             
                            
                            <span class="font-semibold block" v-if="details.artist">
                                Artist: 
                                <em class="not-italic font-light">{{ details.artist }}</em>
                            </span>                             

                            <span class="font-semibold block" v-if="details.rarity">
                                Rarity: 
                                <em class="not-italic font-light">{{ details.rarity }}</em>
                            </span>                             

                            <span class="font-semibold block" v-if="details.series">
                                Series: 
                                <em class="not-italic font-light">{{ details.series }}</em>
                            </span>                             

                            <span class="font-semibold block" v-if="details.set">
                                Set: 
                                <em class="not-italic font-light">{{ details.set }}</em>
                            </span>                             

                        </div>
                    </div>

                    <div class="w-2/5 pt-3 pb-5">
                        <div v-if="details.types">
                            <h3 class="text-indigo-600">Type(s):</h3>
                            <div v-for="(type, i) in details.types" :key="'type-' + i">
                                {{ type }}
                            </div> 
                        </div>

                        <div v-if="details.ability">
                            <h3 class="text-indigo-600  mt-3">Abilities:</h3>
                            <div>
                                {{ details.ability.name }} - {{ details.ability.text }}
                            </div>                            
                        </div>

                        <div v-if="details.attacks">
                            <h3 class="text-indigo-600  mt-3">Attacks</h3>
                            <div v-for="(attack, i) in details.attacks" :key="'attack-' + i">
                                <h4 class="text-gray-800">{{ attack.name }}</h4>
                                <h5>Cost:</h5>
                                <ul class="list-disc ml-5">
                                    <li class="text-sm" v-for="cost in attack.cost" :key="cost">{{ cost }}</li>
                                </ul>
                                <p class="text-sm">{{ attack.text}}</p>
                                <span class="text-sm font-bold block mt-1" v-if="attack.damage">Damage: {{ attack.damage }}</span>
                                <span class="text-sm font-bold block mt-1" v-if="attack.convertedEnergyCost">Energy Cost: {{ attack.convertedEnergyCost }}</span>
                            </div>                            
                        </div>
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
            card: [],
        }
    },
    created() {

        PokemonAPI.getCard(this.$route.params.id)
            .then(card => {
                this.card = card
            })
            .catch(error => console.log(error))
            .finally(() => {
                this.loading = false;
            })
          
    },
}
</script>