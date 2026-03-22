import{a as g,S as q,i as l}from"./assets/vendor-xJi9366P.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const y of r.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();g.defaults.baseURL="https://pixabay.com/api/";g.defaults.params={key:"55067704-3401c91e7f521ffd7d90d5720",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:16};const h=async(e,t)=>(await g.get("",{params:{q:e,page:t}})).data,p=document.querySelector(".load-more-btn"),f=document.querySelector(".gallery");let i=null;const E={captions:!0,captionsData:"alt",captionDelay:250};function x(e){return`<li class="gallery-item">
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
  </li>`}function v(e){return e.map(x).join("")}function $(){i||(i=new q(".gallery a",E))}function w(){i&&i.refresh()}function M(e){const t=document.querySelector(".gallery"),s=v(e);t.innerHTML=s,i?w():$()}async function P(e,t){const s=await h(e,t),c=v(s.hits);return f.insertAdjacentHTML("beforeend",c),s}function B(e){e.innerHTML=""}function b(e=f){if(e.querySelector(".loader"))return;const t=document.createElement("span");t.className="loader",t.textContent="Loading",e.appendChild(t)}function L(e=f){const t=e.querySelector(".loader");t&&t.remove()}function S(){p.classList.add("is-active")}function u(){p.classList.remove("is-active")}const m=document.querySelector(".form"),o=document.querySelector(".gallery"),D=document.querySelector(".load-more-btn");let d,n=1;function O(){const t=o.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2.4,behavior:"smooth"})}async function T(e){try{u();const t=await h(e,n);if(t.hits.length===0){l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}M(t.hits),t.totalHits>15?S():(u(),l.show({message:"We're sorry, but you've reached the end of search results.",color:"blue"}))}catch{l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"})}finally{L(o)}}m.addEventListener("submit",e=>{e.preventDefault(),n=1,d=new FormData(m).get("search-text"),d.trim()!==""&&(B(o),b(o),T(d),e.target.reset())});D.addEventListener("click",async e=>{b(o),n++,u();try{const t=await P(d,n);O(),w(),n*15>=t.totalHits&&(u(),l.show({message:"We're sorry, but you've reached the end of search results.",color:"blue"}))}catch{l.show({title:"Error",message:"Something went wrong while loading more images. Please try again.",color:"red"})}finally{L(o)}S()});
//# sourceMappingURL=index.js.map
