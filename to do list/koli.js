// ===== Select elements =====
const input = document.querySelector(".container input");
const addBtn = document.getElementById("myproduct");
const container = document.querySelector(".container");

// ===== Add product =====
addBtn.addEventListener("click", function () {

    if (input.value.trim() === '') {
        alert("you must write something!");
    } else {

        // 🔥 create the product div (not li)
        let li = document.createElement("div");
        li.className = "product-item";

        // 🔥 put full structure (like your HTML)
        li.innerHTML = `
          <span class="product-name">${input.value}</span>
          <div class="icons">
            <span class="edit">✎</span>
            <span class="delete">🗑️</span>
          </div>
        `;

        container.appendChild(li);

        // ✅ delete works
        li.querySelector(".delete").onclick = function () {
            li.remove();
        };

        // ✅ edit works
        li.querySelector(".edit").onclick = function () {
            let newName = prompt("Edit product:", input.value);
            if (newName && newName.trim() !== "") {
                li.querySelector(".product-name").textContent = newName.trim();
            }
        };

        
        input.value = "";
    }

});
