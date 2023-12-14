document.addEventListener("DOMContentLoaded", function() {
  // Get the container where items will be added
  const itemListContainer = document.getElementById("item-list-container");

  // List of items with pictures and text
  const items = [
    {
      image: "img/koriander.jpeg",
      text: "Koriander"
    },
    {
      image: "img/carrot.jpeg",
      text: "Gulerød"
    },
    {
      image: "img/rosemarin.jpeg",
      text: "Rosemarin"
    },
    {
      image: "img/blomkaal.jpg",
      text: "Blomkål"
    },
    {
      image: "img/chili.jpg",
      text: "Chili"
    },
    {
      image: "img/hindbaer.jpg",
      text: "Hindbær"
    },
    {
      image: "img/spinat.jpeg",
      text: "Spinat"
    },
    {
      image: "img/tomat.JPEG",
      text: "Tomat"
    }
  ];

  // Iterate through the items and create HTML elements
  items.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const image = document.createElement("img");
    image.src = item.image;

    const text = document.createElement("p");
    text.textContent = item.text;

    // Append image and text to the item div
    itemDiv.appendChild(image);
    itemDiv.appendChild(text);

    // Add click event listener to each item
    itemDiv.addEventListener("click", () => openModal(index));

    // Append the item div to the container
    itemListContainer.appendChild(itemDiv);
  });

  // Modal functions
  function openModal(index) {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const closeModal = document.getElementById("close-modal");

    modal.style.display = "block";
    
    // Content for the first popup window
    if (index === 0, 1, 2, 3, 4, 5, 6, 7, 8) {
      modalContent.innerHTML = `
      <img src="${items[index].image}" alt="${items[index].text}">
      <h2>${items[index].text}</h2>
        <p>Det er let at dyrke, men for en konstant forsyning af koriander er gentagne plantninger nødvendige.</p>
        <p>Lys</p>
        <p>Om foråret skal du plante koriander i fuld sol. For efterfølgende plantninger om sommeren er en placering i delvis skygge ofte bedre for at forhindre, at den går i blomst. Alternativt kan du beskytte planten med en skyggenet på 30 til 50% eller vælge sorter, der er modstandsdygtige over for at gå i blomst.</p>
        <p>Jord og Vand</p>
        <p>Koriander trives bedst i rig, men let, veldrænet jord med en pH mellem 6,2 og 6,8.</p>
        <p>I modsætning til andre urter, der er i stand til at overleve og er mere aromatiske, når de dyrkes under tørre forhold, har koriander brug for fugt. Regelmæssig vanding i mangel af regn forlænger også plantens bladscene.</p>
        <!-- Add more paragraphs as needed -->
      `;
    } else {
      // Content for other popup windows
      modalContent.innerHTML = `<h2>${items[index].text}</h2><img src="${items[index].image}" alt="${items[index].text}">`;
    }

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
  