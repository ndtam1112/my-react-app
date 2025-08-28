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

// const cart = [100,200,300]
// const total = cart.reduce((sum , price)=> sum+price,0)
// console.log(total)

// const names = ['bốp', 'tèo', 'tí']
// const cap = names.map((name) => name.toUpperCase())
// console.log(cap)

// const products = [
//   { name: 'iPhone', price: 1000 },
//   { name: 'Sac', price: 50 },
// ]

// const result = products.filter(product => product.price>100)
// console.log(result)

// const inventory =[
//     {name: 'Ao', stock:10},
//     {name: 'Quan', stock:5}
// ]
//  const result = inventory.reduce((sum, st)=> sum + st.stock,0)
//  console.log(result)

// function createObject(key, value) {
//   const ob = { [key]: value }
//   return ob
// }

// console.log(createObject('language', 'JS')) //result: language: "JS"

// const company = {
//   name: 'F8',
//   founder: { name: 'Bop', age: 2 },
// }
//  const t = Object.entries(company)
//  const v = Object.values(company)
//  console.log(t[1])
//  console.log(v[1])

//////////////////////////////////////////////////////////////////////////////////

// class Product {
//   #price
//   constructor(name, price, discount) {
//     this.name = name
//     this.#price = price
//     this.discount = discount
//   }
//   getFinalPrice() {
//     return this.#price - (this.#price * this.discount) / 100
//   }

//   static createDefault() {
//     return new Product('Apple', 500, 10)
//   }
// }

// class DigitalProduct extends Product {
//   constructor(name, price, discount, fileSize) {
//     super(name, price, discount)
//     this.fileSize = fileSize
//   }
//   getFinalPrice() {
//     let finalPrice = super.getFinalPrice()
//     if (this.fileSize > 100) return (finalPrice -= finalPrice * 0.1)
//     return finalPrice
//   }
// }

// const dp1 = new DigitalProduct('Lolipop', 1000, 10, 300)
// console.log(dp1.getFinalPrice())

/////////////////////////////////////////////////////////////////////////////////////////////
// class Product {
//   constructor(id, name, price) {
//     this.id = id
//     this.name = name
//     this.price = price
//   }
// }

// class OrderItem {
//   constructor(product, quantity) {
//     this.product = product
//     this.quantity = quantity
//   }

//   getTotalPrice() {
//     return this.product.price * this.quantity
//   }
// }

// class Order {
//   constructor(customer, items) {
//     this.customer = customer
//     this.items = []
//   }

//   addItems(product, quantity) {
//     const item = new OrderItem(product, quantity)
//     this.items.push(item)
//   }

//   total() {
//     return this.items.reduce((sum, item) => sum + item.getTotalPrice(), 0)
//   }

//   showOrder() {
//     console.log(`Don hang cua ${this.customer} gom:`)
//     this.items.forEach((item, i) => {
//       console.log(`${i + 1}.${item.product.name} x ${item.quantity} = ${item.getTotalPrice()}`)
//     })
//     console.log(`Tong gia tri don hang la ${this.total()}VND`)
//   }
// }

// const p1 = new Product(1, 'Apple', 200)
// const p2 = new Product(2, 'Banana', 300)

// const order = new Order('Nam')

// order.addItems(p1, 3)
// order.addItems(p2, 2)

// order.showOrder()

////////////////////////////////////////////////////////////////////////
// function changeLight(color, duration) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve((color = { color })), duration)
//   })
// }

// async function trafficLight() {
//   await changeLight('do', 3000)
//   await changeLight('xanh', 2000)
//   console.log('Duoc di')
// }

// trafficLight()

/////////////////////////////////////////////////////////////////////////
// function check(username, password) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (username === 'ndtam' && password === '1111') resolve(true)
//       else resolve(false)
//     })
//   })
// }
// async function login(username, password) {
//   const isValid = await check(username, password)
//   return isValid ? 'Dang nhap thanh cong' : 'Sai'
// }

// login('ndtam', '1111').then(console.log)
// login('ndta', '1111').then(console.log)
// login('ndta', '1111').then(console.log)

//////////////////////////////////////////////////////////////
// import { users, addUser, findUser } from "./user.js";
// const u1 = findUser('john@example.com');
// console.log(u1);
// console.log(users.length)

///////////////////////////////////////////////////////////////
