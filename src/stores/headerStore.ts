import { defineStore } from 'pinia';

export interface SubPath {
    name: string;
    pathName: string;   
}

export interface NavbarLink {
    name: string;
    pathName: string;
    showSubMenu?: boolean;
    subPaths?: SubPath[];
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
        },
        {
            name: 'Timeline',
            pathName: 'timeline'
        },
        {
            name: 'Fazioni',
            pathName: 'nazioni',
            showSubMenu: false,
            subPaths: [
                {
                    name: 'Nazioni',
                    pathName: 'nazioni'
                },
                {
                    name: 'Associazioni',
                    pathName: 'associazioni'
                }
            ]
        },
    ]
  }),

  actions: {
    toggleSubMenu(link: NavbarLink){
        link.showSubMenu = !link.showSubMenu
    }
  }
  
});
