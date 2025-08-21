// const price = '100000'
// const quantity = 3
// let total = price * quantity

// const username = null
// const isVerified = false

// if (username === null || isVerified === false) {
//   console.log('Vui long dang nhap')
// }

// const product = 'iPhone'
// const discount = 15
// console.log(`Mã giảm ${discount}% cho ${product}`)

// const showCategories = (mainCategory, ...subCategories) => {
//   console.log(`Danh muc chinh: ${mainCategory}`)
//   console.log(`Danh muc phu: ${subCategories.join(', ')}`)
// }

// showCategories('Dien thoai', 'iPhone', 'Samsung')

// const calculateVAT = (amount, rate = 0.1) => amount * rate
// console.log(calculateVAT(1000000))

// const createProduct = (name, price, ...option) => {
//   console.log(`name: ${name}, price: ${price}, option: ${option.join(', ')}`)
// }
// createProduct('Laptop', '2000', 'Mau den', 'RAM 16GB')

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000)
// }

// const numbers = [1, 2, 3]
// numbers.push(4)
// console.log(numbers.length)

// const product = {
//   name: 'Laptop',
//   price: 1000,
// }

// product.stock = 5
// console.log(product.name)

// const cart = [
//   { name: 'iPhone', price: 1000 },
//   { name: 'AirPods', price: 200 },
// ]
// console.log(`Total: ${cart[0].price + cart[1].price}`)

const cart = [100,200,300]
const total = cart.reduce((sum , price)=> sum+price,0)
console.log(total)
