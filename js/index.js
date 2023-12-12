function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

document.addEventListener("DOMContentLoaded"), function() {
    const time = new Date().getHours();
    let greeting;
    
    if (time < 10) {
      greeting = "Good morning";
    } 
    
    else if (time < 18) {
      greeting = "Good day";
    } 
    
    else {
      greeting = "Good evening";
    }
    
    document.getElementById("hallo").innerHTML = greeting + " Camilla Andersen";
  };
