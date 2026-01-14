// Projects gallery functionality
'use strict';

// DOM Elements
const projectList = document.querySelector('.project-list');
const projectModalContainer = document.querySelector('[data-project-modal-container]');
const projectModalOverlay = document.querySelector('[data-project-overlay]');
const projectModalCloseBtn = document.querySelector('[data-project-modal-close-btn]');
const projectModalTitle = document.querySelector('[data-project-modal-title]');
const projectModalDescription = document.querySelector('[data-project-modal-description]');
const projectGalleryContainer = document.querySelector('[data-project-gallery]');
const projectGithubLink = document.querySelector('[data-project-github-link]');
const galleryPrevBtn = document.querySelector('[data-gallery-prev]');
const galleryNextBtn = document.querySelector('[data-gallery-next]');
const galleryCounter = document.querySelector('[data-gallery-counter]');
const galleryMainImage = document.querySelector('[data-gallery-main-image]');

let currentGalleryIndex = 0;
let currentGalleryImages = [];

// Initialize projects
function initProjects() {
  if (!projectList) return;
  
  // Clear existing projects
  projectList.innerHTML = '';
  
  // Render projects from data (sorted: projects with gallery first)
  const sortedProjects = [...projectsData].sort((a, b) => {
    const aHasGallery = a.gallery && a.gallery.length > 0;
    const bHasGallery = b.gallery && b.gallery.length > 0;
    
    if (aHasGallery && !bHasGallery) return -1;
    if (!aHasGallery && bHasGallery) return 1;
    return 0;
  });

  sortedProjects.forEach(project => {
    const projectItem = createProjectItem(project);
    projectList.appendChild(projectItem);
  });
  
  // Add click handlers for project items
  addProjectClickHandlers();
}

// Create project item element
function createProjectItem(project) {
  const li = document.createElement('li');
  li.className = 'project-item active';
  li.setAttribute('data-filter-item', '');
  li.setAttribute('data-category', project.category);
  li.setAttribute('data-project-id', project.id);
  
  const hasGallery = project.gallery && project.gallery.length > 0;
  
  // Determine icon based on category
  let iconName = 'eye-outline';
  if (hasGallery) {
    iconName = 'images-outline';
  } else if (project.category === 'telegram bots') {
    iconName = 'chatbubble-ellipses-outline';
  } else if (project.category === 'simulations') {
    iconName = 'git-network-outline';
  }
  
  li.innerHTML = `
    <a href="#" class="project-link" data-project-trigger>
      <figure class="project-img">
        <div class="project-item-icon-box">
          <ion-icon name="${iconName}"></ion-icon>
        </div>
        ${hasGallery ? '<span class="gallery-badge">' + project.gallery.length + ' images</span>' : ''}
        <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
      </figure>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-category">${project.description}</p>
    </a>
  `;
  
  return li;
}

// Add click handlers for project items
function addProjectClickHandlers() {
  const projectTriggers = document.querySelectorAll('[data-project-trigger]');
  
  projectTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      const projectItem = this.closest('.project-item');
      const projectId = projectItem.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id === projectId);
      
      if (project && project.gallery && project.gallery.length > 0) {
        e.preventDefault();
        openProjectModal(project);
      } else if (project) {
        // If no gallery, redirect to GitHub
        e.preventDefault();
        window.open(project.githubUrl, '_blank');
      }
    });
  });
}

// Open project modal
function openProjectModal(project) {
  if (!projectModalContainer) return;
  
  currentGalleryImages = project.gallery;
  currentGalleryIndex = 0;
  
  // Set modal content
  if (projectModalTitle) projectModalTitle.textContent = project.title;
  if (projectModalDescription) projectModalDescription.textContent = project.description;
  if (projectGithubLink) projectGithubLink.href = project.githubUrl;
  
  // Render gallery
  renderGallery();
  
  // Show modal
  projectModalContainer.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
  if (!projectModalContainer) return;
  
  projectModalContainer.classList.remove('active');
  document.body.style.overflow = '';
  currentGalleryImages = [];
  currentGalleryIndex = 0;
}

// Render gallery
function renderGallery() {
  if (!galleryMainImage || currentGalleryImages.length === 0) return;
  
  // Set main image
  galleryMainImage.src = currentGalleryImages[currentGalleryIndex];
  galleryMainImage.alt = `Gallery image ${currentGalleryIndex + 1}`;
  
  // Update counter
  if (galleryCounter) {
    galleryCounter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;
  }
  
  // Update navigation buttons visibility
  if (galleryPrevBtn) {
    galleryPrevBtn.style.display = currentGalleryImages.length > 1 ? 'flex' : 'none';
  }
  if (galleryNextBtn) {
    galleryNextBtn.style.display = currentGalleryImages.length > 1 ? 'flex' : 'none';
  }
  
  // Render thumbnails
  renderThumbnails();
}

// Render thumbnails
function renderThumbnails() {
  if (!projectGalleryContainer) return;
  
  projectGalleryContainer.innerHTML = '';
  
  currentGalleryImages.forEach((image, index) => {
    const thumb = document.createElement('div');
    thumb.className = `gallery-thumbnail ${index === currentGalleryIndex ? 'active' : ''}`;
    thumb.innerHTML = `<img src="${image}" alt="Thumbnail ${index + 1}">`;
    thumb.addEventListener('click', () => {
      currentGalleryIndex = index;
      renderGallery();
    });
    projectGalleryContainer.appendChild(thumb);
  });
}

// Navigate gallery
function navigateGallery(direction) {
  if (currentGalleryImages.length <= 1) return;
  
  if (direction === 'prev') {
    currentGalleryIndex = currentGalleryIndex === 0 
      ? currentGalleryImages.length - 1 
      : currentGalleryIndex - 1;
  } else {
    currentGalleryIndex = currentGalleryIndex === currentGalleryImages.length - 1 
      ? 0 
      : currentGalleryIndex + 1;
  }
  
  renderGallery();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  initProjects();
  
  // Modal close handlers
  if (projectModalCloseBtn) {
    projectModalCloseBtn.addEventListener('click', closeProjectModal);
  }
  
  if (projectModalOverlay) {
    projectModalOverlay.addEventListener('click', closeProjectModal);
  }
  
  // Gallery navigation
  if (galleryPrevBtn) {
    galleryPrevBtn.addEventListener('click', () => navigateGallery('prev'));
  }
  
  if (galleryNextBtn) {
    galleryNextBtn.addEventListener('click', () => navigateGallery('next'));
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!projectModalContainer || !projectModalContainer.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeProjectModal();
    } else if (e.key === 'ArrowLeft') {
      navigateGallery('prev');
    } else if (e.key === 'ArrowRight') {
      navigateGallery('next');
    }
  });
});
