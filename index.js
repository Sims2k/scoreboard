let home = 0;
let guest = 0;

let homeScore = document.getElementById("home-score");
homeScore.innerHTML = home;
let guestScore = document.getElementById("guest-score");
guestScore.innerHTML = guest;

const btns = document.querySelectorAll("button");

btns.forEach(function(btn){
btn.addEventListener("click", function(){
    if(btn.parentElement.className == "home-container"){    
        if(btn.innerHTML == "+1"){
            home++;
            return homeScore.innerHTML = home;
        }
        else if(btn.innerHTML == "+2"){
            home += 2;
            return homeScore.innerHTML = home;
        }
        else if(btn.innerHTML == "+3"){
            home += 3;
            return homeScore.innerHTML = home;
        }
        
    } else if(btn.parentElement.className == "guest-container"){
            if(btn.innerHTML == "+1"){
            guest++;
            return guestScore.innerHTML = guest;
        }
        else if(btn.innerHTML == "+2"){
            guest += 2;
            return guestScore.innerHTML = guest;
        }
        else if(btn.innerHTML == "+3"){
            guest += 3;
            return guestScore.innerHTML = guest;
        } 
     } else {
            home = 0;
            guest = 0;
            homeScore.innerHTML = 0; 
            guestScore.innerHTML = 0; 

    }
})
}
)