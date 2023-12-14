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
      greeting = "Godaften";
    }
    
    document.getElementById("hallo").innerHTML = greeting + " Camilla Andersen";




 //Sheet
    let sheetCount = 1;

    function addSheet() {
      const sheetBar = document.getElementById('sheetBar');
      const newSheet = document.createElement('div');
      newSheet.classList.add('sheet');
      newSheet.textContent = `Sheet ${sheetCount}`;
      newSheet.onclick = function() {
        switchSheet(this.textContent);
      };
  
      sheetBar.insertBefore(newSheet, sheetBar.lastChild);
  
      // Make the first sheet active by default
      if (sheetCount === 1) {
        switchSheet('Sheet 1');
      }
  
      sheetCount++;
    }
  
    function switchSheet(sheetName) {
      // Hide all content pages
      const contentPages = document.querySelectorAll('.content-page');
      contentPages.forEach(page => page.classList.remove('active-page'));
  
      // Create a new content page for the selected sheet
      const newContentPage = document.createElement('div');
      newContentPage.classList.add('content-page', 'active-page');
      newContentPage.textContent = `This is the content for ${sheetName}`;
      
      // Append the new content page
      document.getElementById('contentPages').appendChild(newContentPage);
    }