// Accessing folders from root directory
// Add To this list when making a new folder

var gridDiv = document.querySelector('.columns');
console.log(gridDiv);

var folders = ["Abyss", "Lotus Premiere", 
    "The Cult Lotus", "The Cult Ascent", 
    "The Cult Split", "KayO lineups", "Viper Lineups", "Fade Lineups"];
var folder_directory = [];

for (var i in folders) {
    folder_directory[i] = folders[i].replace(/\s+/g, "");
    //console.log(folders[i]);
    //console.log(folder_directory[i]);
}

//Create the Panes
//Pane structure
/*
<div class="card">
    <div class="card-header">
       <p class="card-header-title">Placeholder</p>
    </div>
  <div class="card-image">
    <figure class="image is-128by128 is-rounded">
      <img
        src=""
        alt="Placeholder image"
      />
    </figure>
  </div>
</div>
*/

// Create cards as before, but don't append to body yet

var cards = [];
for (var i = 0; i < folders.length; i++) {
    
    var cell = document.createElement('div');
    cell.className = 'cell';

    gridDiv.appendChild(cell);
    //cards.push(card);
}



