<template>
    <div>
        <section class="bg-light icon-bg" :style="{backgroundImage: `url(${require('@/assets/img/misc/services_bg.jpg')})`}">
            <div class="row pb-3 pt-1">
                <div class="col-6">
                    <h1 
                        class="text-heavy text-display-5 mb-auto"
                        v-html="content[appLang].services.title">
                    </h1>
                    <p class="mb-auto text-justify" 
                        v-html="content[appLang].services.description">
                    </p>
                </div>
                <div class="col-6"></div>
            </div>
        </section>
        <service-section></service-section>
    </div>
</template>

<script>
import serviceSection from '@/components/home/ServiceSection'
export default {
    components: {
        serviceSection,
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
@media (max-width: 1024px){
    br{
        display:contents;
    }
}
@media (max-width: 719px){
    section{
        text-align: center;
        background-image: initial!important;
    }
}
</style>