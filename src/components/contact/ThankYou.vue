<template>
    <!-- <form class="form-block" @submit.prevent="submitContactForm" ref="form"> -->
    <SalesforceForm :captchaSettings="{ keyname: 'Fraga', fallback: 'true', orgId: '00D6A000000fO0d', ts: '' }" oid="00D6A000000fO0d"
        retURL="http://www.drpmexico.com/"></SalesforceForm>
</template>

<script>
import SalesforceForm from './SalesForm.vue';
export default {
    head: {
        script: [
            {
                type: 'text/javascript',
                src: 'https://www.google.com/recaptcha/api.js',
                async: true,
            }
        ],
    },
    components: {
        SalesforceForm,
    },
    computed: {
        appLang() {
            return this.$store.state.app.lang
        },
        content() {
            return this.$store.state.content
        },
        contactSettings() {
            return this.$store.state.contact
        },
    },
    data() {
        return {
            isLoading: false,
        }
    },
    methods: {
        submitContactForm(ev) {
            let form = ev.target
            let formData = new FormData(form)

            if (!this.isCaptchaChecked())
                return alert(this.content[this.appLang].contact.form.recaptchaUncheked)

            this.isLoading = true
            window.axios.post(this.contactSettings.url, formData)
                .then(r => {
                    let data = r.data
                    if (data.success) {
                        alert(this.content[this.appLang].contact.form.successMessage)
                        this.resetForm()
                    }
                })
                .catch(err => {
                    console.warn(err)
                    alert(this.content[this.appLang].contact.form.failMessage)
                    window.grecaptcha.reset()
                })
                .finally(() => {
                    setTimeout(() => {
                        this.isLoading = false
                    }, 300)
                })
        },
        isCaptchaChecked() {
            let r = window.grecaptcha
            return r && r.getResponse().length !== 0;
        },
        resetForm() {
            this.$refs.form.reset()
            window.grecaptcha.reset()
        }

    }
}
</script>
<!-- <script src="https://www.google.com/recaptcha/api.js"></script> -->
<!-- <script>
 function timestamp() {
      var response = document.getElementById("g-recaptcha-response");
      // console.log("🚀 ~ timestamp ~ response:", response)
      if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        console.log("🚀 ~ timestamp ~ elems:", elems)
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
      }
    } setInterval(timestamp, 500);
</script> -->



<style scoped>
.g-recaptcha {
    transform-origin: 0 0;
}

@media (max-width: 1024px) {
    .g-recaptcha {
        transform: scale(0.77);
    }
}

@media (max-width: 719px) {
    .form-block {
        padding: 1em;
    }

    .g-recaptcha {
        transform: scale(0.7);
    }
}

@media (max-width: 480px) {
    section {
        padding: 1em;
    }
}
</style>