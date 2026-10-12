let inventory = JSON.parse(localStorage.getItem('inventory')) || [];
let currentBill = [];

function saveAndRender() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
    renderInventory();
    updateDropdown();
}

function switchTab(tab) {
    document.getElementById('inventory-section').style.display = tab === 'inventory' ? 'block' : 'none';
    document.getElementById('invoice-section').style.display = tab === 'invoice' ? 'block' : 'none';
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function addProduct(e) {
    e.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const qty = parseInt(document.getElementById('product-qty').value);

    inventory.push({ name, price, qty });
    saveAndRender();
    e.target.reset();
}

function deleteProduct(index) {
    inventory.splice(index, 1);
    saveAndRender();
}

function renderInventory() {
    const list = document.getElementById('inventory-list');
    list.innerHTML = '';
    inventory.forEach((item, index) => {
        const status = item.qty < 5 ? '<span class="low-stock">Low Stock</span>' : '<span class="in-stock">In Stock</span>';
        list.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>₦${item.price.toLocaleString()}</td>
                <td>${item.qty}</td>
                <td>${status}</td>
                <td><button onclick="deleteProduct(${index})" style="background:red; color:white; border:none; padding:5px 10px; cursor:pointer;">Delete</button></td>
            </tr>
        `;
    });
}

function updateDropdown() {
    const select = document.getElementById('invoice-item-select');
    select.innerHTML = '';
    inventory.forEach((item, index) => {
        select.innerHTML += `<option value="${index}">${item.name} (₦${item.price}) - Left: ${item.qty}</option>`;
    });
}

function addToInvoice() {
    const index = document.getElementById('invoice-item-select').value;
    const qtyToBuy = parseInt(document.getElementById('invoice-qty').value);
    
    if (index === "" || inventory[index].qty < qtyToBuy) {
        alert("Not enough stock or invalid selection!");
        return;
    }

    const item = inventory[index];
    item.qty -= qtyToBuy; // Deduct stock automatically
    currentBill.push({ name: item.name, price: item.price, qty: qtyToBuy });

    renderBill();
    saveAndRender();
}

function renderBill() {
    const billItems = document.getElementById('bill-items');
    const billTotal = document.getElementById('bill-total');
    billItems.innerHTML = '';
    let total = 0;

    currentBill.forEach(b => {
        let subtotal = b.price * b.qty;
        total += subtotal;
        billItems.innerHTML += `<li>${b.name} x ${b.qty} = ₦${subtotal.toLocaleString()}</li>`;
    });

    billTotal.innerText = total.toLocaleString();
}

// Initial load
renderInventory();
updateDropdown();
