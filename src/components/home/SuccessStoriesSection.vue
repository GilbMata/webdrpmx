<template>
    <section class="bg-dark-green text-light with-stickers">
        <div class="row section-subtitle">
            <div class="col-12">
                <h1 class="text-center title text-display-5 text-secondary">
                    {{ content[appLang].home.successCases }}
                </h1>
            </div>
        </div>
        <div v-for="story in successStories" :key="story.id" class="row mb-3">
            <div class="col-6 d-flex pr-3 pl-3 pb-3 pt-3">
                <img :src="story.image">
            </div>
            <div class="col-6">
                <h1 class="text-heavy mb-auto">
                    {{ story.customer }}
                </h1>
                <p>
                    {{ story.description }}
                </p>
                <a class="btn" :href="story.link" target="_blank">
                    {{ content[appLang].home.learnMore }}
                </a>
            </div>
        </div>
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
        successStories(){
            return this.content[this.appLang].home.successStories
        }
    },
}
</script>

<style scoped>
.icon-bg{
    background-origin: content-box;
    padding: 18%;
    margin: auto;
}
@media (max-width: 719px){
    .col-6{
        text-align: center;
    }
    .icon-bg{
        width: 12em;
        height: 12em;
    }
}
</style>