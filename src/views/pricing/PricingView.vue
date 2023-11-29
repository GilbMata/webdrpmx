<template>
    <div v-if="currentService" :key="serviceName">
        
        <div class="bg-light">
            <div class="sticky-menu" ref="stickyMenu">
                <a class="option" href="#section-what-it-is" :class="{ active: activeSubSection == '#section-what-it-is' }">
                    {{ currentService.tab }}
                </a>
                <a class="option" href="#section-benefits" :class="{ active: activeSubSection == '#section-benefits' }">
                    {{ currentService.content.benefits.title }}
                </a>
                <a class="option" href="#section-free-trial" :class="{ active: activeSubSection == '#section-free-trial' }">
                    {{ currentService.content.freeTrial.title }}
                </a>
                <a class="option" href="#section-features" :class="{ active: activeSubSection == '#section-features' }">
                    {{ currentService.content.features.title }}
                </a>
                <a class="option" href="#section-architecture"
                    :class="{ active: activeSubSection == '#section-architecture' }">
                    {{ serviceArchitecture.title }}
                </a>
                <a class="option" href="#section-pricing" :class="{ active: activeSubSection == '#section-pricing' }">
                    {{ content[appLang].pricing.title }}
                </a>
            </div>
            <div class="sections">
                <section id="section-what-it-is" class="bg-light">
                    <!-- <div class="row">
                        <div class="col-6 text-center">
                            <img :src="currentService.icon" class="icon-xxl d-block m-auto">
                            <h1 class="text-secondary mt-auto mb-auto font-body text-untransformed text-display-4">
                                {{ currentService.abbr }}
                            </h1>
                        </div>
                        <div class="col-6">
                            <h1 class="text-primary text-untransformed text-semi-heavy">
                                {{ currentService.name }}
                            </h1>
                            <p class="text-justify">
                                {{ currentService.description }}
                            </p>
                        </div>
                    </div>
                    <img src="@/assets/img/misc/balls_bottom_left.jpg" class="left-balls"> -->
                </section>
                <section id="section-benefits" class="bg-light pb-4">
                   
                </section>
                <section id="section-free-trial" class="bg-secondary">
                    
                </section>
                <section id="section-features" class="bg-light p-relative">
                   
                </section>
                <section id="section-architecture">
                    
                </section>
                <section id="section-pricing">
                    <component v-bind:is="currentServicePricing" class="tab"></component>
                </section>
            </div>
        </div>
        <div class="back-to-services">
            <router-link to="/services" tag="button" class="bg-primary text-light" :title="content[appLang].home.goBack">
                &larr; {{ content[appLang].topNav.services }}
            </router-link>
        </div>
    </div>
    <div v-else>
        <not-found-view />
    </div>
</template>

<script>
import notFoundView from '@/views/NotFoundView'
import PricingCbaas from "@/views/PrincingCbaas.vue";
import PricingCdraas from "@/views/PrincingCdraas.vue";

export default {
    components: {
        notFoundView,
        PricingCbaas,
        PricingCdraas,
    },
    mounted() {
        window.addEventListener('scroll', this.setupScrollingEvents, false)
        window.addEventListener('resize', this.handleResizing, false)
        this.setup()
    },
    destroyed() {
        window.removeEventListener('scroll', this.setupScrollingEvents, false)
        window.removeEventListener('resize', this.handleResizing, false)
    },
    computed: {
        appLang() {
            return this.$store.state.app.lang
        },
        content() {
            return this.$store.state.content
        },
        services() {
            return this.content[this.appLang].home.services
        },
        serviceName() {
            return this.$route.params.service
        },
        currentService() {
            return this.services.find(srv => srv.id == this.serviceName)
        },
        serviceFeatures() {
            return this.currentService.content.features.list || []
        },
        selectedFeature() {
            return this.serviceFeatures.find(ft => ft.selected) || {}
        },
        serviceBenefits() {
            return this.currentService.content.benefits.list || []
        },
        serviceArchitecture() {
            return this.currentService.content.architecture || {}
        },
        serviceArchitectureSteps() {
            return this.serviceArchitecture.steps || []
        },
        currentServicePricing() {
            return "PricingC" + this.serviceName
        }
    },
    watch: {
        currentService() {
            this.setup()
        }
    },
    data() {
        return {
            topHeight: 0, // 183px
            subSections: [],
            activeSubSection: '#section-what-it-is',
        }
    },
    methods: {
        setup() {
            if (!location.hash)
                location.href = '#'
            else
                this.activeSubSection = location.hash

        
        },
        selectFeature(feature) {
            this.serviceFeatures.forEach(ft => ft.selected = false)

            feature.selected = true
        },
        setupScrollingEvents() {
            this.subSections.forEach((el) => {
                let elementHeight = el.clientHeight
                let scrollTop = el.getBoundingClientRect().top

                if (
                    (scrollTop - this.topHeight) <= 0
                    &&
                    (scrollTop - this.topHeight) >= (elementHeight * -1)
                ) {
                    this.activeSubSection = `#${el.id}`
                }
            })
        },
        handleResizing() {
            if (this.__resizeDebounced)
                clearTimeout(this.__resizeDebounced)

            this.__resizeDebounced = setTimeout(() => {
                this.setup()
            }, 100)
        }
    },
    head: {
        title() {
            return {
                inner: this.currentService ? this.currentService.name : '404'
            }
        },
    }
}
</script>

