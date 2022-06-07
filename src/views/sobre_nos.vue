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
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="projeto3.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <title>Document</title>
</head>
<section class="about" id="about">
    <div class="infoBx">
        <h2>Sobre Nós</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nisi, vitae illum! Fugiat soluta aut sunt possimus at nesciunt voluptate tenetur repellat, 
        dolore nostrum perferendis corrupti eum dicta labore ratione amet magnam in! 
        Iste soluta hic obcaecati quasi consectetur, tempore dolorem nulla, 
        sunt pariatur qui quas excepturi eius nisi est aspernatur expedita eos amet, 
        nemo odio reprehenderit ipsa. Deleniti, voluptas at!</p>
        <a href="#"> View More</a>
    </div>
    <img src="@/assets/img/about.jpg">
</section>
</template>