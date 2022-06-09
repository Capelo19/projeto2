<template>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="projeto3.css">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <title>Document</title>
    </head>
    <header>
        <a href="#" class="logo">Capelo Churrascos<span>.</span></a>
        <div class="toggle" onclick="toggleMenu();"></div>
            <ul class="menu" id="myTopnav">

            <li class="navbar-item">
                <router-link to="/">Home</router-link>
             </li>
            
            <li class="navbar-item">
            <router-link to="/menu">Menu</router-link>
            </li>
            
            <li class="navbar-item">
                <router-link to="/popular">Popular</router-link> 
            </li>
                
            <li class="navbar-item">
              <router-link to="/sobre_nos">Sobre Nós</router-link> 
            </li>
                
            <li class="navbar-item">
              <router-link to="/carrinho">Carrinho</router-link> 
            </li>
                
            <li class="navbar-item">
              <router-link to="/contactos">Contactos</router-link> 
            </li>
            </ul>
            
    </header>
<section class="popular_items" id="popular">
        <div class="info">
            <h2>O que tem de especial hoje?</h2>
            <h5>Especial do dia e comidas populares <a href="#" class="link">View menu</a></h5>
        </div>
        <div class="itemBx">
           
                <div class="box" v-for="(prato, index) in compras" :key="index">
                <div class="conteudocarrinho" >
                    <img class="imagenscarrinho" :src="prato.strCategoryThumb" alt="" />
                </div>                    
                <div class="infoBx">
                        <h4>{{prato.strCategory}}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Velit sequi molestias error perferendis?</p>
                        <h5>10.00€</h5>
                        <router-link @click="insereCompras(prato)" to="/carrinho">Comprar agora</router-link> 
                    </div>
                </div>
            </div>
    </section>
</template>
<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      user:'',
      compras:""
    }
  },
  mounted (){
    this.user = firebase.auth().currentUser
    this.axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then(res=>{
        this.compras= res.data.categories
    })
    // firebase.database().ref('compras/'+this.user.uid).get().then((snapshot)=>{this.compras=snapshot.val()})
  },
  methods:{
      insereCompras(res){
          firebase.database().ref('/compras/'+this.user.uid+'/').push().set(res)
          .then(()=>{
              console.log("data sent")
          })
      }
  }

}
</script>