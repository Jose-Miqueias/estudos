
let stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
};

let is_shop_open = false;

 
function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        }else {
            reject(console.log("Shop is closed."))
        }
    })
}

async function kitchen() {
    try{
        await time(2000)
        console.log(`${stocks.fruits[1]} was selected.`)

        await time(0000)
        console.log("Production has started.")

        await time(2000)
        console.log("Cut the fruit.")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`)

        await time(1000)
        console.log("Machine has been started.")

        await time(2000)
        console.log(`${stocks.holder[0]} was selected as the container.`)

        await time(3000)
        console.log(`${stocks.toppings[1]} added on top.`)

        await time(2000)
        console.log("Ice cream served!")

    }
    catch(error){
        console.log("Custumer left.", error)
    }
    finally{
        console.log("Day ended, shop is closed.")
    }
}

kitchen()