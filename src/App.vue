<template >
  <div id="app">
    
       <nav class="nav">
        
        
        <div class="circle">
          <router-link to="/">
          <img class="img-logo" alt="Vue logo" src="./assets/LIVRES.png"/>
          </router-link>
        </div>
       
        <ul class="ul-nav">
          <router-link to="/login">
            <li class="li-nav">CONNEXION</li>
          </router-link>
          <router-link to="/">
            <li class="li-nav">ACCUEIL</li>
          </router-link>
          <router-link to="/list">
            <li class="li-nav">LISTE</li>
          </router-link>
          <router-link to="/gender">
            <li class="li-nav">GENRE</li>
          </router-link>
          <router-link to="/about">
            <li class="li-nav">A PROPOS</li>
          </router-link>
          <router-link to="/search">
            <li class="li-nav">CHERCHER</li>
          </router-link>
          <router-link to="/contact">
            <li class="li-nav">CONTACT</li>
          </router-link>
        </ul>    
              
      </nav>

     <div class="container-title ">

      <h2 class="title-nav ">BIBLIOTHEQUE 2.0</h2>

     </div> 

      <header class="container-header">

        <div class="display-search ">
          <form class="d-flex col-md-5 my-3">
            <input class="form-control input-1" type="search" placeholder="Rechercher" aria-label="Search">
            <button class="btn btn-danger input-2" type="submit">OK</button>
          </form>
        </div>

      </header>


     
     <router-view> </router-view>
     
  </div>
</template>



<style>
@media screen and (max-width: 675px) {
 @import url("https://fonts.googleapis.com/css2?family=Roboto");
* a:hover {
  text-decoration:none;
}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  .container-title{
     height:15%;
    background-color: white;
    width:75%;
    position: fixed;
    left:25%;
    z-index: 1;
  }

  .img-logo {
    width: 60%;
    margin: 20%;
  
  }

  .circle{
    width: 70px;
    height:70px;
    background-color: white;
    border-radius: 50%;
    text-align:center;
    vertical-align: center;
    margin: 6.5%;
    

  }


  .img-logo:active {
    transition: ease all 250ms;
    transform: rotate(360deg);
  }

  .title-nav {
    font-size: 13px;
    font-family: Roboto;
    color: rgba(247, 4, 4, 0.897);
    letter-spacing: 5px;
    font-weight: bolder;
    text-align: center;
    padding: 7%;
    position: fixed;
    left:27.5%;
    

  }

 
  .nav {
    height: 100%;
    background-color: black;
    width: 25%;
    position: fixed;
    
  }
  

  .li-nav {
    list-style: none;
    font-family: Roboto;
    color: white;
    margin: 4%;
    font-size: 8px;
    letter-spacing: 1.5px;
    opacity: 0.8;
  }

 
  .li-nav:hover{
    
    text-decoration: underline;
      
  }

  .li-nav:active{

   
    opacity: 1;
    text-decoration: none;
  }

  .ul-nav{

    margin:7.5%;
    line-height:40px;

  }

  .display-search{
    margin: 2%;
   float: right;
   
     
  }
  
  .input-1{
    width:70%;
    font-size: 9px;
  }

  
  .input-2{
    width:20%;
    font-size: 9px;
  }

  .container-header{
    width:100%;
    height:10%;
    background-color: black;
    position: fixed;
    top:12.5%;
    z-index: 1;
  }

}
@media screen and (min-width: 1224px) {
 @import url("https://fonts.googleapis.com/css2?family=Roboto");
* a:hover {
  text-decoration:none;
}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
   .container-title{
     height:15vh;
    background-color: white;
    width:100%;
    z-index: 1;
   
  }

  .img-logo {
    width: 60%;
    margin: 20%;
  
  }

  .circle{
    width: 100px;
    height:100px;
    background-color: white;
    border-radius: 50%;
    text-align:center;
    vertical-align: center;
    margin: 25%;
    

  }


  .img-logo:active {
    transition: ease all 250ms;
    transform: rotate(360deg);
  }

  .title-nav {
    font-size: 35px;
    font-family: Roboto;
    color: rgba(247, 4, 4, 0.897);
    letter-spacing: 5px;
    font-weight: bolder;
    text-align: center;
    padding: 2.5%;
    position: absolute;
    left:40%;
  }

 
  .nav {
    height: 100%;
    background-color: black;
    width: 12.5%;
    position: fixed;
    
  }
  

  .li-nav {
    list-style: none;
    font-family: Roboto;
    color: white;
    margin: 3%;
    font-size: 15px;
    letter-spacing: 2.5px;
    opacity: 0.8;
  }

  .li-nav:hover{
    
    text-decoration: underline;
      
  }

  .li-nav:active{

    opacity: 1;
  }

  .ul-nav{

    margin:7.5%;
    line-height:50px;

  }

  .display-search{
   display: flex;
    flex-direction: row-reverse;
    
    
  }

  .container-header{
    width:100%;
    height:10%;
    background-color: black;
    z-index: 1;
}


  .display-search{
    margin: 2%;
  
   
     
  }
  
  .input-1{
    width:60%;
    font-size: 15px;
  }

  
  .input-2{
    width:10%;
    font-size: 15px;
  }


}

@media screen and (min-width: 676px) and (max-width: 1223px){

 @import url("https://fonts.googleapis.com/css2?family=Roboto");
* a:hover {
  text-decoration:none;
}
 
  
  .container-title{
     height:15%;
    background-color: white;
    width:75%;
    position: fixed;
    left:25%;
    z-index: 1;

  }

  .img-logo {
    width: 60%;
    margin: 20%;
  
  }

  .circle{
    width: 130px;
    height:130px;
    background-color: white;
    border-radius: 50%;
    text-align:center;
    vertical-align: center;
    margin: 8.5%;
    

  }


  .img-logo:active {
    transition: ease all 250ms;
    transform: rotate(360deg);
  }

  .title-nav {
    font-size: 23px;
    font-family: Roboto;
    color: rgba(247, 4, 4, 0.897);
    letter-spacing: 5px;
    font-weight: bolder;
    text-align: center;
    padding: 5%;
    position: fixed;
    left:37.5%;
    

  }

 
  .nav {
    height: 100%;
    background-color: black;
    width: 25%;
    position: fixed;
    
  }
  

  .li-nav {
    list-style: none;
    font-family: Roboto;
    color: white;
    margin: 2%;
    font-size: 18px;
    letter-spacing: 1.5px;
    opacity: 0.8;
    line-height: 50px;
  }


  .li-nav:hover{
    
    text-decoration: underline;
      
  }
  .li-nav:active{

   
    opacity: 1;
    text-decoration: none;
  }

  .ul-nav{

    margin:3%;
   

  }

  .display-search{
    display: flex;
    flex-direction: row-reverse;
   
     
  }
  
  .input-1{
 
    font-size: 20px;
  }

  
  .input-2{
    
    font-size: 20px;
  }

  .container-header{
    width:80%;
    height:10%;
    background-color: black;
    position: fixed;
    top:12.5%;
    left: 20%;
    z-index: 1;
  }




}
</style>
