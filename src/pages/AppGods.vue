<script setup>
// Store
import { ref } from "vue";
import { useGodsStore } from "../stores/godsStore";


// Componenti
import GodCard from "../components/single-components/Gods/GodCard.vue";
import GodModal from "../components/single-components/Gods/GodModal.vue";

const godStore = useGodsStore();

const gods = godStore.gods;


const description = godStore.returnDescription;

</script>

<template>    
    <section class="py-5 relative">
        <div class="flex w-full justify-center mb-4">
            <h1 class="text-sm text-coral lg:text-6xl rainbow">
                Divinità
            </h1>
        </div>
        <div class="container mx-auto">            
            <div class="flex flex-wrap justify-center gap-5">
                <div v-for="(god, i) in gods" :key="i" class="w-full md:w-1/4 p-1 bg-[#0A0A0A] shadow-md rounded-lg">
                    <GodCard
                    :god = god
                    @click="god.showDescription = !god.showDescription, console.log(god.showDescription)"
                    ></GodCard>
                    
                    <GodModal
                    v-show="god.showDescription"
                    :god = god
                    ></GodModal>
                    
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>

/* (ง•̀_•́)ง */

/* Animazioni */

@keyframes pulse {
    0% {
        color: crimson;
    }

    20% {
        color: greenyellow;
    }

    40% {
        color: purple;
    }

    60% {
        color: white;
    }

    80% {
        color: cornflowerblue
    }

    100% {
        color: crimson;
    }
}
</style>