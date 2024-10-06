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
            <nav class="justify-content-center align-items-center navbar navbar-expand-lg">
                <ul class="flex gap-5 text-white">
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