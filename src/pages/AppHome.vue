<script setup>

</script>





<template>
    <div class="container my-5 p-5 text-center">
        <h1 class="text-coral text-7xl">
            Homepage
        </h1>
    </div>

    <section class="my-5 hero container">
        <div class="hero-container text-center">
            <p class="text-xl w-12/12 lg:w-1/2">
                Benvenuti. Questo sito è stato creato per raggruppare la Lore della mia ambientazione di d&d 5.5e.
                Naviga pure tra le pagine per scoprire quello che ti serve. Nella Navbar in alto, trovi i vari argomenti.
                In ogni pagina sarà invece presente un indice per mostrare le diverse informazioni suddivise per macroaree.                    
            </p>
            <p class="text-red-500 bg-black px-3 py-1 w-12/12 lg:w-3/12 text-lg">
                Tenete sempre in considerazione che è un work in progress, al momento molto in progress. 
                Verrà aggiornato in tempo reale nel corso della campagna.
            </p>
        </div>
    </section>
</template>



<style lang="scss" scoped>
.hero {
    min-height: 600px;
    background-color: antiquewhite;
    border-radius: 18px;
    color: black;
}

.hero-container {
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
</style>