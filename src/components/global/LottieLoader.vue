<template>
    <lottie-vue-player 
        :src="__src"
        :speed="0.3"
        :backgroundColor='bgColor' 
        autoplay 
        loop>
    </lottie-vue-player>
</template>

<script>
export default {
    props: {
        localSrc: {
            type: Object,
            required: true,
        },
        bgColor: {
            type: String
        }
    },
    created(){
        this.__src = JSON.stringify( this.localSrc )
    },
}
</script>

<style>

</style>