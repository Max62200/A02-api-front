<template>
  <div id="list">
   
    <h1>Liste des livres</h1> 

     <div>
    <flickity ref="flickity" :options="flickityOptions">
     <div class="carousel-cell margin-img" v-for="(i, index) in list" :key="index">
      <router-link to="/show"><img :src="i"></router-link> 
    </div>
    </flickity>
    <div class="display-button">
      <a @click="previous()" ><img class="img-prev" src="../assets/arrow.png" alt=""></a>
      <a @click="next()" ><img class="img-next" src="../assets/arrow.png" alt=""></a>
    
    </div>
  </div>


  </div>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      },
      list: Array(5)
        .fill()
        .map((_, i) => `http://lorempixel.com/400/200/sports/${i}/`)
    };
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    }
  }
};
</script>

<style scoped>
@media  screen and (max-width: 675px) {
@import url('https://fonts.googleapis.com/css2?family=Roboto');

h1{
  text-align: center;
  font-size:30px;
  font-weight: 900;
  letter-spacing: 3.5px;
  margin: 5%;
  text-decoration: overline;
  font-family: Roboto;
}

.display-button{
  display: none;
 
}

.img-next{
  width:15%;
  position: absolute;
  transform: rotateZ(180deg);
  opacity: 0.75;
}

.img-prev{
   width:15%;
  position: absolute;
  opacity: 0.75;
}

.img-prev:hover{
 opacity: 1;
}

.img-next:hover{
    opacity: 1;
}
.margin-img{
  margin:2%;
}
}

@media screen and (min-width:1224px){

@import url('https://fonts.googleapis.com/css2?family=Roboto');

h1{
  text-align: center;
  font-size:50px;
  font-weight: 900;
  letter-spacing: 5px;
  margin: 2%;
  text-decoration: overline;
  font-family: Roboto;
}

.display-button{
  display: flex;
  justify-content: center;
  justify-content: space-around;
}

.img-next{
  width:15%;
  position: absolute;
  transform: rotateZ(180deg);
  opacity: 0.75;
}

.img-prev{
   width:15%;
  position: absolute;
  opacity: 0.75;
}

.img-prev:hover{
 opacity: 1;
}

.img-next:hover{
    opacity: 1;
}

.margin-img{
  margin:2%;
}

}
</style>

