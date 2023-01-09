(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(17),r=a.n(l),i=a(9),s=a(1),m=a(7),c=a(4);function u(e){var t=e.name,a=e.to,o=e.className;return"#/Photography"===window.location.hash?n.a.createElement(i.b,{to:"/",state:{from_photography:!0,to:a},className:o},t):n.a.createElement(c.Link,{smooth:!0,spy:!0,duration:500,to:a,className:o},t)}function d(){return n.a.createElement("header",{className:"bg-gray-800 md:sticky top-0 z-10"},n.a.createElement("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"},n.a.createElement("a",{className:"title-font font-medium text-white mb-4 md:mb-0"},n.a.createElement(u,{className:"ml-3 text-xl cursor-pointer",name:"Max Weinreb",to:"about"})),n.a.createElement("nav",{className:"md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700\tflex flex-wrap items-center text-base justify-center"},n.a.createElement(u,{name:"Projects",to:"projects",className:"mr-5 hover:text-white cursor-pointer"}),n.a.createElement(u,{name:"Skills",to:"skills",className:"mr-5 hover:text-white cursor-pointer"}),n.a.createElement(i.b,{to:"/Photography",className:"mr-5 hover:text-white"},"Photography")),n.a.createElement(u,{name:"Contact Me",to:"contact",className:"inline-flex items-center cursor-pointer bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"},n.a.createElement(m.a,{className:"w-4 h-4 ml-1"}))))}function g(){return n.a.createElement(c.Element,{id:"about"},n.a.createElement("div",{className:"container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"},n.a.createElement("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"},n.a.createElement("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-white"},"Hey, I'm Max.",n.a.createElement("br",{className:"hidden lg:inline-block"})," I love building software and automation tools."),n.a.createElement("p",{className:"mb-8 leading-relaxed"},"I'm a student at the University of Texas at Austin studying computer science with a minor in business."),n.a.createElement("div",{className:"flex justify-center"},n.a.createElement("a",{href:"https://www.maxweinreb.com/Resume.pdf",className:"inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"},"Resume"),n.a.createElement("a",{href:"#projects",className:"ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"},"See My Past Work")))))}var p=a(3);function h(){var e=n.a.useState(""),t=Object(p.a)(e,2),a=t[0],o=t[1],l=n.a.useState(""),r=Object(p.a)(l,2),i=r[0],s=r[1],m=n.a.useState(""),u=Object(p.a)(m,2),d=u[0],g=u[1];return n.a.createElement(c.Element,{id:"contact",className:"relative"},n.a.createElement("div",{className:"container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"},n.a.createElement("form",{netlify:!0,name:"test",onSubmit:function(e){var t;e.preventDefault(),""!==a&&""!==i&&""!==d?fetch("https://formspree.io/f/xvonobnz",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t={"form-name":"Website Form",name:a,email:i,message:d},Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"))}).then(function(){return alert("Message sent!")}).catch(function(e){return alert(e)}):alert("Please complete the entire form.")},className:"lg:w md:w flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"},n.a.createElement("h2",{className:"text-white sm:text-4xl text-3xl mb-1 font-medium title-font"},"Contact Me"),n.a.createElement("div",{className:"relative mb-4"},n.a.createElement("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-400"},"Name"),n.a.createElement("input",{type:"text",id:"name",name:"name",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function(e){return o(e.target.value)}})),n.a.createElement("div",{className:"relative mb-4"},n.a.createElement("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-400"},"Email"),n.a.createElement("input",{type:"email",id:"email",name:"email",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",onChange:function(e){return s(e.target.value)}})),n.a.createElement("div",{className:"relative mb-4"},n.a.createElement("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-400"},"Message"),n.a.createElement("textarea",{id:"message",name:"message",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",onChange:function(e){return g(e.target.value)}})),n.a.createElement("button",{type:"submit",className:"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"},"Submit"))))}var f=[{title:"UT Course Scheduler",subtitle:"Chrome Extension For UT Students",description:"An extension which cuts the hassle of registering for classes by doing it all in < 1 second. Enter all the courses you want and your registration time, and the stress of signing up for classes ends. Made from the ground up in JS + HTML + CSS.",image:"./ut_course_scheduler.gif",link:"https://github.com/loganvaz/ChromeCoursePlanner"},{title:"MaxTrade",subtitle:"Stock and Options Trading Bot For Robinhood",description:"A program which allows users to create automatic buy and sell orders for stocks and specific options contracts they want in an intuitive UI. Built from scratch in Python leveraging the Robin Stocks Library.",image:"./MaxTrade_demo.png",link:"https://github.com/theDubW/maxtrade"},{title:"Ball Craze",subtitle:"IOS Game",description:"A mobile game I developed in C++ for the IPhone. Collect balls and gems, unlock paddles and backgrounds, and compete to get the highest score. Created completely using the open source cocos-2dx library.",image:"./ballcraze_demo.gif",link:"https://www.producthunt.com/products/ball-craze"},{title:"Printcase",subtitle:"A Stata Command published in the Stata Journal",description:'A command I developed for Stata, a "general-purpose statistical software package", widely used by statisticians globally. I co-wrote a paper detailing its necessity andapplication which has been published in the Stata Journal.',image:"./stata.png",link:"https://github.com/theDubW/printcase"}],x=["REST API Design","AWS Neptune + Lambda","C#/.NET","Java","C","C++"],b=[{section_title:"Porto",photos:[{title:"Porto as viewed from a boat",image:"./Photos/Porto/porto_boat_view.jpg"},{title:"Porto From Above",image:"./Photos/Porto/porto_view.jpg"},{title:"Skyline",image:"./Photos/Porto/porto_buildings.jpg"},{title:"Ancient vs Industrial",image:"./Photos/Porto/porto_monastery_and_train.jpg"},{title:"Monastery",image:"./Photos/Porto/porto_monastery.jpg"}]},{section_title:"UT",photos:[{title:"Dumpsters",image:"./Photos/UT/Dumpster_Night.jpg"},{title:"Sprinklers",image:"./Photos/UT/Sprinklers.jpg"},{title:"Varsity Glow",image:"./Photos/UT/varsity_night_sign.jpg"},{title:"PCL at Night",image:"./Photos/UT/Library.jpg"},{title:"Skyspace",image:"./Photos/UT/skyspace.jpg"},{title:"Terrace",image:"./Photos/UT/Terrace.jpg"},{title:"Pigeon",image:"./Photos/UT/Pigeon.jpg"},{title:"Canoe Butterfly",image:"./Photos/UT/sculpture.jpg"}]},{section_title:"Austin",photos:[{title:"Paddle Boarders on the Lake",image:"./Photos/Austin/paddleboarders.jpg"},{title:"Apartment Glow",image:"./Photos/Austin/apartment.jpg"},{title:"Smashed Window",image:"./Photos/Austin/broken_window.jpg"},{title:"Beige Buildings",image:"./Photos/Austin/building_bridge.jpg"},{title:"Old and New",image:"./Photos/Austin/downtown_buildings.jpg"},{title:"Skyline",image:"./Photos/Austin/downtown.jpg"}]},{section_title:"Colorado",photos:[{title:"Isolated Lake",image:"./Photos/Colorado/lake.jpg"},{title:"On the Way to Pagosa",image:"./Photos/Colorado/otw_to_pagosa.jpg"},{title:"Foggy Drive",image:"./Photos/Colorado/rainy_hill.jpg"},{title:"Ridge View",image:"./Photos/Colorado/top_ridge.jpg"}]},{section_title:"Roe v. Wade Protest",photos:[{title:"Together",image:"./Photos/Abortion_Protest/near_capitol.jpg"},{title:"Isolated",image:"./Photos/Abortion_Protest/protest_sign.jpg"},{title:"The Law",image:"./Photos/Abortion_Protest/officer.jpg"}]},{section_title:"Portraits",photos:[{title:"End of Freshman Year",image:"./Photos/Portraits/in_dobie.jpg"},{title:"Out of Focus",image:"./Photos/Portraits/failed_self_portrait.jpg"},{title:"Before A Photo Spree",image:"./Photos/Portraits/Max_mirror.jpg"}]}];function y(){return n.a.createElement(c.Element,{id:"projects",className:"text-gray-400 bg-gray-900 body-font"},n.a.createElement("div",{className:"container px-5 py-10 mx-auto text-center lg:px-40"},n.a.createElement("div",{className:"flex flex-col w-full mb-20"},n.a.createElement(m.d,{className:"mx-auto inline-block w-10 mb-4"}),n.a.createElement("h1",{className:"sm:text-4xl text-3xl font-medium title-font mb-4 text-white"},"Projects"),n.a.createElement("p",{className:"lg:w-2/3 mx-auto leading-relaxed text-base"},"Here are a few of the projects I've worked on over the past few years.")),n.a.createElement("div",{className:"flex flex-wrap -m-4"},f.map(function(e){return n.a.createElement("a",{href:e.link,key:e.image,className:"sm:w-1/2 w-100 p-4"},n.a.createElement("div",{className:"flex relative"},n.a.createElement("img",{alt:"gallery",className:"absolute inset-0 w-full h-full object-cover object-center",src:e.image}),n.a.createElement("div",{className:"px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"},n.a.createElement("h2",{className:"tracking-widest text-sm title-font font-medium text-green-400 mb-1"},e.subtitle),n.a.createElement("h1",{className:"title-font text-lg font-medium text-white mb-3"},e.title),n.a.createElement("p",{className:"leading-relaxed"},e.description))))}))))}function E(){return n.a.createElement(c.Element,{id:"skills"},n.a.createElement("div",{className:"container px-5 py-10 mx-auto"},n.a.createElement("div",{className:"text-center mb-20"},n.a.createElement(m.c,{className:"w-10 inline-block mb-4"}),n.a.createElement("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-white mb-4"},"Skills & Technologies")),n.a.createElement("div",{className:"flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"},x.map(function(e){return n.a.createElement("div",{key:e,className:"p-2 sm:w-1/2 w-full"},n.a.createElement("div",{className:"bg-gray-800 rounded flex p-4 h-full items-center"},n.a.createElement(m.b,{className:"text-green-400 w-6 h-6 flex-shrink-0 mr-4"}),n.a.createElement("span",{className:"title-font font-medium text-white"},e)))}))))}function w(e){Object(s.j)();var t=Object(o.useRef)(null);return Object(o.useEffect)(function(){window.scrollTo(0,0)},[]),n.a.createElement("main",{className:"text-gray-400 bg-gray-900 body-font"},n.a.createElement(d,null),n.a.createElement(g,null),n.a.createElement(y,{ref:function(e){console.log(e),t.current=e}}),n.a.createElement(E,null),n.a.createElement(h,null))}function N(){return n.a.createElement("main",{className:"items-center text-center"},n.a.createElement("h1",{className:"sm:text-4xl py-5 text-3xl font-medium title-font mb-4 text-white"},"Photos"),n.a.createElement("p",{className:"mb-8 leading-relaxed"},"In my free time I love to take photos on my film camera. Here are some of my favorites."),n.a.createElement("div",null,b.map(function(e){return n.a.createElement(c.Link,{smooth:!0,spy:!0,duration:500,to:e.section_title,className:"mr-5 text-lg hover:text-white cursor-pointer"}," ",e.section_title," ")})),n.a.createElement("div",null,b.map(function(e){return n.a.createElement(c.Element,{id:e.section_title},n.a.createElement("h1",{className:"title-font py-8 sm:text-2xl text-1xl mb-4 font-medium text-white",key:e.section_title},e.section_title),n.a.createElement("div",{className:"flex flex-wrap -m-4 items-center"},e.photos.map(function(e){return n.a.createElement("a",{key:e.image,className:"h-full w-full p-4"},n.a.createElement("div",{className:"flex"},n.a.createElement("img",{alt:"gallery",loading:"lazy",className:"relative inset-0 w-3/4 h-3/4 object-cover object-center mx-auto block",src:e.image}),n.a.createElement("div",{className:"px-8 py-10 absolute z-10 w-full mx-auto flex justify-center border-gray-800 bg-gray-900 opacity-0 hover:opacity-50"},n.a.createElement("h1",{className:"title-font text-lg font-medium text-white mb-3 text-left"},e.title))))})))})))}function v(){return Object(o.useEffect)(function(){window.scrollTo(0,0)},[]),n.a.createElement("main",{className:"text-gray-400 bg-gray-900 body-font"},n.a.createElement(d,null),n.a.createElement(N,null))}var P=function(){return n.a.createElement("main",{className:"text-gray-400 bg-gray-900 body-font"},n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/",element:n.a.createElement(w,null)}),n.a.createElement(s.a,{path:"/Photography",element:n.a.createElement(v,null)})))};a(44);function j(){return n.a.createElement(i.a,null,n.a.createElement(P,null))}a.d(t,"default",function(){return j}),r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.26142cd9.chunk.js.map