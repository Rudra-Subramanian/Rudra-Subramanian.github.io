let menuItems = Array.from(document.getElementsByClassName("menu-item"));
let right_menu = document.getElementsByClassName("right_options");
let right_menu_panels = right_menu[0].children;
console.log(Array.from(right_menu_panels));



if (window.matchMedia("(orientation: landscape)").matches) {
    console.log("landscape mode");
    console.log(menuItems);
    menuItems.forEach((item, index) => {
        if (item.innerText != "Back") {
            item.onmousedown = () => {
                if (!document.startViewTransition) {
                    updateTheDOM(index);
                    return;
                }
                
                // With a View Transition:
                document.startViewTransition(() => updateTheDOM(index));
            }
        }
    });


  }


  function updateTheDOM(index) {
    console.log(`updating the screen to show the options with index: ${index}`);

    Array.from(right_menu_panels).forEach((panel) => {
        panel.style.opacity = 0;
        panel.style.pointerEvents = 'none';

        });
    if (index < 2){ //increase to 3 when adding lineups
    right_menu_panels[index].style.opacity = 1;
    right_menu_panels[index].style.pointerEvents = 'all';
    

    }
  }