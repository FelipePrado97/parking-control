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
          <tr v-for="(morador,id) in displayedItems" :key ="id">
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

    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="setPage(currentPage - 1)">
                    Anterior
                </a>
            </li>

            <li class="page-item" v-for="pagina in numeroPaginas" :key="pagina" :class="{ active: pagina === currentPage }">
                <a class="page-link" href="#" @click.prevent="setPage(pagina)">
                    {{ pagina }}
                </a>
            </li>

            <li class="page-item" :class="{ disabled: currentPage === numeroPaginas }">
                <a class="page-link" href="#" @click.prevent="setPage(currentPage + 1)">
                    Próxima
                </a>
            </li>
        </ul>
    </nav>

</template>

<script>
import api from "@/services/api";
import router from "@/router";
import Paginate from 'vue3-paginate';
import {ref} from "vue";

export default {
    name: "ListaMoradores",
    components: {
        Paginate,
    },
    data(){
        return {
            currentPage: ref(1),
            itemsPerPage: ref(5),
            moradoresList: [],
            usuariosPaginados: '',
            numeroPaginas: ''
        }
    },
    computed: {

        displayedItems() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.moradoresList.slice(startIndex, endIndex);
        },


    },
    mounted() {
        api.get("").then(response => {
            //console.log(response.data.content)
            this.moradoresList = response.data.content
            this.numeroPaginas =  Math.ceil(this.moradoresList.length / this.itemsPerPage);
        });
    },
    methods: {
        deletarMorador(id) {
            console.log(id)
            if (confirm("Você tem certeza que deseja exluir este morador?")){
                api.delete(''+id)
                    .then(response => {
                        alert('Usuário excluido com sucesso!');
                        location.reload()

                    })
                    .catch(error => {
                        console.error(error.code);
                        if (error.message === 'Request failed with status code 403'){
                            alert('Acesso negado. Autenticação ou autorização insuficientes.');
                        }else{
                            alert(error.message);
                        }

                    });
                //location.reload();
            }

        },
        editarMorador(id) {
            router.push({ name: "editarmorador", params: {user: id}})
        },
        setPage(page) {
            this.currentPage = page;
        },
    }
}
</script>

<style scoped>
.pagination {
    z-index: 1;
}
</style>