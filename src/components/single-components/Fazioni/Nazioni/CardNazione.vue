<script setup lang="ts">

// Store
import {type Nazione, useFactionsStore } from "../../../../stores/factionsStore";
const factionsStore = useFactionsStore();

// Props
const props = defineProps<{
  nazione: Nazione;
}>();


</script>

<template>
    <div class="card">
        <img :src="nazione.imgUrl" class="w-full h-[400px] lg:h-[600px] object-cover rounded-t-lg" :alt="'img'" />
        <div class="p-4">
            <h3 class="text-coral font-bold text-xl">{{ nazione.name }}</h3>
            <h5 class="text-sm text-gray-500 mb-3">
                <small>{{ nazione.name }}</small>
            </h5>                            
        </div>
        <div class="p-4 border-t border-[#FF7F50] bg-[#0A0A0A]">
            <span class="domains font-bold text-gray-600">Domini:</span> <br />
            <span class="text-white font-bold">
                {{ 'Footer' }}
            </span>
        </div>
    </div>
</template>


<style scoped lang="scss">

img {

    object-fit: cover;
}

/* General  */

.text-coral {
    color: coral;
}

.card {
    background-color: rgb(10, 10, 10);
    color: white;
}


.domains {
    font-weight: bolder;
    color: coral;
}
</style>