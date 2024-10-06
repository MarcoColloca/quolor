import { defineStore } from 'pinia';

// Definisci l'interfaccia per lo stato del MainStore
interface MainState {
  notFound: boolean;
}

export const useMainStore = defineStore('main', {  
  state: (): MainState => ({    
    notFound: false,
  }),

  actions: {
    toggleNotFound() {
      this.notFound = !this.notFound;
    },
  },
});
