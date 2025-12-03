const center_orbit = document.getElementById('center_orbit');
const name_orbit = document.getElementById('name_orbit');
const pick_map =  document.getElementById('pick_map');
const pick_map_text = document.getElementById('pick_map_text');
const pick_image = document.getElementById('pick_image');

console.log('Picker JS loaded');
//console.log(center_orbit);
//console.log(name_orbit);

const all_maps = ["Back", "The Cult Split"];




function goToMap(map_name) {
  let map_text = map_name.srcElement.innerHTML
  map_text = map_text.toLowerCase();
  console.log(map_text)
  if (map_text === "back") {
    console.log("Going back to home page");
    window.location.href = '../valorant_strat_radial_picker.html';
    return;
  };
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
      oarcname.classList.add('gap-3');
      if (i >= (total_maps) && i < (3 * total_maps)) {
        oarcname.setAttribute('flip', '');
      }
      
        
      oarcname.textContent = all_maps[i];
      name_orbit.appendChild(oarcname);
      //oarcname.addEventListener('mouseover', fillCenter);
      oarcname.addEventListener('click', goToMap);
    }
}

fillNames();