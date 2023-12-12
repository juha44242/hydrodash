function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


    const time = new Date().getHours();
    let greeting;
    
    if (time < 10) {
      greeting = "Godmorgen";
    } 
    
    else if (time < 18) {
      greeting = "Goddag";
    } 
    
    else {
      greeting = "Good evening";
    }
    
    document.getElementById("hallo").innerHTML = greeting + " Camilla Andersen";


 
