const full_carousel = document.getElementById('flickity')

var image_dict = new Map();



image_dict.set("abyss a attack", ["../../images/viper walls/abyss a attack.png", "Viper wall for attacking A site on Abyss"]);
image_dict.set("abyss a defense", ["../../images/viper walls/abyss a defense.png", "Viper wall for defending A site on Abyss"]);
image_dict.set("abyss b attack", ["../../images/viper walls/abyss b attack.png", "Viper wall for attacking B site on Abyss"]);
image_dict.set("ascent a attack", ["../../images/viper walls/ascent a attack.png", "Viper wall for attacking A site on Ascent"]);
image_dict.set("ascent a defense", ["../../images/viper walls/ascent a defense.png", "Viper wall for defending A site on Ascent"]);
image_dict.set("ascent b attack", ["../../images/viper walls/ascent b attack.png", "Viper wall for attacking B site on Ascent"]);
image_dict.set("corrode a attack", ["../../images/viper walls/corrode a attack.png", "Viper wall for attacking a site on corrode"]);
image_dict.set("corrode a defense", ["../../images/viper walls/corrode a defense.png", "Viper wall for defending a site on corrode"]);
image_dict.set("corrode b attack", ["../../images/viper walls/corrode b attack.png", "Viper wall for attacking B site on corrode"]);
image_dict.set("corrode b defense", ["../../images/viper walls/corrode b defense.png", "Viper wall for defending B site on corrode"]);
image_dict.set("haven a attack", ["../../images/viper walls/haven a attack.png", "Viper wall for attacking A site on Haven"]);
image_dict.set("haven a defense", ["../../images/viper walls/haven a defense.png", "Viper wall for defending A site on Haven"]);
image_dict.set("haven b attack", ["../../images/viper walls/haven b attack.png", "Viper wall for attacking B site on Haven"]);
image_dict.set("haven b defense", ["../../images/viper walls/haven b defense.png", "Viper wall for defending B site on Haven"]);
image_dict.set("haven c attack", ["../../images/viper walls/haven c attack.png", "Viper wall for attacking C site on Haven"]);
image_dict.set("pearl a attack", ["../../images/viper walls/pearl a attack.png", "Viper wall for attacking A site on Pearl"]);
image_dict.set("pearl a defense", ["../../images/viper walls/pearl a defense.png", "Viper wall for defending A site on Pearl"]);
image_dict.set("pearl b attack", ["../../images/viper walls/pearl b attack.png", "Viper wall for attacking B site on Pearl"]);
image_dict.set("split a attack 2", ["../../images/viper walls/split a attack 2.png", "Viper wall for attacking A site on Split"]);
image_dict.set("split a attack 3", ["../../images/viper walls/split a attack 3.png", "Viper wall for attacking A site on Split"]);
image_dict.set("split a attack", ["../../images/viper walls/split a attack.png", "Viper wall for attacking A site on Split"]);
image_dict.set("split a defense 2", ["../../images/viper walls/split a defense 2.png", "Viper wall for defending A site on Split"]);
image_dict.set("split a defense", ["../../images/viper walls/split a defense.png", "Viper wall for defending A site on Split"]);
image_dict.set("split b attack", ["../../images/viper walls/split b attack.png", "Viper wall for attacking B site on Split"]);
image_dict.set("split b defense", ["../../images/viper walls/split b defense.png", "Viper wall for defending B site on Split"]);
image_dict.set("split mid defense", ["../../images/viper walls/split mid defense.png", "Viper wall for defending Mid on Split"]);



for (const [key, value] of image_dict) {
  console.log(`${key} - source :${value[0]} \n ${value[1]}`);
  var newcell = document.createElement('div');
  newcell.classList.add('carousel-cell');
  var image = document.createElement('img');
  newcell.append(image);
  image.src = value[0];
  var box = document.createElement('div');
  box.classList.add("box");
  box.classList.add("image-info-box")
  var image_title = document.createElement('h1');
  image_title.classList.add("image-title");
  image_title.classList.add("title")
  image_title.innerText= key;
  
  var image_description = document.createElement('p');
  image_description.classList.add('image-description');
  image_description.innerText = value[1];
  box.append(image_title);
  box.append(image_description);
  newcell.append(box)
  full_carousel.append(newcell)
  
  
  
}