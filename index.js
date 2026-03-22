import{a as f,S,i as c}from"./assets/vendor-xJi9366P.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();f.defaults.baseURL="https://pixabay.com/api/";f.defaults.params={key:"55067704-3401c91e7f521ffd7d90d5720",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:16};const p=async(e,t)=>(await f.get("",{params:{q:e,page:t}})).data,h=document.querySelector(".load-more-btn"),d=document.querySelector(".gallery");let o=null;const q={captions:!0,captionsData:"alt",captionDelay:250};function E(e){return`<li class="gallery-item">
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
  </li>`}function v(e){return e.map(E).join("")}function x(){o||(o=new S(".gallery a",q))}function w(){o&&o.refresh()}function $(e){const t=document.querySelector(".gallery"),s=v(e);t.innerHTML=s,o?w():x()}async function M(e,t){const s=await p(e,t),n=v(s.hits);return d.insertAdjacentHTML("beforeend",n),s}function P(e){e.innerHTML=""}function L(e=d){if(e.querySelector(".loader"))return;const t=document.createElement("span");t.className="loader",t.textContent="Loading",e.appendChild(t)}function b(e=d){const t=e.querySelector(".loader");t&&t.remove()}function B(){h.classList.add("is-active")}function g(){h.classList.remove("is-active")}function D(){const t=d.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2.4,behavior:"smooth"})}const m=document.querySelector(".form"),l=document.querySelector(".gallery"),O=document.querySelector(".load-more-btn");let i,y=1;async function T(e){try{g();const t=await p(e,1);if(t.hits.length===0){c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}$(t.hits),t.totalHits>15?B():g()}catch{c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"})}finally{b(l)}}m.addEventListener("submit",e=>{e.preventDefault(),i=new FormData(m).get("search-text"),i.trim()!==""&&(P(l),L(l),T(i),e.target.reset())});O.addEventListener("click",async e=>{L(l),y++;try{const t=await M(i,y);D(),w(),y*15>=t.totalHits&&(g(),c.show({message:"We're sorry, but you've reached the end of search results.",color:"blue"}))}catch{c.show({title:"Error",message:"Something went wrong while loading more images. Please try again.",color:"red"})}finally{b(l)}});
//# sourceMappingURL=index.js.map
