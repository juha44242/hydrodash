<script>
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('compact-layout');
});
</script>



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