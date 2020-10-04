  
$(document)
    .ready(function() {
      
      var btcprice = 10995;
      
      var btc2usd = function(btc) {
        return btc.times(btcprice);
      }
      
      var usd2btc = function(usd) {
        var us = new Big(usd)
        return us.div(btcprice);
      }
      
      var wallet = new Big(0.00013);
      var updatePlansAvailable = function() {
        var newPlansAvailable = [];
        $("#plansAvailable > div").forEach(function(p){
          var nameo = $(p).find("h4").text().split(" ").map(function(i){return i.slice(0,3)}).join("");
          
          newPlansAvailable[nameo] = {
            profit: $(p).find(".profit").val(),
            days: $(p).find(".days").val(),
            costUsd: $(p).find("h5").text()
          }
        });
        plansAvailable = newPlansAvailable;
        console.log(newPlansAvailable);
      }
      //updatePlansAvailable();
      $("#plansAvailable input").on("change", updatePlansAvailable);
      var plansAvailable = {
        Test : {
          profit: new Big(0.00000556),
          days: 90,
          priceUsd: 5
        },
        BegV3: {
          profit: new Big(0.00001970),
          days: 90,
          costUsd: 13
        },
        BegV4: {
          profit: new Big(0.00004146),
          days: 180,
          costUsd: 27
        },
        BasV3: {
          profit: new Big(0.00031092),
          days: 90,
          costUsd: 128
        },
        BasV4: {
          profit: new Big(0.00047236),
          days: 180,
          costUsd: 260
        }
      };
      
      var a = new Big(0);
    
      var totalSpent = 0;
      
      var myPlans = JSON.parse(localStorage.getItem('myPlans'));
      if(myPlans == null) {
        var myPlans = [
['BegV3', 90], 
['BegV3', 85], 
['BegV3', 82], 
['BegV3', 80], 
['BegV3', 78], 
['BegV3', 78], 
['BegV3', 78], 
['BegV3', 78], 
['BegV3', 78], 
['BegV3', 73], 
['BegV3', 73], 
['BegV3', 67], 
['BegV3', 64]
       ];
      }
      
      var myPlansBeforeSave = myPlans;
      
      $("#myPlans").on("focus", function() {
        myPlansBeforeSave = $(this).val();
      }).text(JSON.stringify(myPlans));
     // ("#myPlans").val
      $("#saveMyPlans").on('click', function() {
        try {
          myPlans = JSON.parse($("#myPlans").val());
          console.log(myPlans);
          window.localStorage.setItem("myPlans", JSON.stringify(myPlans));
          $("#saveMyPlans").after($("<label>").addClass("ui label"));
        }
        catch (e) {
          alert("Unexpected value in JSON." + e.message); 
        }
      });
       
      var days = 0;
      var csvdata = "day,plans,newplans,droppedplans,profit,spent,wallet usd,totalSpent,btcprice";
      var simulateDay = function () {
        days++;

      //csvdata = csvdata + "\n" + days +","+  + ",";
       
      var rand = Math.random();
       
      //if (days % 3 == 0) {
        //wallet.plus(usd2btc(5));
      //}
      //console.log(rand)
      
      if($("#adjustBTC").is(":checked")) {
       if (rand > .30) {
         if(rand > .62) {
           if(rand > .83) {
             btcprice *= 1.014
           }
         } else {
           btcprice *= 1.0028
         }
       } else {
         if(rand < .06) {
           btcprice *= 0.97
         } else {
          
           if(Math.random > .5) {
             btcprice *= .997
           } else {
             btcprice *= 0.9990
           }
         }
       }
      }
       
       //console.log(btcprice);
       $("#btcprice").text("₿ = $" + btcprice.toFixed(2));
     
      if($("#adjustProfit").is(":checked") && days % 7 == 0) {
        for(i in plansAvailable) {
          plansAvailable[i]["profit"] = plansAvailable[i]["profit"].times(.998);
        }
      }
      
       
       a = Big(0.0);
       var droppedPlans = 0;
        for(i in myPlans) {
          a = a.plus(plansAvailable[myPlans[i][0]]["profit"]);
          if(myPlans[i][1]-- < 1) {
            myPlans.splice(i, 1);
            droppedPlans++;
          }
        }
        
        //console.log(a.toFixed())
        //a = a.times(.9);
        wallet = wallet.plus(a);
        $("#wallet").text("₿" + wallet.toFixed(8));
  
        
        var newPlans = 0;
        var spent = 0;
        
        var buyPlan = function(p) {
          if (usd2btc(plansAvailable[p]["costUsd"]).lt(wallet)) {
            spent += plansAvailable[p]["costUsd"];
            newPlans++;
            
            
            wallet = wallet.minus(usd2btc(plansAvailable[p]["costUsd"]).toFixed(8));
            myPlans.push([p, plansAvailable[p]["days"]]);
            return true;
          } else {
         return false;
          }
        }
        //buyPlan("basic");
        //var buyPlans = function(planType, count)
        
    //    buyPlans("basic", 2);
     //   buyPlans("beg", 1);
     
     
        buyPlan("BasV4");
      //  buyPlan("BasV4");
        buyPlan("BegV4");
        buyPlan("BegV4");
        buyPlan("BegV4");
      //  buyPlan("BasV3")
       // buyPlan("BegV3");
     //   buyPlan("BegV4");
        //buyPlan("beg4");
     //   buyPlan("BegV3");
       // buyPlan("basic");
        csvdata += "\n" + [days, myPlans.length, newPlans, droppedPlans, btc2usd(a), spent, btc2usd(wallet), totalSpent, btcprice].join(",");
        
       // csvdata = csvdata + newPlans + ","+droppedplans+"," + a.toFixed() + "," + spent + "," + wallet.toFixed();
       
        $("#addbtc").text("+ $" + btc2usd(a).toFixed(2) + " made");
        $("#minusbtc").text(" - $" + spent + " spent");
        totalSpent += spent;
        $("#totalSpent").text("Total Spent: $" + totalSpent);
        $("#made").text("profit = $" + btc2usd(a).minus(spent).toFixed(2));
        $("#day").text(days + " days");
        $("#walletusd").text("$" + btc2usd(wallet).toFixed(2));
        $("#plans").text("Plans: " + myPlans.length);
        
        if(days % 90 == 0 || days % 355 == 0) {
          $("#play").click();
        }
        /*
        console.log({
          day: days,
          wallet: wallet,
          walletusd: btc2usd(wallet),
          myPlans: myPlans
        });
        */  
       }
       
       $("#play").click(function (){
         if($(this).text().includes("Play")) {
           $(this).html("<i class=\"pause icon\"></i>Pause");
           simulator = setInterval(simulateDay, 150);
         } else {
           $(this).html("<i class=\"play icon\"></i>Play");
          // console.log(csvdata);
           $("#csvdata").text(csvdata);
           $("#myPlans").text(JSON.stringify(myPlans));
           clearInterval(simulator);
         }
         
       });
       
       $("#planimport").click(function () {
         var rawinput = $("#importdata").val();
         var inputText = rawinput.slice(rawinput.lastIndexOf("Expiration") + 10, rawinput.length);
         var rawPlans = inputText.split("\n");
      //   console.log(rawPlans);
         var newPlans = [];
         var reggy = /\d+d/
         for(i in rawPlans) {
           if(rawPlans[i].length > 5) {
             //meh = rawPlans[i].split(" ");
            blah = rawPlans[i].match(/(\d+)d/);
             if(blah) {
              // meh = wo.slice(0, 3);
               words = rawPlans[i].split(" ");
               //console.log(blah);
               nameo = words[0].slice(0,3) + words[1].slice(0, 2);
               newPlans.push([nameo, blah.pop()]);
             }
             
           }
         }
         myPlans = newPlans;
         window.localStorage.setItem("myPlans", myPlans);
         $("#myPlans").text(JSON.stringify(myPlans));
         console.log(newPlans);
       });
      //setInterval(simulateDay, 1000);
       
       
      /*
      Expiration
Beginner V3	5 TH	2020-08-31 00:45:58	90d 8h 7m 38s
Beginner V3	5 TH	2020-08-31 00:45:28	90d 8h 7m 8s
Beginner V3	5 TH	2020-08-24 10:05:31	83d 17h 27m 11s
Beginner V3	5 TH	2020-08-21 20:59:18	81d 4h 20m 58s
Test	1 TH	2020-06-03 02:18:41	
      
      
      Test
1 TH

Daily Profit: 0. BTC ($0.07) 
Total Profit: 0.00050033 BTC ($5.97)

Price: $5 
3 month
apply "free" to voucher code section to activate free this plan. you can active this plan free for once.

 
Profit Calculator
Beginner V3
5 TH

Daily Profit: 0.00003180 BTC ($0.38) 
Total Profit: 0.00286199 BTC ($34.17)

Price: $13 
3 month
      
      
      
      
      "*/
      
      // fix menu when passed
      
      
    });