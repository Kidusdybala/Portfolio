'use strict';

// Certificate filter function
const certFilterFunc = function (selectedValue) {
  const certFilterItems = document.querySelectorAll("[data-page='certificates'] .certificate-item");

  for (let i = 0; i < certFilterItems.length; i++) {

    if (selectedValue.toLowerCase() === "all") {
      certFilterItems[i].classList.add("active");
    } else if (selectedValue === certFilterItems[i].dataset.category) {
      certFilterItems[i].classList.add("active");
    } else {
      certFilterItems[i].classList.remove("active");
    }

  }

}

// add event in all certificate filter button items
function setupCertFilters() {
  const certFilterBtn = document.querySelectorAll("[data-page='certificates'] [data-filter-btn]");
  let lastClickedCertBtn = certFilterBtn[0];

  for (let i = 0; i < certFilterBtn.length; i++) {

    certFilterBtn[i].addEventListener("click", function () {

      let selectedValue = this.innerText;
      certFilterFunc(selectedValue);

      lastClickedCertBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedCertBtn = this;

    });

  }
}

// ----------------------------------------------------------------------
// Dynamic Certificate Rendering & Modal Logic
// ----------------------------------------------------------------------

const certListContainer = document.querySelector(".certificates-list");
const certModalContainer = document.querySelector("[data-cert-modal-container]");
const certModalContent = document.querySelector("#cert-modal-content");
const certModalCloseBtn = document.querySelector("[data-cert-modal-close-btn]");
const certOverlay = document.querySelector("[data-cert-overlay]");

// Function to render certificates
function renderCertificates() {
   if (!certListContainer) return;

   certListContainer.innerHTML = ""; // Clear existing

   certificates.forEach(cert => {
     const certItem = document.createElement("div");
     certItem.classList.add("certificate-item", "active");
     certItem.dataset.category = cert.category;

     const title = cert.title;

     // For the grid view: if it's an image, show it. If PDF, show iframe.
     let imgContent = '';
     if (cert.type === 'image') {
       imgContent = `<img src="${cert.file}" alt="${title}" loading="lazy">`;
     } else {
       imgContent = `<iframe src="${cert.file}" width="100%" height="200" style="border: none;"></iframe>`;
     }

     certItem.innerHTML = `
       <div class="certificate-img-box">
         ${imgContent}
       </div>
       <h3 class="certificate-title">${title}</h3>
       <p class="certificate-category">${cert.category}</p>
     `;

     // Add click event
     certItem.querySelector(".certificate-img-box").addEventListener("click", () => {
       openCertModal(cert.file, cert.type);
     });

     certListContainer.appendChild(certItem);
   });
}

// Modal functions
function openCertModal(file, type) {
  if (!certModalContainer) return;

  let content = '';
  if (type === 'image') {
    content = `<img src="${file}" alt="Certificate" style="max-width: 100%; max-height: 80vh; object-fit: contain;">`;
  } else {
    // For PDF, use embed or iframe
    content = `<iframe src="${file}" width="100%" height="600px" style="border: none;"></iframe>`;
  }

  certModalContent.innerHTML = content;
  elementToggleFunc(certModalContainer);
}

function closeCertModal() {
  if (certModalContainer && certModalContainer.classList.contains("active")) {
    elementToggleFunc(certModalContainer);
    certModalContent.innerHTML = ""; // Clear content to stop video/iframe
  }
}

// Event listeners for modal
if (certModalCloseBtn) {
  certModalCloseBtn.addEventListener("click", closeCertModal);
}
if (certOverlay) {
  certOverlay.addEventListener("click", closeCertModal);
}