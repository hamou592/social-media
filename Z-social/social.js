const menuItem = document.querySelectorAll(".menu-item ");

const messagesnotification = document.getElementById("messages-notification")
const msgnotification=document.querySelector("#msg-notification")
const messages=document.querySelector(".messages")
const messagsearch = document.querySelector("#message-serach")
const message=document.querySelectorAll(".message")
//This is used to make the an element selected in the sidebar as the home element (selected and active)
menuItem.forEach(item=>{
    item.addEventListener("click",()=>{
        //this is used to remove the active class for non selected item
        menuItem.forEach(itemtemp=>{
            if(item != itemtemp){
                itemtemp.classList.remove("active");
                if(screen.width < 992){
                    document.querySelector(".right").style.display="none" 
                }
            }
            item.classList.add("active");
            if(item.id == "notifications"){
                //this is used for display the pop-up of notifications
                const temp=document.querySelector(".notifcation-popup");
                temp.style.display="block"
                //this is used for hide the notifications-count
                const temp1=document.querySelector("#notifications .notification-count");
                temp1.style.display="none"
            }
            else{
                //this is used for hide the pop-up of notifications
                const temmp=document.querySelector(".notifcation-popup");
                temmp.style.display="none"
            }
            })
            //this is used for removing messag notification and hightlight the box of message of course if the item is clicked
            if(item.id == "msg-notification"){
                //to show the card of message like the notifications card when we have a small screen
                if(screen.width < 992){
                    messages.style.display = "block"
                    document.querySelector(".right").style.display="block"
                    document.querySelector(".freind-requests").style.display="none"
                    messages.style["boxShadow"] = " 0 0 1rem hsl(252,75%,60%)";
                    messagesnotification.style.display="none"
                    }else{
                        messages.style["boxShadow"] = " 0 0 1rem hsl(252,75%,60%)";
                        messagesnotification.style.display="none";
                        setTimeout(() => {
                            messages.style["boxShadow"] = "none";
                        }, 2000);
                }
            }

        })
    })


const searchMeassage = () =>{
    //moving over all of our contacts to verify the searching  name 
   for(let i = 0;i < message.length;i++){
       //we check if the typing word is exsisting in our contacts
       if(document.querySelectorAll(".message #user")[i].innerHTML.toLowerCase().includes(messagsearch.value.toLowerCase())){
        //showing the found contacts   
        message[i].style.display="flex"
        }
        else{
            //hiding  the not found contacts 
            message[i].style.display="none"
        }
        
    }
}



//this is used for searching for a contact
messagsearch.addEventListener("keyup",searchMeassage);

//Change the theme if we want

const theme = document.querySelector(".Theme");
//showing the dashboard of the themes if we clicked inside the dashboard
theme.addEventListener("click",() => {
    document.querySelector(".customize-theme").style.display = "grid"
})
//hiding the dashboard of the themes if we clicked outside the dashboard
document.querySelector(".customize-theme").addEventListener("click",(e) => {
    if(e.target.classList.contains("customize-theme")){
        document.querySelector(".customize-theme").style.display = "none"
    }    
})
//this is used to change the font size of the page
const fsize = document.querySelectorAll(".choose-size span")
var root=document.querySelector(":root");

//function which remove the active id from the spans when they arn't selected
const removeSizeselector= (name) =>{
    name.forEach(size =>{
        size.removeAttribute("id")
    })
}


fsize.forEach(size => {  
    let fontSize;
    //do the change when we click on a span 
    size.addEventListener("click",() =>{
        //function which remove  the active id from the spans when they arn't selected
        removeSizeselector(fsize)
        //adding the active id from the span when it's selected
        size.setAttribute("id","active");
        //testing which span we have selected and do the change according to its size
        if(size.classList.contains("font-size-1")){
        fontSize="10px"
        //this is changing the position of the elements if we change the fontsize
        root.style.setProperty("----sticky-top-left","5.4rem")
        root.style.setProperty("----sticky-top-right","5.4rem")
    }else if(size.classList.contains("font-size-2")){
            fontSize="13px"
            root.style.setProperty("----sticky-top-left","5.4rem")
            root.style.setProperty("----sticky-top-right","-7rem")
    }else if(size.classList.contains("font-size-3")){
            fontSize="16px"
            root.style.setProperty("----sticky-top-left","-2rem")
            root.style.setProperty("----sticky-top-right","-17rem")
    }else if(size.classList.contains("font-size-4")){
            fontSize="19px"
            root.style.setProperty("----sticky-top-left","-5rem")
            root.style.setProperty("----sticky-top-right","-25rem")
    }else if(size.classList.contains("font-size-5")){
            fontSize="22px"
            root.style.setProperty("----sticky-top-left","-12rem")
            root.style.setProperty("----sticky-top-right","-35rem")
    }
    //assert the size to the whole page
    document.querySelector("html").style.fontSize=fontSize;
})
})

//Change the primary color

const colorPalet=document.querySelectorAll(".chouse-color span");

colorPalet.forEach(color => {
    color.addEventListener("click",() => {
        //function which remove  the active id from the spans when they arn't selected
        removeSizeselector(colorPalet)
        //adding the active id from the span when it's selected
        color.setAttribute("id","active");
        let primart;
        //testing which span we have selected and do the change according to its color
        if(color.classList.contains("color-1")){
            //this is changing the color of the elements if we change the Hue of the color
            primaryHue=252;
        }else if(color.classList.contains("color-2")){
            primaryHue=52;
        }else if(color.classList.contains("color-3")){
            primaryHue=352;
        }else if(color.classList.contains("color-4")){
            primaryHue=152;
        }else if(color.classList.contains("color-5")){
            primaryHue=202;
        }
        //assert the colorto the whole page
        root.style.setProperty("--primary-color-hue",primaryHue)
    })
})

//Change the background color
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
//function for changing the lightness of the color so it hanges the background
const changebg = () => {
    root.style.setProperty("--light-color-lightness",lightColorLightness);
    root.style.setProperty("--white-color-lightness",whiteColorLightness);
    root.style.setProperty("--dark-color-lightness",darkColorLightness);
}

//this is if we select the white background
bg1.addEventListener('click',()=>{
    //We add the active class to show it selected
    bg1.classList.add("active");
    //We  the active class of the other one
    bg2.classList.remove("active");
    bg3.classList.remove("active");
    window.location.reload();
})

bg2.addEventListener('click',()=>{

    lightColorLightness="15%"
    whiteColorLightness="20%"
    darkColorLightness="95%"

    bg2.classList.add("active");
    bg3.classList.remove("active");
    bg1.classList.remove("active");    
    changebg();
})

bg3.addEventListener('click',()=>{

    lightColorLightness="0%"
    whiteColorLightness="10%"
    darkColorLightness="95%"

    bg3.classList.add("active");
    bg2.classList.remove("active");
    bg1.classList.remove("active");    
    changebg();
})

