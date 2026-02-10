const mainTextElement = document.getElementById('maintext');


fetch('blogheadertext.txt')
    .then(response => response.text())
    .then(text => {
        mainTextElement.textContent = text;
    })
    .catch(error => {
        console.error('Error fetching blog header text:', error);
    });
