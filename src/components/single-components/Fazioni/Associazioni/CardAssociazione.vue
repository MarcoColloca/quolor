<script setup lang="ts">
// Componenti
import DescrizioneAssociazione from "./DescrizioneAssociazione.vue";
import VipAssociazione from "./VipAssociazione.vue";

// Store
import {type Associazione, useFactionsStore } from "../../../../stores/factionsStore";
const factionsStore = useFactionsStore();

// Props
const props = defineProps<{
  associazione: Associazione;
}>();

// Funzioni
const toggelDescription = factionsStore.toggleDescription
const toggleVips = factionsStore.toggleVips

</script>

<template>
    <div class="pb-5">
        <div class="card">
            <div class="p-4 flex flex-col items-center justify-center">
                <h3 class="text-coral text-center font-bold text-2xl mb-2">{{ associazione.name }}</h3>
                <img :src="associazione.imgUrl" class="w-full h-[400px] lg:h-[600px] object-cover rounded-t-lg" :alt="'img'" />
            </div>
            <div class="border-t border-b border-[#FF7F50] bg-[#0A0A0A]">
                <div class="domains p-4 font-bold text-gray-600 cursor-pointer" @click="toggelDescription(associazione)">
                    Mostra Descrizione.
                </div> 
                <div class="text-white" v-if="associazione.showDescription">
                   <DescrizioneAssociazione
                    :associazione="associazione"
                   ></DescrizioneAssociazione>
                </div>
            </div>
            <div class="border-t border-b border-[#FF7F50] bg-[#0A0A0A]">
                <div class="domains p-4 font-bold text-gray-600 cursor-pointer" @click="toggleVips(associazione)">
                    Mostra Personalità Importanti.
                </div> 
                <div class="text-white" v-if="associazione.showVips">
                   <VipAssociazione
                    :associazione="associazione"
                   ></VipAssociazione>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">

img {
    max-width: 300px;
    max-height: 300px;
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