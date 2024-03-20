import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi= new Freecurrencyapi('fca_live_S9dCRSm1HkokoIFcUSsgxJbeT1n2280JeY2jMJwm')

convertCurrency('USD','INR',3);

export async function convertCurrency(fromCurrency, toCurrency,uints){

   const res= await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier= res.data[toCurrency];
    //console.log(multiplier)
    return multiplier*uints
}
