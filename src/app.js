console.log("Merhaba Kodlama.io")
//js type safe değildir
let dolarBugun=9.30
let dolarDun=9.20

{
    let dolarDun=9.10
}
console.log(dolarDun)

const euroDun=11.2
euroDun=11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri= ["Konut kredisi","Emlak konut kredisi","Kamu konut kredisi"]
console.log("<ul>")
for(let i=0; i<konutKredileri.length; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)
