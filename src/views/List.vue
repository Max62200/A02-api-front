<template>
  <div id="list">
    <div class="container-list">
        <h1>LIVRES EN BIBLIOTHEQUE</h1> 

          <div class="row col-12 " v-for="(name, image) in book" :key="book.id"> 

                <div class="card m-4 display-card"  >
                <router-link to="/show">
                    <img class="card-img-top" :src=image />
                </router-link> 
                <div class="card-body ">
                  <h5 class="card-title text-center" >{{ name }}</h5></div><br> 
                </div>
              
          </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  
  data: () => {
    return {
      name: "",
      image: "",
      book:[],
    };
  },
  mounted() {
    axios
      .get("https://127.0.0.1:8000/api/books")
      .then((res) => {
        this.book = res;
        console.log(this.book);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

</script>




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

 
  .container-list {
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

 .container-list {
    margin-left: 25%;
    
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
  font-size:25px;
  font-weight: 900;
  letter-spacing: 3.5px;
  padding:  25%;
  text-decoration: overline;
  font-family: Roboto;
  letter-spacing: 3px;
  color: black;
 
}

 
  .container-list {
    padding-left: 25%;
    padding-top:15%;
    
  }

  .display-card{
    width: 40%;
    z-index: 0;
  }
  }
</style>

