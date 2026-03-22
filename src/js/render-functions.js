// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImagesByQuery } from "./pixabay-api";

const loadMoreBtn = document.querySelector(".load-more-btn");
const gallery = document.querySelector(".gallery");

let lightboxInstance = null;

const lightboxOptions = {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
};

function imageTemplate(image) {
  return `<li class="gallery-item">
    <a href="${image.largeImageURL}" class="gallery-link">
        <div class="gallery-img-wrapper">
          <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
        </div>
        <div class="gallery-info">
          <div class="gallery-stat">
            <span class="gallery-stat-label">Likes</span>
            <p class="gallery-stat-value">${image.likes}</p>
          </div>
          <div class="gallery-stat">
            <span class="gallery-stat-label">Views</span>
            <p class="gallery-stat-value">${image.views}</p>
          </div>
          <div class="gallery-stat">
            <span class="gallery-stat-label">Comments</span>
            <p class="gallery-stat-value">${image.comments}</p>
          </div>
          <div class="gallery-stat">
            <span class="gallery-stat-label">Downloads</span>
            <p class="gallery-stat-value">${image.downloads}</p>
          </div>
        </div>
    </a>
  </li>`;
}

export function imagesTemplate(images) {
  return images.map(imageTemplate).join("");
}

export function initLightbox() {
  if (!lightboxInstance) {
    lightboxInstance = new SimpleLightbox('.gallery a', lightboxOptions);
  }
}

export function refreshLightbox() {
  if (lightboxInstance) {
    lightboxInstance.refresh();
  }
}

export function createGallery(images){
    const gallery = document.querySelector(".gallery");
    const markup = imagesTemplate(images);
    gallery.innerHTML = markup;
    
   
    if (!lightboxInstance) {
        initLightbox();
    } else {
        
        refreshLightbox();
    }
}

export async function addImagesToGallery(query, page) {
  const data = await getImagesByQuery(query, page);
  const markup = imagesTemplate(data.hits);
  gallery.insertAdjacentHTML("beforeend", markup);
  return data;
}

export function clearGallery(gallery) {
    gallery.innerHTML = "";
}

export function showLoader(targetGallery = gallery) {
  if (targetGallery.querySelector(".loader")) return;

  const loaderElem = document.createElement("span");
  loaderElem.className = "loader";
  loaderElem.textContent = "Loading";
  targetGallery.appendChild(loaderElem);
}

export function hideLoader(targetGallery = gallery) {
  const loaderElem = targetGallery.querySelector(".loader");
  if (loaderElem) {
    loaderElem.remove();
  }
}

export function showLoadMoreBtn() {
  loadMoreBtn.classList.add(`is-active`);
}

export function hideLoadMoreBtn() {
  loadMoreBtn.classList.remove(`is-active`);
}

export function scrollPage() {
  const el = gallery.lastElementChild;
  const height = el.getBoundingClientRect().height;
  window.scrollBy({
    top: height * 2.4,
    behavior: "smooth",
  });
}