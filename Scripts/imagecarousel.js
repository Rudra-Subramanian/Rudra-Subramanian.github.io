const full_carousel = document.getElementById('flickity')

var image_dict = new Map();

image_dict.set("Image Name", ["https://picsum.photos/350", "Random photo"])
image_dict.set("new name", ["https://picsum.photos/300", "Random photo"])

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