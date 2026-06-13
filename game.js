let boxs = document.querySelectorAll(".box");
let btn= document.querySelector("#reset");
let msg= document.querySelector("#msg");
let newbtn = document.querySelector("#new_game");

const ShowWinner = (win)=>{
msg.innerText=`Congratulation ,${win} win the game`
msg.classList.remove("hide");
newbtn.classList.remove("hide")
}











 let turnO=true;

 const winning = [
    [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]
 ]

 boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
                      box.style.color="#b0413e";

            box.innerText="O";
            turnO=false;
            
        }else{
                      box.style.color="#000000";

           box.innerText="X";
           turnO=true;

        }
        box.disabled = true;

        checkwinner();
    });
 });


 const checkwinner = ()=>{
   winning.forEach((pattern)=>{
    let position1 = boxs[pattern[0]].innerText;
    let position2 = boxs[pattern[1]].innerText;
    let position3 = boxs[pattern[2]].innerText;
  if(position1!=="" && position1!=="" && position1!==""){
    if(position1==position2 && position2==position3 ){
        // console.log("winner",position1)
        ShowWinner(position1);
      disable_box();

    }
  }
   });
 }

let reSet = ()=>{
  turnO=true;
  enable_box();
msg.classList.add("hide");
newbtn.classList.add("hide")

}


 let disable_box = ()=>{
  for(box of boxs){
     box.disabled = true;
  }
 }

  let enable_box = ()=>{
  for(box of boxs){
     box.disabled = false;
     box.innerText="";
  }
 }

 btn.addEventListener("click",reSet);
newbtn.addEventListener("click",reSet)