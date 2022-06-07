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
        <div>
   <input type="email" placeholder="email" v-model="email">
   <input type="password" placeholder="password" v-model="password">
   <button @click="login()">Login</button>            
        </div>

   
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            email:'',
            password:'',
            
            }
    },
    methods: {
        login(){
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
                ()=>{
                    alert('success')
                    this.user = firebase.auth().currentUser
                }
            )  
        }
    },
    created() {
        this.user = firebase.auth().currentUser
    },
}
</script>