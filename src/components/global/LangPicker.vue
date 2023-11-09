<template>
    <div class="d-flex">
        <img v-show="appLang == 'en'" src="@/assets/img/icons/us_flag.png" class="icon-md m-auto">
        <img v-show="appLang == 'es'" src="@/assets/img/icons/es_flag.png" class="icon-md m-auto">
        <select @change="$store.commit('setAppLang', $event.target.value)" :value="appLang">
            <option value="en">English</option>
            <option value="es">Español</option>
        </select>
    </div>
</template>

<script>
export default {
    computed: {
        appLang(){
            return this.$store.state.app.lang
        },
    }
}
</script>

<style scoped>
select{
    text-transform: uppercase;
    border: none;
    font-weight: 500;
}
select option{
    background: var(--foreground);
}
</style>