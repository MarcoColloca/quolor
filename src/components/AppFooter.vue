<script>
    import BentoBox from './single-components/general/BentoBox.vue';

    export default {
        components:{
            BentoBox
        },

        data(){            
            return {
            }
        }
        
    }
</script>





<template>
    <!-- Page Footer -->
    <footer>
        <div class="container flex justify-center">
            <BentoBox class="text-white flex justify-center items-center w-max">
                <h2>
                    Marco Colloca Full Stack Web Developer
                </h2>
            </BentoBox>
        </div>
    </footer>
</template>




<style lang="scss" scoped>

footer{
    height: 100px;
    background-color: coral;
}
</style>