(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[740],{1149:function(e,r,t){Promise.resolve().then(t.bind(t,7163))},7163:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return i}});var a=t(7437),s=t(2265),l=t(1126),o=t(6974),n=t.n(o),d=t(6123);t(8062);var c=t(146);function i(){let{data:e}=(0,l.useSession)(),[r,t]=(0,s.useState)(!1),[o,i]=(0,s.useState)(null),[h,x]=(0,s.useState)(null),[m,g]=(0,s.useState)(null),[u,p]=(0,s.useState)(!1),[f,b]=(0,s.useState)(!1),[y,v]=(0,s.useState)(null),[w,k]=(0,s.useState)(!1),[j,N]=(0,s.useState)(null),[C,L]=(0,s.useState)(null),[S,A]=(0,s.useState)(!1),[R,M]=(0,s.useState)(!1),[U,F]=(0,s.useState)(null),[I,O]=(0,s.useState)(!1),[z,B]=(0,s.useState)("All"),E=(0,s.useCallback)(()=>{M(e=>!e)},[]),H=(0,s.useCallback)(e=>{window.open(e,"_blank")},[]),V=(0,s.useCallback)(()=>{t(e=>!e)},[]),T=(0,s.useCallback)(e=>{L(e),b(e=>!e)},[]),Z=(0,s.useCallback)(e=>{N(e),k(e=>!e)},[]),_=async()=>{c.Z.remove("cookie-1"),router.push("/")},D=(0,s.useCallback)(async()=>{try{let e=await fetch(j);if(!e.ok)throw Error("Failed to fetch image");let r=await e.blob(),t=URL.createObjectURL(r),a=document.createElement("a");a.href=t,a.download="image.jpg",a.click(),URL.revokeObjectURL(t),A(!0)}catch(e){console.error("Error downloading image:",e)}},[j,A]),q=(0,s.useCallback)(async()=>{console.log(C);try{let e=await fetch("".concat("http://localhost:8010","/deleteurl/").concat(C),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:m})}),r=await e.json();e.ok?(d.Am.success("Deleted successfully",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),b(e=>!e),setTimeout(()=>{window.location.reload()},500)):console.log("Failed to delete url: ",C,r)}catch(e){console.error("Server",e)}},[m,C,b]),P=e=>{navigator.clipboard.writeText("".concat("http://localhost:8010","/redirect/").concat(e));let r=document.getElementById("default-message-".concat(e)),t=document.getElementById("success-message-".concat(e));r.classList.add("hidden"),t.classList.remove("hidden"),setTimeout(()=>{r.classList.remove("hidden"),t.classList.add("hidden")},3e3)},W=(0,s.useCallback)(async()=>{try{let e=await fetch("".concat("http://localhost:8010","/geturl"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:m})});if(e.ok){let r=await e.json();v(r),O(r),console.log(r)}else console.log("Fetching failed")}catch(e){console.log("Fetching failed, server error")}},[m]),J=(0,s.useCallback)(async()=>{try{let e=c.Z.get("cookie-1"),r=await fetch("".concat("http://localhost:8010","/decode"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})});if(r.ok){let e=await r.json();i(e.username.avatar),g(e.username.email),x(e.username.username)}else console.error("Cannot get avatar")}catch(e){console.error("Server",e)}},[m,h,o]),Q=(0,s.useCallback)(async e=>{null===e?B("All"):2===e?B("Yesterday"):7===e?B("Last week"):30===e&&B("This month"),E();let r=864e5*e,t=Date.now(),a=[],s={};for(let e=0;e<I.createdat.length;e++)t-I.createdat[e]<r&&a.push(e);s.shortId=a.map(e=>y.shortId[e]),s.qrCodeUrl=a.map(e=>y.qrCodeUrl[e]),s.redirectURL=a.map(e=>y.redirectURL[e]),s.formattedCreatedAt=a.map(e=>y.formattedCreatedAt[e]),s.shortIdCounts={...y.shortIdCounts},a.forEach(e=>{let r=y.shortId[e];s.shortIdCounts[r]=s.shortIdCounts[r]||0}),v(s),console.log("Filtered indexes:",a),console.log("Modified data:",s)},[y]);return(0,s.useEffect)(()=>{let e=e=>{let r=e.target.value.toLowerCase();console.log(r);let t=y.shortId.filter((e,t)=>{let a="".concat("http://localhost:8010","/redirect/").concat(e).toLowerCase(),s=y.redirectURL[t].toLowerCase(),l=y.shortIdCounts[e].toString().toLowerCase(),o=y.formattedCreatedAt[t].toLowerCase();return a.includes(r)||s.includes(r)||l.includes(r)||o.includes(r)});document.querySelectorAll("[data-row]").forEach((e,r)=>{let a=t.includes(y.shortId[r]);e.classList.toggle("hidden",!a)})},r=document.querySelector("[data-search]");if(r)return r.addEventListener("input",e),()=>{r.removeEventListener("input",e)}},[y]),(0,s.useEffect)(()=>{e&&e.user&&e.user.image&&(g(e.user.email),i(e.user.image),x(e.user.name))},[e]),(0,s.useEffect)(()=>{J(),W()},[J,W]),(0,s.useEffect)(()=>{console.log("Page rerendering...",y)},[y,q,z]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Ix,{}),(0,a.jsx)(n(),{}),(0,a.jsxs)("nav",{className:"bg-white border-gray-200 dark:bg-gray-900 relative",children:[" ",(0,a.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[(0,a.jsxs)("a",{href:"/",className:"flex items-center space-x-3 rtl:space-x-reverse",children:[(0,a.jsx)("img",{src:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Mastercard_2019_logo.svg-e1659036851269.png?auto=format&q=60&fit=max&w=930",className:"h-8",alt:"Flowbite Logo"}),(0,a.jsx)("span",{className:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white",children:"URL Shortner"})]}),(0,a.jsxs)("div",{className:"flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative",children:[" ",(0,a.jsxs)("button",{type:"button",className:"flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600",id:"user-menu-button","aria-expanded":"false",onClick:V,children:[(0,a.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,a.jsx)("img",{className:"w-8 h-8 rounded-full",src:o,alt:"https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes.png"})]}),r&&(0,a.jsxs)("div",{className:"absolute z-10   top-full right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600",id:"user-dropdown",children:[" ",(0,a.jsxs)("div",{className:"px-4 py-3",children:[(0,a.jsx)("span",{className:"block text-sm text-gray-900 dark:text-white",children:h}),(0,a.jsx)("span",{className:"block text-sm text-gray-500 truncate dark:text-gray-400",children:m})]}),(0,a.jsxs)("ul",{className:"py-2","aria-labelledby":"user-menu-button",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Dashboard"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{onClick:()=>(0,l.signOut)()&&_(),href:"#",className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",children:"Sign out"})})]})]}),(0,a.jsxs)("button",{"data-collapse-toggle":"navbar-user",type:"button",className:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-user","aria-expanded":"false",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,a.jsx)("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:(0,a.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})})]})]}),(0,a.jsx)("div",{className:"items-center justify-between hidden w-full md:flex md:w-auto md:order-1",id:"navbar-user",children:(0,a.jsxs)("ul",{className:"flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/",className:"block py-2 px-3 mr-7 text-white  rounded md:bg-transparent md:p-0 md:hover:text-blue-700","aria-current":"page",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/stats",className:"block py-2 px-3 mr-7 rounded hover:bg-gray-100 md:hover:bg-transparent text-blue-500  md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",children:"Stats"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/stats",className:"block py-2 px-3 mr-7 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",children:"Contact"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/stats",className:"block py-2 px-3 mr-7 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",children:"About"})})]})})]})]}),f&&(0,a.jsx)("div",{className:"fixed inset-0 p-4  flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]",children:(0,a.jsxs)("div",{className:"w-full max-w-md shadow-lg rounded-md p-6 dark:bg-gray-700 relative",children:[(0,a.jsxs)("svg",{onClick:T,xmlns:"http://www.w3.org/2000/svg",className:"w-3.5 cursor-pointer shrink-0 fill-black hover:fill-red-500 float-right",viewBox:"0 0 320.591 320.591",children:[(0,a.jsx)("path",{d:"M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z","data-original":"#000000"}),(0,a.jsx)("path",{d:"M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z","data-original":"#000000"})]}),(0,a.jsxs)("div",{className:"my-8 text-center",children:[(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-16 fill-red-500 inline",viewBox:"0 0 24 24",children:[(0,a.jsx)("path",{d:"M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z","data-original":"#000000"}),(0,a.jsx)("path",{d:"M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z","data-original":"#000000"})]}),(0,a.jsx)("h4",{className:"text-xl font-semibold mt-6",children:"Are you sure you want to delete it?"}),(0,a.jsx)("p",{className:"text-sm text-slate-400 mt-4",children:"Are you sure want to delete it ? These process is not reversible"})]}),(0,a.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,a.jsx)("button",{onClick:q,type:"button",className:"px-6 py-2.5 rounded-md text-white text-sm font-semibold border-none outline-none bg-red-500 hover:bg-red-600 active:bg-red-500",children:"Delete"}),(0,a.jsx)("button",{onClick:T,type:"button",className:"px-6 py-2.5 rounded-md text-black text-sm font-semibold border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200",children:"Cancel"})]})]})}),w&&(0,a.jsx)("div",{className:"fixed inset-0 p-4  flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]",children:(0,a.jsxs)("div",{className:"w-full max-w-md shadow-lg rounded-md p-6 dark:bg-slate-800  relative",children:[(0,a.jsxs)("svg",{onClick:Z,xmlns:"http://www.w3.org/2000/svg",className:"w-3.5 cursor-pointer shrink-0 fill-black hover:fill-red-500 float-right",viewBox:"0 0 320.591 320.591",children:[(0,a.jsx)("path",{d:"M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z","data-original":"#000000"}),(0,a.jsx)("path",{d:"M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z","data-original":"#000000"})]}),(0,a.jsx)("div",{className:"my-8 text-center",children:(0,a.jsx)("img",{className:"h-60 ml-20",src:j,alt:"Qr Code"})}),(0,a.jsx)("div",{className:"flex flex-col space-y-2",children:(0,a.jsx)("button",{onClick:()=>D(),type:"button",className:"px-6 py-2.5 rounded-md text-black text-sm font-semibold border-none outline-none bg-gray-200 hover:bg-green-500 hover:text-white active:bg-gray-200",children:"Download"})})]})}),(0,a.jsxs)("div",{className:"relative m-5 overflow-x-auto shadow-md sm:rounded-lg mt-10",children:[(0,a.jsxs)("div",{className:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("button",{onClick:E,id:"hs-dropdown-default",type:"button",className:"hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",children:[z,(0,a.jsx)("svg",{className:"hs-dropdown-open:rotate-180 size-4",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"m6 9 6 6 6-6"})})]}),R&&(0,a.jsxs)("div",{className:"fixed hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-1 min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full","aria-labelledby":"hs-dropdown-default",children:[(0,a.jsx)("a",{onClick:()=>Q(null),className:"flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700",href:"#",children:"All"}),(0,a.jsx)("a",{onClick:()=>Q(2),className:"flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700",href:"#",children:"Yesterday"}),(0,a.jsx)("a",{onClick:()=>Q(7),className:"flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700",href:"#",children:"Last week"}),(0,a.jsx)("a",{onClick:()=>Q(30),className:"flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700",href:"#",children:"This month"})]})]}),(0,a.jsx)("label",{htmlFor:"table-search",className:"sr-only",children:"Search"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none",children:(0,a.jsx)("svg",{className:"w-5 h-5 text-gray-500 dark:text-gray-400","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})}),(0,a.jsx)("input",{type:"search",id:"table-search",className:"block p-2 ps-10  text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items","data-search":!0})]})]}),y?(0,a.jsxs)("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[(0,a.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Original URL"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Short URL"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"QR Code"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Created At"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Clicks"}),(0,a.jsx)("th",{scope:"col",className:"px-20 py-3",children:"Actions"})]})}),(0,a.jsx)("tbody",{children:y.shortId.map((e,r)=>(0,a.jsxs)("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700","data-short-id":e,"data-short-id-count":y.shortIdCounts[r],"data-formatted-created-at":y.formattedCreatedAt[r],"data-redirect-url":y.redirectURL[r],"data-row":!0,children:[(0,a.jsx)("td",{className:"px-4 py-4",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("p",{className:"mt-2",children:y.redirectURL[r]}),(0,a.jsxs)("svg",{onClick:()=>H("".concat(y.redirectURL[r])),className:"ml-3 mt-2",xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:"#FFFFFF",children:[(0,a.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})]})]})}),(0,a.jsxs)("td",{className:"px-6 py-4 flex",children:[(0,a.jsx)("p",{className:"mt-3",children:"".concat("http://localhost:8010","/redirect/").concat(e)}),(0,a.jsxs)("svg",{onClick:()=>H("".concat("http://localhost:8010","/redirect/").concat(e)),className:"ml-3 mt-3",xmlns:"http://www.w3.org/2000/svg",height:"18px",viewBox:"0 0 24 24",width:"18px",fill:"#FFFFFF",children:[(0,a.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})]})]}),(0,a.jsx)("td",{className:"px-6 py-4",children:(0,a.jsx)("img",{onClick:()=>Z(y.qrCodeUrl[r]),src:y.qrCodeUrl[r],alt:"QR Code for ".concat(e),className:"w-8 h-8"})}),(0,a.jsx)("td",{className:"px-6 py-4",children:y.formattedCreatedAt[r]}),(0,a.jsx)("td",{className:"px-6 py-4",children:y.shortIdCounts[e]}),(0,a.jsxs)("td",{className:"px-6 py-4",children:[(0,a.jsxs)("button",{className:"mt-2 text-gray-900 h-fit dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border",type:"button",children:[(0,a.jsxs)("span",{onClick:()=>P(e),id:"default-message-".concat(e),className:"inline-flex items-center",children:[(0,a.jsx)("svg",{className:"w-3 h-3 me-1.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 18 20",children:(0,a.jsx)("path",{d:"M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"})}),(0,a.jsx)("span",{className:"text-xs font-semibold",children:"Copy"})]}),(0,a.jsxs)("span",{id:"success-message-".concat(e),className:"inline-flex items-center ".concat(u?"":"hidden"),children:[(0,a.jsx)("svg",{className:"w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:(0,a.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})}),(0,a.jsx)("span",{className:"text-xs font-semibold text-blue-700 dark:text-blue-500",children:"Copied"})]})]}),(0,a.jsxs)("button",{className:"mt-2  text-gray-900 h-fit dark:text-gray-400 dark:bg-gray-800 hover:text-white text-xs rounded-lg py-2 px-2.5 inline-flex font-semibold ml-3 items-center justify-center bg-white border-gray-500 border hover:bg-red-500",onClick:()=>T(e),children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 me-1.5","aria-hidden":"true",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),"Delete"]})]})]},e))})]}):(0,a.jsx)("p",{className:"p-3 text-gray-400",children:"No records found"})]}),(0,a.jsx)("div",{className:"hidden"}),(0,a.jsx)("footer",{className:"bg-white rounded-lg mt-72 shadow dark:bg-gray-900 ",children:(0,a.jsxs)("div",{className:"w-full max-w-screen-xl mx-auto p-4 md:py-8",children:[(0,a.jsxs)("div",{className:"sm:flex sm:items-center sm:justify-between",children:[(0,a.jsxs)("a",{href:"https://flowbite.com/",className:"flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse",children:[(0,a.jsx)("img",{src:"https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Mastercard_2019_logo.svg-e1659036851269.png?auto=format&q=60&fit=max&w=930  ",className:"h-8",alt:"Flowbite Logo"}),(0,a.jsx)("span",{className:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white",children:"URL Shortener"})]}),(0,a.jsxs)("ul",{className:"flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",className:"hover:underline me-4 md:me-6",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",className:"hover:underline me-4 md:me-6",children:"Privacy Policy"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",className:"hover:underline me-4 md:me-6",children:"Licensing"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",className:"hover:underline",children:"Contact"})})]})]}),(0,a.jsx)("hr",{className:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"}),(0,a.jsxs)("span",{className:"block text-sm text-gray-500 sm:text-center dark:text-gray-400",children:["\xa9 2024"," ",(0,a.jsx)("a",{href:"https://flowbite.com/",className:"hover:underline"}),". All Rights Reserved."]})]})})]})}},8062:function(){},146:function(e,r,t){"use strict";/*! js-cookie v3.0.5 | MIT */function a(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)e[a]=t[a]}return e}t.d(r,{Z:function(){return s}});var s=function e(r,t){function s(e,s,l){if("undefined"!=typeof document){"number"==typeof(l=a({},t,l)).expires&&(l.expires=new Date(Date.now()+864e5*l.expires)),l.expires&&(l.expires=l.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var n in l)l[n]&&(o+="; "+n,!0!==l[n]&&(o+="="+l[n].split(";")[0]));return document.cookie=e+"="+r.write(s,e)+o}}return Object.create({set:s,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],a={},s=0;s<t.length;s++){var l=t[s].split("="),o=l.slice(1).join("=");try{var n=decodeURIComponent(l[0]);if(a[n]=r.read(o,n),e===n)break}catch(e){}}return e?a[e]:a}},remove:function(e,r){s(e,"",a({},r,{expires:-1}))},withAttributes:function(r){return e(this.converter,a({},this.attributes,r))},withConverter:function(r){return e(a({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(r)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[123,126,974,971,69,744],function(){return e(e.s=1149)}),_N_E=e.O()}]);