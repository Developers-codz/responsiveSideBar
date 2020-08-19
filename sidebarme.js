function openNav() {
    document.getElementById("mySidenav").style.width = "240px";
   
    // document.getElementsByClassName("navbar-nav").display = "inline-block";
    if(screen.width > "450"){
  
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("header").style.marginLeft = "250px";
    
      // document.getElementById("header").style.left = "250px";
      // document.getElementById("header").style.right = "0";
    }
    else{
      document.getElementById("main").style.marginLeft = "0px";
      // document.getElementById("header").style.overflow = "hidden";
     
    } 
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    // document.getElementById("header").style.left = "0px";
  }
  
  $(".dashboard").click(function(){
    $(".submenuDash").slideToggle("slow")
  });
  $(".UIelement").click(function(){
    $(".submenuUI").slideToggle("slow")
  });
  $(".components").click(function(){
    $(".submenuCompo").slideToggle("slow")
  });
  $(".setting").click(function(){
    $(".submenuSetting").slideToggle("slow")
  });
  
  
  
  $(".invertisColor").click(function(){
    $(".sidebar").css("background-color","#111");
    $(".sidebar").css("color","white");
    $("hr").css("border","1px solid white");
  });
  
  //   // $(".invertisColor").click(function(){
  //   //   if($(".sidebar").css("background-color","#111")){
  //   //   $(".sidebar").css("background-color","rgb(196, 189, 189)");
  //   //   $(".sidebar").css("color","black");
  //   //   // $(".sidebar:hover").css("color","black");
  //   //   $("hr").css("border","1px solid black");
  //   // }