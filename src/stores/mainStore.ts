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
    toggleNotFound():void {
      this.notFound = !this.notFound;
    },
    capitalizeFirstLetter(string: string): string {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
});
