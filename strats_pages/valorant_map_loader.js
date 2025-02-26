const menu = document.getElementById("menu");
const menuItems = document.getElementById("menu-items");
let all_maps = document.getElementById("maps");
map_items = all_maps.children; 
let mql = window.matchMedia("(orientation: landscape)");
const new_portrait_texts = document.createElement("div");


if (window.matchMedia("(orientation: landscape)").matches) {

  Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
      item.onmouseover = () => {
        menu.setAttribute('data-active-index', index);
        maps.style.top = (80 - (index*16)).toString() + 'vh';
        // Object.assign(map_items[index].style, {
        //   width: '50vh',
        //   position: 'relative',
        //   marginLeft: '-45vw',
        //   marginRight: '-45vw',
        // })
      };
    //   menuItems.onmouseleave = () => {
    //     maps.style.top = '0vh';
    //     Object.assign(map_items[index].style, {
    //       width: maps.style.width,
    //       position: maps.style.position,
    //       MarginLeft: maps,
    //       MarginRight: 'inherit',
    //     })

    // };


    });
  }
else { //portrait mode

  let position = menuItems.scrollLeft;
  console.log("portrait mode");
  console.log(position);
  menuItems.addEventListener('scroll',(event) =>{
    ticking = false;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        change_position(menuItems.scrollLeft);
        ticking = false;
      });
  
      ticking = true;
    }
  })
  menuItems.addEventListener("scrollend", (event) => {
    let closestItem = find_closest_menu_item_to_center(menuItems);
    ticking = true;
    const middleMap = document.getElementById("middle-map");
    const middleMapImage = middleMap.querySelector("img");
    middleMapImage.src = map_items[closestItem[1]].children[0].src;


  });
}

function change_position(position){
  all_maps.style.left = -position + 'px';
}


function find_closest_menu_item_to_center(menu_items){
  let viewWidth = window.innerWidth;
  let middlePosition = (viewWidth / 2);

  let closest_item = new Array(null, -1);
  let closestDistance = Infinity;
  let count = 0;
  Array.from(menu_items.children).forEach((item) => {
    let itemRect = item.getBoundingClientRect();
    let itemMiddle = itemRect.left + itemRect.width / 2;
    let distance = Math.abs(itemMiddle - middlePosition);

    if (distance < closestDistance) {
      closestDistance = distance;
      closest_item[0] = item;
      closest_item[1] = count;
    }
    count++;
  });
  if (closest_item[0]) {
    console.log("Middle item:", closest_item[0]);
    console.log('Middle Item Index:', closest_item[1]);
    return closest_item;
  }
  return closest_item;

}




const maps = document.getElementById("maps");


// Array.from(document.getElementsByClassName("menu-item"))
//   .forEach((item, index) => {
//     item.onmouseover = () => {
//       menu.setAttribute('data-active-index', index);
//       maps.style.top = positions[index];
//       Array.from(maps.children).forEach((map, mapIndex) => {
//         if (mapIndex === index) {
//           Object.assign(map.style, mapStyles);
//         } else {
//           map.style.width = '30vh';
//           map.style.position = 'relative';
//           map.style.marginLeft = '-45vw';
//           map.style.marginRight = '-45vw';
//         }
//       });
//     };
//   });