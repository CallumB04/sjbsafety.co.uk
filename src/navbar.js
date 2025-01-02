document.getElementById('navbar').innerHTML = `
    <nav class="w-screen fixed top-0 z-10 text-bg-primary font-lato">
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

        <div class="w-full h-24 md:h-28 bg-bg-primary flex justify-center md:justify-between items-center px-[5%]">
            <div class="h-full flex items-center">
                <img src="../assets/logo.png" class="object-cover h-[90%]" />
            </div>
            <div class="items-center gap-x-[3vw] text-text-primary font-semibold text-xl hidden md:flex">
                <a href="index.html" class="hover:text-highlight-primary transition-colors duration-200">Home</a>
                <a href="about.html" class="hover:text-highlight-primary transition-colors duration-200">About us</a>
                <a href="services.html" class="hover:text-highlight-primary transition-colors duration-200">Services</a>
                <a href="contact.html" class="hover:text-highlight-primary transition-colors duration-200">Contact</a>
            </div>
            <div class="flex md:hidden absolute right-8 h-full items-center">
                <div id="phone-dropdown-btn" class="flex flex-col w-9 justify-center gap-y-[6px] p-1 hover:cursor-pointer group">
                    <div class="w-full h-[2px] bg-text-primary group-hover:bg-text-secondary"></div>
                    <div class="w-full h-[2px] bg-text-primary group-hover:bg-text-secondary"></div>
                    <div class="w-full h-[2px] bg-text-primary group-hover:bg-text-secondary"></div>
                </div>
            </div>
            <div id="phone-dropdown" class="block md:hidden w-0 max-w-60 fixed top-24 right-0 bg-highlight-primary
                                            transition-[width] duration-500 ease-in-out text-lg">
                <div id="phone-dropdown-content" class="w-full h-full flex flex-col opacity-0 transition-opacity duration-300">
                    <a href="index.html" class="h-16 flex justify-center items-center w-full whitespace-nowrap
                                                hover:bg-highlight-secondary hover:text-highlight-primary transition-colors duration-200">Home</a>
                    <a href="about.html" class="h-16 flex justify-center items-center w-full whitespace-nowrap
                                                hover:bg-highlight-secondary hover:text-highlight-primary transition-colors duration-200">About us</a>
                    <a href="services.html" class="h-16 flex justify-center items-center w-full whitespace-nowrap
                                                hover:bg-highlight-secondary hover:text-highlight-primary transition-colors duration-200">Services</a>
                    <a href="contact.html" class="h-16 flex justify-center items-center w-full whitespace-nowrap
                                                hover:bg-highlight-secondary hover:text-highlight-primary transition-colors duration-200">Contact</a>
                    <div class="h-16 flex justify-center gap-x-9 text-[26px] w-full items-center">
                        <a href="https://www.facebook.com/SJBSafetyservices/" target="_blank" class="fab fa-facebook hover:text-highlight-secondary transition-colors duration-200"></a>
                        <a href="mailto:sjb.safetyservices@yahoo.com" class="fas fa-envelope hover:text-highlight-secondary transition-colors duration-200"></a>
                        <a href="tel:+44 7902 011622" class="fas fa-phone hover:text-highlight-secondary transition-colors duration-200 text-[23px]"></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
`;

const phoneDropdownBtn = document.getElementById("phone-dropdown-btn");
const phoneDropdown = document.getElementById("phone-dropdown");
const phoneDropdownContent = document.getElementById("phone-dropdown-content");
phoneDropdownBtn.addEventListener("click", () => {
    phoneDropdown.classList.toggle("w-9/12");
    phoneDropdown.classList.toggle("w-0");
    phoneDropdownContent.classList.toggle("opacity-0");
    phoneDropdownContent.classList.toggle("opacity-100");
});
