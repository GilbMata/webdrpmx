<template>
    <section class="pb-4 bg-light">
        <div class="row section-subtitle">
            <div class="col-12">
                <h1 class="title text-center text-display-5">{{ content[appLang].home.certified }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-3 d-flex">
                <div class="icon-bg icon-xxxl" :style="{backgroundImage: `url(${require('@/assets/img/certs/veeam.png')})`}"></div>
            </div>
            <div class="col-3 d-flex">
                <div class="icon-bg icon-xxxl" :style="{backgroundImage: `url(${require('@/assets/img/certs/veeam2.png')})`}"></div>
            </div>
            <div class="col-3 d-flex">
                <div class="icon-bg icon-xxxl" :style="{backgroundImage: `url(${require('@/assets/img/certs/veeam3.png')})`}"></div>
            </div>
            <div class="col-3 d-flex">
                <div class="icon-bg icon-xxxl" :style="{backgroundImage: `url(${require('@/assets/img/certs/iso.png')})`}"></div>
            </div>
        </div>
        <img src="@/assets/img/misc/balls_bottom_left.jpg" class="left-balls">
        <img src="@/assets/img/misc/balls_bottom_right.jpg" class="right-balls">
    </section>
</template>

<script>
export default {
    computed: {
        appLang(){
            return this.$store.state.app.lang
        },
        content(){
            return this.$store.state.content
        },
    }
}
</script>

<style scoped>
section{
    background-size: cover;
}
.row{
    z-index: 1;
}
.icon-bg{
    background-origin: content-box;
    padding: 55px;
    margin: auto;
    border-radius: 50%;
    background-blend-mode: luminosity;
    transition: all 0.1s;
}
.icon-bg:hover{
    transform: scale(1.1);
    background-blend-mode: initial;
}
.left-balls{
    position: absolute;
    left: 0;
    bottom: 4em;
    width: 10em;
}
.right-balls{
    position: absolute;
    right: 0;
    bottom: 4em;
    width: 10em;
}
@media (max-width: 719px) {
    .right-balls, .left-balls{
        opacity: 0.5;
    }
}
</style>