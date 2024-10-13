import { defineStore } from 'pinia';

export interface Map{
  name: string;
  url: string;
  active: boolean;
}


export interface MapState {
  maps: Map[];
  scale: number;
  originX: string;
  originY: string;
}

export const useMapStore = defineStore('map', {
  state: (): MapState => ({
    maps: [
      {
        name: 'quolor',
        url: '/imgs/mappa.jpg',
        active: true
      },
      {
        name: 'political',
        url: '/imgs/politica.jpg',
        active: false
      }
    ],
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
    changeActiveMap(selectedMapName: string) {
      this.maps.forEach(map => {
        map.active = map.name === selectedMapName;
      });
    },
  },
});
