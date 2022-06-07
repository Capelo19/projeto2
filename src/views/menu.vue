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
        <section class="item_menu" id="menu">
            <div class="card">
                <div class="icon"><i class="fas fa-star"></i></div>
                <h4>Comida Organica</h4>
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                <a href="/popular">Ver comida popular</a>
            </div>
            
            <div class="card">
                <div class="icon"><i class="fas fa-hat-chef"></i></div>
                <h4>Top Chefs</h4>
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                <a href="#">Ver mais</a>
            </div>
    
            <div class="card">
                <div class="icon"><i class="fas fa-heart"></i></div>
                <h4>Boa Experiência</h4>
                <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h5>
                <a href="#">Ver mais</a>
            </div>
        </section>

</template>