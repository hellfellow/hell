
var navbar=document.querySelector('header')
var body = document.querySelector('body')
var scrollValue=body.scrollTop


body.addEventListener('scroll',(){if (scrollValue>0) {navbar.classList.add('shadow')} })
