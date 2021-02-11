<template>
  <div id="home">
   <h1>Bienvenue</h1>
   <p>Réservez vos livres en bibliothéque en quelques cliques, c'est simple et pratique ...</p>
   <img src="../assets/loupe.png" alt="">
  </div>
</template>

<script>

</script>

<style scoped>
@media  screen and (max-width: 675px) {


h1{
    text-align: center;
  font-size:30px;
  font-weight: 900;
  letter-spacing: 5px;
  margin: 5%;
  text-decoration: overline;
  font-family: Roboto;
  margin-top: 20%;
}

p{
   text-align: center;
  font-size:17px;
  
  letter-spacing: 2px;
  margin: 10%;

  font-family: Roboto;
}

img{
  width: 55%;
  position: absolute;
  left: 25%;
}

img:hover{
  transform: scale(1.2);
  animation: ease-in 500ms;
}


}

@media screen and (min-width:1224px){
h1{
    text-align: center;
  font-size:50px;
  font-weight: 900;
  letter-spacing: 5px;
  margin: 2%;
  text-decoration: overline;
  font-family: Roboto;
}

p{
   text-align: center;
  font-size:20px;
  
  letter-spacing: 3px;
  margin: 2%;

  font-family: Roboto;
}

img{
  width: 25%;
  position: absolute;
  left: 35%;
}

img:hover{
  transform: scale(1.2);
  animation: ease-in 500ms;
}
}

</style>