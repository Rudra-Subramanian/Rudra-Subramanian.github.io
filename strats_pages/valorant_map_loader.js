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

const maps = document.getElementById("maps");

const positions = [
  '80vh', '64vh', '48vh', '32vh', '16vh', '0vh',
  '-16vh', '-32vh', '-48vh', '-64vh', '-80vh', '0vh'
];



// Array.from(document.getElementsByClassName("menu-item"))
// .forEach((item, index) => {
//   item.onmouseover = () => {
//     menu.setAttribute('data-active-index', index);
//     maps.style.top = positions[index];
//   };
// });

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