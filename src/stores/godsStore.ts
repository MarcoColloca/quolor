import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface God {
    id: number
    race: string
    name: string
    domains: string[]
    img: string
    description: string
}

interface Gods {
    gods: God[]
}

export const useGodsStore = defineStore('god', {
    state:(): Gods => ({
        gods:[
            {
                id: 1,
                race: 'Aasimar',
                name: 'Liz Anazarna',
                domains: ['Aasimar', 'Guerra', 'Onore'],
                img: './imgs/Aasimar.png',
                description: ''
            },
            {
                id: 2,
                race: 'Dragonborn',
                name: 'Jaros Silverdream',
                domains: ['Dragonborn', 'Giustizia', 'Vendetta'],
                img: './imgs/Dragonborn.png',
                description: ''
            },
            {
                id: 3,
                race: 'Elfo',
                name: 'Ver\'An Amasrendaen',
                domains: ['Elfi', 'Luce', 'Disciplina'],
                img: './imgs/Elfo.png',
                description: ''
            },
            {
                id: 4,
                race: 'Gnomo',
                name: 'Zoe',
                domains: ['Gnomi', 'Oscurità', 'Morte'],
                img: './imgs/Gnomo.png',
                description: ''
            },
            {
                id: 5,
                race: 'Goliath',
                name: 'Rok il Distruttore',
                domains: ['Goliath', 'Distruzione', 'Ambizione'],
                img: './imgs/Goliath.png',
                description: ''
            },
            {
                id: 6,
                race: 'Halfling',
                name: 'Estella',
                domains: ['Halfling', 'Magia', 'Fortuna'],
                img: './imgs/Halfling.png',
                description: ''
            },
            {
                id: 7,
                race: 'Nano',
                name: 'Mormonth',
                domains: ['Nani', 'Protezione', 'Natura'],
                img: './imgs/Nano.png',
                description: ''
            },
            {
                id: 8,
                race: 'Orco',
                name: 'Ruokshak',
                domains: ['Orchi', 'Conoscenza', 'Empatia'],
                img: './imgs/Orco.png',
                description: ''
            },
            {
                id: 9,
                race: 'Tiefling',
                name: 'Trixie',
                domains: ['Tiefling', 'Arte', 'Viaggi'],
                img: './imgs/Tiefling.png',
                description: ''
            },
            {
                id: 10,
                race: 'Umano',
                name: '"Dio degli Uomini"',
                domains: ['Umani', 'Controllo', 'Segreti'],
                img: './imgs/Umano.png',
                description: ''
            }
        ]
    }),

    actions:{
        refactorDomains(array:string[]):string[] {
            const myArray: string[] = []
        
            array.forEach((element, i) => {
        
                if (i !== array.length - 1) {
                    const myEl:string = element + ', '
        
                    myArray.push(myEl)
                }
                else {
                    const myEl:string = element + '.'
                    myArray.push(myEl)
                }
            });
        
            return myArray
        }
    }
})