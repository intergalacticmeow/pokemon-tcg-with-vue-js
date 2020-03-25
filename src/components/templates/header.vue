<template>
    <nav class="bg-white shadow" role="navigation">
        <div class="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
            <div class="mr-4 md:mr-8">
                <router-link to="/">
                    <img src="https://i.ibb.co/z6CBc2D/pokemon.png" class="h-10 w-10" />
                </router-link>
            </div>
            
            <div class="ml-auto md:hidden">
                <button class="flex items-center px-3 py-2 border rounded" type="button">
                    <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            
            <div class="w-full md:w-auto md:flex-grow md:flex md:items-center">
                <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
                    <li>
                        <router-link class="block px-4 py-1 md:p-2 lg:px-4" to="/">Home</router-link>
                    </li>

                    <li>
                        <router-link class="block px-4 py-1 md:p-2 lg:px-4" to="/types">Types</router-link>
                    </li>

                    <li>
                        <router-link class="block px-4 py-1 md:p-2 lg:px-4" to="/sets">Sets</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {}
    },
}
</script>