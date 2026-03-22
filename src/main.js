import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createGallery, clearGallery, hideLoader, showLoader, hideLoadMoreBtn, showLoadMoreBtn, imagesTemplate, refreshLightbox, scrollPage } from "./js/render-functions";
import { getImagesByQuery} from "./js/pixabay-api";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more-btn");

let query;
let page = 1;

async function handleSearch(query) {
  try {
    hideLoadMoreBtn();
    const data = await getImagesByQuery(query, 1);

    if (data.hits.length === 0) {
      iziToast.show({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
        color: "red",
      });
      return;
    }

    
    createGallery(data.hits);
    if(data.totalHits > 15){
        showLoadMoreBtn();
    }else{
        hideLoadMoreBtn();
    }

  } catch (err) {
    iziToast.show({
      title: "Error",
      message: "Sorry, there are no images matching your search query. Please try again!",
      color: "red",
    });

  } finally {
    hideLoader(gallery);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  query = formData.get("search-text");

  if (query.trim() === "") return;

  clearGallery(gallery);
  showLoader(gallery);

  handleSearch(query);
  

  e.target.reset();
});

loadMoreBtn.addEventListener("click", async (e) => {
    showLoader(gallery);
    page++;
    const data = await getImagesByQuery(query, page);
    const markup = imagesTemplate(data.hits);
    gallery.insertAdjacentHTML("beforeend", markup);
    scrollPage();
    refreshLightbox();

    if (page * 15 >= data.totalHits) {
        hideLoadMoreBtn();
        iziToast.show({
            message: "We're sorry, but you've reached the end of search results.",
            color: "blue",
        });
    }

    hideLoader(gallery);
});
    
    
    


