<script setup lang="ts">
    // Generali
    import { storeToRefs } from 'pinia';
    
    // Store
    import { useFactionsStore } from '../../stores/factionsStore';
    const factionsStore = useFactionsStore();

    // Componenti
    import CardAssociazione from '../../components/single-components/Fazioni/Associazioni/CardAssociazione.vue';

    // Variabili
    const { associazioni } = storeToRefs(factionsStore);
</script>

<template>
    <div class="intro container mx-auto mb-9">
        <div class="title">
            <h1>
                Elenco delle Associazioni
            </h1>
            <p>
                In questa sezione troverai un elenco delle associazioni attive in tutto Quolor. 
                Ogni gruppo è riconosciuto, con vari livelli di notorietà, all'interno del territorio. 
                Puoi esplorare le loro schede informative per scoprire maggiori dettagli su ciascuna associazione.
            </p>
        </div>
    </div>
    <div class="container mx-auto">
        <div class="flex">
            <div class="w-4/12 px-5" v-for="(associazione, index) in associazioni" :key="index">
                <div>
                    <CardAssociazione
                    :associazione="associazione"
                    ></CardAssociazione>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.intro{
    .title{
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1{
            font-size: 22px;
            text-align: center;
        }
        p{
            text-align: center;
            max-width: 600px;
        }
    }
}
</style>