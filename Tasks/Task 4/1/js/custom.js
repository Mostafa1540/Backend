Vue.component('navbarr', {
    template:
    `<header class=" bg-light">
     <div class="container">
        <nav class="navbar navbar-light align-items-center">
            <div class="logo">
                <h3>Logo</h3>
            </div>
            <div class="bars d-md-none">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar mb-0"></div>
            </div>
            <ul class="d-none mb-0 d-md-flex">
                <li class="list-unstyled mr-3"><a href="#">Home</a></li>
                <li class="list-unstyled mr-3"><a href="#">About Us</a></li>
                <li class="list-unstyled mr-3"><a href="#">Blogs</a></li>
                <li class="list-unstyled mr-3"><a href="#">Contact</a></li>
            </ul>
        </nav>
        </div>
    </header>`
})



Vue.component('banerr', {
    template:
    `<section class="position-relative">
    <div class="overlay"></div>
        <div class="container">
            <div class="banner position-absolute">
                <h1 class="mb-3 text-light">Welcome Here</h1>
                <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eveniet quo voluptas laudantium soluta perferendis voluptates ducimus hic! Dolore, aliquam?</p>
            </div>
        </div>
    </section>`
})



Vue.component('footerr', {
    template:
    `<footer class="bg-dark">
        <div class="container">
            <p class="text-light mb-0 text-center">Copyright &copy 2020 Lorem Inc. All rights reserved.</p>
        </div>
    </footer>`
})


const app = new Vue ({
    el: '#app'
})