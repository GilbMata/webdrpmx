<script>
export default {
    name: 'SalesforceForm',

    props: {
        oid: {
            type: String,
            required: true,
        },
        retURL: {
            type: String,
            required: true,
        },
    },
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
        appLang() {
            return this.$store.state.app.lang
        },
        content() {
            return this.$store.state.content
        },
        contactSettings() {
            return this.$store.state.contact
        },
        captchaIsChecked() {
            console.log(this.captchaSettings.response);
            return this.captchaSettings.response !== '';
        },
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            city: '',
            comments: '',
            timestamp: null,
            captchaSettings: { keyname: 'drpmx', fallback: 'true', orgId: '00D6A000000fO0d', ts: '' },
            isLoading: false,
        };
    },
    mounted() {
        this.updateTimestamp();
        setInterval(this.updateTimestamp, 500);
    },
    methods: {
        updateTimestamp() {
            this.timestamp = new Date().getTime();
            this.captchaSettings.ts = JSON.stringify(this.timestamp);
            // console.log(this.captchaSettings);
        },
        onSubmit() {
            // Envia el formulario al servidor
        },
        enableBtn() {
            document.getElementById("buttonsubmit").disabled = false;
            console.log('toggle');
        },
        onCaptchaCallback(response) {
            // Envía el formulario al servidor
            const formData = new FormData();
            formData.append('oid', this.oid);
            formData.append('retURL', this.retURL);
            formData.append('captcha_settings', JSON.stringify(this.captchaSettings));
            formData.append('g-recaptcha-response', response);
            if (!this.isCaptchaChecked())
                return alert(this.content[this.appLang].contact.form.recaptchaUncheked)

            console.log("🚀 ~ onCaptchaCallback ~ formData:", response)
            // Envía el formulario
            fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D6A000000fO0d', {
                method: 'POST',
                body: formData,
            })
                .then((response) => {
                    console.log("🚀 ~ .then ~ response:", response)
                    if (response.ok) {
                        console.log("🚀 ~ .then ~ response.ok:", response.ok)
                        // El formulario se envió correctamente
                    } else {
                        // El formulario no se envió correctamente
                    }
                })
                .catch((error) => {
                    console.log("🚀 ~ onCaptchaCallback ~ error:", error)
                    // Se produjo un error al enviar el formulario
                });
        },
        isCaptchaChecked() {
            let r = window.grecaptcha
            return r && r.getResponse().length !== 0;
        },
    },
};
</script>

<template>
    <div>

        <form class="form-block"
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D6A000000fO0d"
            method="POST">
            <!-- <form class="form-block" @submit.prevent="onCaptchaCallback" ref="form"> -->
            <p class="text-gray">
                {{ content[appLang].contact.form.title }}
            </p>
            <input type="hidden" name="oid" :value="oid">
            <input type="hidden" name="retURL" :value="retURL">
            <input type="hidden" name="captcha_settings" :value="JSON.stringify(captchaSettings)">
            <!-- <input type="hidden" name="debug" value=1>
            <input type="hidden" name="debugEmail" value="gmata@drpmexico.com"> -->
            <input type="text" name="first_name" v-model="firstName" placeholder="First Name">
            <input type="text" name="last_name" v-model="lastName" placeholder="Last Name">
            <input type="text" name="email" v-model="email" placeholder="Email">
            <input type="text" name="company" v-model="company" placeholder="Company">
            <input type="text" name="city" v-model="city" placeholder="City">
            <label for="country_code">Country</label><select id="country_code" name="country_code">
                <option value="">--None--</option>
                <option value="BR">Brazil</option>
                <option value="CA">Canada</option>
                <option value="CL">Chile</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="GT">Guatemala</option>
                <option value="MX">Mexico</option>
                <option value="NI">Nicaragua</option>
                <option value="PA">Panama</option>
                <option value="PE">Peru</option>
                <option value="US">United States</option>
                <option value="VE">Venezuela, Bolivarian Republic of</option>
            </select><br>

            <label for="state_code">State/Province</label><br> <select id="state_code" name="state_code">
                <option value="">--None--</option>
                <option value="AG">Aguascalientes</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="BC">Baja California</option>
                <option value="BS">Baja California Sur</option>
                <option value="CA">California</option>
                <option value="CM">Campeche</option>
                <option value="CS">Chiapas</option>
                <option value="CH">Chihuahua</option>
                <option value="CO">Coahuila</option>
                <option value="CL">Colima</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="DG">Durango</option>
                <option value="DF">Federal District</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="GT">Guanajuato</option>
                <option value="GR">Guerrero</option>
                <option value="HI">Hawaii</option>
                <option value="HG">Hidalgo</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="JA">Jalisco</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="ME">Mexico State</option>
                <option value="MI">Michigan</option>
                <option value="MI">Michoacán</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="MO">Morelos</option>
                <option value="NA">Nayarit</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="NL">Nuevo León</option>
                <option value="OA">Oaxaca</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="PB">Puebla</option>
                <option value="QE">Querétaro</option>
                <option value="QR">Quintana Roo</option>
                <option value="RI">Rhode Island</option>
                <option value="SL">San Luis Potosí</option>
                <option value="SI">Sinaloa</option>
                <option value="SO">Sonora</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TB">Tabasco</option>
                <option value="TM">Tamaulipas</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="TL">Tlaxcala</option>
                <option value="UT">Utah</option>
                <option value="VE">Veracruz</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
                <option value="YU">Yucatán</option>
                <option value="ZA">Zacatecas</option>
            </select><br>
            <textarea name="00N6A000009yqNX" v-model="comments" placeholder="Comments"></textarea>
            <div class="g-recaptcha mb-1" :data-sitekey="contactSettings.recaptchaSiteKeyDRP" data-callback="enableBtn">
            </div>

            <button id="buttonsubmit" class="d-block ml-auto w-100" type="submit" name="submit" value="Submit" disabled>
                {{ content[appLang].contact.form.fields.submit }}
            </button>
        </form>
    </div>
</template>

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