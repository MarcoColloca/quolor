<script setup lang="ts">
import { useMapStore } from '../stores/mapStore';  // Importa lo store

const mapStore = useMapStore();  // Inizializza lo store
</script>

<template>
  <div class="img-container" @click="mapStore.zoom">  <!-- Chiamata diretta al metodo zoom dello store -->
    <img
      :style="{ transform: 'scale(' + mapStore.scale + ')', transformOrigin: mapStore.originX + ' ' + mapStore.originY }"
      src="/imgs/mappa.jpg"
      alt="Mappa"
      v-if="mapStore.quolor.active"
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
  }
}

img {
  width: 4096px;
}
</style>
