// Global variables

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var productImage = document.getElementById("productImage");
var search = document.getElementById("searchInput");
var updateButton = document.getElementById("updateButton");
var deleteButton = document.getElementById("deleteButton");
var addProductButton = document.getElementById("addProductButton");
var updateProductButton = document.getElementById("updateProductButton");

var list = [];

var currentIndex;

// read 
if (JSON.parse(localStorage.getItem("list")) != null) {
  list = JSON.parse(localStorage.getItem("list"));
  console.log(list);
  display();
}

// create 
function addProduct() {
  var singleProduct = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    desc: productDescription.value,
    image: "./images/i-1.png",
  };

  list.push(singleProduct);

  localStorage.setItem("list", JSON.stringify(list));
  clear();
  display();
}

// display
function display() {
  var cartona = "";
  for (var i = 0; i < list.length; i++) {
    cartona += `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <div class="card">
            <img src="./Css/images/i-2.png" class="card-img-top" alt="iphone">
            <div class="card-body">
              <span class="badge bg-info">Index:${i}</span>
              <h5 class="card-title">${list[i].name}</h5>
              <p class="card-text">category:${list[i].category} </p>
              <p class="card-text">Description: ${list[i].desc}</p>
              
            </div>
            <div class="card-footer">
              <span>Price:${list[i].price}</span>
              <div>
                <button onclick="updateProduct(${i})" class="btn btn-success" id="updateButton">Update</button>
                <button onclick="deleteProduct(${i})" class="btn btn-danger id="deleteButton"">Delete</button>
              </div>

            </div>
          </div>
        </div>
        `;
  }
  document.getElementById("product").innerHTML = cartona;
}

// Delete element
function deleteProduct(index) {
  list.splice(index, 1);
  localStorage.setItem("list", JSON.stringify(list));
  display();
}

// clear inputs
function clear() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";
}

// search
function searchProduct() {
  var cartona = "";

  for (var i = 0; i < list.length; i++) {
    if (list[i].name.toLowerCase().includes(searchInput.value.toLowerCase())) {
      cartona += `
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card">
          <img src="./Css/images/i-2.png" class="card-img-top" alt="iphone">
          <div class="card-body">
            <span class="badge bg-info">Index:${i}</span>
            <h5 class="card-title">${list[i].name}</h5>
            <p class="card-text">category:${list[i].category} </p>
            <p class="card-text">Description: ${list[i].desc}</p>
            
          </div>
          <div class="card-footer">
            <span>Price:${list[i].price}</span>
            <div>
              <button class="btn btn-success">Update</button>
              <button class="btn btn-danger">Delete</button>
            </div>

          </div>
        </div>
      </div>
      `;
    }
  }
  document.getElementById("product").innerHTML = cartona;
}

// 3l4an lma 2dos 3ala el update button ys7ab el data fe el inputs
function updateProduct(index) {
  productName.value = list[index].name;
  productPrice.value = list[index].price;
  productCategory.value = list[index].category;
  productDescription.value = list[index].productDescription;

  addProductButton.classList.add("d-none");
  updateProductButton.classList.remove("d-none");

  var currentIndex = index;
}

// b3d m sa7abt el data fe el inputs de b2a ele bt3agay el data el gdeda ll card
function finalUpdate() {
  var singleProduct = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    desc: productDescription.value,
    image: "./images/i-1.png",
  };
  list.splice(currentIndex, 1, singleProduct);
  localStorage.setItem("list", JSON.stringify(list));
  clear();
  display();
  addProductButton.classList.remove("d-none");
  updateProductButton.classList.add("d-none");
}
