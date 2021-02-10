// Criando um objto cujo valor das propriedades vem
// de variáveis

let usuario = 'Joao'
let senha = 'Deus123'
let name = 'Joao das Couves'
let lastLogin = '2021-02-08 22:49:28'

let userInfo = {
    login: usuario,
    password: senha,
    name, // Propeidade abreviada (name: name)
    lastLogin // (lastLogin: lastLogin)
}

console.log(userInfo)

let info = 'isto é um teste'
console.log(info)
console.log({info})