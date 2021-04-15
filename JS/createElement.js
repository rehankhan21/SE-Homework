function changeDom(div) {

    //let change = document.createElement("p");
    let changeNode = document.createTextNode(" this is from the js file")
    let button = div;
    
    let changeButton= document.createElement("div");
    changeButton.innerHTML = "<button onclick=`changeDom(button)`>change me back</button>"
    
    div.parentNode.replaceChild(changeButton, div)
    
    //div.append(changeNode)
}

function changeString(div) {

    //let change = document.createElement("p");
    let changeNode = document.createTextNode(" :this is from the js file")
    
    
    //div.parentNode.replaceChild(changeButton, div)
    
    div.append(changeNode)

}