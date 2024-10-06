<script setup>
import { ref } from "vue";

// Stato reattivo per gestire l'accordion aperto
const openAccordion = ref(null);

// Funzione per aprire/chiudere l'accordion
function toggleAccordion(index) {
    openAccordion.value = openAccordion.value === index ? null : index;
}

// Dati  gods 
const gods = [
    {
        id: 1,
        race: 'Aasimar',
        name: 'Liz Anazarna',
        domanis: ['Aasimar', 'Guerra', 'Onore'],
        img: './imgs/Aasimar.png',
        description: ''
    },
    {
        id: 2,
        race: 'Dragonborn',
        name: 'Jaros Silverdream',
        domanis: ['Dragonborn', 'Giustizia', 'Vendetta'],
        img: './imgs/Dragonborn.png',
        description: ''
    },
    {
        id: 3,
        race: 'Elfo',
        name: 'Ver\'An Amasrendaen',
        domanis: ['Elfi', 'Luce', 'Disciplina'],
        img: './imgs/Elfo.png',
        description: ''
    },
    {
        id: 4,
        race: 'Gnomo',
        name: 'Zoe',
        domanis: ['Gnomi', 'Oscurità', 'Morte'],
        img: './imgs/Gnomo.png',
        description: ''
    },
    {
        id: 5,
        race: 'Goliath',
        name: 'Rok il Distruttore',
        domanis: ['Goliath', 'Distruzione', 'Ambizione'],
        img: './imgs/Goliath.png',
        description: ''
    },
    {
        id: 6,
        race: 'Halfling',
        name: 'Estella',
        domanis: ['Halfling', 'Magia', 'Fortuna'],
        img: './imgs/Halfling.png',
        description: ''
    },
    {
        id: 7,
        race: 'Nano',
        name: 'Mormonth',
        domanis: ['Nani', 'Protezione', 'Natura'],
        img: './imgs/Nano.png',
        description: ''
    },
    {
        id: 8,
        race: 'Orco',
        name: 'Ruokshak',
        domanis: ['Orchi', 'Conoscenza', 'Empatia'],
        img: './imgs/Orco.png',
        description: ''
    },
    {
        id: 9,
        race: 'Tiefling',
        name: 'Trixie',
        domanis: ['Tiefling', 'Arte', 'Viaggi'],
        img: './imgs/Tiefling.png',
        description: ''
    },
    {
        id: 10,
        race: 'Umano',
        name: '"Dio degli Uomini"',
        domanis: ['Umani', 'Controllo', 'Segreti'],
        img: './imgs/Umano.png',
        description: ''
    },
]

// Funzioni di esempio per returnDescription e refactorDomains
function returnDescription(description) {
    if (!description) {
        return 'Ancora Nessuna Descrizione'
    }

    return description
}

function refactorDomains(array) {
    const myArray = []

    array.forEach((element, i) => {

        if (i !== array.length - 1) {
            const myEl = element + ', '

            myArray.push(myEl)
        }
        else {
            const myEl = element + '.'
            myArray.push(myEl)
        }
    });

    return myArray
}
</script>

<template>
    <section class="py-5">
        <div class="container mx-auto">
            <div class="flex flex-wrap justify-center gap-5">
                <div v-for="(god, i) in gods" :key="i" class="w-full md:w-1/4 p-1 bg-[#0A0A0A] shadow-md rounded-lg">
                    <div class="card">
                        <img :src="god.img" class="w-full h-48 object-cover rounded-t-lg" :alt="god.race + ' img'" />
                        <div class="p-4">
                            <h3 class="text-coral font-bold text-xl">{{ god.name }}</h3>
                            <h5 class="text-sm text-gray-500 mb-3">
                                <small>{{ god.race }}</small>
                            </h5>                            
                        </div>
                        <div class="p-4 border-t border-[#FF7F50] bg-[#0A0A0A]">
                            <span class="domains font-bold text-gray-600">Domini:</span> <br />
                            <span class="text-white font-bold" v-for="domain in refactorDomains(god.domanis)"
                                :key="domain">
                                {{ domain }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
img {
    height: 600px;
    object-fit: cover;
}

/* General  */

.text-center {
    text-align: center;
}

.text-coral {
    color: coral;
}

.card {
    background-color: rgb(10, 10, 10);
    color: white;
}


.domains {
    font-weight: bolder;
    color: coral;
}


/* Main Title */

.main-title {
    font-size: 80px;
    color: crimson;
    animation: pulse 3s infinite;
    will-change: color;
}



/* (ง•̀_•́)ง */

.lessgo {
    color: crimson;
    font-size: 70px;
    animation: pulse 3s infinite;
    will-change: color;
}


/* Animazioni */

@keyframes pulse {
    0% {
        color: crimson;
    }

    20% {
        color: greenyellow;
    }

    40% {
        color: purple;
    }

    60% {
        color: white;
    }

    80% {
        color: cornflowerblue
    }

    100% {
        color: crimson;
    }
}
</style>