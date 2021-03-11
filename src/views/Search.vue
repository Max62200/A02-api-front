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

      <div class="row">

            <div class="col-sm-4 "  v-for="(book, bookid)  in searchFilter" :key="bookid"> 

              <div class="card m-2 " >
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
export default {
   name:'search',

   data: ()=>{
       return{
        searchResult:'',
        books: 

          [
    {
      "@id": "/api/books/12",
      "@type": "Book",
      "id": 12,
      "name": "Sit vel quas quo.",
      "author": "Jacqueline de la Bouvier",
      "quantity": 4,
      "category": "est",
      "image": "https://loremflickr.com/300/450/book",
      "summary": "Nobis error ex rerum sequi quidem dolores sit tempore. Culpa officia ea ut id rerum eius aut odit. Accusamus omnis et eius vel laborum.",
      "customers": [
        {
          "@id": "/api/customers/42",
          "@type": "Customer",
          "firstname": "billy",
          "lastname": "billy"
        }
      ]
    },
    {
      "@id": "/api/books/13",
      "@type": "Book",
      "id": 13,
      "name": "Hic aspernatur.",
      "author": "Roger Foucher",
      "quantity": 5,
      "category": "autem",
      "image": "https://loremflickr.com/300/450/book",
      "summary": "Quisquam qui modi quo velit sed aut ipsa. Ut alias est illum velit fugiat quasi quidem maiores. Amet eveniet dicta dolorem sapiente. Voluptatem vitae ut velit eaque est voluptas.",
      "customers": []
    },
    {
      "@id": "/api/books/14",
      "@type": "Book",
      "id": 14,
      "name": "Officia non.",
      "author": "Capucine Le Pottier",
      "quantity": 7,
      "category": "tempore",
      "image": "https://loremflickr.com/300/450/book",
      "summary": "Optio sit est et cupiditate doloremque adipisci magni veniam. Eius corporis saepe sit ipsum accusamus. Enim temporibus ut sed quasi.",
      "customers": [
        {
          "@id": "/api/customers/41",
          "@type": "Customer",
          "firstname": "billy",
          "lastname": "the kid"
        }
      ]
    },
    {
      "@id": "/api/books/15",
      "@type": "Book",
      "id": 15,
      "name": "Consequatur in dolorem maiores.",
      "author": "Antoinette Lemonnier-Chretien",
      "quantity": 9,
      "category": "amet",
      "image": "https://loremflickr.com/300/450/book",
      "summary": "Non vel error debitis aut eveniet. Itaque vel et corrupti dolorem molestias voluptates ducimus repudiandae. Consequatur aut id id cum nesciunt. Fuga et similique occaecati.",
      "customers": []
    },
    {
      "@id": "/api/books/16",
      "@type": "Book",
      "id": 16,
      "name": "Quo voluptate.",
      "author": "Roger Verdier",
      "quantity": 8,
      "category": "laudantium",
      "image": "https://loremflickr.com/300/450/book",
      "summary": "Esse qui est magni dignissimos ratione. Ullam ipsum rem eum autem quo ullam recusandae est. Quia qui ipsa ipsam ut exercitationem et quisquam.",
      "customers": []
    },
    {
      "@id": "/api/books/17",
      "@type": "Book",
      "id": 17,
      "name": "Autem reiciendis labore et.",
      "author": "Océane Laurent",
      "quantity": 6,
      "category": "doloremque",
      "image": "https://loremflickr.com/300/450/book",
      "summary": "Iure esse error est quibusdam delectus repellendus porro. In qui consectetur et perferendis. Fugit expedita consequatur non sit.",
      "customers": []
    },
    {
      "@id": "/api/books/18",
      "@type": "Book",
      "id": 18,
      "name": "Sit reiciendis minima fugit.",
      "author": "Roland-Daniel Francois",
      "quantity": 5,
      "category": "praesentium",
      "image": "https://loremflickr.com/300/450/book",
      "summary": "Facilis ratione nobis ipsum et sint aut officiis. Exercitationem vitae ea numquam sed distinctio sint. Ut molestias illo doloremque nemo velit corporis deserunt. Dignissimos qui omnis ut aut.",
      "customers": []
    },
    {
      "@id": "/api/books/19",
      "@type": "Book",
      "id": 19,
      "name": "Placeat consequatur fugiat voluptatum.",
      "author": "Laetitia-Claire Millet",
      "quantity": 2,
      "category": "incidunt",
      "image": "https://loremflickr.com/300/450/book",
      "summary": "Sapiente sunt id dolorum dignissimos. Blanditiis in quas voluptatem illo voluptas quaerat voluptatem. Itaque earum ratione perferendis dolor quo voluptas laboriosam.",
      "customers": []
    },
    {
      "@id": "/api/books/20",
      "@type": "Book",
      "id": 20,
      "name": "Velit quod occaecati.",
      "author": "Eugène Goncalves",
      "quantity": 6,
      "category": "voluptate",
      "image": "https://loremflickr.com/300/450/book",
      "summary": "Et accusamus non enim assumenda. Distinctio omnis velit soluta suscipit quos praesentium perspiciatis ex.",
      "customers": []
    },
    {
      "@id": "/api/books/21",
      "@type": "Book",
      "id": 21,
      "name": "Dolorem et voluptatum.",
      "author": "Renée Lejeune",
      "quantity": 8,
      "category": "velit",
      "image": "https://loremflickr.com/300/450/book",
      "summary": "Repellat et ab asperiores saepe eaque possimus autem. Optio reprehenderit vitae repellat minus amet. Voluptate pariatur aut qui assumenda excepturi eveniet corporis qui.",
      "customers": []
    },
    {
      "@id": "/api/books/22",
      "@type": "Book",
      "id": 22,
      "name": "Non hic dolor.",
      "author": "Michelle Mercier",
      "quantity": 6,
      "category": "assumenda",
      "image": "https://loremflickr.com/300/450/book",
      "summary": "Vel ipsam odio deleniti illum fugit qui. Aliquam hic ut temporibus eos ex rem ducimus itaque. Corrupti et quo et placeat. Magnam necessitatibus sit dignissimos fugiat accusantium voluptas.",
      "customers": []
    }
  ],
          
              
       }

  
   },
   computed: {
       searchFilter(){
           return this.books.filter((book)=>{
                return book.name.toLowerCase().includes(this.searchResult.toLowerCase())
           })
       }
   }

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

