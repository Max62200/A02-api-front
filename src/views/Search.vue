<template>
  <div id="search">
    <div class="container-search">
        <h1>RECHERCHE</h1> 

        <div class="display-search" >
          <form class="d-flex col-md-5 my-3">
            <input v-model="searchResult" class="form-control input-1" type="search" placeholder="Rechercher" aria-label="Search">
          </form>
        </div>

      <h3>RESULTAT RECHERCHE :</h3>

          <div class="row" style="margin-right:0; margin-left:6%;">

            <div class="col-sm-4 "  v-for="(book, bookid)  in searchFilter" :key="bookid"> 

              <div class="card m-2 "  style="width:75%;" >
                <router-link :to="{name: 'Show', params: {bookId: book.id } }">
                    <img class="card-img-top" :src= "book.image"/> 
                </router-link> 
                <div class="card-body">
                  <h5 class="card-title text-center" > {{ book.name}} </h5>
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
   name:'search',

   data: ()=>{
       return{
        searchResult:'',
        books:[],         
       }

  
   },
   computed: {
       searchFilter(){
           return this.books.filter((book)=>{
                return book.name.toLowerCase().includes(this.searchResult.toLowerCase())
           })
       },
   },
     mounted() {
    axios
      .get("http://127.0.0.1:8000/api/books")
      .then((res) => {
        this.books = res.data["hydra:member"];
      })
      .catch((error) => {
        console.log(error);
      });
  },
}
</script>



<style scoped>
@media  screen and (max-width: 675px) {
@import url('https://fonts.googleapis.com/css2?family=Roboto');

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


h3{
  text-align: left;
  font-size:17px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-decoration: underline;
  font-family: Roboto;
  margin: 5%;
  color: black;
}

 
  .container-search {
    padding-left: 25%;
    padding-top:45%;
    
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
  font-size:25px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-decoration: underline;
  font-family: Roboto;
  margin: 5%;
  color: black;
}

 .container-search {
    margin-left: 12.5%;
    
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
  font-size:20px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-decoration: underline;
  font-family: Roboto;
  margin: 5%;
  color: black;
}

 
  .container-search {
    padding-left: 25%;
    padding-top:30%;
    
  }

}
</style>

