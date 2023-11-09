<template>
    <section class="text-center icon-bg hero-carousel">
        <carousel
            @page-change="onPageChange"
            :per-page="1" 
            pagination-color="var(--light-primary)"
            pagination-active-color="var(--primary)"
        >
            <slide class="p-relative">
                <div class="row">
                    <div class="col-6 pt-2">
                        <img src="@/assets/img/misc/simple.svg" class="make-it-simple pt-3 pb-1">
                        <p>
                            {{ content[appLang].home.slider.page1.sub }}
                        </p>
                        <router-link tag="button" to="/us">{{ content[appLang].home.learnMore }}</router-link>
                    </div>
                    <div class="col-6"></div>
                </div>
                <div class="p-absolute first-slide-misc-bg top-0 bottom-0 left-0"></div>
                <div class="p-absolute icon-bg first-slide-bg top-0 bottom-0 right-0" :style="{backgroundImage: `url(${require('@/assets/img/misc/datacenter.jpg')})`}"></div>
            </slide>
            <slide class="icon-bg second-slide" :style="{backgroundImage: `url(${require('@/assets/img/misc/green_cloud_touch.jpg')})`}">
                <div class="row pt-3">
                    <div class="col-7"></div>
                    <div class="col-5 text-light text-left">
                        <h1 class="text-display-5 title pt-3">
                            <span class="text-untransformed font-body text-light-primary">
                                {{ content[appLang].home.slider.page2.title }}
                            </span>
                        </h1>
                        <p class="pl-0 pr-3">
                            {{ content[appLang].home.slider.page2.sub }}
                        </p>
                    </div>
                </div>
            </slide>
            <slide class="bg-light p-relative">
                <div class="row pt-5">
                    <div class="col-2"></div>
                    <div class="col-4 text-center">
                        <img src="@/assets/img/misc/15_years.jpg" class="d-block m-auto fifteen-years">
                        <h1 class="text-heavy text-gray hide-on-mobile">{{ content[appLang].home.slider.page3.yearsOfExperience }}</h1>
                        <p class="show-on-mobile text-gray p0">
                            {{ content[appLang].home.slider.page3.sub }}
                        </p>
                    </div>
                    <div class="col-6 text-left pt-3 p-relative">
                        <h1 class="text-display-5 title">
                            <span class="text-untransformed font-body text-primary">
                                {{ content[appLang].home.slider.page3.title }}
                            </span>
                        </h1>
                        <p class="text-gray p0">
                            {{ content[appLang].home.slider.page3.sub }}
                        </p>
                        <div class="bar-separator"></div>
                    </div>
                </div>
                <div class="square top-left-square"></div>
                <div class="square bottom-left-square"></div>
                <div class="square top-right-square"></div>
                <div class="square bottom-right-square-1"></div>
                <div class="square bottom-right-square-2"></div>
            </slide>
        </carousel>
    </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide,
    },
    computed: {
        appLang(){
            return this.$store.state.app.lang
        },
        content(){
            return this.$store.state.content
        },
    },
    data(){
        return {
            slideIndex: 0,
        }
    },
    methods: {
        onPageChange(idx){
            this.slideIndex = idx
        },
    }
}
</script>

<style scoped>
section{
    padding: 0;
    transition: all 0.3s;
}
section > *{
    max-width: 100%;
}
section p{
    padding: 0 6em;
    font-weight: 500;
}
.make-it-simple{
    width: 24em;
}
.first-slide-misc-bg{
    background: rgb(255,255,255);
    background: -moz-linear-gradient(90deg, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);
    background: -webkit-linear-gradient(90deg, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);
    background: linear-gradient(90deg, rgba(255,255,255,1) 75%, rgba(255,255,255,0) 100%);
    width: 80%;
    z-index: -1;
}
.first-slide-bg{
    width: 40vw;
    z-index: -2
}
.second-slide{
    background-size: cover;
    background-position: left;
}
.fifteen-years{
    width: 16em;
}
.square{
    background: var(--light);
    position: absolute;
    border: solid 6px var(--gray);
    opacity: 0.6;
    z-index: 0;
}
.square.top-left-square{
    top: -6px;
    left: -6px;
    width: 12em;
    height: 4em;
}
.square.bottom-left-square{
    bottom: -6px;
    left: -6px;
    width: 4em;
    height: 12em;
    border-color: var(--primary);
}
.square.top-right-square{
    top: -6px;
    right: -6px;
    width: 3em;
    height: 9em;
    border-color: var(--primary);
}
.square.bottom-right-square-1{
    bottom: -6px;
    right: -6px;
    width: 3em;
    height: 12em;
}
.square.bottom-right-square-2{
    bottom: -6px;
    right: -6px;
    width: 12em;
    height: 2em;
}
.bar-separator{
    position: absolute;
    width: 6px;
    height: 12em;
    background: var(--gray);
    border-radius: 36px;
    bottom: -2em;
    left: -2em;
    opacity: 0.6;
}
.show-on-mobile{
    display: none;
}
@media (max-width: 1024px){
    section p{
        padding: 0;
    }
    .second-slide{
        background: var(--dark-green);
        background-image: initial!important;
    }
    .second-slide .text-left{
        text-align: center;
        width: 100%;
        padding-left: 1em;
        padding-right: 1em;
    }
}
@media (max-width: 719px){
    .first-slide-bg{
        display: none;
    }
    .row > .col-6:first-child{
        text-align: center;
    }
    .row > .col-6:last-child{
        display: none;
        padding: 0!important;
    }
    .second-slide p{
        padding: 0!important;
    }
    .show-on-mobile{
        display: block;
    }
    .hide-on-mobile{
        display: none;
    }
    .square{
        opacity: 0.1;
    }
}
@media (max-width: 420px){
    .second-slide .text-left{
        padding-top: 3em;
    }
}
</style>