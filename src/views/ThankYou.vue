<template>
    <div>
        <section class="bg-secondary"
            :style="{ backgroundImage: 'url(' + require('@/assets/img/misc/bg_white_waves.svg') + ')' }">
            <div class="row">
                <div class="col-6  mb-3 mt-3">
                    <h1 class="text-heavy title text-display-3 mb-auto">
                        {{ content[appLang].contact.form.thank }}
                    </h1>
                    <p>
                        {{ content[appLang].contact.form.thanksub }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    mounted() {
        location.href = '#'
    },
    computed: {
        appLang() {
            return this.$store.state.app.lang
        },
        content() {
            return this.$store.state.content
        },
    },
    head: {
        title() {
            return {
                inner: this.content[this.appLang].topNav.contact
            }
        },
    },

}
</script>

<style scoped>
section {
    background-size: cover;
}
</style>