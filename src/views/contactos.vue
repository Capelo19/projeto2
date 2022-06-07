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
    <section class="contact" id="contact">
        <div class="content">
            <h2>Contacte-nos</h2>
        </div>
        <div class="container">
            <div class="contactInfo">
                <div class="box">
                    <div class="icon"><i class="fas fa-map-marker"></i></div>
                    <div class="text">
                        <h3>Localização</h3>
                        <p>Rua do Ricardo o Bolota,<br>42069</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i class="fas fa-clock"></i></div>
                    <div class="text">
                        <h3>Horário:</h3>
                        <p>Segunda-Domingo,<br>09:00AM-23:00PM</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i class="fas fa-envelope"></i></div>
                    <div class="text">
                        <h3>Email:</h3>
                        <p>capelo.churrascos@gmail.com</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i class="fas fa-phone"></i></div>
                    <div class="text">
                        <h3>Telefone:</h3>
                        <p>912345678</p>
                    </div>
                </div>
            </div>

            <div class="conctactForm">
                <form>
                    <div class="inputBx">
                        <input type="text" name="" required="required">
                        <span> Nome Completo</span>
                    </div>
                    <div class="inputBx">
                        <input type="text" name="" required="required">
                        <span> Email</span>
                    </div>
                    <div class="inputBx">
                        <textarea required="required"></textarea>
                        <span> Diga-nos a sua opinião...</span>
                    </div>
                    <div class="inputBx">
                        <input type="submit" name="" value="send">
                        
                    </div>

                </form>
            </div>
        </div>
    </section>
</template>