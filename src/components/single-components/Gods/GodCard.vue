<script setup lang="ts">
import {type God, useGodsStore } from "../../../stores/godsStore";
const godStore = useGodsStore();
const refactorDomains = godStore.refactorDomains;


const props = defineProps<{
  god: God;
}>();


</script>

<template>
    <div class="card">
        <img :src="god.img" class="w-full h-[400px] lg:h-[600px] object-cover rounded-t-lg" :alt="god.race + ' img'" />
        <div class="p-4">
            <h3 class="text-coral font-bold text-xl">{{ god.name }}</h3>
            <h5 class="text-sm text-gray-500 mb-3">
                <small>{{ god.race }}</small>
            </h5>                            
        </div>
        <div class="p-4 border-t border-[#FF7F50] bg-[#0A0A0A]">
            <span class="domains font-bold text-gray-600">Domini:</span> <br />
            <span class="text-white font-bold" v-for="(domain, i) in refactorDomains(god.domains)"
                :key="i">
                {{ domain }}
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