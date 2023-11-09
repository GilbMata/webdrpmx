<template>
    <div>
        <section class="bg-light icon-bg" :style="{backgroundImage: `url(${require('@/assets/img/misc/about_us_bg.jpg')})`}">
            <div class="row pb-3 pt-1">
                <div class="col-6">
                    <img src="@/assets/img/misc/mas_que_una_nube.svg" alt="">
                </div>
                <div class="col-6"></div>
            </div>
        </section>
        <section class="bg-light">
            <div class="row text-center">
                <div class="col-3"></div>
                <div class="col-6">
                    <h3 
                        class="text-untransformed text-heavy" 
                        v-html="content[appLang].aboutUs.ctaTitle">
                    </h3>
                    <p class="text-semi-heavy text-justify">
                        {{ content[appLang].aboutUs.ctaDescription }}
                    </p>
                </div>
            </div>
        </section>
        <section class="bg-light">
            <div class="row text-center">
                <div class="col-12">
                    <h1 class="title text-display-5 text-primary">
                        {{ content[appLang].aboutUs.whatIs }}
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <video-player
                        class="p-relative" 
                        style="z-index:11"
                        :source="'https://drpmexico.com/media/porque_drpmusic.e44dd1b7.mp4'"
                    />
                </div>
            </div>
            <img src="@/assets/img/misc/balls_bottom_left.jpg" class="left-balls">
        </section>
        <section class="bg-light">
            <div class="row text-center section-subtitle">
                <div class="col-12">
                    <h1 class="title text-display-5">
                        {{ content[appLang].aboutUs.focusDrp }}
                    </h1>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-2"></div>
                <div class="col-4 px-2 focus-item" v-for="focusItem in focusGroup1" :key="focusItem.id">
                    <img :src="focusItem.icon" class="d-block icon-xl m-auto">
                    <h4 class="text-primary text-heavy">
                        {{ focusItem.title }}
                    </h4>
                    <p>
                        {{ focusItem.description }}
                    </p>
                </div>
            </div>
            <div class="row text-center mt-2">
                <div class="col-2"></div>
                <div class="col-4 px-2 focus-item" v-for="focusItem in focusGroup2" :key="focusItem.id">
                    <img :src="focusItem.icon" class="d-block icon-xl m-auto">
                    <h4 class="text-primary text-heavy">
                        {{ focusItem.title }}
                    </h4>
                    <p class="text-justify">
                        {{ focusItem.description }}
                    </p>
                </div>
            </div>
            <img src="@/assets/img/misc/balls_bottom_right.jpg" class="right-balls">
        </section>
    </div>
</template>

<script>
import videoPlayer from '@/components/global/VideoPlayer'
export default {
    components: {
        videoPlayer
    },
    mounted(){
        location.href = '#'
    },
    computed: {
        appLang(){
            return this.$store.state.app.lang
        },
        content(){
            return this.$store.state.content
        },
        focusItems(){
            return this.content[this.appLang].aboutUs.focusItems || []
        },
        focusGroup1(){
            return this.focusItems.slice(0, 2)
        },
        focusGroup2(){
            return this.focusItems.slice(2)
        }
    },
    head: {
        title(){
            return {
                inner: this.content[this.appLang].topNav.services
            }
        },
    }
}
</script>

<style scoped>
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
.focus-item{
    z-index: 1;
    position: relative;
}
@media (max-width: 719px){
    section{
        text-align: center;
    }
}
</style>