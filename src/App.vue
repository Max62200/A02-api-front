<template class="page">

  <div id="app">
 
    <div id="nav">
      <router-link to="/"><img class="img-logo" alt="Vue logo" src="./assets/loupe.png"></router-link> 
     <h2 class="title-nav">Bibliothéque 2.0</h2>
      <ul class="ul-nav">
        <router-link to="/"><li class="li-nav">Home</li></router-link> 
        <router-link to="/about"><li class="li-nav">About</li></router-link>
        <router-link to="/about"><li class="li-nav">About</li></router-link>
      </ul>
      </div>
      <header class="container-header"> 

          <div class="container-search">
            <input class="input-header" type="text" placeholder="Search..">
            <button class="button-search" type="button">OK</button>
          </div>
      </header>
      <div class="section"> 
      <div class="banniere">
        <ul class="ul-section">
            <router-link to="/"><li class="li-section">Art</li></router-link> 
            <router-link to="/"><li class="li-section">Sciences</li></router-link> 
            <router-link to="/"><li class="li-section">Comedie</li></router-link> 
            <router-link to="/"><li class="li-section">Fiction</li></router-link> 
            <router-link to="/"><li class="li-section">Drame</li></router-link> 
        </ul>
      </div>
      </div>

       
      <div class="footer">


      </div>   
        

     
    
    
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto');

.img-logo{
  width:8%;
  position: absolute;
  left:1%;
}


.title-nav{
 
  font-size: 25px;
  font-family: Roboto;
  position: absolute;
  left: 45%;
  color: rgba(182, 26, 26, 0.616);
  
  
}

.container-header{

  width: 100%;
  height: 80px;
  background-color: black;
  
}

#nav {
  height: 80px;
  background-color: #E9EADB;
  width: 100%;
  
  
}
.ul-nav{
display: flex;
margin-left: 85%;

  
}

.li-nav{
list-style: none;
font-family: Roboto;

}

#nav a {
  font-weight: bold;
  color: #020202;  
   text-decoration: none;
  font-family: Roboto;
  margin-right: 10%;
}

#nav a.router-link-exact-active {
  color: #ce2924;
  text-decoration: none;
}

.button-search{
    background-color: red;
    font-size: 20px;
    float: right;
    padding: 6px 10px;
    margin-top: 25px;
    margin-right: -270px;
    font-size: 17px;
    border: none;
    cursor: pointer;
  
}

.input-header {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 25px;
  margin-right: 106px;
  font-size: 17px;
}

.section{
  width:100%;
  height:250px;
  background-image: url(./assets/biblio.png);

}

.banniere{
  width: 99%;
  height:85px;
  background-color: #2c3e50;
  opacity: 0.8;
  position: absolute;
  top: 30%;
}


.li-section{
list-style: none;
font-family: Roboto;
color: white;
display: inline;
margin: 5%;
font-size: 25px;
text-decoration: none;

}

.li-section:hover{
  text-decoration: none;
  color:#ce2924;
}

.footer{
  width:99%;
  height:150px;
  background-image: url(./assets/biblio.png);
  position: absolute;
  bottom:-25%;


}
</style>
