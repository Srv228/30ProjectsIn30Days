// when we click open btn 
const openbtn = document.getElementById("open-btn")
// same for close
const closebtn = document.getElementById("close-btn")

// popup container 

const popupContainer = document.querySelector('.popup-container');

// now we add two event listener for click method

openbtn.addEventListener('click' , () => {
    
    popupContainer.classList.add('blur');
    popupContainer.style.display = 'flex';
    
})

closebtn.addEventListener('click' , () => {
    
    popupContainer.classList.remove('blur');
    popupContainer.style.display = 'none';
    
})



