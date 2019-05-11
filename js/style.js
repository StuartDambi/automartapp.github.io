


















































































// const TypeWriter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// // The Type Method
// TypeWriter.prototype.type = function() {
//     //Current Index of Word
//     const current = this.wordIndex % this.words.length; //Error is here, length is not being recognized
//     //Get full text of every Word
//     const fullTxt = this.words[current];
//     // Check if Deleting
//     this.isDeleting ? this.txt = fullTxt.substring(0, this.txt.length - 1) : this.txt = fullTxt.substring(0, this.txt.length + 1);
//     // insert txt into Element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
//     // Initial Type Speed
//     let typeSpeed = 300;
//     if(this.isDeleting){
//         typeSpeed /= 2;
//     }
//     // if word is not complete
//     if(!this.isDeleting && this.txt ===fullTxt) {
//         //make a pause at end
//         typeSpeed = this.wait;
//         //set delete to true
//         this.isDeleting = true;
//     } else if(this.isDeleting && this.txt === ''){
//         this.isDeleting = false;
//         //move to next word
//         this.wordIndex++;
//         //pause before starting another word
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed);
// }
// // Init DOM Load
// document.addEventListener('DOMContentLoaded', init);

// // Init App
// function init(){
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     // Initialize the Type Writer
//     new TypeWriter(txtElement, words, wait);
// }//End of TypeWriter