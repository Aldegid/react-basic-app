(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(40)},21:function(e,t,a){},24:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),s=a.n(c),l=(a(21),a(7)),i=a(8),o=a(1),u=a.n(o),m=a(2),d=a(9),p=a(10),f=a(13),h=a(11),v=a(14),g=(a(24),function(){var e=Object(m.a)(u.a.mark(function e(t){var a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((a=e.sent).ok){e.next=6;break}throw Error(a.statusText);case 6:return e.next=8,a.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()),b=a(12),E=function(e){return n.a.createElement(b.Spring,{from:{transform:"scale(0)"},to:{transform:"scale(1)"},enter:{opacity:0},leave:{opacity:1},config:{duration:200,delay:200}},function(t){return n.a.createElement("div",{key:e.id,className:"user",style:t},n.a.createElement("div",{className:"card__main"},n.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.name}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h3",{className:"card__header"},e.name),n.a.createElement("p",{className:"list-item"},e.gender),n.a.createElement("p",{className:"list-item"},e.species))))})},N=a(3),y=(a(39),function(e){var t=e.handleSearch,a=e.handleSortFilter,r=function(e){var r=e.target,n="searchInput"===r.name?r.value:"";"searchInput"===r.name&&t({searchInputValue:n}),r.checked&&"radio"===r.type&&a(Object(N.a)({},r.name,r.value))};return n.a.createElement("form",{className:"form__main"},n.a.createElement("div",{className:"radio-buttons"},n.a.createElement("div",{className:"sort-asc-desc"},n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{onChange:r,className:"form-check-input",type:"radio",name:"sortOrder",id:"sortByAsc",value:"asc"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"sortByAsc"},"Sort by Asc")),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{onChange:r,className:"form-check-input",type:"radio",name:"sortOrder",id:"sortByDesc",value:"desc"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"sortByDesc"},"Sort by Desc"))),n.a.createElement("div",{className:"sort-asc-desc"},n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{onChange:r,className:"form-check-input",type:"radio",name:"filterSpecies",id:"filterByHuman",value:"Human"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"filterByHuman"},"Filter by Human")),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{onChange:r,className:"form-check-input",type:"radio",name:"filterSpecies",id:"filterByAlien",value:"Alien"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"filterByAlien"},"Filter by Alien")))),n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control",name:"searchInput",onChange:r,placeholder:"search by name... ","aria-label":"Recipient's username","aria-describedby":"button-addon2"})))}),k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={list:null,filterSpecies:null,sortOrder:null,isLoaded:!1,searchInputValue:null,currentPageUrl:"https://rickandmortyapi.com/api/character",nextPageUrl:"",prevPageUrl:""},a.getCurrentPage=function(){var e=Object(m.a)(u.a.mark(function e(t){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t).then(function(e){a.setState({list:e.results,nextPageUrl:e.info.next,prevPageUrl:e.info.prev})});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleClickNext=function(){a.getCurrentPage(a.state.nextPageUrl)},a.handleClickPrev=function(){a.getCurrentPage(a.state.prevPageUrl)},a.performSearch=function(e){var t=e.searchInputValue;a.setState({searchInputValue:t})},a.performSortFilter=function(e){var t=Object(i.a)({},e);a.setState(Object(l.a)({},t))},a.runSorting=function(e,t){return e.name<t.name?1:-1},a.sortPersons=function(e,t){return"desc"===t?e.sort(a.runSorting):e.sort(function(e,t){return a.runSorting(t,e)})},a.filterByName=function(e,t){return e.filter(function(e){return e.name.toLowerCase().includes(t)})},a.filterBySpecies=function(e,t){return e.filter(function(e){return e.species===t})},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrentPage(this.state.currentPageUrl);case 2:return e.next=4,this.setState({isLoaded:!0});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.list,a=e.isLoaded,r=e.searchInputValue,c=e.sortOrder,s=e.filterSpecies,l=e.prevPageUrl,i=e.nextPageUrl,o=t;return c&&(o=this.sortPersons(t,c)),s&&(o=this.filterBySpecies(t,s)),r&&(o=this.filterByName(t,r)),a?n.a.createElement("div",{className:"container"},n.a.createElement("section",{className:"main-section"},n.a.createElement("aside",{className:"filter"},n.a.createElement("div",{className:"buttons-group"},n.a.createElement("button",{className:"button",onClick:this.handleClickPrev,disabled:!l},"\u2190 Prev Page"),n.a.createElement("button",{className:"button",onClick:this.handleClickNext,disabled:!i},"Next Page \u2192")),n.a.createElement(y,{handleSearch:this.performSearch,handleSortFilter:this.performSortFilter})),n.a.createElement("div",{className:"users-wrap"},n.a.createElement("div",{className:"users"},o.map(function(e){return n.a.createElement(E,Object.assign({key:e.id},e))})),0===o.length?n.a.createElement("div",{className:"not-found"},"Oops, Nothing found"," ",n.a.createElement("span",{role:"img","aria-label":"img"},"\ud83d\ude31")):null))):n.a.createElement("div",{className:"preloader"},n.a.createElement("div",{className:"pulse"}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.5842b9fd.chunk.js.map