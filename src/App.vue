<template>
  <div>
    <div>
      <h1 align="center">Listado de pacientes</h1>
      <Table 
        :pacientes="pacientes"
      />
    </div>
  </div>
</template>

<script>

/***  
La obtenciones de los datos del archivo JSON
son recogidos con el store de VUEX
***/

import { useStore } from 'vuex'
import { computed, onMounted } from '@vue/runtime-core'
import Table from './components/Table'

export default {
  name: 'App',
  components: {
    Table
  },
  setup() {
    const clinica = useStore()
    onMounted(() => {
      clinica.dispatch('fetchData')
    })

    const pacientes = computed (()=> clinica.state.pacientes)

    return {pacientes}
  }
}
</script>

