<template>
  <div id="gender">
    <div class="container-gender">
        <h1>LIVRES PAR GENRE</h1> 
        <h3>Genre :</h3>

           <div class="row col-12 "> 



                <div class="card m-4 display-card"  >
                <router-link to="/show">
                  <img class="card-img-top "  src="../assets/livre.png" alt="Card image cap">
                </router-link> 
                <div class="card-body ">
                  <h5 class="card-title text-center" >title</h5></div><br> 
                </div>
                
                <div class="card m-4 display-card" >
                  <router-link to="/show">
                      <img class="card-img-top "  src="../assets/livre.png" alt="Card image cap">
                    </router-link> 
                <div class="card-body">
                  <h5 class="card-title text-center" >title</h5></div><br> 
                </div>

                <div class="card m-4 display-card" >
                <router-link to="/show">
                  <img class="card-img-top "  src="../assets/livre.png" alt="Card image cap">
                </router-link> 
                <div class="card-body">
                  <h5 class="card-title text-center" >title</h5></div><br> 
                </div>

                <div class="card m-4 display-card" >
                <router-link to="/show">
                  <img class="card-img-top "  src="../assets/livre.png" alt="Card image cap">
                </router-link> 
                <div class="card-body">
                  <h5 class="card-title text-center" >title</h5></div><br> 
                </div>


                <div class="card m-4 display-card" >
                <router-link to="/show">
                  <img class="card-img-top "  src="../assets/livre.png" alt="Card image cap">
                </router-link> 
                <div class="card-body">
                  <h5 class="card-title text-center" >title</h5></div><br> 
                </div>


                <div class="card m-4 display-card" >
                <router-link to="/show">
                  <img class="card-img-top "  src="../assets/livre.png" alt="Card image cap">
                </router-link> 
                <div class="card-body">
                  <h5 class="card-title text-center" >title</h5></div><br> 
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
  font-size:25px;
  font-weight: 900;
  letter-spacing: 2.5px;
  padding:  10%;
  text-decoration: overline;
  font-family: Roboto;
  color: black;
 
}

h3{
  text-align: left;
  font-size:20px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-decoration: underline;
  font-family: Roboto;
  margin: 5%;
  color: black;
}

 
  .container-gender {
    padding-left: 25%;
    padding-top:45%;
    
  }

.display-card{
    width: 80%;
    z-index: 0;
   
  }

}

@media screen and (min-width:1224px){

@import url('https://fonts.googleapis.com/css2?family=Roboto');

h1{
  text-align: center;
  font-size:40px;
  font-weight: 900;
  letter-spacing: 5px;
  text-decoration: overline;
  font-family: Roboto;
  margin: 5%;
  color: black;
  
}

h3{
  text-align: left;
  font-size:35px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-decoration: underline;
  font-family: Roboto;
  margin: 5%;
  color: black;
}

 .container-gender {
    margin-left: 12.5%;
    
  }

  .display-card{
    width: 20%;
    z-index: 0;
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

h3{
  text-align: left;
  font-size:25px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-decoration: underline;
  font-family: Roboto;
  margin: 5%;
  color: black;
}

 
  .container-gender {
    padding-left: 25%;
    padding-top:30%;
    
  }

     .display-card{
    width: 40%;
    z-index: 0;
  }

}
</style>

