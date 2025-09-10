let inventory = [
    { sku:  "SKU-001", name: "Arsenal jersey", price: 44.99, stock: 70},
    { sku:  "SKU-002", name: "England jersey", price: 79.99, stock: 60},
    { sku:  "SKU-003", name: "Spain jersey", price: 54.99, stock: 30},
    { sku:  "SKU-004", name: "France jersey", price: 99.99, stock: 45}
]

let newProduct =  { sku:  "SKU-005", name: "Mexico jersey", price: 39.99, stock: 15}

inventory.push(newProduct)

inventory.pop()

console.log(inventory)

let orders = [
    {
        orderId: "NS0001",
        items: [
            { sku: "SKU-001", qty: 3 },
            { sku: "SKU-004", qty: 1 }
        ]
    },
    {
        orderId: "NS0002",
        items: [
            { sku: "SKU-002", qty: 2 },
            { sku: "SKU-003",  qty: 3 }
        ]
    }
]

console.log("Orders: ", orders)

console.log("Inventory list:")
inventory.forEach(item => {
    console.log(`${item.sku} | ${item.name} | $${item.price} | Stock: ${item.stock}`)
})