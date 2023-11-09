<template>
    <form class="form-block" @submit.prevent="submitContactForm" ref="form">
        <p class="text-gray">
            {{ content[appLang].contact.form.title }}
        </p>
        <input type="text" :placeholder="`${content[appLang].contact.form.fields.name}*`" name="nam" required maxlength="199">
        <input type="text" :placeholder="`${content[appLang].contact.form.fields.company}`" name="company" maxlength="199">
        <input type="text" :placeholder="`${content[appLang].contact.form.fields.position}`" name="position" maxlength="199">
        <input type="text" :placeholder="`${content[appLang].contact.form.fields.phone}`" name="phone" maxlength="199">
        <input type="email" :placeholder="`${content[appLang].contact.form.fields.mail}*`" name="email" maxlength="199" required>
        <textarea :placeholder="`${content[appLang].contact.form.fields.message}*`" name="message" minlength="10" maxlength="1000" required></textarea>
        <div class="g-recaptcha mb-1"
            :data-sitekey="contactSettings.recaptchaSiteKey">
        </div>
        
        <button class="d-block ml-auto w-100" :disabled="isLoading">
            <span v-if="isLoading">
                {{ content[appLang].contact.form.isLoading }}...
            </span>
            <span v-else>
                {{ content[appLang].contact.form.fields.submit }}
            </span>
        </button>
    </form>
</template>

<script>
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
    computed: {
        appLang(){
            return this.$store.state.app.lang
        },
        content(){
            return this.$store.state.content
        },
        contactSettings(){
            return this.$store.state.contact
        },
    },
    data(){
        return {
            isLoading: false,
        }
    },
    methods: {
        submitContactForm(ev){
            let form = ev.target
            let formData = new FormData(form)

            if( !this.isCaptchaChecked() )
                return alert( this.content[this.appLang].contact.form.recaptchaUncheked )

            this.isLoading = true
            window.axios.post(this.contactSettings.url, formData)
            .then(r=>{
                let data = r.data
                if( data.success ){
                    alert( this.content[this.appLang].contact.form.successMessage )
                    this.resetForm()
                }
            })
            .catch(err=>{
                console.warn(err)
                alert( this.content[this.appLang].contact.form.failMessage )
                window.grecaptcha.reset()
            })
            .finally(()=>{
                setTimeout(()=>{
                    this.isLoading = false
                }, 300)
            })
        },
        isCaptchaChecked(){
            let r = window.grecaptcha
            return r && r.getResponse().length !== 0;
        },
        resetForm(){
            this.$refs.form.reset()
            window.grecaptcha.reset()
        }
    }
}
</script>

<style scoped>
.g-recaptcha{
    transform-origin: 0 0;
}
@media (max-width: 1024px){
    .g-recaptcha{
        transform: scale(0.77);
    }
}
@media (max-width: 719px){
    .form-block{
        padding: 1em;
    }
    .g-recaptcha{
        transform: scale(0.7);
    }
}
@media (max-width: 480px){
    section{
        padding: 1em;
    }
}
</style>