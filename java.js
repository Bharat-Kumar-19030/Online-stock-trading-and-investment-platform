
function myfunc1(){
    document.getElementById("jav").style.color="coral";
}


function myfunc(){
    let person=prompt("Please enter your name:","User");
    if (person != null){
        document.getElementById("j").innerHTML="Hello "+person+" Lets Calculate your Investment !";
        document.getElementById("j").style.cssText="color:#0D2137;font-size:35px;text-align:center;border:1px solid green;box-shadow: 2px 2px black;border-radius:1%;float:none;align-items:center;display:block;width: 50%;margin:auto;background-color:#FDB777;text-align: center;font-size: 25px;color: black;animation: mymov2 5s infinite;@keyframes mymov1{40%{transform: scale(0.3);}}";
    }}

    function myfun(){
        let stock=prompt("Enter the stock you which want to invest (enter 1 for SBI bank stock, 2 for Reliance, 3 for Alcoa, 4 for Bitcoin, 5 for Dogecoin, 6 for Solanacoin, 7 for Litecoin)","");
        let money=prompt("Enter the amount you want to invest:","5000");
        let b=(money*1.5);
        if (money!= 0 & stock==1){
            let a=(money/562);
           
            document.getElementById("k").innerHTML="Dear user you can buy "+a+ " Stocks of SBI";
            document.getElementById("m").innerHTML="Your investment after 5 months would be approx "+b+" Rupees";
            document.getElementById("n").innerHTML="SBI is currently trading near the immediate support of ₹570 and a close below this can push it towards ₹550 levels. Traders are advised to wait for confirmation of the consolidation breakout in the stock before initiating buying. Investors can add the stock towards ₹540-550 levels for a target price of ₹650";
            document.getElementById("k").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("m").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("n").style.cssText="color:#0D2137;font-style:italic;font-family:Bahnschrift;font-size:35px;text-align:center;border:5px solid green;box-shadow:2px 2px black;padding:8px;background-color:#FDB777;margin:10px;align-items:center;display:block";
        }
        else if (money!= 0 & stock==2){
            let a=(money/2354)
            document.getElementById("k").innerHTML="Dear user you can buy "+a+ " Stocks of Reliance Industries";
            document.getElementById("m").innerHTML="Your investment after 5 months would be approx "+b+" Rupees";
            document.getElementById("n").innerHTML="Company has reported net profit after tax of Rs 18182.00 Crore in latest quarter. The brokerage maintains BUY on RIL (TP of INR 2,900/share) as it believes net debt concerns are overdone, and also because RIL has industry leading capabilities across businesses to drive robust 14-15% EPS CAGR over the next 3-5 years.";
            document.getElementById("k").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("m").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("n").style.cssText="color:#0D2137;font-style:italic;font-family:Bahnschrift;font-size:35px;text-align:center;border:5px solid green;box-shadow:2px 2px black;padding:8px;background-color:#FDB777;margin:10px;align-items:center;display:block";
       }
        else if (money!= 0 & stock==3){
            let a=(money/26.22)
            document.getElementById("k").innerHTML="Dear user you can buy "+a+ " Stocks of Alcoa Industries";
            document.getElementById("m").innerHTML="Your investment after 5 months would be approx "+b+"  Rupees";
            document.getElementById("n").innerHTML="Despite economic challenges, there are positive signs for Alcoa's future in the global aluminum market, driven by renewable energy, electric vehicles, and recyclable packaging. An economic recovery could lead to substantial gains for Alcoa, potentially pushing the stock price to the $80 to $90 range";
            document.getElementById("k").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("m").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("n").style.cssText="color:#0D2137;font-style:italic;font-family:Bahnschrift;font-size:35px;text-align:center;border:5px solid green;box-shadow:2px 2px black;padding:8px;background-color:#FDB777;margin:10px;align-items:center;display:block";
       }
        else if (money!= 0 & stock==4){
            let a=(money/3036900)
            document.getElementById("k").innerHTML="Dear user you can buy "+a+ " Bitcoins ";
            document.getElementById("m").innerHTML="Your investment after 5 months would be approx "+b+"  Rupees";
            document.getElementById("n").innerHTML="Bitcoin, the largest cryptocurrency by market cap, is a risky investment with high volatility. It should only be considered if you have a high risk tolerance, are in a strong financial position and can afford to lose any money you invest in it.";
            document.getElementById("k").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("m").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("n").style.cssText="color:#0D2137;font-style:italic;font-family:Bahnschrift;font-size:35px;text-align:center;border:5px solid green;box-shadow:2px 2px black;padding:8px;background-color:#FDB777;margin:10px;align-items:center;display:block";
       }
        else if (money!= 0 & stock==5){
            let a=(money/6.95)
            document.getElementById("k").innerHTML="Dear user you can buy "+a+ " Dogecoins";
            document.getElementById("m").innerHTML="Your investment after 5 months would be approx "+b+" Rupees";
            document.getElementById("n").innerHTML="Dogecoin transactions are incredibly fast.This is great for those looking to make fast and secure payments. Third, its relatively low price makes it a good entry point for investors who are new to the cryptocurrency market. Dogecoin is an affordable way to diversify your portfolio.";
            document.getElementById("k").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("m").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("n").style.cssText="color:#0D2137;font-style:italic;font-family:Bahnschrift;font-size:35px;text-align:center;border:5px solid green;box-shadow:2px 2px black;padding:8px;background-color:#FDB777;margin:10px;align-items:center;display:block";
       }

        else if (money!= 0 & stock==6){
            let a=(money/59.34)
            document.getElementById("k").innerHTML="Dear user you can buy "+a+ " Solanacoins";
            document.getElementById("m").innerHTML="Your investment after 5 months would be approx "+b+"  Rupees";
            document.getElementById("n").innerHTML="Solana offers lightning-fast transactions with the lowest transaction costs compared to all other blockchains. Its ecosystem is growing with new applications being launched daily. This is the only major blockchain that has launched its own smartphone and has partnered with Visa for USDC settlements.";
            document.getElementById("k").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("m").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("n").style.cssText="color:#0D2137;font-style:italic;font-family:Bahnschrift;font-size:35px;text-align:center;border:5px solid green;box-shadow:2px 2px black;padding:8px;background-color:#FDB777;margin:10px;align-items:center;display:block";
       }
        else if (money!= 0 & stock==7){
            let a=(money/5777)
            document.getElementById("k").innerHTML="Dear user you can buy "+a+ " Litecoins";
            document.getElementById("m").innerHTML="Your investment after 5 months would be approx "+b +"  Rupees";
            document.getElementById("n").innerHTML="Our real-time LTC to USD price update shows the current Litecoin price as $71.2 USD. Our most recent Litecoin price forecast indicates that its value will increase by -2.04% and reach $71.10 by November 18, 2023.";
            document.getElementById("k").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("m").style.cssText="color:red;font-weight:bold;font-size:35px;text-align:center;";
            document.getElementById("n").style.cssText="color:#0D2137;font-style:italic;font-family:Bahnschrift;font-size:35px;text-align:center;border:5px solid green;box-shadow:2px 2px black;padding:8px;background-color:#FDB777;margin:10px;align-items:center;display:block";
            }


       


    }
