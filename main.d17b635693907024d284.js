(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/JAH":function(e,t){var n=document.querySelector("#theme-switch-toggle"),o="light-theme",a="dark-theme";n.addEventListener("change",(function(){var e=localStorage.getItem("theme")===o?a:o;document.body.className=e,localStorage.setItem("theme",e)})),localStorage.getItem("theme")?(document.body.className=localStorage.getItem("theme"),n.checked=localStorage.getItem("theme")!==o):localStorage.setItem("theme",o)},OSpC:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("lmye"),n("fp7Y"),n("OSpC");var o=n("Ji62");Object(o.addBackToTop)({diameter:56,backgroundColor:"#ddd",textColor:"#ff6b08"});n("eXOY");var a={searchInput:document.querySelector(".search-input"),moviesCardsGallery:document.querySelector(".movie__list"),movieInfoModal:document.querySelector(".modal-movie"),loadWatchedBtn:document.querySelector("[data-modal-watched]"),loadQueueBtn:document.querySelector("[data-modal-queue]"),addWatchedBtn:document.querySelector("[data-add-watched]"),addQueueBtn:document.querySelector("[data-add-queue]"),openModalTeamBtn:document.querySelector(".js-openModalTeam"),modalTeamOverlay:document.querySelector(".js-modalTeam__overlay"),closeModalTeamBtn:document.querySelector(".js-closeModalTeam"),btnNextPagination:document.querySelector("[data-next-pagination]"),btnPrevPagination:document.querySelector("[data-prev-pagination]"),paginationControls:document.querySelector("[data-pagination-controls-list]")};function r(){a.modalTeamOverlay.classList.remove("show"),window.addEventListener("keydown",i)}function i(e){"Escape"===e.code&&r()}a.openModalTeamBtn.addEventListener("click",(function(){a.modalTeamOverlay.classList.add("show"),window.addEventListener("keydown",i)})),a.closeModalTeamBtn.addEventListener("click",r),a.modalTeamOverlay.addEventListener("click",(function(e){e.preventDefault(),e.target===e.currentTarget&&r()}));n("/YXa"),n("JBxO"),n("FdtR"),n("WoWj"),n("qoNQ"),n("U00V");var c=n("h8BN"),l=n.n(c);function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}var d="e25e680121e89083bb4ba7c0772c65fc",g=new WeakMap,h=function(){function e(e){g.set(this,{writable:!0,value:2}),this.totalPagas=0,this.page=1,this.searchQuery="",this.watched=[],this.queue=[],this._watchedFromLocalStorage=[],this._queueFromLocalStorage=[],this.selectControl=e}var t,n,o,r=e.prototype;return r.fetchMovieByID=function(e){return fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key="+d).then((function(e){if("404"===e.status)throw new Error;e.json()}))},r.movieAdapter=function(e){var t=e.poster_path,n=e.original_title,o=e.original_name,a=e.title,r=e.id,i=e.vote_average,c=e.release_date,l=e.first_air_date,s=e.backdrop_path,u=e.vote_count,d=e.popularity,g=e.genres,h=e.overview,m=e.genre_ids;return{imgSrc:this.generatePosterPath(t),title:n||o||a,rating:i,releaseDate:c||l,backdropPath:s,voteCount:u,popularity:d,genres:g,overview:h,id:r,genre_ids:m}},r.generatePosterPath=function(e){return"https://themoviedb.org/t/p/w220_and_h330_face"+e},r.fetchSearchMoviesList=function(e){var t=this;return fetch("https://api.themoviedb.org/3/search/movie?api_key="+d+"&query="+e+"&page="+this.page).then((function(e){return e.json()})).then((function(e){return t.totalPagas=e.total_pages,console.log(e),console.log(t.totalPagas),t.testfoo(),e}))},r.fetchPopularMoviesList=function(){var e=this;return fetch("https://api.themoviedb.org/3/trending/all/day?api_key="+d+"&page="+this.page).then((function(e){return e.json()})).then((function(t){return e.totalPagas=t.total_pages,console.log(t),console.log(e.totalPagas),e.testfoo(),t}))},r.testfoo=function(){void 0!==this.selectControl?(console.log("Ну что пошла работать!"),console.log(this.totalPagas),this.pagination(this.page,this.totalPagas)):console.log("првиет")},r.fetchWatchedMoviesList=function(){},r.fetchQueueMoviesList=function(){},r.fetchModalMovie=function(){},r.loadWatchedMovies=function(){var e=localStorage.getItem("watched");this._watchedFromLocalStorage=JSON.parse(e)},r.loadQueueMovies=function(){var e=localStorage.getItem("queue");this._queueFromLocalStorage=JSON.parse(e)},r.addWatchedMovies=function(e){this.watched.push(e),localStorage.setItem("watched",JSON.stringify(this.watched))},r.addQueueMovies=function(e){this.queue.push(e),localStorage.setItem("queue",JSON.stringify(this.queue))},r.renderMovieCards=function(e){a.moviesCardsGallery.insertAdjacentHTML("beforeend",l()(e))},r.renderMovie=function(e){},r.checkValueLocalStorage=function(){this.loadQueueMovies(),!this.queue!==[]&&(localStorage.setItem("queue",JSON.stringify(this.queue)),this.loadWatchedMovies(),!this.watched!==[]&&localStorage.setItem("watched",JSON.stringify(this.watched)))},r.incrementPage=function(){this.page+=1},r.resetPage=function(){this.page=1},r.pagination=function(e,t){var n=this.addButtonWithIndex(1);e-u(this,g)>2&&(n+=this.addButtonInput());for(var o=e-u(this,g);o<=e+u(this,g);o++)o>1&&o<t&&(n+=this.addButtonWithIndex(o));e+u(this,g)<t-1&&(n+=this.addButtonInput()),n+=this.addButtonWithIndex(t),this.selectControl.innerHTML=n},r.addButtonWithIndex=function(e){return' <li class="pagination-controls__item"><button id=\'pagination_'+e+"' class='pagination-controls__btn' type='button' >"+e+"</button></li>"},r.addButtonInput=function(){return' <li class="pagination-controls__item"><input class="pagination-controls__input" type="number" placeholder="..." maxlength="4"/></li>'},r.goToPrevPage=function(){1!==this.page&&(this.page-=1)},r.goToNextPage=function(){this.page!==this.totalPagas+1&&(this.page+=1)},t=e,(n=[{key:"watchedFromLocalStorage",get:function(){return this._watchedFromLocalStorage}},{key:"queueFromLocalStorage",get:function(){return this._queueFromLocalStorage}}])&&s(t.prototype,n),o&&s(t,o),e}(),m=(n("zrP5"),n("QJ3N").error),p=n("QJ3N").defaults;function f(){return m({text:"Please enter CORRECT query"})}p.closer=!1,p.sticker=!1,p.delay=2e3,p.shadow=!0;n("/JAH");var v=n("jffb"),y=new h(a.paginationControls);function b(){_(),y.resetPage(),y.fetchPopularMoviesList().then((function(e){return P(e)}))}function S(){_(),y.fetchPopularMoviesList().then((function(e){return P(e)}))}function L(e){if(e.preventDefault(),_(),y.resetPage(),y.searchQuery=e.target.value,console.log("Api.searchQuery:",y.searchQuery),!y.searchQuery)return b();y.fetchSearchMoviesList(y.searchQuery).then((function(e){if(P(e),!e.total_results)return f()}))}function w(){_(),y.searchQuery=a.searchInput.value,y.fetchSearchMoviesList(y.searchQuery).then((function(e){if(P(e),!e.total_results)return f()}))}function _(){a.moviesCardsGallery.innerHTML=""}function P(e){if(e.results){var t=e.results.map((function(e){return y.movieAdapter(e)}));return y.renderMovieCards(t)}return y.renderMovieCards(e)}function k(){_(),y.resetPage(),a.loadWatchedBtn.classList.add("active-btn"),a.loadQueueBtn.classList.remove("active-btn"),console.log("отрисовать просмотренные фильмы"),y.fetchWatchedMoviesList().then((function(e){return P(e)}))}function E(){_(),y.resetPage(),a.loadWatchedBtn.classList.remove("active-btn"),a.loadQueueBtn.classList.add("active-btn"),console.log("отрисовать фильмы добавленные в очередь пользователя"),y.fetchQueueMoviesList().then((function(e){return P(e)}))}window.addEventListener("load",(function(){y.checkValueLocalStorage();var e=document.getElementsByTagName("html")[0];e.classList.contains("main-page")&&(b(),console.log(y.totalPagas),a.searchInput.addEventListener("input",v(L,500)),console.log(y.selectControl));e.classList.contains("library-page")&&(a.loadWatchedBtn.addEventListener("click",k),a.loadQueueBtn.addEventListener("click",E),k())})),a.btnPrevPagination.addEventListener("click",(function(){if(y.goToPrevPage(),!y.searchQuery)return S();w()})),a.btnNextPagination.addEventListener("click",(function(){if(y.goToNextPage(),!y.searchQuery)return S();w(),console.log(y.page)})),a.paginationControls.addEventListener("click",(function(e){if("BUTTON"===e.target.nodeName){console.log("я тут");var t=Number(e.target.textContent);if(console.log(t),!y.searchQuery)return console.log("!Api.searchQuery"),y.page=t,void S();console.log("Api.searchQuery"),y.page=t,w()}})),a.paginationControls.addEventListener("focusout",(function(e){if("INPUT"===e.target.nodeName){console.log("я тут");var t=Number(e.target.value);if(!y.searchQuery)return console.log("!Api.searchQuery"),y.page=t,void S();console.log("Api.searchQuery"),y.page=t,w()}})),console.log(a.btnNextPagination,a.btnPrevPagination)},eXOY:function(e,t){firebase.initializeApp({apiKey:"AIzaSyAx1D-g2qGeJxBdozCO3pfPZvfg5l9yeUc",authDomain:"my-project-2d288.firebaseapp.com",projectId:"my-project-2d288",storageBucket:"my-project-2d288.appspot.com",messagingSenderId:"582082591029",appId:"1:582082591029:web:64d668bc5f471d6b8eb47c",measurementId:"G-NMM570TBES"});var n=document.querySelector(".lightbox"),o=document.querySelector('button[data-action="login-lightbox"]'),a=document.querySelector('button[data-action="close-lightbox"]'),r=document.querySelector('button[data-action="logIn"]'),i=document.querySelector('button[data-action="logOut"]'),c=document.querySelector('button[data-action="signIn"]'),l=document.querySelector(".lightbox__overlay"),s=firebase.auth();function u(e){e.preventDefault(),n.classList.remove("is-open"),window.removeEventListener("keydown",f)}o.addEventListener("click",(function(e){e.preventDefault(),n.classList.add("is-open"),window.addEventListener("keydown",f)})),a.addEventListener("click",u),l.addEventListener("click",(function(e){e.preventDefault(),e.target===e.currentTarget&&u(e)})),r.addEventListener("click",(function(){var e=document.getElementById("email_field"),t=document.getElementById("password_field");s.signInWithEmailAndPassword(e.value,t.value).catch((function(e){return alert(e.message)})),n.classList.remove("is-open"),alert("You are successfully logged in!")})),i.addEventListener("click",(function(){s.signOut(),n.classList.remove("is-open"),alert("Hope to see you soon")})),c.addEventListener("click",(function(){var e=document.getElementById("email"),t=document.getElementById("password");s.createUserWithEmailAndPassword(e.value,t.value).catch((function(e){return alert(e.message)})),d.classList.remove("is-open"),alert("New account is created")}));var d=document.querySelector(".lightbox_2"),g=document.querySelector('button[data-action="signup-lightbox"]'),h=document.querySelector('button[data-action="close-signup-lightbox"]'),m=document.querySelector(".lightbox__overlay_2");function p(e){e.preventDefault(),d.classList.remove("is-open"),window.removeEventListener("keydown",f)}function f(e){"Escape"===e.code&&(u(e),p(e))}g.addEventListener("click",(function(e){e.preventDefault(),d.classList.add("is-open"),window.addEventListener("keydown",f)})),h.addEventListener("click",p),m.addEventListener("click",(function(e){e.preventDefault(),e.target===e.currentTarget&&p(e)})),s.onAuthStateChanged((function(e){e?(document.getElementById("user_div").style.display="block",document.getElementById("login_div").style.display="none"):(document.getElementById("user_div").style.display="none",document.getElementById("login_div").style.display="block")}))},h8BN:function(e,t,n){var o=n("mp5j");e.exports=(o.default||o).template({1:function(e,t,n,o,a){var r,i=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,l=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="movie__list-item">\r\n    <div class="movie-card__wrapper-img">\r\n        <img class="movie-card__img" src='+l("function"==typeof(r=null!=(r=s(n,"imgSrc")||(null!=t?s(t,"imgSrc"):t))?r:c)?r.call(i,{name:"imgSrc",hash:{},data:a,loc:{start:{line:6,column:41},end:{line:6,column:51}}}):r)+" alt=''>\r\n    </div>\r\n    <h3 class=\"movie-card__name\">"+l("function"==typeof(r=null!=(r=s(n,"title")||(null!=t?s(t,"title"):t))?r:c)?r.call(i,{name:"title",hash:{},data:a,loc:{start:{line:8,column:33},end:{line:8,column:42}}}):r)+'</h3>\r\n    <p class="movie-card__description">'+l("function"==typeof(r=null!=(r=s(n,"releaseDate")||(null!=t?s(t,"releaseDate"):t))?r:c)?r.call(i,{name:"releaseDate",hash:{},data:a,loc:{start:{line:9,column:39},end:{line:9,column:54}}}):r)+'</p>\r\n    <p class="movie-card__rating">'+l("function"==typeof(r=null!=(r=s(n,"rating")||(null!=t?s(t,"rating"):t))?r:c)?r.call(i,{name:"rating",hash:{},data:a,loc:{start:{line:10,column:34},end:{line:10,column:44}}}):r)+"</p>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,o,a){var r;return"\r\n"+(null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:3,column:0},end:{line:12,column:9}}}))?r:"")},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.d17b635693907024d284.js.map