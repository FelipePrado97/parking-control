<template>
  <table class="table table-hover table-dark table-striped table-bordered">
      <thead>
      <tr>
          <th scope="col">Nome</th>
          <th scope="col">Marca</th>
          <th scope="col">Carro</th>
          <th scope="col">Cor</th>
          <th scope="col">Placa</th>
          <th scope="col">Apartamento</th>
          <th scope="col">Vaga</th>
          <th scope="col">Ações</th>
      </tr>
      </thead>
      <tbody class="table-group-divider">
          <tr v-for="(morador,id) in moradoresList" :key ="id">
              <td>{{morador.responsibleName}}</td>
              <td>{{morador.brandCar}}</td>
              <td>{{morador.modelCar}}</td>
              <td>{{morador.colorCar}}</td>
              <td>{{morador.licensePlateCar}}</td>
              <td>{{morador.apartment}}{{morador.block}}</td>
              <td>{{morador.parkingSpotNumber}}</td>
              <td><button @click="editarMorador(morador.id)" class="btn btn-warning">Editar</button> <button @click="deletarMorador(morador.id)"  class="btn btn-dark">Deletar</button></td>
          </tr>
      </tbody>
  </table>


</template>

<script>
import api from "@/services/api";
import router from "@/router";

export default {
    name: "ListaMoradores",
    data(){
        return {
            moradoresList: []
        }
    },
    mounted() {
        api.get("").then(response => {
            //console.log(response.data.content)
            this.moradoresList = response.data.content
        });
    },
    methods: {
        deletarMorador(id) {
            console.log(id)
            if (confirm("Você tem certeza que deseja exluir este morador?")){
                api.delete('http://localhost:8080/parking-spot/'+id)
                    .then(response => {
                        console.log(response)
                    });
                location.reload();

            }

        },
        editarMorador(id) {
            router.push({ name: "editarmorador", params: {user: id}})
        }
    }
}
</script>

<style scoped>

</style>