<script setup lang="ts">
import { God, useGodsStore } from "../../../stores/godsStore";
const godStore = useGodsStore();
const props = defineProps<{
  god: God;
}>();

const returnDescription = godStore.returnDescription

</script>

<template>
    <div class="my-modal-container">
       
        <div class="my-modal-box">
            <h1 class="text-coral text-3xl">{{ god.name }}</h1>
            <p class="text-white">                
                {{ returnDescription(god.description) }}
            </p>
            <!-- Bottone chiusura Modale -->
           <div class="close-btn"
            @click="god.showDescription = false"
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
        min-height: 50%;
        min-width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
        position: relative;
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