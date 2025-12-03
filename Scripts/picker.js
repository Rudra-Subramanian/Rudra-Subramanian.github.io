const center_orbit = document.getElementById('center_orbit');
const name_orbit = document.getElementById('name_orbit');
const pick_map =  document.getElementById('pick_map');
const pick_map_text = document.getElementById('pick_map_text');
const pick_image = document.getElementById('pick_image');

console.log('Picker JS loaded');
//console.log(center_orbit);
//console.log(name_orbit);

const all_maps = ["Viper lineups", "Abyss",
   "Ascent", 
   "Bind", 
   "Corrode",
"Haven",
"Lotus",
"Sunset",
"Breeze",
"Fracture",
"Icebox",
"Pearl",
"Split"];


function fillCenter(map_name) {
  var map_text = map_name.toElement.innerHTML
  //console.log(map_text );
  
  pick_map_text.textContent = map_text;

  pick_image.src = '../images/map_images/' + map_text.toLowerCase() + '.png';
  pick_image.width = 200;
  pick_image.height = 200;

}

function goToMap(map_name) {
  var map_text = map_name.srcElement.innerHTML
  console.log(map_text)
  map_text = map_text.toLowerCase();
  window.location.href = 'maps/' + map_text + '.html';
};



function fillNames() {
  let total_maps = all_maps.length;
  total_maps = total_maps / 4;
    for (let i = 0; i < all_maps.length; i++) {
      //console.log('Filling name for map:', all_maps[i], 'at index', i);
      const oarcname = document.createElement('o-arc');
      oarcname.setAttribute('text-anchor', 'middle');
      oarcname.classList.add('grow-1.2x');
      if (i >= (total_maps) && i < (3 * total_maps)) {
        oarcname.setAttribute('flip', '');
      }
      
        
      oarcname.textContent = all_maps[i];
      name_orbit.appendChild(oarcname);
      oarcname.addEventListener('mouseover', fillCenter);
      oarcname.addEventListener('click', goToMap);
    }
}

fillNames();