import { defineStore } from 'pinia';

// Definisci l'interfaccia per lo stato delle mappe
interface MapState {
  quolor: {
    active: boolean;
  };
}

export const useMapStore = defineStore('map', {
  state: (): MapState => ({
    quolor: {
      active: true,
    },
  }),
  actions: {
    setQuolorActive(value: boolean) {
      this.quolor.active = value;
    },
    toggleQuolorActive() {
        this.quolor.active = !this.quolor.active;
      },
  },
});
