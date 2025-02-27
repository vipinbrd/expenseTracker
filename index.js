 let alldata=JSON.parse(localStorage.getItem("data"))||[]
let fform=document.querySelector("form");

document.querySelector("form").addEventListener("submit",(event)=>{
  event.preventDefault()
   let data=new FormData(event.target);
     let amount=data.get("amount") 
     let desc=data.get("desc") 
     let expenseType=data.get("expenseType") 
     console.log(amount)
     console.log(desc)
     console.log(expenseType)

     let obj={
          "id":Date.now(),
        amount,
         desc,
         expenseType
     }
    alldata.push(obj);
    localStorage.setItem("data",JSON.stringify(alldata));
    console.log("data saved to the local staorage")
    window.location.reload()
})
 
      function dom(){

     let ul=document.querySelector("ul");
      Array.from(alldata).forEach((e)=>{
  
      let childEle=document.createElement("li");
     childEle.innerText=`Expense amount= ${e.amount} description of cost:${e.desc} and type :${e.expenseType}`
     let edit=document.createElement("button")
     edit.innerText="edit"
     edit.addEventListener("click",(event)=>{
        myEdit(event,e)
     })
    let delet=document.createElement("button")
    delet.innerText="Delete"
    delet.addEventListener("click",(event)=>{
       mydelete(event,e)
    })
    childEle.append(edit,delet)
    ul.append(childEle)




       
        


    })
      

       







}
dom()


function mydelete(event,ele){
  event.target.parentElement.remove()
    let nedata= Array.from(alldata).filter((e)=>{
        return e.id!=ele.id
    })
    localStorage.setItem("data",JSON.stringify(nedata));
    window.location.reload()
}

function myEdit(event,ele){

    fform.amount.value=ele.amount;
    fform.desc.value=ele.desc
    fform.expenseType.value=ele.expenseType
    let nedata= Array.from(alldata).filter((e)=>{
        return e.id!=ele.id
    })
    localStorage.setItem("data",JSON.stringify(nedata));

}