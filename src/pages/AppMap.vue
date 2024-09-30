<script>
import { store } from '../store'; // Import del tuo store Vuex o reactive

export default {
  data() {
    return {
      store,         // Usa lo store importato
      scale: 1,      // Scala iniziale
      originX: "50%",  // Punto di origine X per lo zoom
      originY: "50%",  // Punto di origine Y per lo zoom
    };
  },
  methods: {
    zoom(event) {
      const rect = this.$refs.mapImage.getBoundingClientRect();
      const clickX = event.clientX - rect.left;  // Posizione del clic sull'immagine
      const clickY = event.clientY - rect.top;   // Posizione del clic sull'immagine

      // Converti la posizione del clic in percentuali rispetto all'immagine
      const originXPercent = (clickX / rect.width) * 100 + "%";
      const originYPercent = (clickY / rect.height) * 100 + "%";

      // Imposta il nuovo punto di origine per lo zoom
      this.originX = originXPercent;
      this.originY = originYPercent;

      // Alterna il fattore di scala tra 1 e 2
      this.scale = this.scale === 1 ? 2.5 : 1;
    },
  },
};
</script>

<template>
  <div class="img-container" @click="zoom">
    <img
      :style="{ transform: 'scale(' + scale + ')', transformOrigin: originX + ' ' + originY }"
      src="/public/imgs/mappa.jpg"
      alt="Mappa"
      ref="mapImage"
      v-if="store.maps.quolor.active"
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
