var myimg = document.querySelector("img")
counter = 0

myimg.addEventListener("mouseover", function(){myimg.setAttribute("style","border: 0.1em solid red;")})
myimg.addEventListener("mouseout", function(){myimg.setAttribute("style","border: 0.1em solid black;")})