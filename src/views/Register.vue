<template>
  <div id="register">
    <div class="container-register">

        <h1>S'INSCRIRE</h1> 

       <div class="container-form">
          <form v-on:submit.prevent="submitForm">
            <div class="form-group input-group ">
                <div class="input-group-prepend ">
                    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                </div>
                <input name="" class="form-control col-md-4 " id="firstname" placeholder="first name" type="text" v-model="form.firstname">
            </div> <!-- form-group// -->
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                </div>
                <input name="" class="form-control col-md-4" id="lastname" placeholder="last name" type="text" v-model="form.lastname">
            </div> <!-- form-group// -->
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                </div>
                <input name="" class="form-control col-md-4" id="email" placeholder="Email" type="email" v-model="form.email">
            </div> <!-- form-group// -->
            
           
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                </div>
                <input class="form-control col-md-4" id="password" placeholder="mot de passe" type="password" v-model="form.password">
            </div> <!-- form-group// -->
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                </div>
                <input class="form-control col-md-4" id="repassword" placeholder="confirmer mot de passe" type="password" v-model="form.repassword">
            </div> <!-- form-group// -->                                      
            <div class="form-group">
                <button type="submit" class="btn btn-dark btn-block col-md-2"> Créer un compte  </button>
            </div> <!-- form-group// -->  
                
            <p class="text-center">Déja utilisateur ? <router-link to="/login"><a href="">Se connecter</a> </router-link></p>  
                                                                           
        </form>
        </div>

     </div>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  
    data(){
        return{
            form: {
                firstname: '',
                lastname:'',
                email:'',
                password:'',
                repassword:''
                
                
            }
        }
    },

    methods:{
        submitForm(){
            axios.post('http://176.31.120.111:8000/api', this.form)
                .then((res) => {
                this.form = res.data;
                console.log(this.form);
              })
              .catch((error) => {
                console.log(error);
              });
          },
        }
        };             
          
   
</script>


<style scoped>
@media  screen and (max-width: 675px) {
@import url('http://fonts.googleapis.com/css2?family=Roboto');

h1{
  text-align: center;
  font-size:20px;
  font-weight: 900;
  letter-spacing: 3.5px;
  padding:  10%;
  text-decoration: overline;
  font-family: Roboto;
  letter-spacing: 3px;
  color: black;
 
}


 
  .container-register {
    padding-left: 25%;
    padding-top:45%;
    
  }

   .container-form {
margin: 5%;
    
    
  }


}

@media screen and (min-width:1224px){

@import url('https://fonts.googleapis.com/css2?family=Roboto');

h1{
  text-align: center;
  font-size:30px;
  font-weight: 900;
  letter-spacing: 5px;
  text-decoration: overline;
  font-family: Roboto;
  margin: 5%;
  color: black;
  
}


 .container-register {
    margin-left: 12.5%;
    
  }


 .container-form {
    margin-left:35%;
    
    
  }


}


  @media screen and (min-width: 676px) and (max-width: 1223px){

      @import url("https://fonts.googleapis.com/css2?family=Roboto");

  * a:hover {
    text-decoration:none;
  }

  
h1{
  text-align: center;
  font-size:30px;
  font-weight: 900;
  letter-spacing: 2.5px;
  padding:  10%;
  text-decoration: overline;
  font-family: Roboto;
  
  color: black;
 
}


  .container-register {
    padding-left: 35%;
    padding-top:30%;
    
  }

    




}
</style>

