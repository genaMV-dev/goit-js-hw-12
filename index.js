import{a as g,S as q,i as l}from"./assets/vendor-xJi9366P.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function f(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();g.defaults.baseURL="https://pixabay.com/api/";g.defaults.params={key:"55067704-3401c91e7f521ffd7d90d5720",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:16};const h=async(e,t)=>(await g.get("",{params:{q:e,page:t}})).data,p=document.querySelector(".load-more-btn"),v=document.querySelector(".gallery");let i=null;const E={captions:!0,captionsData:"alt",captionDelay:250};function x(e){return`<li class="gallery-item">
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
  </li>`}function b(e){return e.map(x).join("")}function $(){i||(i=new q(".gallery a",E))}function w(){i&&i.refresh()}function M(e){const t=document.querySelector(".gallery"),o=b(e);t.innerHTML=o,i?w():$()}function P(e){e.innerHTML=""}function L(e=v){if(e.querySelector(".loader"))return;const t=document.createElement("span");t.className="loader",t.textContent="Loading",e.appendChild(t)}function S(e=v){const t=e.querySelector(".loader");t&&t.remove()}function y(){p.classList.add("is-active")}function d(){p.classList.remove("is-active")}const m=document.querySelector(".form"),s=document.querySelector(".gallery"),B=document.querySelector(".load-more-btn");let c,n=1;function D(){const t=s.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}async function O(e){try{d();const t=await h(e,n);if(t.hits.length===0){l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}M(t.hits),t.totalHits>15?y():(d(),l.show({message:"We're sorry, but you've reached the end of search results.",color:"blue"}))}catch{l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"})}finally{S(s)}}m.addEventListener("submit",e=>{e.preventDefault(),n=1,c=new FormData(m).get("search-text"),c.trim()!==""&&(P(s),L(s),O(c),e.target.reset())});B.addEventListener("click",async e=>{L(s),n++,d();try{const t=await h(c,n),o=b(t.hits);s.insertAdjacentHTML("beforeend",o),D(),w(),n*15>=t.totalHits?(d(),l.show({message:"We're sorry, but you've reached the end of search results.",color:"blue"})):y()}catch{l.show({title:"Error",message:"Something went wrong while loading more images. Please try again.",color:"red"}),y()}finally{S(s)}});
//# sourceMappingURL=index.js.map
