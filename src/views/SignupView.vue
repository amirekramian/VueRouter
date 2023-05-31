<template>
  <form @submit.self="HandleSubmit">
    <label>Email:</label>
    <input @click="InvisibleCondition" type="email" required v-model="email">

    <label>Password:</label>
    <div class="input-wrapper">

    <input maxlength="16" @click="viewcondition" @input="checkpasswordLength(); checkPasswordNumber(); checkPasswordCharacter(); CheckCapitalCharacter();" class="pass" :type="Passtype" required v-model="password">
    <FontAwesomeIcon @click="ChangePasswordVisibility" v-if="!PasswordVisibility" class="Icon" icon="eye" />
    <FontAwesomeIcon @click="ChangePasswordVisibility" v-if="PasswordVisibility" class="Icon" icon="eye-slash" />
    <FontAwesomeIcon v-if="charCondition && lengthCondition && numberCondition && capitalCondition"  class="checkIcon" icon="check" />
    <FontAwesomeIcon v-if="!charCondition || !lengthCondition || !numberCondition || !capitalCondition"  class="XIcon" icon="xmark" />

    </div>
    <div v-if="PassCondition">
    <div :class="{acceptedCondition:lengthCondition}" class="pill">at least 8 digit</div>
    <div :class="{acceptedCondition:numberCondition}" class="pill">Number</div>
    <div :class="{acceptedCondition:charCondition}" class="pill">Special character</div>
    <div :class="{acceptedCondition:capitalCondition}" class="pill"> Use capital</div>
    </div>

    <br>

    <label>Role:</label>
    <select v-model="role" @click="InvisibleCondition">
        <option value="DevopsEngineer">Devops Engineer</option>
        <option value="Developer">Developer</option>
        <option value="CTO">CTO</option>
         <option value="TeamLead">Team Lead</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="AddSkill" placeholder="Use , for insert your skill" @click="InvisibleCondition">   
    <div v-for="Skill in Skills" :key="Skill" class="pill">
        <div>
        {{Skill}}
        <button class="DelBtn" @click="RemoveSkill(Skill)">
            <FontAwesomeIcon icon="trash" />
        </button>
        </div>        
    </div>

    <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label>Accept terms of service</label>
    </div>

    <div>
        <div class="submit">
        <button class="submitBTN">
         submit
        </button>   
        <button class="btn btn-default">
         cancel
        </button>       
        </div>
    </div>

  </form>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faEye, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEye);
library.add(faEyeSlash);
library.add(faTrash);
library.add(faCheck);
library.add(faXmark);


export default {
data(){
    return{
        email:'',
        password:'',
        role:'',
        terms: false,
        tempSkill:'',
        Skills:[],
        PassCondition:false,
        lengthCondition:false,
        charCondition: false,
        numberCondition: false,
        capitalCondition:false,
        PasswordVisibility:false,
        Passtype:'password'
    }
},
components:{
FontAwesomeIcon
},
methods:{
    AddSkill(e){
        var temporary = this.tempSkill.replace(',','').toLowerCase()
        if(e.key === ',' && temporary){
            if(!this.Skills.includes(temporary)){
            this.Skills.push(temporary)
            }
            this.tempSkill = ''
        }
    },
    RemoveSkill(Skill){
        this.Skills.splice(this.Skills.indexOf(Skill),1)
    },
    HandleSubmit(){
        console.log('Form submited...')
    },
    viewcondition(){
        this.PassCondition = true
    },
    checkpasswordLength(){
        if(this.password.length >=8){
            this.lengthCondition =true
        }
        else{this.lengthCondition =false}
    },
    checkPasswordNumber(){
            var format = /[0-9]+/
            var result = format.test(this.password)
        if(result){
            this.numberCondition =true            
            }
            else{this.numberCondition = false}
    },
     checkPasswordCharacter(){
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    var result = format.test(this.password)
         if(result){
            this.charCondition = true
            }
            else{this.charCondition = false}
     },
     CheckCapitalCharacter(){
         var format = /[A-Z]+/
         var result = format.test(this.password)
         if(result){
        this.capitalCondition = true
         }else{this.capitalCondition = false}
     },
     ChangePasswordVisibility(){
        this.PasswordVisibility =!this.PasswordVisibility
        if(this.PasswordVisibility){
            this.Passtype='text'
        }
        else{
            this.Passtype='password'
        }
     },
     InvisibleCondition(){
                this.PassCondition = false

     }
}
}
</script>

<style scoped>
form {
max-width: 420px;
margin: 30px auto;
background:white;
text-align: left;
padding: 40px;
border-radius: 10px;
}
label {
color: #aaa;
display: inline-block;
margin: 25px 0 15px;
font-size: 0.6em;
text-transform: uppercase;
letter-spacing: 1px;
font-weight: bold;
}
input,select {
display: block;
padding: 10px 6px;
width: 100%;
padding-left: 30px;
box-sizing: border-box;
border: none;
border-bottom: 1px solid #302323;
color: #555;
}

input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin:0 10px 0 0;
    position: relative;
    top: 2px;
    padding-right: 30px;
}
.pill{
    display: inline-block;
    font-size: 0.7em;
    padding: 0 5px 0 5px;
    background: #e0e0e0;
    margin: 3px 3px;
    border-radius: 100px;
    cursor: auto;
}
.DelBtn{
    color: #b90101;
    border-style: none;
    background: transparent;
}
.submitBTN{
    background: #3c60ff;
    color: white;
    border: 0;
    padding: 10px 20px;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 15px;
    text-align: center;
    display: inline-block ;
}
div.submit{
    text-align: center;
}
.acceptedCondition{
    display: inline-block;
    font-size: 0.7em;
    padding: 0 5px 0 5px;
    background: #0b5e2e;
    color:white;
    margin: 3px 3px;
    border-radius: 100px;
}
.Icon{
     position: absolute;
     top: 50%;
     right: 5px;
     transform: translateY(-50%);
}
.input-wrapper{
      position: relative;

}
.checkIcon{
    color: #0b5e2e;
     position: absolute;
     top: 50%;
     left: 5px;
     transform: translateY(-50%);
}
.XIcon{
    color: #b90101;
     position: absolute;
     top: 50%;
     left: 5px;
     transform: translateY(-50%);
}
</style>

