<template>
    <section class="bg-light pb-4" ref="section" :id="sectionId">
        <div class="clouds top-0 left-0" :style="{backgroundImage: `url(${require('@/assets/img/misc/clouds.png')})`}"></div>
        <div class="clouds bottom-0 right-0" :style="{backgroundImage: `url(${require('@/assets/img/misc/clouds.png')})`}"></div>
        <transition name="fade" mode="out-in">
            <div key="all" v-if="!selectedService">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-display-5 text-center">{{ content[appLang].home.ourServices }}</h1>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-3 service-item" v-for="(serv, idx) in services" :key="serv.id" :title="serv.name" @click="selectService(idx)">
                        <img :src="serv.icon" class="icon-xl d-block m-auto">
                        <h1 class="text-primary mt-auto mb-auto font-body text-untransformed text-semi-heavy">
                            {{ serv.abbr }}
                        </h1>
                        <small class="mt-auto">
                            {{ serv.name }}
                        </small>
                    </div>
                </div>
            </div>
            <div key="specific" class="row d-flex" v-else>
                <img :src="selectedService.icon" class="icon-xxxl d-block ml-auto mt-auto mb-auto mr-2">
                <div class="col-8 px-3">
                    <h1 class="text-primary text-display-5 font-body text-untransformed text-semi-heavy mb-auto">
                        {{ selectedService.abbr }}
                    </h1>
                    <small class="text-gray">
                        {{ selectedService.name }}
                    </small>
                    <p>
                        {{ selectedService.description }}
                    </p>
                    <router-link :to="selectedService.path" tag="button">
                        {{ content[appLang].home.learnMore }}
                    </router-link>
                    <button class="btn-ghost" @click="selectedServiceIdx = null" :title="content[appLang].home.goBack">
                        &larr;
                    </button>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
export default {
    destroyed(){
        window.removeEventListener("scroll", this.onScroll)
    },
    data(){
        return {
            sectionId: 'services-section',
            selectedServiceIdx: null,
        }
    },
    computed: {
        appLang(){
            return this.$store.state.app.lang
        },
        content(){
            return this.$store.state.content
        },
        selectedService(){
            return this.services[this.selectedServiceIdx]
        },
        services(){
            return this.content[this.appLang].home.services
        }
    },
    methods: {
        selectService(idx){
            this.selectedServiceIdx = idx
            if( window.innerWidth < 719 )
                location.href = `#${this.sectionId}`
        },
    }
}
</script>

<style scoped>
section{
    height: 460px;
}
section .row p{
    overflow: auto;
    max-height: 6em;
}
.clouds{
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
}
.clouds.bottom-0{
    transform: rotateY(180deg) rotateX(180deg);
}
.service-item{
    cursor: pointer;
}
.service-item img,
.service-item h1{
    transition: all 0.1s;
}
.service-item:hover img{
    transform: scale(1.3)
}
.service-item:hover h1{
    color: var(--secondary);
}
@media (max-width: 719px){
    section{
        height: 60em!important;
    }
    section .row.d-flex{
        display: block!important;
        text-align: center;
    }
    section .row.d-flex p{
        max-height: 26em;
    }
    section .row.d-flex img{
        margin: 4em auto auto!important;
    }
    .px-3{
        padding: 0;
    }
}
@media (max-width: 480px){

}
</style>