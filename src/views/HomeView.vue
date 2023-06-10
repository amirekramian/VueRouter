<template>
  <div class="home">
<h1>This is Home Page</h1>
<br>
<h2>refexample</h2>
{{refexample.name}}-{{refexample.age}}
<button @click="increaseAge">increase age</button>
<br>
<h2>reactiveexample</h2>
{{reactiveexample.name}}-{{reactiveexample.age}}
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
// @ is an alias to /src

export default {
  setup(){
    const refexample = ref({name:'amir', age:24})
    const reactiveexample = reactive({name:'asqar' , age:30})

    const increaseAge = () =>{
        refexample.value.age++
    }

    return{refexample,reactiveexample,increaseAge}
  },
  name: 'HomeView',
  components: {
  }
}
</script>
