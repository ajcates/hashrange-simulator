<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <title>Semantic UI Homepage</title>
  
  <!-- Semantic UI -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css">
  <link rel="stylesheet" href="css/page.css">
  <style>
    
  </style>
  <script src="https://zeptojs.com/zepto.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/big.js/3.0.2/big.min.js"></script>
  <script src="main.js"></script>
 
  <script>

    
  </script>
</head>

<body>
  
  <!-- Following Menu -->
  
  <!-- Sidebar Menu -->

  
  
  <!-- Page Contents -->
  <div class="pusher">
    <div class="ui vertical masthead segment">
      
     
      <div class="ui middle text container">
        <div class="ui inverted segment">
          <h4 class="ui label left attached">Simulator</h4>
          <h1 id="day" class="ui">Day 0</h1>
          <h3 id="wallet" class="ui inverted header">₿ 0.0</h3>
          <h3 class="ui" id="walletusd">$ 0</h3>
        </div>
        <div class="ui inverted segment">
          <h4 class="ui label left attached">Balances</h4>
          <h4 class="ui" id="addbtc">+ $0</h4>    
          <h4 class="ui" id="minusbtc">- $0</h4>    
        
          <h3 id="made">= $0 made on day 0</h3>
        </div>
        <div class="ui inverted segment">
           <h4 class="ui label left attached">Totals</h4>
          <h3 id="totalSpent">Total Spent: $0</h3>
          <h3 class="ui" id="plans">Plans: 0</h3>
        </div>
        <div class="ui segment">
          <input type="checkbox" value="checked" id="adjustProfit" />
          <label for="adjustProfit">Adjust Profit Difficulty</label>
          <input type="checkbox" id="adjustBTC" />
          <label for="adjustBTC">Adjust BTC</label>
          <hr />
          <p id="btcprice" class="label">1 btc = 🌜</p>
        </div>
      </div>
      <div class="ui segment invert">
        <button class="large fluid labeled icon centered button" id="play"><i class="play icon"></i>Play</button>
      </div>
    </div>
    <div class="ui segment">
      <h3 class="ui label left attached">Current Plans</h3>
      <div class="ui segment form">
        <div class="ui field">
          <textarea id="myPlans" rows="10"></textarea>
        </div>
        <div class="ui segment">
          <button class="large fluid labeled icon centered button" id="saveMyPlans"><i class="save icon"></i>Save</button>
        </div>
      </div>
      
    </div>
      <div id="plansAvailable" class="ui segments">
        <h3 class="ui label left attached">Plans Available</h3>
        <div id="availableplan_test" class="ui segment">
          <h4>Test</h4>
          <h5>$5</h5>
          <div class="ui labeled input">
            <div class="ui label">Daily Profit</div>
            <input class="profit" type="text" value=".00000556" />
          </div>
          <div class="ui labeled input">
            <div class="ui label">Days</div>
            <input class="days" type="text" value="90" />
          </div>
        </div>
        <div id="availableplan_BegV3" class="ui segment">
          <h4>Beginner V3</h4>
          <h5>$13</h5>
          <div class="ui labeled input">
            <div class="ui label">Daily Profit</div>
            <input class="profit" type="text" value=".00002453" />
          </div>
          <div class="ui labeled input">
            <div class="ui label">Days</div>
            <input class="days" type="text" value="90" />
          </div>
        </div>
        <div id="availableplan_BegV4" class="ui segment">
          <h4>Beginner V4</h4>
          <h5>$27</h5>
          <div class="ui labeled input">
            <div class="ui label">Daily Profit</div>
            <input class="profit" type="text" value=".00004699" />
          </div>
          <div class="ui labeled input">
            <div class="ui label">Days</div>
            <input class="days" type="text" value="180" />
          </div>
        </div>
        <div id="availableplan_BasV3" class="ui segment">
          <h4>Basic V3</h4>
          <h5>$128</h5>
          <div class="ui labeled input">
            <div class="ui label">Daily Profit</div>
            <input class="profit" type="text" value=".00024527" />
          </div>
          <div class="ui labeled input">
            <div class="ui label">Days</div>
            <input class="days" type="text" value="90" />
          </div>
        </div>
        <div id="availableplan_BasV4" class="ui segment">
          <h4>Basic V4</h4>
          <h5>$260</h5>
          <div class="ui labeled input">
            <div class="ui label">Daily Profit</div>
            <input class="profit" type="text" value=".00046989" />
          </div>
          <div class="ui labeled input">
            <div class="ui label">Days</div>
            <input class="days" type="text" value="180" />
          </div>
        </div>
      </div>
    <div class="ui segment">
      
      <div class="ui form">
        <h3 class="label attached left">Import Plans</h3>
        <div class="field">
          <label for="csvdata" class="label attached">Go select all, then copy on <a href="https://hashrange.com/dashboard/user/plans">Hashrange.com > My Offline </a>, then in the text. field below paste then hit import.</label>
          <textarea placeholder="Paste here." rows="4" id="importdata">
          </textarea>
        </div>
        <button class="ui primary button fluid" id="planimport">Import</button>
      </div>
      <hr />
      <div class="ui form inverted">
        <div class="field">
          <label for="csvdata" class="ui label bottom">CSV Data</label>
          <textarea rows="3" id="csvdata"></textarea>
        </div>
      </div>
    </div>
    
   
    <div class="ui vertical stripe quote segment">
      <div class="ui equal width stackable internally celled grid">
        <div class="center aligned row">
          <div class="column">
            <h3>"What a Company"</h3>
            <p>That is what they all say about us</p>
          </div>
          <div class="column">
            <h3>"I shouldn't have gone with their competitor."</h3>
            <p>
              <img src="images/avatar.jpg" class="ui avatar image"> <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="ui vertical stripe segment">
      <div class="ui text container">
        <h3 class="ui header">Breaking The Grid, Grabs Your Attention</h3>
        <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
        <a class="ui large button">Read More</a>
        <h4 class="ui horizontal header divider">
          <a href="#">Case Studies</a>
        </h4>
        <h3 class="ui header">Did We Tell You About Our Bananas?</h3>
        <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
        <a class="ui large button">I am Still Quite Interested</a>
      </div>
    </div>
    
    
    <div class="ui inverted vertical footer segment">
      <div class="ui container">
        <div class="ui stackable inverted divided equal height stackable grid">
          <div class="three wide column">
            <h4 class="ui inverted header">About</h4>
            <div class="ui inverted link list">
              <a href="#" class="item">Sitemap</a>
              <a href="#" class="item">Contact Us</a>
              <a href="#" class="item">Religious Ceremonies</a>
              <a href="#" class="item">Gazebo Plans</a>
            </div>
          </div>
          <div class="three wide column">
            <h4 class="ui inverted header">Services</h4>
            <div class="ui inverted link list">
              <a href="#" class="item">Banana Pre-Order</a>
              <a href="#" class="item">DNA FAQ</a>
              <a href="#" class="item">How To Access</a>
              <a href="#" class="item">Favorite X-Men</a>
            </div>
          </div>
          <div class="seven wife column">
            <h4 class="ui inverted header">Footer Header</h4>
            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</body>
</html>