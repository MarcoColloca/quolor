<script setup lang="ts">
// Store
import { useTimelineStore } from '../stores/timelineStore';
import ListaEventi from '../components/single-components/Timeline/ListaEventi.vue';
const timelineStore = useTimelineStore();

// Variabili
const eras = timelineStore.eras;
//Funzioni
const toggleEvents = timelineStore.toggleEvents;

</script>

<template>
    <section>
        <div class="flex flex-col items-center mx-auto px-4 py-8">
            <h1 class="text-center text-4xl font-bold mb-1">Linea Temporale</h1>
            <small class="mb-8">Clicca sui pallini rossi per maggiorni info.</small>
            <div class="relative border-l border-gray-200">
                <!-- Itera attraverso gli eventi -->
                <div v-for="(era, index) in eras" :key="index" class="mb-10 ml-6">
                    <div class="absolute w-3 h-5 bg-red-500 rounded-full -left-1.5 border border-white cursor-pointer 
                     hover:bg-rose-700" @click="toggleEvents(era)"
                    ></div>
                    <p class="text-sm text-red-500">{{ era.year }}</p>
                    <h2 class="text-lg font-semibold text-orange-400">{{ era.title }}</h2>
                    <p class="text-base text-gray-100 break-words w-[500px]">{{ era.description }}</p>
                    <ListaEventi
                     v-if="era.showEvents"
                     :era="era"            
                    ></ListaEventi>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss"></style>
