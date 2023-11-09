<template>
    <section class="bg-light">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center title text-display-5 text-dark">{{ content[appLang].home.ourCustomers }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <carousel 
                    :per-page-custom="[[250, 1], [719, 2], [1024, 3]]" 
                    pagination-color="var(--light-primary)"
                    pagination-active-color="var(--primary)">
                    <slide v-for="(customer, idx) in customers" :key="customer.name">
                        <div class="slide-content text-center" :data-idx="idx" :title="customer.name">
                            <div class="icon-bg" 
                                :style="{backgroundImage: `url(${customer.logo})`}">
                            </div>
                            <h4 class="text-gray" hidden>
                                {{ customer.name }}
                            </h4>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
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
        customers(){
            return this.content[this.appLang].home.customers
        }
    }
}
</script>

<style scoped>
.icon-bg{
    background-origin: content-box;
    padding: 60px;
    margin: auto;
    border-radius: 50%;
    transition: all 0.1s;
    height: 16em;
    width: 16em;
}
.icon-bg:hover{
    transform: scale(1.1);
    background-blend-mode: initial;
}
.slide-content{
    padding: 1em 0;
}
[data-idx="3"] .icon-bg, [data-idx="4"] .icon-bg{
    padding: 107px;
}
[data-idx="5"] .icon-bg,[data-idx="6"] .icon-bg{
    padding: 80px;
}
@media (max-width:  480px) {
    .icon-bg{
        width: 12em;
        height: 12em;
    }
    [data-idx="3"] .icon-bg, [data-idx="4"] .icon-bg{
        padding: 80px;
    }
    [data-idx="5"] .icon-bg,[data-idx="6"] .icon-bg{
        padding: 61px;
    }
}
</style>