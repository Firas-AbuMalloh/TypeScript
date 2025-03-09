"use strict";
var _a;
let std = {
    name: "Hani",
    age: 125,
};
if (std.age > 18)
    console.log("Adult");
else
    console.log("Minor");
let T = {
    name: "Ayman",
    subjects: ["HTML", "JavaScript", "Css"],
};
console.log(T.subjects);
let product1 = [
    { name: "Laptop", quantity: 5, price: 1200 },
    { name: "Smartphone", quantity: 10, price: 800 },
    { name: "Headphones", quantity: 135, price: 250 },
];
for (let i = 0; i < product1.length; i++) {
    if (product1[i].quantity > 5)
        product1[i].price *= 0.015;
}
////////////////////////////////////////////////////////////////////////
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", AddProduct);
function AddProduct() {
    var _a, _b, _c, _d;
    let pro = {
        name: (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value,
        description: (_b = document.getElementById("description")) === null || _b === void 0 ? void 0 : _b.value,
        price: (_c = document.getElementById("price")) === null || _c === void 0 ? void 0 : _c.value,
        quantity: (_d = document.getElementById("quantity")) === null || _d === void 0 ? void 0 : _d.value,
    };
    localStorage.setItem("name", pro.name);
    localStorage.setItem("description", pro.description);
    localStorage.setItem("price", pro.price);
    localStorage.setItem("quantity", pro.quantity);
    ShowProducts();
}
function ShowProducts() {
    let div = document.getElementById("showProduct");
    if (div) {
        div.innerHTML += `
        <h3>${localStorage.getItem("name")}</h3>
        <p><strong>Description:</strong> ${localStorage.getItem("description")}</p>
        <p><strong>Price:</strong> $${localStorage.getItem("price")}</p>
        <p><strong>Quantity:</strong> ${localStorage.getItem("quantity")}</p>
      `;
    }
}
