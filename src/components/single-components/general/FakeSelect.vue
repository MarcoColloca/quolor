<script setup lang="ts">
import { ref } from 'vue';

interface Option {
  label: string;
  value: string;
}

const props = defineProps<{
  options: Option[];
  modelValue: string;
  style?: string
  onSelect: (value: string) => void;  // Callback passata come prop
}>();

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedOption = ref(props.modelValue);

const selectOption = (optionValue: string) => {
  selectedOption.value = optionValue;
  emit('update:modelValue', optionValue);
  props.onSelect(optionValue);  // Chiama la funzione onSelect passata dal genitore
  isOpen.value = false;  // Chiudi il dropdown
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>

    <div :class="!style ? 'standard-select' : style">
        <div class="select-box" @click="toggleDropdown">
        {{ selectedOption || 'Seleziona un\'opzione' }}
        </div>
        <ul v-if="isOpen" class="select-options">
        <li 
            v-for="(option, index) in options" 
            :key="index" 
            @click="selectOption(option.value)" 
            :class="{ selected: selectedOption === option.value }"
        >
            {{ option.label }}
        </li>
        </ul>
    </div>

</template>


<style scoped lang="scss"> 



.standard-select {
  position: relative;
  width: 200px;
  .select-box {
    padding: 10px;
    border: 2px solid #4A90E2;
    border-radius: 8px;
    background-color: white;
    color: #333;
    cursor: pointer;
  }
  .select-options {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    width: 100%;
    border: 1px solid #4A90E2;
    border-radius: 8px;
    background-color: white;
    z-index: 10;
    li {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        cursor: pointer;
        &:hover {
            background-color: #ff0000;
        }        
        &.selected {
            background-color: #4A90E2;
            color: white;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
}

.map-select{
    position: relative;
    width: 200px;
    .select-box {
        padding: 10px;
        border: 2px solid white;
        border-radius: 8px;
        background-color: #333;
        color: coral;
        text-align: center;
        cursor: pointer;
    }
    .select-options {
        list-style: none;
        padding: 0;
        margin: 0;
        position: absolute;
        width: 100%;
        border: 1px solid white;
        border-radius: 8px;
        background-color: #333;
        z-index: 10;
        li {
            padding: 10px;
            border-bottom: 1px solid #ddd;
            background-color: #33333347;
            cursor: pointer;
            text-align: center;
            &:last-child {
                border-bottom: none;
            }
            &:hover {
                background-color: #b6b6b6;
                color: black;
            }        
            &.selected {
                background-color: #000000;
                color: coral;
            }
        }
    }
}




</style>

<!--  FAKE SELECT - FUNZIONAMENTO E UTILIZZO   

    La Fake Select è un componente riutilizzabile che richiede due elementi fondamentali:
    1. Una variabile di stato (ref) per mantenere traccia del valore selezionato.
    2. Una callback function che gestisce l'aggiornamento dello store o di altre logiche, 
       quando l'utente seleziona una nuova opzione.

    Questa select è progettata per essere versatile e adattabile a vari contesti. 
    L'esempio qui sotto riguarda la gestione di Mappe in uno store Pinia, ma lo stesso modello può essere applicato ad altri dati.

    UTILIZZO:

    1. Stato (ref) per il valore selezionato nella select:
       - Nel componente padre, definisci un ref per il valore selezionato. 
       - Questo ref tiene traccia dell'opzione corrente scelta dall'utente nella select.

        ESEMPIO:
        const selectedMap = ref('');

        In questo caso, 'selectedMap' memorizzerà il nome della mappa selezionata.

    2. Callback per aggiornare lo store:
       - Quando l'utente seleziona un'opzione, la callback viene chiamata.
       - La callback prende come argomento il valore selezionato (nel nostro esempio, il nome della mappa).
       - All'interno della callback puoi definire qualsiasi logica necessaria, come l'aggiornamento dello store Pinia.

        ESEMPIO:
        const updateActiveMap = (selectedMapName: string) => {
            mapStore.changeActiveMap(selectedMapName);  // Aggiorna lo stato nello store Pinia
        };

    3. Funzione presente nello store:
       - Lo store Pinia contiene una funzione (azione) che aggiorna lo stato delle mappe.
       - La funzione 'changeActiveMap' imposta la proprietà 'active' a 'true' per la mappa selezionata,
         e a 'false' per tutte le altre, permettendo di attivare una mappa alla volta.

        ESEMPIO:
        changeActiveMap(selectedMapName: string) {
            this.maps.forEach(map => {
                map.active = map.name === selectedMapName;
            });
        };

    4. Array di dati da modificare nello store:
       - Lo stato nello store Pinia include un array di mappe, ognuna con proprietà come 'name', 'url' e 'active'.
       - Quando una mappa è attiva, la sua proprietà 'active' viene impostata su 'true'.
       - Ecco un esempio della struttura delle mappe nello store:

        ESEMPIO:
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
        ];

    RIASSUNTO DEL FLUSSO:
    - L'utente interagisce con la select nel componente figlio (CustomSelect).
    - La select emette un evento che aggiorna il valore selezionato (es. 'quolor').
    - La callback nel componente padre riceve il valore selezionato e aggiorna lo stato nello store (Pinia).
    - Lo store Pinia gestisce quali mappe sono attive o inattive basandosi sul valore selezionato.
-->

<!--  FKE SELECT - PERSONALIZZAZIONE 

Una delle Pops di Fake Select si chiama Style. è una props opzionale,
che se passata, va a modificarne lo stile assegnando una classe. 

Questa Props deve corrispondere al nome della classe da assegnare, 
e lo stile della classe personalizzata va impostato tra gli stili, 
parallelamente allo stile standard o delle mappe attualmente presenti.

Com'è intuibile, qual'ora non fosse passato, verrà assegnato lo stile standard.

-->