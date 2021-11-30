import './less/index.less'

// Your code goes here!
const nav = document.querySelector(".nav")
nav.addEventListener('click',(evt) => {
    console.log('You clicked on the nav')
})
window.addEventListener('scroll', (evt)=>{
    console.log('Keep scrolling')
})