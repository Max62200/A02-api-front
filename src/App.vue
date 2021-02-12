<template >

  <div id="app">
    <div class="containe">
    <div id="nav">
      <router-link to="/"><img class="img-logo" alt="Vue logo" src="./assets/loupe.png"></router-link> 
     <h2 class="title-nav">Bibliothéque 2.0</h2>
      <ul class="ul-nav"> 
        <router-link to="/list"><li class="li-nav">
          <div class="svg"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list-check svg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
        </svg></div>
      </li></router-link>
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
        <ul class="ul2-section">
            <router-link to="/"><li class="li-section">Comedie</li></router-link> 
            <router-link to="/"><li class="li-section">Fiction</li></router-link> 
            <router-link to="/"><li class="li-section">Drame</li></router-link> 
        </ul>
      </div>
      </div>

       
      <div class="footer">


      </div>   
        
    <footer class="min-footer">
     
    <p class="footer-text">Copyright 2021 biblio 2.0</p>

    </footer>
    <router-view> </router-view>
    </div>
  </div>
</template>



<style>
@media  screen and (max-width: 675px) {
  
*{
padding:0;
margin:0;
box-sizing: border-box;
}

.containe{
  width: 100%;
  height: 60vh;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto');

.svg{
  margin-left: 25px;
}

.img-logo{
  width:20%;
  position: absolute;
  left:1%;
  top: 2.6%;
}

.img-logo:hover{
   transform: scale(1.1);
  animation: ease-in-out 500ms;
}


.title-nav{
 
  font-size: 15px;
  font-family: Roboto;
  position: absolute;
  left: 25%;
  color: rgba(247, 4, 4, 0.897);
  margin-top: 7.5%;
  letter-spacing: 5px;
  font-weight: 1000;
  
  
}

.container-header{

  width: 100%;
  height: 80px;
  background-color: black;
  
}

#nav {
  height: 80px;
  background-color: white;
  width: 100%;
  
  
}
.ul-nav{
display: flex;
margin-left: 70%;

  
}

.li-nav{
list-style: none;
font-family: Roboto;

}

* a {
  font-weight: bold;
  color: #020202;  
   text-decoration: none;
  font-family: Roboto;
  margin-right: 10%;
}

#nav a.router-link-exact-active {
  color: #ce2924;
  text-decoration-color: none;
  transform: scale(1.2);
  animation: ease-in 500ms;



}

.button-search{
    background-color: red;
    font-size: 15px;
    float: right;
    padding: 6px 10px;
    margin-top: 25px;
    margin-right: -155px;
    font-size: 10px;
    border: none;
    cursor: pointer;
  
}

.button-search:active{
   background-color: #c7433e;
  text-decoration-color: none;
  transform: scale(0.9);
  animation: ease-in 500ms;
}

.input-header {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 25px;
  margin-right:150px;
  font-size: 10px;
}

.section{
  width:100%;
  height:250px;
  background-image: url(./assets/biblio.png);

}

.banniere{
  width: 100%;
  height:85px;
  background-color: #50332cb4;
  opacity: 0.8;
  position: absolute;
  top: 30%;
}

.ul2-section{
  margin-left:15%;
  margin-top:7.5%;
  
}



.li-section{
list-style: none;
font-family: Roboto;
color: black;
display: inline;
font-size: 20px;
text-decoration: none;



}

.li-section:hover{
  text-decoration: none;
  color:#ce2924;
  
}


.footer{
  width:100%;
  height:100px;
  background-image: url(./assets/biblio.png);
  position: absolute;
 bottom:-46vh;

}

.min-footer{
  width: 100%;
  height: 75px;
  background-color: black;
 position: absolute;
 bottom:-55vh;

}

.footer-text{
  color: white;
  font-family: Roboto;
  font-size: 11px;
  text-align: center;
  margin: 5%;
}
}
@media screen and (min-width:1224px){
  
.svg{
  margin-left: 75px;
} 

*{
padding:0;
margin:0;
box-sizing: border-box;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto');

.img-logo{
  width:8%;
  position: absolute;
  left:1%;
}

.img-logo:hover{
   transform: scale(1.1);
  animation: ease-in-out 500ms;
}


.title-nav{
 
  font-size: 25px;
  font-family: Roboto;
  position: absolute;
  left: 45%;
  color: rgba(247, 4, 4, 0.897);
  margin-top: 1%;
  letter-spacing: 5px;
  
  
}

.container-header{

  width: 100%;
  height: 80px;
  background-color: black;
  
}

#nav {
  height: 80px;
  background-color: white;
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

* a {
  font-weight: bold;
  color: #020202;  
   text-decoration: none;
  font-family: Roboto;
  margin-right: 10%;
}

a:hover{
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ce2924;
  text-decoration-color: none;
  transform: scale(1.2);
  animation: ease-in 500ms;



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

.button-search:active{
   background-color: #c7433e;
  text-decoration-color: none;
  transform: scale(0.9);
  animation: ease-in 500ms;
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
  width: 100%;
  height:85px;
  background-color: #50332cb4;
  opacity: 0.8;
  position: absolute;
  top: 30%;
}

.ul2-section{
  margin-left:30%;
  margin-top:1.5%;
  
}



.li-section{
list-style: none;
font-family: Roboto;
color: black;
display: inline;
font-size: 35px;
text-decoration: none;



}

.li-section:hover{
  text-decoration: none;
  color:#ce2924;
  
}


.footer{
  width:100%;
  height:100px;
  background-image: url(./assets/biblio.png);
  position: absolute;
  bottom:-26%;


}

.min-footer{
  width: 100%;
  height: 75px;
  background-color: black;
  position: absolute;
  bottom: -35%;
}

.footer-text{
  color: white;
  font-family: Roboto;
  font-size: 14px;
  text-align: center;
  margin: 2%;
}
}
</style>
