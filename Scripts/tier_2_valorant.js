

document.addEventListener('DOMContentLoaded', function() {
  
    function openModal(number, title) {
      const modal = document.querySelector('.big-dialog');
      const modal_header = document.querySelector('.modal-content').getElementsByTagName('h1')[0];
      modal_header.textContent = title;
      
      modal.showModal();
      console.log(number);
      
      modal.addEventListener("click", (event) => {
        console.log(event.target)
        if (event.target === modal) { // If clicked outside modal content
          modal.close('done');
     }
   });
 
   }
   
   
   
   
   const mediaScroller = document.querySelector('.media-scroller');
   const titles = [
     "Name 1",
     "Title 2",
     "Title 3",
     "Title 4",
     "Title 5",
     "Title 6",
     "Title 7",
     "Title 8",
     "Title 9",
     "Title 10"
   ];
   const data = [
     [1,2,3,4,5,1,2,3,4,5],
     [1,2,3,4,5,1,2,3,4,5],
     [1,2,3,4,5,1,2,3,4,5],
     [1,2,3,4,5,1,2,3,4,5],
     [1,2,3,4,5,1,2,3,4,5],
     [1,2,3,4,5,1,2,3,4,5],
     [1,2,3,4,5,1,2,3,4,5],
     [1,2,3,4,5,1,2,3,4,5],
     [1,2,3,4,5,1,2,3,4,5],
     [1,2,3,4,5,1,2,3,4,5],
   ];
   let count = 0;
 
   titles.forEach(title => {
     const mediaElement = document.createElement('div');
     mediaElement.classList.add('media-element');
     mediaElement.classList.add('open-button');
     mediaElement.classList.add(`button-number-${count}`)
     count = count + 1;
 
     const img = document.createElement('img');
     img.src = ''; // Add the image source URL here
     img.alt = title;
     img.style.pointerEvents = 'None'
 
     const p = document.createElement('p');
     p.textContent = title;
     p.style.pointerEvents = 'None'
 
     mediaElement.appendChild(img);
     mediaElement.appendChild(p);
     mediaScroller.appendChild(mediaElement);
 
     // IN THE EVENT OF CLICKING OPEN MODAL THAT SHOULD COVER THE MOST OF THE SCREEN
     mediaElement.addEventListener("click", (evt) => {
       const clickedElement = event.target; // The exact element clicked
       const classList = Array.from(clickedElement.classList);
       let button_number = -1;
       classList.forEach(className => {
         if (className.toString().includes('number')){
         button_number = className.toString().match(/\d+/)[0];
         };
       });
       openModal(button_number, title);
     }); 
   });
 
   
 });
 
 
 
 
 