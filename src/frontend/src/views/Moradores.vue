<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-opacity-80 ">
        <button class="btn btn-light" @click="listar">Listar Moradores</button>
        <button class="btn btn-light" @click="cadastrar">Cadastrar Moradores</button>
        <button class="btn btn-danger" @click="logout">Logout</button>
    </nav>
       <div v-show="ativarLista"><ListaMoradores/></div>
        <div v-show="ativarAdicionar"><AdicionaMoradores /></div>


</template>

<script>
import ListaMoradores from "@/components/ListaMoradores.vue";
import AdicionaMoradores from "@/components/AdicionaMoradores.vue";
import {RouterLink} from "vue-router";
import EditarMorador from "@/components/EditarMorador.vue";

export default {
    name: "moradores",
    components: {
        RouterLink,
        AdicionaMoradores,
        ListaMoradores,
        EditarMorador
    },
    data() {
        return {
            ativarLista: true,
            ativarAdicionar: false
        }
    },
    methods: {
        listar() {
            this.ativarLista = !this.ativarLista
            this.ativarAdicionar = false
        },
        cadastrar() {
            this.ativarAdicionar = !this.ativarAdicionar
            this.ativarLista = false
        },
        logout() {
            localStorage.removeItem('credentials');
            this.$router.push('/');
        },
    }
}
</script>

<style scoped>

</style>