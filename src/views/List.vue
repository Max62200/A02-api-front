<template>
  <div id="list">
    <div class="container-list">
        <h1>LIVRES EN BIBLIOTHEQUE</h1>

          <div class="row" style="margin-right:0; margin-left:6%;">

            <div class="col-sm-4 " v-for="(book, bookid)  in books" :key="bookid"> 

              <div class="card m-2 " style="width:75%; ">
                <router-link :to="{name: 'Show', params: {bookId: book.id } }">
                    <img class="card-img-top" :src= "book.image"/> 
                </router-link> 
                <div class="card-body">
                  <h5 class="card-title text-center" > {{book.name}} </h5>
                </div>
              </div>
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
      books:[]
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/books")
      .then((res) => {
        this.books = res.data["hydra:member"];
        console.log(res.data["hydra:member"]);
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

.card-title{
  font-size: 15px;
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
    margin-left: 15%;
    
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