<style scoped>
.sticky-menu {
    display: flex;
    width: 100%;
    position: sticky;
    top: 5em;
    border-bottom: solid 2px var(--gray);
    z-index: 3;
    padding-top: 1em;
    background: var(--light);
    margin-bottom: 3em;
}

.sticky-menu .option {
    width: 100%;
    display: block;
    text-align: center;
    cursor: pointer;
    margin: 0 0.5em;
    padding: 0.25em;
    transition: all .1s;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom: none;
}

.sticky-menu .option:before {
    display: none;
}

.sticky-menu .option:hover {
    background: var(--vanished);
}

.sticky-menu .option.active {
    background: var(--secondary);
}

.sections section {
    scroll-margin-top: 8em;
}

#section-features>.row {
    z-index: 1;
}

.white-shadow {
    background: rgb(255, 255, 255);
    background: -moz-linear-gradient(90deg, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 0) 100%);
    background: -webkit-linear-gradient(90deg, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 0) 100%);
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#ffffff", GradientType=1);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
}

.selected-benefit-image {
    position: absolute;
    right: 0px;
    top: 5em;
    width: 50vw;
    bottom: 5em;
}

.flex-centered {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.right-balls {
    position: absolute;
    right: 0;
    bottom: 4em;
    width: 10em;
}

.left-balls {
    position: absolute;
    left: 0;
    bottom: 4em;
    width: 10em;
}

/*******************/
.feature-list {
    padding: 0;
    border-left: solid 2px var(--gray);
    user-select: none;
}

.feature-list li {
    padding: 0.5em;
    border-left: solid 6px transparent;
    cursor: pointer;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 36px;
}

.feature-list li:hover {
    background-color: var(--light-primary);
}

.feature-list li.selected {
    color: var(--light);
    border-left: solid 6px var(--primary);
    background: var(--primary);
}

.feature-showcase {
    display: flex;
    height: 17em;
}

.feature-showcase p {
    overflow: auto;
    margin: auto 0;
    max-height: 14em;
    z-index: 2;
    max-width: 22em;
}

.architecture-step {
    position: relative;
}

.architecture-step h4>span:first-child {
    min-width: 2em;
    margin-left: auto;
    text-align: right;
    font-size: var(--font-size-xxl);
    margin-top: auto;
    margin-bottom: auto;
}

.architecture-step h4>span:last-child {
    margin-right: auto;
    font-weight: 500;
    font-family: var(--body-font);
    max-width: 8em;
    text-align: left;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 8px;
}

#section-free-trial {
    min-height: auto;
}

#section-free-trial .col-6 {
    min-height: 8em;
}

.back-to-services {
    z-index: 9;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0.5em;
    opacity: 0.7;
}

.back-to-services>* {
    border-radius: 0;
    padding: 10px 18px;
}

@media (max-width: 719px) {
    #section-overview {
        background: var(--dark-green);
        background-image: none !important;
    }

    .feature-showcase {
        height: 14em;
        overflow: auto;
    }

    .feature-showcase .icon-bg {
        min-width: 2em;
    }

    .feature-list {
        min-height: 16em;
    }

    .sticky-menu {
        overflow: auto;
    }

    .sticky-menu .option {
        min-width: 6em;
    }

    .left-balls,
    .right-balls,
    .white-shadow,
    .selected-benefit-image {
        display: none;
    }
}
</style>