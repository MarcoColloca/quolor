<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { useMainStore } from './stores/mainStore'; // Importa lo store di Pinia

// Inizializza lo store
const mainStore = useMainStore();

// Definisci variabili reattive
const test = ref('Hello!');
</script>

<template>
  <!-- Usa lo store per condizionare l'inclusione dell'header e del footer -->
  <AppHeader v-if="!mainStore.notFound"></AppHeader>

  <AppMain></AppMain>

  <AppFooter v-if="!mainStore.notFound"></AppFooter>
</template>

<style lang="scss">
#app{
  height: 100vh;
  display: flex;
  flex-direction: column;
  header,
  footer{
    flex-shrink: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main{
    flex-grow: 1;
  }
}
</style>
