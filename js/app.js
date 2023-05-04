// toggle the menu icon (written in vanilla javascript)

const toggleMenu = () => {
    const navlinks = document.getElementById( "myTopnav");
 
    if (navlinks.className === "items") {

      navlinks.className += " responsive";

      document.getElementById("closemenu").style.display = "block" ;

      document.getElementById("openmenu").style.display = "none" ;

    } else {
      navlinks.className = "items";

      document.getElementById("openmenu").style.display = "block" ;

      document.getElementById("closemenu").style.display = "none" ;

    }
  }


  function toggleBookmark() {
    let x = document.getElementById("linkbtn");
    if (x.innerHTML === "Bookmark") {
      x.innerHTML = "Bookmarked";
      x.style.color = "#147b74";
      document.getElementById("bookmarked").style.display = "flex"
      document.getElementById("mark").style.display = "none"
    } else {
      x.innerHTML = "Bookmark";
      x.style.color = "#000";
      document.getElementById("mark").style.display = "flex";
      document.getElementById("bookmarked").style.display = "none"
    }
  }