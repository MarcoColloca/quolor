<script setup lang="ts">
// Generali
import { storeToRefs } from 'pinia';

// Store
import { useHeaderStore } from '../../../stores/headerStore';
const headerStore = useHeaderStore();

// VARIABILI
const { navbarLinks } = storeToRefs(headerStore);
const toggleSubMenu = headerStore.toggleSubMenu

</script>

<template>
    <nav class="justify-content-center align-items-center navbar navbar-expand-lg">
        <ul class="flex gap-5 text-white">
            <li v-for="(link, index) in navbarLinks" :key="index" class="relative">
              
              <!-- Verifica la presenza dei subPaths per mostrare il menu a tendina -->
              <div v-if="link.subPaths" @click="toggleSubMenu(link)" class="nav-link cursor-pointer font-bold">
                {{ link.name }}
              </div>
              <RouterLink v-else :to="{name: link.pathName}" class="nav-link">{{ link.name }}</RouterLink>
              
              <!-- Submenu, visibile solo se showSubMenu è true -->
              <transition name="slide-fade">
                  <ul v-if="link.showSubMenu" class="submenu absolute bg-white text-black rounded-md shadow-lg mt-1">
                    <li v-for="(subLink, index) in link.subPaths" :key="index">
                      <RouterLink @click="toggleSubMenu(link)" :to="{name: subLink.pathName}" class="block">{{ subLink.name }}</RouterLink>                            
                    </li>
                  </ul>
              </transition>
            </li>            
        </ul>  
    </nav>
</template>



<style scoped lang="scss">
li {
  position: relative;

  .nav-link {
    padding: 1px 10px;
    border: 1px solid white;
    border-radius: 18px;
    display: inline-block;

    &:hover {
      color: coral;
      background-color: white;
      border: 1px solid coral;
    }
  }

  .submenu {
    min-width: 150px;
    z-index: 100;
    border: 1px solid coral;
    background-color: white;
    border-radius: 8px;
    left: 50%; /* Modifica */
    transform: translateX(-50%); /* Modifica */
    li {
      a{
        padding: 8px 16px;
      }
      &:hover{
        background-color: coral;
        color: white;
      }
    }
  }
}

/* Transizioni per l'apertura e chiusura del submenu */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>



