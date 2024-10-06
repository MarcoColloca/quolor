<script setup>
import { ref } from 'vue';
import { useMapStore } from '../stores/mapStore'; // Importa lo store di Pinia

// Inizializza lo store
const mapStore = useMapStore();

// Definisci le variabili reattive
const scale = ref(1);
const originX = ref("50%");
const originY = ref("50%");

// Metodo per gestire lo zoom
function zoom(event) {
  const rect = event.target.getBoundingClientRect();  // Ottenere le dimensioni e la posizione dell'immagine
  const clickX = event.clientX - rect.left;  // Posizione del clic sull'immagine
  const clickY = event.clientY - rect.top;   // Posizione del clic sull'immagine

  // Converti la posizione del clic in percentuali rispetto all'immagine
  const originXPercent = (clickX / rect.width) * 100 + "%";
  const originYPercent = (clickY / rect.height) * 100 + "%";

  // Imposta il nuovo punto di origine per lo zoom
  originX.value = originXPercent;
  originY.value = originYPercent;

  // Alterna il fattore di scala tra 1 e 2.5
  scale.value = scale.value === 1 ? 2.5 : 1;
}
</script>

<template>
  <div class="img-container" @click="zoom">
    <img
      :style="{ transform: 'scale(' + scale + ')', transformOrigin: originX + ' ' + originY }"
      src="/imgs/mappa.jpg"
      alt="Mappa"
      ref="mapImage"
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
