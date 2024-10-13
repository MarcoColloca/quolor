import { defineStore } from 'pinia';

export interface SubPath {
    name: string;
    pathName: string;   
}

export interface ActiveElement {
    name: string;
    active: boolean;
}

export interface NavbarLink {
    name: string;
    pathName: string;
    subPaths?: SubPath[];
    activeElements?: ActiveElement[];
}


// Definisci l'interfaccia per lo stato del HeaderStore
export interface HeaderState {
  navbarLinks: NavbarLink[]
}



export const useHeaderStore = defineStore('header', {  
  state: (): HeaderState => ({    
    navbarLinks: [
        {
            name: 'Home',
            pathName: 'home'
        },
        {
            name: 'Mappe',
            pathName: 'map',

        },
        {
            name: 'Divinità',
            pathName: 'gods'
        }
    ]
  }),

  actions: {
  }
  
});
