// setting the inital  value for money and backers to be displayed initially

let initialmoney = 89914;
let initialbackers = 5007;

// converting it into a currency format 
let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 7
});
let newBackers = new Intl.NumberFormat('en-US').format(initialbackers)
let backer = $("#backers").text(newBackers);
let newMoney= USDollar.format(initialmoney);
let money = $("#money").text(newMoney);



  $(document).ready(function(){
    $("#one").click(function(){
      $("#DIVone").slideToggle("slow");
    });
    $("#two").click(function(){
      $("#DIVtwo").slideToggle("slow");
    });
  });

  $("#hide").click(function(){
    $(".section").hide();
  });

  $("#show").click(function(){
    $(".section").show();
    $(".pledge").hide();
  });

  $(".pledgebtn").click(function(){
    $(".section").hide()
    $(".successmodal").show();
    });
// button function closes the success modal

$("#closebtn").click(function(){
  $(".successmodal").hide();
});


  // function for increasing the money,backers and progress value after a pledge 
  // is made and displaying the new money format
  
    $(".pledgebtn").click(function() {
     if(this.id === "num25"){
      
      initialbackers++
      initialmoney += 25;
      newBackers = new Intl.NumberFormat('en-US').format(initialbackers);
      newMoney= USDollar.format(initialmoney);
      backer = $("#backers").text(newBackers);
      money = $("#money").text(newMoney);
     } else {
      initialbackers++
      initialmoney += 75;
      newBackers = new Intl.NumberFormat('en-US').format(initialbackers);
      newMoney= USDollar.format(initialmoney);
      backer = $("#backers").text(newBackers);
      money = $("#money").text(newMoney);
     }

     progress();
    });

// this function increases the progress bar according to the initial value
    function progress() {
      if(initialmoney >= 90000){
        document.getElementById("progressbar").value = "90";
      }else{
        initialmoney === 100000
        document.getElementById("progressbar").value = "100";
      }
    
    } 
