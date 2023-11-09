<template>
    <div>
        <carousel-section></carousel-section>
        <service-section></service-section>
        <section class="bg-light">
            <div class="row mt-3 mb-3">
                <div class="col-6 d-flex" style="height:482px">
                    <div class="m-auto">
                        <h1 class="mt-auto text-display-5">
                            <span class="text-primary text-untransformed font-body">
                                {{ content[appLang].home.cta1.title }}
                            </span>
                        </h1>
                        <p>
                            {{ content[appLang].home.cta1.description }}
                        </p>
                        <router-link to="/us" tag="button">
                            {{ content[appLang].home.learnMore }}
                        </router-link>
                    </div>
                </div>
                <div class="col-6">
                    <img src="@/assets/img/misc/comunications.jpg" class="d-block m-auto">
                </div>
            </div>
        </section>
        <certs-section></certs-section>
        <success-stories-section></success-stories-section>
        <customers-section></customers-section>
    </div>
</template>

<script>
import carouselSection from '@/components/home/CarouselSection'
import serviceSection from '@/components/home/ServiceSection'
import certsSection from '@/components/home/CertsSection'
import successStoriesSection from '@/components/home/SuccessStoriesSection'
import customersSection from '@/components/home/CustomersSection'
export default {
    components: {
        carouselSection,
        serviceSection,
        certsSection,
        successStoriesSection,
        customersSection
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
                inner: this.content[this.appLang].topNav.home
            }
        },
    }
}
</script>

<style scoped>

</style>