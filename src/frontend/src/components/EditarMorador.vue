<template>
    <div class="container">
        <h2><b>Editar Morador</b></h2>
    </div>
    <div class="container">
        <form @submit.prevent="editarMorador(moradorList)">
            <label><b>Dados do Morador</b></label>
            <div class="form-group mb-2">
                <input type="text" class="form-control" placeholder="Nome:" v-model="moradorList.responsibleName" >
            </div>
            <label><b>Dados do Apartamento</b></label>
            <div class="form-group mb-2">
                <input type="text" class="form-control" placeholder="Apartamento:" v-mask="'###'" v-model="moradorList.apartment" >
                <input type="text" class="form-control" placeholder="Bloco:" v-mask="'A'" v-model="moradorList.block" >
                <input type="text" class="form-control" placeholder="Vaga" :value="combinacao" disabled>
            </div>
            <label><b>Dados do Veículo</b></label>
            <div class="form-group mb-2">
                <input type="text" class="form-control" placeholder="Placa:" v-model="moradorList.licensePlateCar" >
                <input type="text" class="form-control" placeholder="Marca:" v-model="moradorList.brandCar" >
                <input type="text" class="form-control" placeholder="Modelo:" v-model="moradorList.modelCar" >
                <input type="text" class="form-control" placeholder="Cor:" v-model="moradorList.colorCar" >
            </div>
            <button @click="voltar()" class="btn btn-light">Cancelar</button>
            <button type="submit" class="btn btn-primary">Salvar</button>


        </form>
    </div>
</template>

<script>
import api from "@/services/api";
import router from "@/router";
export default {
    name: "EditarMorador",
    data () {
        return {
            moradorList: []
            }

    },
    computed:{
        combinacao(){
            return this.formData.parkingSpotNumber = this.formData.apartment + this.formData.block;
        }
    },
    mounted() {
        //console.log(this.$route.params)
        api.get(""+this.$route.params.user).then(response => {
            console.log(response.data)
            this.moradorList = response.data

            //console.log(this.moradorList.modelCar)
        });
    },
    methods: {
        editarMorador(moradorList) {
            console.log(this.moradorList)
            api.put(""+moradorList.id, {
                parkingSpotNumber: moradorList.parkingSpotNumber,
                licensePlateCar: moradorList.licensePlateCar,
                brandCar: moradorList.brandCar,
                modelCar: moradorList.modelCar,
                colorCar: moradorList.colorCar,
                responsibleName: moradorList.responsibleName,
                apartment: moradorList.apartment,
                block: moradorList.block
            })
                .then(response => {
                    console.log(response)
                });
            router.replace({name: "moradores"})
            location.reload()


        },
        voltar() {
            router.push({name: "moradores"})
        }
    }

}


</script>

<style scoped>

</style>