(()=>{var e={603:e=>{const t=e=>{document.getElementById("errorMessage").textContent=e,document.getElementById("domoMessage").classList.remove("hidden")};e.exports={handleError:t,sendPost:async(e,a,o)=>{const m=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),r=await m.json();document.getElementById("domoMessage").classList.add("hidden"),r.redirect&&(window.location=r.redirect),r.error&&t(r.error),o&&o(r)},hideError:()=>{document.getElementById("domoMessage").classList.add("hidden")}}}},t={};function a(o){var m=t[o];if(void 0!==m)return m.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,a),r.exports}(()=>{const e=a(603),t=t=>{t.preventDefault(),e.hideError();const a=t.target.querySelector("#domoName").value,o=t.target.querySelector("#domoAge").value,m=t.target.querySelector("#_csrf").value;return a&&o?(e.sendPost(t.target.action,{name:a,age:o,_csrf:m},r),!1):(e.handleError("All fields are required"),!1)},o=e=>React.createElement("form",{id:"domoForm",onSubmit:t,name:"domoForm",action:"/maker",method:"POST",className:"domoForm"},React.createElement("label",{htmlFor:"name"},"Name: "),React.createElement("input",{id:"domoName",type:"text",name:"name",placeholder:"Domo Name"}),React.createElement("label",{htmlFor:"age"},"Age: "),React.createElement("input",{id:"domoAge",type:"number",min:"0",name:"age"}),React.createElement("input",{id:"_csrf",type:"hidden",name:"_csrf",value:e.csrf}),React.createElement("input",{className:"makeDomoSubmit",type:"submit",value:"Make Domo"})),m=e=>{if(0===e.domos.length)return React.createElement("div",{className:"domoList"},React.createElement("h3",{className:"emptyDomo"},"No Domos Yet!"));const t=e.domos.map((e=>React.createElement("div",{key:e._id,className:"domo"},React.createElement("img",{src:"/assets/img/domoface.jpeg",alt:"domo face",className:"domoFace"}),React.createElement("h3",{className:"domoName"}," Name: ",e.name," "),React.createElement("h3",{className:"domoAge"}," Age: ",e.age," "))));return React.createElement("div",{className:"domoList"},t)},r=async()=>{const e=await fetch("/getDomos"),t=await e.json();ReactDOM.render(React.createElement(m,{domos:t.domos}),document.getElementById("domos"))};window.onload=async()=>{const e=await fetch("/getToken"),t=await e.json();ReactDOM.render(React.createElement(o,{csrf:t.csrfToken}),document.getElementById("makeDomo")),ReactDOM.render(React.createElement(m,{domos:[]}),document.getElementById("domos")),r()}})()})();