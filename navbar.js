class MenuManager {
  constructor(menuToggleSelector, navListSelector, breakpoint = 1200) {
    this.menuToggle = document.querySelector(menuToggleSelector);
    this.navList = document.querySelector(navListSelector);
    this.isMenuOpen = false;
    this.breakpoint = breakpoint;

    this.menuToggle.addEventListener("click", () => this.toggleMenu());
    window.addEventListener("resize", () => this.handleResize());
  }

  toggleMenu() {
    this.isMenuOpen ? this.updateMenu(false) : this.updateMenu(true);
  }

  updateMenu(isOpen = false) {
    const style = !isOpen ? "none" : "flex";

    this.navList.style.display = style;
    this.menuToggle.classList.toggle("active", isOpen);
    this.navList.classList.toggle("opened", isOpen);

    this.isMenuOpen = isOpen;
  }

  handleResize() {
    const isOpen = window.innerWidth >= this.breakpoint;

    this.updateMenu(isOpen);
  }
}

const menuManager = new MenuManager("#menu-toggle", "#nav-list");
