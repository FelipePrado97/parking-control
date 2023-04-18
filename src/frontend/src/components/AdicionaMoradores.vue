<template>
    <div class="container">
        <h2><b>Cadastrar Morador</b></h2>
    </div>
    <div class="container">
  <form @submit.prevent="adicionarMorador">
      <label><b>Dados do Morador</b></label>
      <div class="form-group mb-2">
          <input type="text" class="form-control" placeholder="Nome:" v-model="formData.responsibleName">
      </div>
      <label><b>Dados do Apartamento</b></label>
      <div class="form-group mb-2">
          <input type="text" class="form-control" placeholder="Apartamento:" v-model="formData.apartment">
          <input type="text" class="form-control" placeholder="Bloco:" v-model="formData.block">
          <input type="text" class="form-control" placeholder="Vaga" v-model="formData.parkingSpotNumber">
      </div>
      <label><b>Dados do Veículo</b></label>
      <div class="form-group mb-2">
          <input type="text" class="form-control" placeholder="Placa:" v-model="formData.licensePlateCar">
          <input type="text" class="form-control" placeholder="Marca:" v-model="formData.brandCar">
          <input type="text" class="form-control" placeholder="Modelo:" v-model="formData.modelCar">
          <input type="text" class="form-control" placeholder="Cor:" v-model="formData.colorCar">
      </div>
      <button type="submit" class="btn btn-primary">Cadastrar</button>


  </form>
    </div>
</template>

<script>

import api from "@/services/api";
export default {
    name: "AdicionaMoradores",
    data () {
        return {
            formData :{
                parkingSpotNumber: "",
                licensePlateCar: "",
                brandCar: "",
                modelCar: "",
                colorCar: "",
                responsibleName: "",
                apartment: "",
                block: ""
            }
        }
    },
    methods: {
        adicionarMorador() {
            api.post("http://localhost:8080/parking-spot/",this.formData)
                .then(response => {
                    console.log(response)
                });
            location.replace("/moradores")
        }
    }
}
</script>

<style scoped>

</style>