///Q1

//1
function numberToAccountingString(number) {
    number = prompt("number")
    if(number != null) {
        if(number > 0) return number.toString();
        return Math.abs(number)
    } 
}
/* console.log(numberToAccountingString()); */


//2
function CarProperties() {
    let arr = [
        { carName: "Bmw", price: 100000 },
        { carName: "Mercedes", price: 120000 },
        { carName: "fiat", price: 30000 }
    ]
    
    for(const value of arr) {
        console.log(value);
    }
}
/* console.log(CarProperties()); */




///Q2

//1
function checkNumber( number ) {
    if ( number === 1  ) {
        console.log("not prime")
    } else if ( number === 2 ) {
        console.log("prime")
    } else {
        for(var i = 2; i < number; i++) {
            if(number % i === 0) {
                console.log("not prime")
            }
        }
    console.log("prime")
    }
}
/* console.log(checkNumber()); */


//2



//3
function checkNumberr( number ) {
    if ( ( number % 2 ) === 0 ) {
        console.log("even")
    } else {
        console.log("odd")
    }
}
/* console.log(checkNumberr()); */

//4
function profitableGamble( x , y , z ) {
    x = prompt( "Type x" )
    y = prompt( "Type y" )
    z = prompt( "Type z" )
    if ( (x * y) - z < 0 ) return false;
    return true;
}
/* console.log(profitableGamble()); */

//5
function calc( x , y ) {
    prompt( "Type x" )
    prompt( "Type y" )

    x + ( Math.pow(y, 2) )
}
/* console.log(calc()); */


//6
function bgChange() {
    document.body.style.backgroundColor = "#09f"
}
/* console.log(bgChange()); */