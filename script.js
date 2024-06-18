/*class MobileNavbar{
    constructor(mobileMenu, navLinks, navList){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(this.navList);
        this.navLinks = document.querySelectorAll(this.navLinks);
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind();
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
}*/
class MobileNavbar {
    //seleciona cada um dos seletorees
    constructor(mobileMenu, navLinks, navList) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    //aciona quando menu é clicado ativando a classe active do css
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);

    }

    //evento q chama o metodo handleclick
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
}

// Inicialização da classe MobileNavbar
document.addEventListener('DOMContentLoaded', function() {
    const navbar = new MobileNavbar(".mobile-menu", "#navbar", "#navbar");

    navbar.addClickEvent();
});
