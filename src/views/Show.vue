<template>
  <div id="show">
  
    <div class="container-show" >
        
   

    <h1>{{ book }}</h1>
    <!-- <img class="img-show img-fluid" src= {{ image }} alt="" /> -->
    <img class="img-show img-fluid" :src=  "image">
   
    <h2>{{ author }}</h2>
    <h5></h5>
    <h4>RESUM</h4>
    <br/>
    <p>{{ summary }}
    </p>

    <!-- Button trigger modal -->
    <form>
    <button
      type="button"
      class="btn btn-success mx-3 mb-5 size-button"
      data-toggle="modal"
      data-target="#exampleModalCenter"
    >
      Emprunter
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              Emprunter ce Livre ?
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Vous-êtes sur le point d'emprunter ce livre, confirmez pour
            continuer .
            <div class="input-group mb-3 my-3">
              <span class="input-group-text" id="inputGroup-sizing-default"
                >Nom</span
              >
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default"
                >Prenom</span
              >
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Fermer
            </button>
            <button type="button" class="btn btn-primary">
              Oui, J emprunte !
            </button>
          </div>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="btn btn-danger size-button  mb-5"
      data-toggle="modal"
      data-target="#modal2"
    >
      Restituer
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              Restituer ce livre ?
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Vous-êtes sur le point de restituer ce livre, confirmez pour
            continuer .
            <div class="input-group mb-3 my-3">
              <span class="input-group-text" id="inputGroup-sizing-default"
                >Nom</span
              >
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default"
                >Prenom</span
              >
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Fermer
            </button>
            <button type="button" class="btn btn-primary">
              Oui, je restitue !
            </button>
          </div> 
          </div>
        </div>
      </div> 
      </form>
    </div>
   
      <br>
     <p class="quantity"> quantitée : {{ quantity}} </p>
  </div>


</template>




<script>
import axios from "axios";

export default {
  
  data() {
    return {
      book: "",
      author:"",
      quantity:'',
      summary:"",
      image:"",
      firstname:"",
      lastname:"",
        }
  },
  mounted() {
    axios
      .get("https://127.0.0.1:8000/api/books/12")
      .then((res) => {
        this.book = res.data.name, 
        this.author = res.data.author;
        this.quantity = res.data.quantity;
        this.summary = res.data.summary;
        this.image = res.data.image;
        console.log(res.data);
        console.log(this.book);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    sendPost() {
      const postData = { firstname: this.firstname, lastname: this.lastname };
      axios
        .post("https://127.0.0.1:8000/api/customers", postData)
        .then(res => {
          console.log(res.body);
        });
    }
  }
};




</script>

<style scoped>
@media screen and (max-width: 675px) {
  @import url("https://fonts.googleapis.com/css2?family=Roboto");

    .container-show {
    padding-left: 30%;
    padding-top:50%;
    
  }

  h1 {
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 5px;
    margin: 2%;
    text-decoration: overline;
    font-family: Roboto;
  }

  h2 {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 2%;
    font-family: Roboto;
  }

  h5 {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 2%;
    font-family: Roboto;
  }

  h4 {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 3%;
    font-family: Roboto;
    text-align: center;
  }

  p {
    font-size: 12px;
    font-weight: 250;
    letter-spacing: 2px;
    font-family: Roboto;
    margin: 1.5%;
    margin-bottom: 5%;
  }
  .img-show {
    margin-left: 20%;
    width: 65%;
    margin-top: 7.5%;
    margin-bottom: 7.5%;
  }

  .size-button{
    font-size: 12px;
  }
}

@media screen and (min-width: 1224px) {
  @import url("https://fonts.googleapis.com/css2?family=Roboto");


  
 .container-show {
    margin-left: 12.5%;
    
  }

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 5px;
    margin: 4%;
    text-decoration: overline;
    font-family: Roboto;
  }

  h2 {
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 2%;
    font-family: Roboto;
  }

  h5 {
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 2%;
    font-family: Roboto;
  }

  h4 {
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 1%;
    font-family: Roboto;
    text-align: center;
    margin-right: 20%;
  }

  p {
    font-size: 18px;
    font-weight: 250;
    letter-spacing: 2px;
    font-family: Roboto;
    margin-right: 20%;
  }
  .img-show {
    float: left;
    margin: 5%;
  }

  .quantity{
     font-size: 18px;
    font-weight: 250;
    letter-spacing: 2px;
    font-family: Roboto;
    margin-right: 20%;
  }
}

  @media screen and (min-width: 676px) and (max-width: 1223px){

      @import url("https://fonts.googleapis.com/css2?family=Roboto");

  * a:hover {
    text-decoration:none;
  }

      .container-show {
    padding-left: 30%;
    padding-top:35%;
    
  }

  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 5px;
    margin: 2%;
    text-decoration: overline;
    font-family: Roboto;
  }

  h2 {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 2%;
    font-family: Roboto;
  }

  h5 {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 2%;
    font-family: Roboto;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 3%;
    font-family: Roboto;
    text-align: center;
  }

  p {
    font-size: 16px;
    font-weight: 250;
    letter-spacing: 2px;
    font-family: Roboto;
    margin: 1.5%;
    margin-bottom: 5%;
  }
  .img-show {
    margin-left: 20%;
    width: 65%;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .size-button{
    font-size: 20px;
  }

}
</style>