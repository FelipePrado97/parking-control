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
          <input type="text" class="form-control" placeholder="Apartamento:" v-mask="'###'" v-model="formData.apartment">
          <input type="text" class="form-control" placeholder="Bloco:" v-mask="'A'" v-model="formData.block">
          <input type="text" class="form-control" placeholder="Vaga" :value="combinacao" disabled>
      </div>
      <label><b>Dados do Veículo</b></label>
      <div class="form-group mb-2">
          <input type="text" class="form-control" id="placa" v-mask="'XXX-#X##'" name="placa" placeholder="Placa:" v-model="formData.licensePlateCar" >
          <input type="text" class="form-control" placeholder="Marca:" v-model="formData.brandCar">
          <input type="text" class="form-control" placeholder="Modelo:" v-model="formData.modelCar">
          <select class="form-control" v-model="formData.colorCar">
              <option disabled value="">Cor:</option>
              <option>Branco</option>
              <option>Vermelho</option>
              <option>Preto</option>
              <option>Prata</option>
              <option>Azul</option>
          </select>


      </div>
      <button type="submit" class="btn btn-primary">Cadastrar</button>


  </form>

    </div>
</template>

<script>

import api from "@/services/api";
import router from "@/router";

export default {
    name: "AdicionaMoradores",
    data () {
        return {
            formData :{
                licensePlateCar: "",
                brandCar: "",
                modelCar: "",
                colorCar: "",
                responsibleName: "",
                apartment: "",
                block: "",
                parkingSpotNumber: "",
            },
        }
    },
    computed:{
        combinacao(){
            return this.formData.parkingSpotNumber = this.formData.apartment + this.formData.block;
        }
    },
    methods: {

        adicionarMorador() {
            console.log(this.formData)
            api.post("",this.formData)
                .then(response => {
                    console.log(response)
                });
           router.replace({ name: 'moradores' })
           location.reload()

        }
    },

}
</script>

<style scoped>

</style>