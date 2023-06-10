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
<button @click="increaseAgereactive">increase age</button>
<br>
<h2>Computedexample</h2>
<input type="text" v-model="search">
<p>search result - {{matchnames}}</p>
<ul>
  <li v-for="name in names" :key="name">{{name}}</li>
</ul>

  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
// @ is an alias to /src

export default {
  setup(){
    const refexample = ref({name:'amir', age:24})
    const reactiveexample = reactive({name:'asqar' , age:30})
    const names = ref(['amir','mina','sepehr','mohammadali','alireza','amirhossein'])
    const search = ref('')

    const matchnames = computed(()=>{
      return names.value.filter((name) => name.includes(search.value))
    })

    const increaseAge = () =>{
        refexample.value.age++
    }
    const increaseAgereactive =()=>{
      reactiveexample.age++
    }

    return{refexample,reactiveexample,increaseAge,increaseAgereactive,names,search,matchnames}
  },
  name: 'HomeView',
  components: {
  }
}
</script>
