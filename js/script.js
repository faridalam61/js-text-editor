const textArea = document.getElementById('texts');
const fontSize = document.getElementById('font-size');
const upperCase = document.getElementById('uppercase');
const alignBtn = document.getElementsByClassName('alignbtn');

// Bold, italic or underline formating
function formatText(value){
    textArea.classList.toggle(value);
    event.target.classList.toggle('bg-white')
    event.target.classList.toggle('text-black')
}

// Text Alignment

function textAlign(value){
    event.target.classList.toggle(value);
    event.target.classList.toggle('bg-white')
    event.target.classList.toggle('text-black')
}


// Changing font size
fontSize.addEventListener('change',function(){
    textArea.style.fontSize = fontSize.value+'px';
})

// Uppercase or lowercase convert
upperCase.addEventListener('click',function(){
    
    if(textArea.style.textTransform =='uppercase'){
        textArea.style.textTransform = 'lowercase';
    }else{
        textArea.style.textTransform = 'uppercase';
    }
})

// Word and charecter count
textArea.addEventListener('keyup',function(){
    let totalChar = textArea.value.length;
    let totalWord = textArea.value.split(' ').length;
    document.getElementById('total').innerText = `Total ${totalChar} charecters and ${totalWord} words`;
})