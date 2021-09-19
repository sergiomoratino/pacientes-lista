<template>
  <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="table-responsive">
               <table class="table">
                  <thead class="thead-dark">
                     <tr>
                        <th scope="col">Nombre y Apellidos</th>
                        <th scope="col">Clinica</th>
                        <th scope="col">Dirección</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="paciente of pacientes" :key="paciente">
                        <th scope="row">{{ paciente.datos_paciente.nombre }} {{ paciente.datos_paciente.apellidos }}</th>                       
                        <td>{{ paciente.ficha_dental.clinica }}</td>
                        <td>{{ paciente.ficha_dental.estado }}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
/*** 
Para continuar con la visualización requerida de la Tabla, 
había planteado utilizar el framework Quasar usando las etiquetas
q-table 
***/

export default {

   props: {
      pacientes: Object
   },

   setup() {
      return{
      }
   },
}
</script>



