<template>
    <nav class="d-flex bg-foreground">
        <div class="nav-content">
            <div class="row">
                <div class="col-3">
                    <img src="@/assets/img/branding/logo.png" class="logo">
                </div>
                <div class="col-3">
                    <h4>{{ content[appLang].topNav.services }}</h4>
                    <ul class="list-unstyled">
                        <li v-for="service in services" :key="service.id">
                            <router-link :to="service.path" tag="span" class="pointer">
                                {{ service.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <h4>{{ content[appLang].topNav.contact }}</h4>
                    <ul class="list-unstyled">
                        <li>
                            <a :href="`tel:${content[appLang].contact.phone }`">
                                {{ content[appLang].contact.phone }}
                            </a>
                        </li>
                        <li>
                            <a :href="`mailto:${content[appLang].contact.email }`">
                                {{ content[appLang].contact.email }}
                            </a>
                        </li>
                        <li>
                            <a :href="content[appLang].contact.address.mapUrl" target="_blank">
                                {{ content[appLang].contact.address.street }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-3">
                    <h4>{{ content[appLang].contact.followUs }}</h4>
                    <ul class="list-unstyled">
                        <li v-for="sn in socialNets" :key="sn.url">
                            <a :href="sn.url" :title="sn.name" target="_blank" class="d-flex">
                                <img :src="sn.icon" class="icon-sm">
                                <span class="d-block ml-1 mt-auto mb-auto">{{ sn.name }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12 text-center">
                    <small>
                        {{ content[appLang].bottomNav.copy }} | 
                        <router-link to="/legal/privacy" class="static">
                            {{ content[appLang].bottomNav.privacy }}
                        </router-link>
                        |
                        <router-link to="/legal/sla" class="static">
                            {{ content[appLang].bottomNav.sla }}
                        </router-link>
                        |
                        <router-link to="/legal/uap" class="static">
                            {{ content[appLang].bottomNav.uap }}
                        </router-link>
                        |
                        <router-link to="/legal/terms" class="static">
                            {{ content[appLang].bottomNav.terms }}
                        </router-link>
                        |
                        <router-link to="/legal/agreement" class="static">
                            {{ content[appLang].bottomNav.agree }}
                        </router-link>
                    </small>
                </div>
            </div>
        </div>
    </nav>
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
        services(){
            return this.content[this.appLang].home.services
        },
        socialNets(){
            return this.content[this.appLang].contact.links
        }
    },
}
</script>

<style lang="scss" scoped>
nav{
    color: var(--light);
    padding-top: 50px;
    padding-bottom: 15px;
    font-size: 13px;
}
.logo{
    max-width: 250px;
    width: 100%;
}
ul{
    padding: 0;
    text-align: left;
}
ul > li{
    margin: 6px 0 0;
    padding: 7px 0 0;
}
a,a::before{
    text-decoration: none;
    border-bottom: none;
    background: transparent;
    transition: none!important;
}
a::before{
    height: 0!important;
}
li span:hover, a:hover{
    color: var(--light-primary)
}
</style>