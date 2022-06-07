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
            <div class="box">
                <img src="@/assets/img/item1.jpg">
                <div class="infoBx">
                    <h4>Especial do Dia</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Velit sequi molestias error perferendis?</p>
                    <h5>10.00€</h5>
                    <a href="/carrinho">Comprar agora</a>
                </div>
            </div>
            <div class="box">
                <img src="@/assets/img/item2.jpg">
                <div class="infoBx">
                    <h4>Especial do Dia</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Velit sequi molestias error perferendis?</p>
                    <h5>15.00€</h5>
                    <a href="projeto3carrinho.html">Comprar agora</a>
                </div> 
            </div>
            <div class="box">
                <img src="@/assets/img/item3.jpg">
                <div class="infoBx">
                    <h4>Especial do Dia</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Velit sequi molestias error perferendis?</p>
                    <h5>10.00€</h5>
                    <a href="projeto3carrinho.html">Comprar agora</a>
                </div>
            </div>
                <div class="box">
                    <img src="@/assets/img/item4.jpg">
                    <div class="infoBx">
                        <h4>Especial do Dia</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Velit sequi molestias error perferendis?</p>
                        <h5>10.00€</h5>
                        <a href="projeto3carrinho.html">Comprar agora</a>
                    </div>
                </div>
            </div>
    </section>
</template>