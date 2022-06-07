<template>
    <header>
        <a href="#" class="logo">Capelo Churrascos<span>.</span></a>
        <div class="toggle" onclick="toggleMenu();"></div>
            <ul class="menu" id="myTopnav">

            <li class="navbar-item">
                <router-link to="/login">Login</router-link>
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
    <section class="banner" id="home">
        <div class="info">
            <h2>Descobre a melhor COMIDA<span>.</span></h2>
            <h5>Venha ter connosco.Entregas.Take away.</h5>
            <a href="/menu">Go to Menu <i class="fas fa-chevron-right"></i></a>
        </div>
        <img src="@/assets/img/banner.jpg"> 
    </section>

    
    <section class="imgGal" id="gallery">
        <div class="box a">
            <img src="@/assets/img/about.jpg">
        </div>
        <div class="box b">
            <img src="@/assets/img/img1.jpg">
        </div>
        <div class="box c">
            <img src="@/assets/img/item4.jpg">
        </div>
        <div class="box d">
            <img src="@/assets/img/img2.jpg">
        </div>
        <div class="box e">
            <img src="img3.jpg">
        </div>
        <div class="box f">
            <img src="@/assets/img/img4.jpg">
        </div>
        <div class="box g">
            <img src="@/assets/img/img1.jpg">
        </div>
        <div class="box h">
            <img src="@/assets/img/item3.jpg">
        </div>
        <div class="box i">
            <img src="@/assets/img/item2.jpg">
        </div>
        <div class="box j">
            <img src="@/assets/img/banner.jpg">
        </div>
        <div class="box k">
            <img src="@/assets/img/img5.jpg">
        </div>
    </section>

    

    <footer class="footer">
        <div class="footer-left">
            <h1>Capelo Churrascos<span>.</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Minus autem pariatur repellendus facere aliquam? 
            Sed aut nemo alias accusamus?</p>
            <br>
            <div class="socials">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
        </div>

        <ul class="footer-right">
            <li class="projects">
                <h2>Projetos</h2>

                <ul class="box">
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">HTMK</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">Bootstrap</a></li>
                </ul>
            </li>
            <li class="features">
                <h2>Serviços</h2>

                <ul class="box">
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Front-End</a></li>
                    <li><a href="#">Code</a></li>
                    <li><a href="#">Developers</a></li>
                </ul>
            </li>
            <li class="address">
                <h2>Morada</h2>

                <ul class="box">
                    <li><a href="#">Madeira,Funchal</a></li>
                    <li><a href="#">Horário:<br>
                        11:00AM-19:00OM</a></li>
                    <li><a href="#">Capelo.churrascos@gmail.com</a></li>
                    <li><a href="#">912345678</a></li>
                </ul>
            </li>

        </ul>
    </footer>


    <!-- <script type="text/javascript">
        window.addEventListener('scroll',function(){
            var header = document.querySelector('header');
            header.classList.toggle('sticky',window.scrollY > 0);
        });
        function toggleMenu(){
            var menuToggle = document.querySelector('.toggle');
            var menu = document.querySelector('.menu');
            menuToggle.classList.toggle('active');
            menu.classList.toogle('active');
        }

    </script> -->

</template>
