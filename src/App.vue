<template>


<div>


          <label>Pedido</label>
          <input type="number" placeholder="NUMERODOPEDIDO" v-model="pedido.numped" >

          <button class="waves-effect waves-light btn-small"  @click="listar()"  >Pesquisar</button>

     <!-- {{this.pedido.NUMPED}} -->

 <ul v-for="pedido of pedidos"> 
  <li>Cliente: {{ pedido.CLIENTE }}</li><br>
  <li>Pedido Nº: {{ pedido.NUMPED }}</li> <br> 
  <li>CARREGAMENTO Nº: {{ pedido.NUMCAR }}</li> <br> 
  <li style="color:red;" >Status: {{ pedido.STATUS }}</li>
</ul>


<!--

        <table>

        <thead>

          <tr>
            <th>PEDIDO</th>
            <th>CLIENTE</th>
            <th>CODCLI</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="pedido of pedidos">

            <td>{{ pedido.NUMPED }}</td> <!-- //VARIAVEIS JSON // -->
     <!--       <td>{{ pedido.CLIENTE }}</td>
            <td>{{ pedido.CODCLI }}</td>
            <td>
            </td>

          </tr>

        </tbody>
      
      </table>

-->


      </div>
</template>

<script>

  import Pedido from './services/pedidos'

export default {

  name: 'app',
    data () {
    return {
      pedido:{
        numped: '',
        cliente: '',
        codcli: ''
      },
      pedidos: [],
      errors: []
    }
  },
  mounted(){

     this.listar()

  },


  methods:{
    
    listar(){
      Pedido.listar(this.pedido.numped).then(resposta => {
        this.pedidos = resposta.data
        console.log(resposta)
      }).catch(e => {
        console.log(e)
      })
    }
}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
