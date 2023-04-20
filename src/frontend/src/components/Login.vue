<template>
    <form @submit.prevent="submitForm">
        <div v-if="authError" class="error-message">{{ authError }}</div>
        <label>
            Email:
            <input v-model="username" type="string" required>
        </label>
        <br>
        <label>
            Password:
            <input v-model="password" type="password" required>
        </label>
        <br>
        <button type="submit">Log in</button>
    </form>

</template>

<script>
import api from "@/services/api";

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
            authError: ''
        };
    },
    methods: {
        async submitForm() {
            const credentials = `${this.username}:${this.password}`;
            const headers = { Authorization: `Basic ${btoa(credentials)}` };
            try {
                const response = await api.get('', { headers });
                console.log(response.data);
                // Armazena as credenciais no armazenamento local
                localStorage.setItem('credentials', credentials);
                // Redireciona o usuário para outra página
                this.$router.push('/moradores');
            } catch (error) {
                console.error(error);
                this.authError = 'Credenciais inválidas.';
            }
        }
    }
};
</script>

<style>
.error-message {
    color: red;
}
</style>