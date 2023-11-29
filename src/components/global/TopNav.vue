<template>
    <nav class="p-fixed d-flex">
        <div class="nav-content d-flex">
            <div class="mr-auto d-flex">
                <router-link to="/" tag="div" class="pointer logo mt-auto mb-auto mr-2">
                    <img src="@/assets/img/branding/logo.svg" alt="logo">
                </router-link>
            </div>
            <div class="ml-auto d-flex">
                <ul class="menu mt-auto mb-auto">
                    <li v-for="link in navLinks" :key="link.path" :class="{'has-sub-menu': link.options.length > 0}">
                        <div v-if="link.options.length > 0">
                            <router-link :to="link.path">
                                {{ link.name }}
                            </router-link>
                            <ul class="sub-menu">
                                <li v-for="option in link.options" :key="option.id" class="p-relative">
                                    <router-link v-if="!option.url" :to="option.path">
                                        {{ option.name }}
                                    </router-link>
                                    <a v-else :href="option.url">
                                        {{ option.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <router-link v-else-if="!link.external" :to="link.path">
                            {{ link.name }}
                        </router-link>
                        <a v-else :href="link.path">
                            {{ link.name }}
                        </a>
                    </li>
                    <li>
                        <lang-picker class="ml-2"></lang-picker>
                    </li>
                    <li>
                        <router-link tag="button" to="/contact">
                            {{ content[appLang].home.freeTrial }}
                        </router-link>
                    </li>
                </ul>
                <div class="menu-toggle" @click="isMobileNavOpen = true">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="nav-mobile-overlay" :class="{open: isMobileNavOpen}" @click="isMobileNavOpen = false"></div>
        <div class="nav-mobile" :class="{open: isMobileNavOpen}">
            <ul class="menu mt-auto mb-auto">
                <li>
                    <button class="ml-auto" @click="isMobileNavOpen = false">X</button>
                </li>
                <li>
                    <router-link to="/" @click.native="isMobileNavOpen = false">{{ content[appLang].topNav.home }}</router-link>
                </li>
                <li v-for="link in navLinks" :key="link.path">
                    <div v-if="link.options.length > 0">
                        <router-link :to="link.path" @click.native="isMobileNavOpen = false">
                            {{ link.name }}
                        </router-link>
                        <ul class="sub-menu-mobile">
                            <li v-for="option in link.options" :key="option.id" class="p-relative">
                                <router-link :to="option.path" @click.native="isMobileNavOpen = false">
                                    <small>{{ option.name }}</small>
                                </router-link>
                            </li>
                        </ul>

                    </div>
                    <router-link v-else-if="!link.external" :to="link.path" @click.native="isMobileNavOpen = false">
                        {{ link.name }}
                    </router-link>
                    <a v-else :href="link.path">
                        {{ link.name }}
                    </a>
                </li>
                <li>
                    <lang-picker></lang-picker>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import langPicker from '@/components/global/LangPicker'
export default {
    components: {
        langPicker
    },
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
        pricing() {
            return this.content[this.appLang].home.pricing
        },
        partners(){
            return this.content[this.appLang].home.partners
        },
        navLinks(){
            return [
                {
                    name: this.content[this.appLang].topNav.services, 
                    path: '/services',
                    external: false,
                    options: this.services
                },
                {
                    name: this.content[this.appLang].topNav.us, 
                    path: '/us',
                    external: false,
                    options: [],
                },
                {
                    name: this.content[this.appLang].topNav.contact, 
                    path: '/contact',
                    external: false,
                    options: [],
                },
                {
                    name: this.content[this.appLang].topNav.talent, 
                    path: 'https://drpmexico.freshteam.com/jobs',
                    external: true,
                    options: [],
                },
                {
                    name: this.content[this.appLang].topNav.support, 
                    path: 'https://support.drpmexico.com/support/home',
                    external: true,
                    options: [],
                },
                {
                    name: this.content[this.appLang].topNav.partners, 
                    path: '/',
                    external: true,
                    options: this.partners,
                },
                {
                    name: this.content[this.appLang].topNav.price,
                    path: '/',
                    external: false,
                    options: this.pricing
                }
            ]
        }
    },
    data(){
        return {
            isMobileNavOpen: false,
        }
    },
    mounted(){
        document.addEventListener('keyup', (ev)=>{
            if(ev.keyCode==27)
                this.isMobileNavOpen = false
        })
    },
}
</script>

<style lang="scss" scoped>
nav{
    box-shadow: 0 0 15px 1px rgb(0 0 0 / 7%);
    background: var(--foreground);
    color: var(--light);
}
.logo{
    width: 10em;
}
.menu{
    list-style: none;
    flex-flow: row wrap;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
}
.menu > li{
    position: relative;
    display: flex;
    padding: 4px 8px;
    text-transform: uppercase;
    font-size: 11px;
    line-height: 18px;
    font-weight: 500;
    letter-spacing: .5px;
    margin: auto;
}
li a{
    text-decoration: none;
    border-bottom: none;
    transition: all 0.1s;
}
li > button{
    padding: 4px 12px;
}
.menu-toggle{
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
    display: none;
    margin: auto;
}
.menu-toggle > span{
    height: 2px;
    width: 100%;
    background: var(--light);
    display: block;
    margin: 4px 0;
    transition: all 0.1s;
}
.menu-toggle:hover > span:first-child{
    transform: translateY(3px);
}
.menu-toggle:hover > span:last-child{
    transform: translateY(-3px);
}
.nav-mobile{
    display: none;
    transform: translate3d(100%,0,0);
    will-change: transform;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background: inherit;
    padding: 15px;
    width: 320px;
    max-width: 100%;
    transition: transform 0.3s;
}
.nav-mobile.open{
    transform: translate3d(0,0,0);
    overflow: auto;
}
.nav-mobile-overlay{
    display: none;
    will-change: visibility;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,0.4);
    height: 100vh;
    backdrop-filter: blur(24px);
    transition: 0.2s;
}
.nav-mobile-overlay.open{
    visibility: visible;
    opacity: 1;
}
.sub-menu{
    position: absolute;
    background: var(--foreground);
    padding: 1.5em;
    box-shadow: 0 12px 12px rgba(0,0,0,0.08);
    transition: all 0.1s;
    list-style-type: none;
    opacity: 0;
    visibility: hidden;
    transform: scale(0);
}
.sub-menu li{
    padding: 1em 0;
}
.has-sub-menu:hover .sub-menu{
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}
.sub-menu-mobile{
    padding-left: 0.5em;
    color: var(--vanished);
}
.sub-menu-mobile li{
    line-height: 2.5;
}
@media (max-width: 1024px){
    nav{
        padding: 25px;
    }
    .nav-mobile, .nav-mobile-overlay{
        display: block;
    }
    .menu:not(.nav-mobile .menu){
        display: none;
    }
    .nav-mobile .menu{
        display: list-item;
    }
    .nav-mobile .menu > li{
        font-size: var(--font-size-md);
        line-height: 3em;
    }
    .nav-mobile .menu > li > a{
        width: 100%;
    }
    .nav-mobile .menu > li a:before{
        display: none;
    }
    .menu-toggle{
        display: grid;
    }
    .logo{
        width: 8em;
    }
}
@media (max-width: 512px){
    nav{
        padding: 15px;
    }
}
</style>