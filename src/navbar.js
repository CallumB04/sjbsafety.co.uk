document.getElementById('navbar').innerHTML = `
    <nav class="w-screen fixed top-0 z-10 text-bg-primary">
        <div class="w-full h-12 bg-highlight-primary justify-center items-center gap-x-12 hidden md:flex">
            <span class="flex gap-x-3 items-center">
                <i class="fas fa-phone text-xl"></i>
                <p class="text-lg font-semibold">+44 7902 011622</p>
            </span>
            <span class="flex gap-x-3 items-center">
                <i class="fas fa-envelope text-xl"></i>
                <a href="mailto:sjb.safetyservices@yahoo.com" 
                   class="text-lg font-semibold">sjb.safetyservices@yahoo.com</a>
            </span>
        </div>

        <div class="w-full h-24 md:h-36 bg-bg-primary flex justify-center md:justify-between items-center px-[5%]">
            <div class="h-full flex items-center">
                <img src="../assets/logo.png" class="object-cover h-[90%]" />
            </div>
            <div class="items-center gap-x-[3vw] text-text-primary font-semibold text-xl hidden md:flex">
                <a href="index.html" class="">Home</a>
                <a href="about.html" class="">About us</a>
                <a href="services.html" class="">Services</a>
                <a href="contact.html" class="">Contact</a>
            </div>
        </div>
    </nav>
`;
