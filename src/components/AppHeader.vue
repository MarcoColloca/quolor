<script>

    export default {
        components:{            
        },

        data(){
        }
    }
</script>



<template>
    <!-- Page Header -->
    <header class="header-section">
        <div class="container">
            <nav class=" justify-content-center align-items-center navbar navbar-expand-lg">
                <div>
                    <button 
                    class="navbar-toggler navbar-burger p-1" 
                    type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <span class="burger"><font-awesome-icon :icon="['fas', 'scroll']" /></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">   
                        <ul class="d-flex gap-5 m-0">
                            <li>
                                <RouterLink  :to="{name: 'home'}">Home</RouterLink>
                            </li>
                            <li>
                                <RouterLink  :to="{name: 'map'}">Mappe</RouterLink>
                            </li>
                            <li>
                                Link
                            </li>
                            <li>
                                Link
                            </li>
                        </ul>     
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>



<style lang="scss" scoped>
    header{
        height: 100px;
        background-color: coral;
    }

    a{
        padding: 1px 10px;
        border: 1px solid white;
        border-radius: 18px;
        
        &:hover{            
            color: crimson;
            background-color: white;
            border: 1px solid crimson;
        }
    }
</style>