<template>
    <section>
        <div class="row mt-1 mb-1">
            <div class="col-12 d-flex">
                <div class="m-auto text-center main-frame">
                    <img src="@/assets/img/icons/astronaut.svg" class="icon-xxl">
                    <h1 class="mt-auto mb-auto text-display-4">404</h1>
                    <p>{{ content[appLang].notFound.message }}</p>
                    <router-link to="/" tag="button">
                        {{ content[appLang].notFound.goBack }}
                    </router-link>
                </div>
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
    },
    head: {
        title: {
            inner: '404'
        },
    },
    mounted(){
        location.href = '#'
    },
}
</script>

<style scoped>
.main-frame{
    background: var(--vanished);
    padding: 4em 1em;
    border-radius: 50%;
}
</style>