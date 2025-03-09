interface student {
  name: string;
  age: number;
}

let std: student = {
  name: "Hani",
  age: 125,
};
if (std.age > 18) console.log("Adult");
else console.log("Minor");
/////////////////////////////////////////////////////////////////////////////////////////////////////

interface Teacher {
  name: string;
  subjects: string[];
}

let T: Teacher = {
  name: "Ayman",
  subjects: ["HTML", "JavaScript", "Css"],
};

console.log(T.subjects);

////////////////////////////////////////////////////////////////////

interface products {
  name: string;
  price: number;
  quantity: number;
}

let product1: products[] = [
  { name: "Laptop", quantity: 5, price: 1200 },
  { name: "Smartphone", quantity: 10, price: 800 },
  { name: "Headphones", quantity: 135, price: 250 },
];

for (let i = 0; i < product1.length; i++) {
  if (product1[i].quantity > 5) product1[i].price *= 0.015;
}

////////////////////////////////////////////////////////////////////////

document.getElementById("submit")?.addEventListener("click", AddProduct);

interface product {
  name: any;
  description: any;
  price: any;
  quantity: any;
}

function AddProduct(): void {
  let pro: product = {
    name: (document.getElementById("name") as HTMLInputElement)?.value,
    description: (document.getElementById("description") as HTMLTextAreaElement)
      ?.value,
    price: (document.getElementById("price") as HTMLInputElement)?.value,
    quantity: (document.getElementById("quantity") as HTMLInputElement)?.value,
  };

  localStorage.setItem("name", pro.name);
  localStorage.setItem("description", pro.description);
  localStorage.setItem("price", pro.price);
  localStorage.setItem("quantity", pro.quantity);

  ShowProducts();
}

function ShowProducts(): void {
  let div = document.getElementById("showProduct");

  if (div) {
    div.innerHTML += `
        <h3>${localStorage.getItem("name")}</h3>
        <p><strong>Description:</strong> ${localStorage.getItem(
          "description"
        )}</p>
        <p><strong>Price:</strong> $${localStorage.getItem("price")}</p>
        <p><strong>Quantity:</strong> ${localStorage.getItem("quantity")}</p>
      `;
  }
}
