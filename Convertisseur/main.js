// Document
const display = document.getElementById('display');
const input = document.getElementById('input');
const code = document.getElementById('code');
const submit = document.getElementById('submit');
const select = document.getElementById("select") 

// Variables
const codes = ["ARS","AUD","BCH","BGN","BNB","BRL","BTC","CAD","CHF","CNY","CZK","DKK","DOGE","DZD","ETH","EUR","GBP","HKD","HRK","HUF","IDR","ILS","INR","ISK","JPY","KRW","LTC","MAD","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","TWD","USD","XRP","ZAR"]
const text_codes = ['ARS Argentine Peso' ,'AUD Australian Dollar' ,'BCH Bitcoin Cash' ,'BGN Bulgarian Lev' ,'BNB Binance Coin' ,'BRL Brazilian Real' ,'BTC Bitcoin' ,'CAD Canadian Dollar' ,'CHF Swiss Franc' ,'CNY Chinese Yuan' ,'CZK Czech Republic Koruna' ,'DKK Danish Krone' ,'DOGE Dogecoin' ,'DZD Algerian Dinar' ,'ETH Ethereum' ,'EUR Euro' ,'GBP British Pound Sterling' ,'HKD Hong Kong Dollar' ,'HRK Croatian Kuna' ,'HUF Hungarian Forint' ,'IDR Indonesian Rupiah' ,'ILS Israeli New Sheqel' ,'INR Indian Rupee' ,'ISK Icelandic Króna' ,'JPY Japanese Yen' ,'KRW South Korean Won' ,'LTC Litecoin' ,'MAD Moroccan Dirham' ,'MXN Mexican Peso' ,'MYR Malaysian Ringgit' ,'NOK Norwegian Krone' ,'NZD New Zealand Dollar' ,'PHP Philippine Peso' ,'PLN Polish Zloty' ,'RON Romanian Leu' ,'RUB Russian Ruble' ,'SEK Swedish Krona' ,'SGD Singapore Dollar' ,'THB Thai Baht' ,'TRY Turkish Lira' ,'TWD New Taiwan Dollar' ,'USD United States dollar', 'XRP Ripple' ,'ZAR South African Rand']
let devise;
let symbole;
var api_key = "95480ded95b04eaa89183f4d5fe74e9a";

// options du select
for (var i = 0; i < codes.length; i++) { 
    select.innerHTML += `<option value="${codes[i]}">${text_codes[i]}</option>\n` // On ajoute dans le code HTML les options
}

// Click du bouton 
submit.addEventListener('click', function() {
    devise = select.value;
    let corresp = false;
    for (let n = 0; n < codes.length; n++){
        if (devise === codes[n]){
            corresp = true;
            var url = "https://exchange-rates.abstractapi.com/v1/live/?api_key="+ api_key + "&base=" + devise+"&target=EUR";
            $.get(url, succes = function(data){
            console.log(data);
            const euro = input.value;
            const coeff = data.exchange_rates.EUR;
            let result = euro * coeff;
            display.innerText = `${euro} ${devise} = ${result} €, avec un taux de ${coeff}`;})}
    }
    if (corresp===false){
        alert(`${devise} n'existe pas`);
        return;
    }

})