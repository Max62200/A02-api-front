<template>
  <div id="login">
    <div class="container-login">

        <h1>SE CONNECTER</h1> 
        <div id="login">
        
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            <div class="form-group">
                                <label for="username" class="text-dark">Utilisateur:</label><br>
                                <input type="text" name="username" id="username" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-dark">Mot de passe:</label><br>
                                <input type="text" name="password" id="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-dark"><span>Se souvenir de moi &nbsp; </span><span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br><br>
                                <input type="submit" name="submit" class="btn btn-dark btn-md btn-connexion" value="Connexion">
                            </div>
                            <div id="register-link" class="text-right">
                              <router-link to="/register">
                                <a href="" class="text-dark">S'inscrire ?</a>
                            </router-link>  
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>


  </div>
</template>

<style scoped>
@media  screen and (max-width: 675px) {
@import url('https://fonts.googleapis.com/css2?family=Roboto');

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

.container{
    background-color: #EAEAEA;
    margin: 7.5%;
    width: 82.5%;
    padding: 5%;
    box-shadow: #050505 8px 8px 8px;
    margin-top:25% ;
    border: #050505 3px solid;
}

.btn-connexion{
    font-size: 10px;
}
 
  .container-login {
    padding-left: 25%;
    padding-top:45%;
    
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


 .container-login {
    margin-left: 12.5%;
    
  }



#login .container #login-row #login-column #login-box {
  margin-top:5%;
  max-width: 600px;
  height: 320px;
  border: 3px solid #050505;
  box-shadow: #050505 10px 10px 10px ;
  background-color: #EAEAEA;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
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


  .container-login {
    padding-left: 25%;
    padding-top:30%;
    
  }

.container{
    background-color: #EAEAEA;
    margin: 12.5%;
    width: 75%;
    padding: 2.5%;
    box-shadow: #050505 8px 8px 8px;
    margin-top:15% ;
    border: #050505 3px solid;
}

.btn-connexion{
    font-size:15px;
}


}
</style>

