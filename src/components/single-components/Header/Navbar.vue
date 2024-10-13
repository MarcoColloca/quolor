<script setup lang="ts">
// Generali
import { storeToRefs } from 'pinia';

// Store
import { useHeaderStore } from '../../../stores/headerStore';
const headerStore = useHeaderStore();
// VARIABILI
const { navbarLinks } = storeToRefs(headerStore);

</script>

<template>
    <nav class="justify-content-center align-items-center navbar navbar-expand-lg">
        <ul class="flex gap-5 text-white">
            <li v-for="(link, index) in navbarLinks" :key="index">
                <RouterLink  :to="{name: link.pathName}">{{ link.name }}</RouterLink>
                <div v-if="link.activeElements">
                    <p>Extra</p>
                </div>
            </li>            
        </ul>  
    </nav>
</template>


<style scoped lang="scss">
    li{
        a{
            padding: 1px 10px;
            border: 1px solid white;
            border-radius: 18px;
            display: flex;
            flex-direction: column;        
            
            &:hover{            
                color: crimson;
                background-color: white;
                border: 1px solid crimson;
            }
        }
        div{
            padding: 1px 10px;
            border: 1px solid white;
            border-radius: 18px;
            
            &:hover{            
                color: crimson;
                background-color: white;
                border: 1px solid crimson;
                cursor: pointer;
            }
        }
    }
</style>


