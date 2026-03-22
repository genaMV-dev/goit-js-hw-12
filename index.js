import{S as q,a as g,i as o}from"./assets/vendor-xJi9366P.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function m(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const h=document.querySelector(".load-more-btn"),f=document.querySelector(".gallery");let n=null;const E={captions:!0,captionsData:"alt",captionDelay:250};function x(e){return`<li class="gallery-item">
    <a href="${e.largeImageURL}" class="gallery-link">
        <div class="gallery-img-wrapper">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </div>
        <div class="gallery-info">
          <div class="gallery-stat">
            <span class="gallery-stat-label">Likes</span>
            <p class="gallery-stat-value">${e.likes}</p>
          </div>
          <div class="gallery-stat">
            <span class="gallery-stat-label">Views</span>
            <p class="gallery-stat-value">${e.views}</p>
          </div>
          <div class="gallery-stat">
            <span class="gallery-stat-label">Comments</span>
            <p class="gallery-stat-value">${e.comments}</p>
          </div>
          <div class="gallery-stat">
            <span class="gallery-stat-label">Downloads</span>
            <p class="gallery-stat-value">${e.downloads}</p>
          </div>
        </div>
    </a>
  </li>`}function v(e){return e.map(x).join("")}function $(){n||(n=new q(".gallery a",E))}function b(){n&&n.refresh()}function M(e){const t=document.querySelector(".gallery"),i=v(e);t.innerHTML=i,n?b():$()}function P(e){const t=v(e);f.insertAdjacentHTML("beforeend",t),b()}function B(e){e.innerHTML=""}function w(e=f){if(e.querySelector(".loader"))return;const t=document.createElement("span");t.className="loader",t.textContent="Loading",e.appendChild(t)}function L(e=f){const t=e.querySelector(".loader");t&&t.remove()}function y(){h.classList.add("is-active")}function d(){h.classList.remove("is-active")}g.defaults.baseURL="https://pixabay.com/api/";g.defaults.params={key:"55067704-3401c91e7f521ffd7d90d5720",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:16};const S=async(e,t)=>(await g.get("",{params:{q:e,page:t}})).data,p=document.querySelector(".form"),s=document.querySelector(".gallery"),D=document.querySelector(".load-more-btn");let c,l=1;function O(){const t=s.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}async function T(e){try{d();const t=await S(e,l);if(t.hits.length===0){o.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}M(t.hits),t.totalHits>15?y():(d(),o.show({message:"We're sorry, but you've reached the end of search results.",color:"blue"}))}catch{o.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"})}finally{L(s)}}p.addEventListener("submit",e=>{e.preventDefault(),l=1,c=new FormData(p).get("search-text"),c.trim()!==""&&(B(s),w(s),T(c),e.target.reset())});D.addEventListener("click",async e=>{w(s),l++,d();try{const t=await S(c,l);P(t.hits),O(),l*15>=t.totalHits?(d(),o.show({message:"We're sorry, but you've reached the end of search results.",color:"blue"})):y()}catch{o.show({title:"Error",message:"Something went wrong while loading more images. Please try again.",color:"red"}),y()}finally{L(s)}});
//# sourceMappingURL=index.js.map
