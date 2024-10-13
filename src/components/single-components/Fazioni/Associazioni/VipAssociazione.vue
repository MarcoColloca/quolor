<script setup lang="ts">
// Store
import {type Associazione, useFactionsStore } from "../../../../stores/factionsStore";
const factionsStore = useFactionsStore();

// Props
const props = defineProps<{
  associazione: Associazione;
}>();

// Funzioni
const toggleVips = factionsStore.toggleVips



</script>

<template>
    <div class="my-modal-container">
       
        <div class="my-modal-box">
            <h1 class="text-coral text-3xl">{{ props.associazione.name }}</h1>
            
            <div class="content">
                <div class="w-4/12 p-3 flex justify-center"  v-for="(vip, index) in props.associazione.personeImportanti" :key="index">
                    <div class="vip-card px-5">
                        <img :src="vip.imgUrl" alt="Immagine">
                        <h3>{{ vip.nome }}</h3>
                        <small>{{ vip.ruolo }}</small>
                        <p>{{ vip.descrizione }}</p>
                    </div>
                </div>
            </div>
            <!-- Bottone chiusura Modale -->
           <div class="close-btn"
            @click="toggleVips(associazione)"
           > Chiudi </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.my-modal-container{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.459);
    padding: 15px;
    .my-modal-box{
        background-color: #0A0A0A;
        min-height: 70%;
        min-width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
        position: relative;
        .content{
            height: 430px;
            max-height: 430px;
            width: 90%;
            overflow-y: scroll;   
            display: flex;   
            flex-wrap: wrap;  
            .vip-card{
                background-color: white;
                color: black;
                height: 400px;
                width: 350px;
                display: flex;
                flex-direction: column;
                align-items: center;
                h3{
                    color: coral;
                    font-size: 18px;
                    font-weight: bold;
                }
                img{
                    max-width: 250px;
                }
            }
        }
        h1{
            position: absolute;
            top: 5%;
            left: 5%;
        }
    }
}



.close-btn{
    color: red;
    position: absolute;
    top: 5%;
    right: 3%;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
}

</style>