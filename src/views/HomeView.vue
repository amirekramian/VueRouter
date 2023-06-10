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
<div v-if="{matchnames}">

  <div v-for="name in matchnames" :key="name">{{name}}</div>
  </div>
</div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
// @ is an alias to /src

export default {
  setup(){
    const refexample = ref({name:'amir', age:24})
    const reactiveexample = reactive({name:'asqar' , age:30})
    const names = ref(['amir','mina','sepehr','mohammadali','alireza','amirhossein'])
    const search = ref('')
//run when search modify everytime
watch(search ,()=>{
  console.log('watch run')
})
//run only one time
//if use a variable in methode, that run every time variable changes
watchEffect(()=>{
  console.log('watch effect ran',search.value)
})

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
