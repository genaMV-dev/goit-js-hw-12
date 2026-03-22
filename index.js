import{S,a as f,i as u}from"./assets/vendor-xJi9366P.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))g(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&g(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function g(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const c=document.querySelector(".loader"),p=document.querySelector(".load-more-btn"),q=document.querySelector(".gallery");let o=null;const x={captions:!0,captionsData:"alt",captionDelay:250};function $(e){return`<li class="gallery-item">
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
  </li>`}function h(e){return e.map($).join("")}function M(){o||(o=new S(".gallery a",x))}function v(){o&&o.refresh()}function B(e){const t=document.querySelector(".gallery"),s=h(e);t.innerHTML=s,o?v():M()}function D(e){e.innerHTML=""}function L(e){c.textContent="Loading",c.classList.add("loader"),e.appendChild(c)}function b(e){const t=e.querySelector(".loader");t&&t.remove()}function O(){p.classList.add("is-active")}function y(){p.classList.remove("is-active")}function P(){const t=q.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}f.defaults.baseURL="https://pixabay.com/api/";f.defaults.params={key:"55067704-3401c91e7f521ffd7d90d5720",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};const w=async(e,t)=>(await f.get("",{params:{q:e,page:t}})).data,m=document.querySelector(".form"),l=document.querySelector(".gallery"),E=document.querySelector(".load-more-btn");let n,d=1;async function T(e){try{y();const t=await w(e,1);if(t.hits.length===0){u.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}B(t.hits),t.totalHits>15?O():y()}catch{u.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red"})}finally{b(l)}}m.addEventListener("submit",e=>{e.preventDefault(),n=new FormData(m).get("search-text"),n.trim()!==""&&(D(l),L(l),T(n),e.target.reset())});E.addEventListener("click",async e=>{L(l),d++;const t=await w(n,d),s=h(t.hits);l.insertAdjacentHTML("beforeend",s),P(),v(),d*15>=t.totalHits&&(y(),u.show({message:"We're sorry, but you've reached the end of search results.",color:"blue"})),b(l)});
//# sourceMappingURL=index.js.map
