// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    //document.querySelector("#data-hover").addEventListener("mouseover", mouseOver);
    //document.querySelector("#src").addEventListener("mouseout", mouseOut);

    //function mouseOver() {
      //  document.querySelector("#data-hover").innerHTML = "../../_shared/img/kiss-wink-heart.svg";
      //}
      
      //function mouseOut() {
        //document.querySelector("#src").innerHTML = "../../_shared/img/kiss.svg";
      //}

    //addEventListener("mouseover", mouseOver);
    //addEventListener("mouseout", mouseOut);

      let img = document.querySelector('img');
    let start = img.src;
    let hover = img.getAttribute('data-hover'); 

    img.onmouseover = () => { img.src = hover; }
    img.onmouseout = () => { img.src = start; } 

    

});


