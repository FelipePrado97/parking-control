<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="btn btn-light" @click="listar">Listar Moradores</button>
        <button class="btn btn-light" @click="cadastrar">Cadastrar Moradores</button>
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
        }
    }
}
</script>

<style scoped>

</style>