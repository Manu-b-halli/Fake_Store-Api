import{c as a,a as c,j as t,d as i}from"./index-DrhrQCz0.js";const o=()=>{const r=a(s=>s.cart.items),e=c();return t.jsxs("div",{className:"cart",children:[t.jsx("h2",{children:"Shopping Cart"}),r.length===0?t.jsx("p",{children:"No items in cart"}):r.map(s=>t.jsxs("div",{className:"cart-item",children:[t.jsxs("p",{children:[s.title," - $",s.price]}),t.jsx("button",{onClick:()=>e(i(s.id)),children:"Remove"})]},s.id))]})};export{o as default};
