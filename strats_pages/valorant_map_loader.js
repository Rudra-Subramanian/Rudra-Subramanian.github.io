const menu = document.getElementById("menu");
const menuItems = document.getElementById("menu-items");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.setAttribute('data-active-index', index);
    };
  });

menuItems.onmouseleave = () => {
    menu.setAttribute('data-active-index', '11');
};