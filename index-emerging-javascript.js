/*
--------------------------------------------------------------------
Javascript Tutorial/Studies based on 
"Learning React - Functional web development with React and Redux", 
by Alex Banks & Eve Porcello, edition by O'Reilly

--------------------------------------------------------------------
*/
//----------------------------------------------------------
// Conditionals / let x var

const VariableDeclaration = () => {
    console.log("\n\n\n")
    console.log('==================================\n')
    console.log('VariableDeclaration')
    console.log('==================================\n')

    try {
        const language = 'Python'
        language = 'Java' // trying to change will raise an error
        console.log(language)

    } catch {
        console.log("What is constant cannot be changed!\n")
    }

    var language = 'Javascript'
    if (language){
        var language = 'C++'
        console.log('inside loop, with var, language=', language)
    }
    console.log(language)
    // You can see that with var declaration, the definition inside the loop
    // changed the variable value

    var language = 'JS'
    if (language) {
        let language = "Typescript"
        console.log('inside loop, with let, language=', language)
    }
    console.log(language)
}

//----------------------------------------------------------
// Default parameters for functions
const DefaultParameters = () => {
    console.log("\n\n\n")
    console.log('==================================\n')
    console.log('Default parameters for functions')
    console.log('==================================\n')


    var defaultProduct = {
        name: "cheese",
        price: 20,
        marketInfo: {
            id: 145,
            marketType: "dairy"
        }
    }
    const func1 = (product=defaultProduct)=>{
        console.log(`${product.name}, from the ${product.marketInfo.marketType} market has price of ${product.price}`)
    }
    func1()
}

//----------------------------------------------------------
// Arrow functions
const ArrowFunctions = () => {
    console.log("\n\n\n")
    console.log('==================================\n')
    console.log('Arrow functions')
    console.log('==================================\n')

    var citiesobj = {
        cities: ["NewYork", "SãoPaulo", "München", "Sydney", "Cabo"],
        print: function(delay=1000){
            setTimeout(()=>{
                console.log(this.cities.join(", "))
            }, delay)
        }
    }
    citiesobj.print()
}


//----------------------------------------------------------
// ES6
// For browsers that support ES5 but not ES6, you can convert 
// by transpiling, with Babel

const ES6_Transpilation = () => {
    console.log("\n\n\n")
    console.log('==================================\n')
    console.log('ES6_Transpilation')
    console.log('==================================\n')

    var comment = `This can be transpiled from ES6 to ES5 (to be accepted by the browser that doesn't support ES6) 
    by adding the following to yout HTML:`
    
    htmlPice = `<script>src="https://cdnjs.cloudfare.com/ajax/libs/babel-core/5.8.23/browser.js">
    </script>
    <script> src="script.js" type="text/babel">
    </script>`
    console.log(comment + "\n" + htmlPice)
}

//----------------------------------------------------------
// Spread Operator
const spread_op = () => {
    console.log("\n\n\n")
    console.log('==================================\n')
    console.log('The spread operator')
    console.log('==================================\n')

    var names = ["Amy", "Bernadett", "Carl"]
    var [last] = names.reverse()
    console.log(last)
    console.log(names.join(',')) //Carl,Bernadett,Amy
    
    // using the spread operator
    var names = ["Amy", "Bernadett", "Carl"]
    var [last] = [...names].reverse()
    console.log(last)
    console.log(names.join(',')) //Amy,Bernadett,Carl

    console.log('\n\n')

    // splitting and selecting in an array
    var cities = ["a", "b", "c"]
    var [last, ...first] = cities.reverse()
    console.log(`last of ${cities} is ${last}`) //c
    console.log(`cities: ${cities}`)

    var cities = ["a", "b", "c"]
    var [last] = cities.reverse()
    console.log(`last of ${cities} is ${last}`) //c
    console.log(`cities: ${cities}`)

    var cities = ["a", "b", "c"]
    var [first] = cities
    console.log(`first of ${cities} is ${first}`) //a
    console.log(`cities: ${cities}`)


    var cities = ["a", "b", "c"]
    var [first, ...rest] = cities
    console.log(`rest of cities is ${rest}`) //b,c
    console.log(`cities: ${cities}`)

}
//----------------------------------------------------------
// Destructing
const Destructing = ()=>{
    var hamburguer = {
        filling: "cheese and tomatos",
        bread: "australian",
        veggies: "lettuce"
    }
    var {veggies, bread} = hamburguer
    console.log(`the hamburguer has ${veggies}, and ${bread} bread`)
}

//----------------------------------------------------------

const fullStudyFunctions = ()=>{
    VariableDeclaration()
    DefaultParameters()
    ArrowFunctions()
    ES6_Transpilation()
    Destructing()

    spread_op()
}
//fullStudyFunctions()

