<template>
    <div>
        <section class="bg-secondary"
            :style="{ backgroundImage: 'url(' + require('@/assets/img/misc/bg_white_waves.svg') + ')' }">
            <div class="row">
                <div class="col-6">
                    <h1 class="text-heavy title text-display-3 mb-auto">
                        {{ content[appLang].contact.form.cta }}
                    </h1>
                    <p>
                        {{ content[appLang].contact.form.ctaSub }}
                    </p>
                </div>
                <div class="col-6">
                    <sales-form :captchaSettings="{ keyname: 'drpmx', fallback: 'true', orgId: '00D6A000000fO0d', ts: '' }"
                        oid="00D6A000000fO0d" retURL="http://www.drpmexico.com/thankyou" />
                </div>
                <!-- <div class="col-6">
                    <contact-form />
                </div> -->
            </div>
        </section>
    </div>
</template>

<script>
// import contactForm from '@/components/contact/ContactForm'
import SalesForm from '@/components/contact/SalesForm.vue'
export default {
    components: {
        SalesForm,
        // contactForm
    },
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