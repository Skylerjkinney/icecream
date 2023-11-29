let grandTotal = 0


const iceCreamArr = [{
    name: 'Chocolate',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Cilantro',
    price: 1.25,
    quantity: 0
},
{
    name: 'Furby',
    price: 5.00,
    quantity: 0
},
{
    name: 'Malboro',
    price: 10.25,
    quantity: 0
},
{
    name: 'Dirt',
    price: 1.50,
    quantity: 0
}]
// begin topppings

const toppings = [{
    name: 'Glass',
    price: .25,
    quantity: 0
},
{
    name: 'Legos',
    price: .25,
    quantity: 0
},
{
    name: 'Bees',
    price: .5,
    quantity: 0
}]
// end topping

const vessel = [{
    name: 'Boot',
    price: .5,
    quantity: 0
},
{
    name: 'Cup',
    price: 1,
    quantity: 0
}, {
    name: 'Mouth',
    price: .75,
    quantity: 0
}
]

function orderIc(IcName) {
    console.log('Icecweam bought', IcName)
    let foundIc = iceCreamArr.find(iceCreamArr => iceCreamArr.name == IcName)
    console.log(foundIc);
    foundIc.quantity++
    grandTotal += foundIc.quantity * foundIc.price
    console.log(foundIc);
    updateCart()
}

function orderTp(TpName) {
    console.log('Topping bought', TpName)
    let foundTp = toppings.find(toppings => toppings.name == TpName)
    console.log(foundTp);
    foundTp.quantity++
    grandTotal += foundTp.quantity * foundTp.price
    console.log(foundTp);
    updateCart()


}

function orderVs(VsName) {
    console.log('Vessel bought', VsName)
    let foundVs = vessel.find(vessel => vessel.name == VsName)
    console.log(foundVs);
    foundVs.quantity++
    grandTotal += foundVs.quantity * foundVs.price
    console.log(foundVs);
    updateCart()
}


function updateCart() {
    let template = ''
    iceCreamArr.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            template += `<div class="d-flex justify-content-between align-items-baseline p-2">
            <span>${iceCream.name}</span>
            <span>x${iceCream.quantity}</span>
            <span>${iceCream.price}</span>
            <button onclick="removeSandwich('${iceCream.name}')" class="text-danger btn" title="Remove sandwich"><i class="mdi mdi-delete"></i></button>
        </div>`
        }
    })
    console.log(template)
    document.getElementById("cart").innerHTML = template
    total()
}

function total() {
    document.getElementById('total').innerText = grandTotal.toString()
}

