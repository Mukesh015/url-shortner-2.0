(()=>{var e={};e.id=966,e.ids=[966],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},6874:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(50482),a=r(69108),l=r(62563),i=r.n(l),n=r(68300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let d=["",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,50421)),"D:\\Projects\\Short URL\\url-shortner\\app\\signup\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,65364)),"D:\\Projects\\Short URL\\url-shortner\\app\\layout.jsx"],loading:[()=>Promise.resolve().then(r.bind(r,58261)),"D:\\Projects\\Short URL\\url-shortner\\app\\loading.jsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,98211)),"D:\\Projects\\Short URL\\url-shortner\\app\\not-found.jsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Projects\\Short URL\\url-shortner\\app\\signup\\page.jsx"],u="/signup/page",x={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/signup/page",pathname:"/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},10582:(e,t,r)=>{Promise.resolve().then(r.bind(r,41529)),Promise.resolve().then(r.t.bind(r,25491,23))},4227:(e,t,r)=>{Promise.resolve().then(r.bind(r,72195))},33798:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},35303:()=>{},72195:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(95344),a=r(3729),l=r(69697),i=r(8428);function n(){let[e,t]=(0,a.useState)(""),[r,n]=(0,a.useState)(""),[o,d]=(0,a.useState)(null),[c,u]=(0,a.useState)(""),[x,m]=(0,a.useState)(!0),p=(0,i.useRouter)(),h=async t=>{if(t.preventDefault(),""===e||""===c||""===r)return alert("Please fill in all fields"),!1;let s=new FormData;s.append("profile",o),s.append("username",e),s.append("email",r),s.append("password",c);try{let e=await fetch("http://localhost:8010/register",{method:"POST",body:s}),t=await e.json();if(400===e.statusCode)throw console.log(t),l.Am.error("Choose a strong password",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),Error("User registration failed, Password encryption failed");if(e.ok)"success"===t.status&&(document.cookie=`cookie-1 = ${t.token}`,l.Am.success("User Registration success",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}));else throw console.log(t),l.Am.error("User Registration failed",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),Error("User registration failed");setTimeout(()=>{p.push("/login")},1500)}catch(e){console.error("Server error",e)}};return s.jsx("div",{className:"font-[sans-serif] bg-white text-white md:h-screen",children:(0,s.jsxs)("div",{className:"grid md:grid-cols-2 items-center gap-8 h-full",children:[s.jsx("div",{className:"max-md:order-1 p-4",children:s.jsx("img",{src:"https://readymadeui.com/signin-image.webp",className:"lg:max-w-[90%] w-full h-full object-contain block mx-auto",alt:"login-image"})}),s.jsx("div",{className:"flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto",children:(0,s.jsxs)("form",{className:"max-w-lg w-full mx-auto",children:[s.jsx("div",{className:"mb-12",children:s.jsx("h3",{className:"text-3xl font-bold text-yellow-400",children:"Create an account"})}),(0,s.jsxs)("div",{children:[s.jsx("label",{className:"text-xs block mb-2",children:"Full Name"}),(0,s.jsxs)("div",{className:"relative flex items-center",children:[s.jsx("input",{name:"name",type:"text",required:!0,className:"w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none",placeholder:"Enter name",onChange:e=>t(e.target.value)}),(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#bbb",stroke:"#bbb",className:"w-[18px] h-[18px] absolute right-2",viewBox:"0 0 24 24",children:[s.jsx("circle",{cx:"10",cy:"7",r:"6","data-original":"#000000"}),s.jsx("path",{d:"M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z","data-original":"#000000"})]})]})]}),(0,s.jsxs)("div",{className:"mt-10",children:[s.jsx("label",{className:"text-xs block mb-2",children:"Email"}),(0,s.jsxs)("div",{className:"relative flex items-center",children:[s.jsx("input",{name:"email",type:"text",required:!0,className:"w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none",placeholder:"Enter email",onChange:e=>n(e.target.value)}),(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#bbb",stroke:"#bbb",className:"w-[18px] h-[18px] absolute right-2",viewBox:"0 0 682.667 682.667",children:[s.jsx("defs",{children:s.jsx("clipPath",{id:"a",clipPathUnits:"userSpaceOnUse",children:s.jsx("path",{d:"M0 512h512V0H0Z","data-original":"#000000"})})}),(0,s.jsxs)("g",{clipPath:"url(#a)",transform:"matrix(1.33 0 0 -1.33 0 682.667)",children:[s.jsx("path",{fill:"none",strokeMiterlimit:"10",strokeWidth:"40",d:"M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z","data-original":"#000000"}),s.jsx("path",{d:"M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z","data-original":"#000000"})]})]})]})]}),(0,s.jsxs)("div",{className:"mt-10",children:[s.jsx("label",{className:"text-xs block mb-2",children:"Password"}),(0,s.jsxs)("div",{className:"relative flex items-center",children:[s.jsx("input",{name:"password",type:x?"password":"text",required:!0,className:"w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none",placeholder:"Enter password",onChange:e=>u(e.target.value)}),s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#bbb",stroke:"#bbb",className:"w-[18px] h-[18px] absolute right-2 cursor-pointer",viewBox:"0 0 128 128",onClick:()=>m(!x),children:s.jsx("path",{d:"M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z","data-original":"#000000"})})]})]}),s.jsx("div",{className:"flex items-center space-x-6 mt-7",children:(0,s.jsxs)("label",{className:"block",children:[s.jsx("span",{className:"text-xs",children:"Choose your profile photo"}),s.jsx("input",{type:"file",onChange:e=>d(e.target.files[0]),className:"mt-3 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"})]})}),(0,s.jsxs)("div",{className:"mt-12",children:[s.jsx("button",{onClick:h,type:"button",className:"w-max shadow-xl py-2.5 px-8 text-sm font-semibold rounded-md bg-transparent text-yellow-400 border border-yellow-400 focus:outline-none",children:"Register"}),(0,s.jsxs)("p",{className:"text-sm mt-8",children:["Already have an account?"," ",s.jsx("a",{href:"/login",className:"text-yellow-400 font-semibold hover:underline ml-1",children:"Login here"})]})]})]})})]})})}},41529:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(95344);r(3729);var a=r(47674);let l=({children:e})=>s.jsx(a.SessionProvider,{children:e})},8428:(e,t,r)=>{"use strict";var s=r(14767);r.o(s,"redirect")&&r.d(t,{redirect:function(){return s.redirect}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},65364:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>x});var s=r(25036),a=r(89138),l=r.n(a);r(67272);let i=(0,r(86843).createProxy)(String.raw`D:\Projects\Short URL\url-shortner\components\Authprovider\Authprovider.jsx`),{__esModule:n,$$typeof:o}=i,d=i.default;r(97001);var c=r(44725),u=r.n(c);let x={title:"url shortner",description:"Generated by create next app"};function m({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:l().className,children:[s.jsx(u(),{}),s.jsx(d,{children:e})]})})}},58261:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(25036);r(40002);let a=()=>s.jsx("div",{className:"flex items-center justify-center h-screen",children:(0,s.jsxs)("button",{disabled:!0,type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center",style:{minWidth:"200px",minHeight:"50px"},children:[(0,s.jsxs)("svg",{"aria-hidden":"true",role:"status",className:"inline w-5 h-5 me-3 text-white animate-spin",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),s.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})]}),"Loading..."]})})},98211:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(25036);function a(){return s.jsx("div",{className:"h-screen w-screen bg-gray-50 flex items-center",children:(0,s.jsxs)("div",{className:"container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700",children:[(0,s.jsxs)("div",{className:"w-full lg:w-1/2 mx-8",children:[s.jsx("div",{className:"text-7xl text-green-500 font-dark font-extrabold mb-8",children:"404"}),s.jsx("p",{className:"text-2xl md:text-3xl font-light leading-normal mb-8",children:"Sorry we couldnt find the page youre looking for"}),s.jsx("a",{href:"/",className:"px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700",children:"back to homepage"})]}),s.jsx("div",{className:"w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12",children:s.jsx("img",{src:"https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg",className:"",alt:"Page not found"})})]})})}},50421:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>l,__esModule:()=>a,default:()=>i});let s=(0,r(86843).createProxy)(String.raw`D:\Projects\Short URL\url-shortner\app\signup\page.jsx`),{__esModule:a,$$typeof:l}=s,i=s.default},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(70337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,880,697],()=>r(6874));module.exports=s})();