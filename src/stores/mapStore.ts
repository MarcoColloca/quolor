import { defineStore } from 'pinia';
import { ref } from 'vue';

interface MapState {
  quolor: {
    active: boolean;
  };
  scale: number;
  originX: string;
  originY: string;
}

export const useMapStore = defineStore('map', {
  state: (): MapState => ({
    quolor: {
      active: true,
    },
    scale: 1,          // Scala iniziale
    originX: "50%",    // Punto di origine X iniziale
    originY: "50%",    // Punto di origine Y iniziale
  }),

  actions: {
    zoom(event: MouseEvent) {
      const rect = (event.target as HTMLElement).getBoundingClientRect();  // Ottieni la posizione dell'immagine
      const clickX = event.clientX - rect.left;  // Posizione del clic rispetto all'immagine
      const clickY = event.clientY - rect.top;

      // Converti la posizione del clic in percentuali
      const originXPercent = (clickX / rect.width) * 100 + "%";
      const originYPercent = (clickY / rect.height) * 100 + "%";

      // Imposta il nuovo punto di origine per lo zoom
      this.originX = originXPercent;
      this.originY = originYPercent;

      // Alterna il fattore di scala
      this.scale = this.scale === 1 ? 2.5 : 1;
    },
  },
});
