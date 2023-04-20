<template>
    <div class="login-page">
        <h1>Login</h1>
        <Login :authError="authError" @submit-form="submitForm" />

    </div>
</template>

<script>

import api from "@/services/api";
import router from "@/router";
import Login from "@/components/Login.vue";
export default {
    name: "LoginPage",

    components: { Login },
    data() {
        return {
            authError: null
        };
    },

    methods: {
        submitForm(credentials) {
            // Aqui você pode fazer a chamada para a API de autenticação
            // e verificar se as credenciais são válidas
            // Se sim, redirecione o usuário para a página inicial do sistema
            // Se não, exiba uma mensagem de erro para o usuário
        }
    }
}
</script>

<style scoped>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>