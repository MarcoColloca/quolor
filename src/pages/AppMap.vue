<script setup lang="ts">
// Generali
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

// Componenti
import FakeSelect from '../components/single-components/general/FakeSelect.vue';

// Store
import { useMapStore } from '../stores/mapStore';  // Importa lo store
const mapStore = useMapStore();  // Inizializza lo store
import { useMainStore } from '../stores/mainStore';
const mainStore = useMainStore();

// Variabili
const { maps } = storeToRefs(mapStore);




// Stato per il valore selezionato nella select
const selectedMap = ref('quolor');

// Callback per aggiornare lo store
const updateActiveMap = (selectedMapName: string) => {
  mapStore.changeActiveMap(selectedMapName);  // Modifica lo store Pinia
};


</script>

<template>
   <div class="select-container">
     <!-- Finta select con binding e metodo per cambiare la mappa -->
     <FakeSelect 
      :options="maps.map(map => ({ label: map.name.charAt(0).toUpperCase()+ map.name.slice(1), value: map.name }))" 
      v-model="selectedMap"
      :style="'map-select'"
      :onSelect="updateActiveMap"
    ></FakeSelect>
  </div>
  <div class="img-container" @click="mapStore.zoom">  <!-- Chiamata diretta al metodo zoom dello store -->
    <img
      v-for="(myMap, index) in maps"
      :key="index"
      :style="{ transform: 'scale(' + mapStore.scale + ')', transformOrigin: mapStore.originX + ' ' + mapStore.originY }"
      :src="myMap.url"
      alt="Mappa"
      v-show="myMap.active"
    />
  </div>
</template>


<style lang="scss" scoped>
.img-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    display: block;
    transition: transform 0.5s ease;
    pointer-events: all;
    transform-origin: center center; // Valore predefinito, sarà sovrascritto dinamicamente
    width: 4096px;
  }
}

.select-container{
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: coral;
    padding-bottom: 3px;
}

</style>
