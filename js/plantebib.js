
const imageData = [
    { src: 'img/carrot.jpeg', alt: 'gulerød', text: 'Gulerød' },
    { src: 'img/corriander.jpeg', alt: 'koriander', text: 'Koriander' },
  ];
  

  const galleryContainer = document.querySelector('.gallery');
  

  imageData.forEach((data, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.onclick = () => openModal(data.text);
  
    const image = document.createElement('img');
    image.src = data.src;
    image.alt = data.alt;
  
    const imageText = document.createElement('div');
    imageText.classList.add('image-text');
    imageText.textContent = data.text;
  
    galleryItem.appendChild(image);
    galleryItem.appendChild(imageText);
    galleryContainer.appendChild(galleryItem);
  });
  
  
  function openModal(text) {
    const modalTextElement = document.getElementById('modalText');
    const modal = document.getElementById('myModal');
  
    if (text === 'Gulerød') {
      modalTextElement.innerText = 'This is a Gulerød image.';
    } else if (text === 'Koriander') {
      modalTextElement.innerText = 'This is a Koriander image.';
    } else {
      modalTextElement.innerText = text;
    }
  
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  
  
  window.onclick = function (event) {
    if (event.target === document.getElementById('myModal')) {
      closeModal();
    }
  };
  
  
  