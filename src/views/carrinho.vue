<template>
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
<div class="menucarrinho">
        <div class="carrinho">
          <div class="titulocarrinho">
            <p>O seu carrinho</p>
          </div>
          <div class="conteudocarrinho">
            <img class="imagenscarrinho" src="@/assets/img/item2.jpg" alt="" />
            <img class="imagenscarrinho" src="@/assets/img/item3.jpg" alt="" />
          </div>
          <div class="Preço">
            <p>Total:20€</p>
          </div>
          <div class="continuar">
            <button class="botaocontinuarcarrinho">Continuar</button>
          </div>
        </div>
      </div>
      <div>
        {{user}}
      </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      user:''
    }
  },
  mounted (){
    this.user = firebase.auth().currentUser
  }
}
</script>

