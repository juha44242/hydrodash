// Gallery data
var galleryData = [
    { image: "img_5terre.jpg", desc: "Cinque Terre" },
    { image: "img_forest.jpg", desc: "Forest" },
    { image: "img_lights.jpg", desc: "Northern Lights" },
    { image: "img_mountains.jpg", desc: "Mountains" }
  ];

  // Create popups for each gallery item
  for (var i = 0; i < galleryData.length; i++) {
    var galleryId = "gallery" + (i + 1);
    var galleryItem = document.getElementById(galleryId);

    galleryItem.onclick = function(index) {
      return function() {
        openPopup(index);
      };
    }(i);
  }

  // Function to open the popup
  function openPopup(index) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popupImage");
    var popupDesc = document.getElementById("popupDesc");

    popupImage.src = galleryData[index].image;
    popupDesc.innerHTML = galleryData[index].desc;
    popup.style.display = "block";
  }

  // Function to close the popup
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }