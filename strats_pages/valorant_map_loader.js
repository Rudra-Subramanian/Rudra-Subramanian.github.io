const menu = document.getElementById("menu");
const menuItems = document.getElementById("menu-items");
let map_items = document.getElementById("maps");
map_items = map_items.children; 


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