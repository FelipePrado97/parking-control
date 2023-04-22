<template>
    <form>
        <label for="phone">Telefone:</label>
        <input type="text" id="phone" v-mask="'AAA-#X##'" v-model="phone" />
        <button type="submit">Registrar</button>
    </form>
</template>

<script>

export default {
    name: "Form",
    data() {
        return {
            phone: ''
        }
    },
    methods: {
        onSubmit() {
            // Lógica para enviar dados de registro
        }
    }
}
</script>

<style scoped>

</style>