<template>
  <div id="home">
    <div class="container-about">
        <h1>A PROPOS DE NOUS </h1> 
      <div class="display-img">
      <img class="img-home img-fluid" src="../assets/MUNICIPALE3.jpg" alt="">
      
      <p class="paragraph">
          <span class="welcome">Les Bibliothéques de Nanterre,</span><br><br>
        et leurs environs sont fiéres de pouvoir participer aux besoins d’aujourd’hui.
        Les bibliothéques mettent leurs ouvrages et leurs disponibiliés en ligne afin d’en faire partager sa communauté.
      </p>
      </div>
      <div class="display-img2">
      <img class="img-home2 img-fluid" src="../assets/MUNICIPALE4.jpg" alt="">
      <p class="paragraph"> <span> Du plus jeune au plus grand, </span><br><br>Les bibliothéques se mettent au numérique pour vous facililter la vie.</p>
      </div>
    </div>
  </div>
</template>



<style scoped>
@media  screen and (max-width: 675px) {

  
   @import url("https://fonts.googleapis.com/css2?family=Roboto");

  * a:hover {
    text-decoration:none;
  }

   
  .container-about {
    padding-left: 25%;
    padding-top:45%;
    
    
    
  }

  h1{
  text-align: center;
  font-size:25px;
  font-weight: 900;
  letter-spacing: 3.5px;
  padding:  10%;
  text-decoration: overline;
  font-family: Roboto;
  letter-spacing: 3px;
  color: black;
 
}

  .display-img{
    display: flex;
    flex-direction: column;
    margin: 7.5%;
    
    
  }
  
  .display-img2{
    display: flex;
    flex-direction: column;
    margin: 7.5%;
    
  }

  .img-home{
    width:55%;
    
    border: 2px solid black;
    margin: 5%;
    
    
  }

   .img-home2{
    width:55%;
    float :right;
    border: 2px solid black;
    margin: 5%;
    
  }

  .welcome{
  
  font-size:18px;
  font-weight: 750;
  letter-spacing: 1.5px;
  margin:2.5%;
  font-family: Roboto;
  color: black;
 
  }

  .paragraph{
  
  
  font-size:11px;
  font-weight: 500;
  letter-spacing:1px;
  color: black;
  font-family: Roboto;
  margin: 5%;
   }

  span{
    font-weight: bolder;
  }
}

@media screen and (min-width:1224px){

   @import url("https://fonts.googleapis.com/css2?family=Roboto");

  * a:hover {
    text-decoration:none;
  }

  .container-about {
    margin-left: 12.5%;
    
  }

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

  .display-img{
    display: flex;
    flex-direction: row;
    
    
  }
  
  .display-img2{
    display: flex;
    flex-direction: row-reverse;
    
  }

  .img-home{
    width:33%;
    
    border: 5px solid black;
    margin: 2.5%;
    
    
  }

   .img-home2{
    width:33%;
    float :right;
    border: 5px solid black;
    margin: 2.5%;
    
  }

  .welcome{
  
  font-size:35px;
  font-weight: 750;
  letter-spacing: 2.5px;
  margin:2.5%;
  font-family: Roboto;
  color: black;
 
  }

  .paragraph{
  
  
  font-size:25px;
  font-weight: 500;
  letter-spacing:1.5px;
  color: black;
  font-family: Roboto;
  margin: 2.5%;
   }

    span{
    font-weight: bolder;
  }
}



  @media screen and (min-width: 676px) and (max-width: 1223px){

      @import url("https://fonts.googleapis.com/css2?family=Roboto");

  * a:hover {
    text-decoration:none;
  }

       
  .container-about {
    padding-left: 25%;
    padding-top:30%;
    
    
    
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

  .display-img{
    display: flex;
    flex-direction: column;
    margin: 5%;
    
    
  }
  
  .display-img2{
    display: flex;
    flex-direction: column;
    margin: 5%;
    
  }

  .img-home{
    width:75%;
    
    border: 2px solid black;
    margin: 5%;
    
    
  }

   .img-home2{
    width:75%;
    float :right;
    border: 2px solid black;
    margin: 5%;
    
  }

  .welcome{
  
  font-size:25px;
  font-weight: 750;
  letter-spacing: 1.5px;
  margin:2.5%;
  font-family: Roboto;
  color: black;
 
  }

  .paragraph{
  
  
  font-size:18px;
  font-weight: 500;
  letter-spacing:1px;
  color: black;
  font-family: Roboto;
  margin: 5%;
   }

  span{
    font-weight: bolder;
     font-size:25px;
  }




  
  }
</style>