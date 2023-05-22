const btns = document.querySelectorAll(".categories");
const img = document.querySelectorAll("img");
const container = document.getElementById("products");

//Obtenir les infos de la base de donnes
const url = "https://v1.nocodeapi.com/bendy/google_sheets/LRdVHAUBbLFqhEDT?tabId=sheet1"
fetch(url)
.then((database)=> database.json())
.then((data)=> data["data"].forEach((el)=>{
    let product = document.createElement("div");
    let img = document.createElement("img");
    let text = document.createElement("p")
    let info = document.createElement("p");
    let prix = document.createElement("p");

    product.style.width = "85%";
    product.style.height = "260px";
    product.style.justifyItems = "center";
    img.src = el["image url"];
    img.style.width = "100%";
    img.style.height = "60%";
    img.style.border = "black solid 1px";
    img.style.borderRadius = "25px 25px 0px 0px";
    img.style.marginLeft = "0";
    img.float = "left";
    text.style.fontFamily = "Poppins";
    text.style.fontSize = "16px";
    text.style.fontWeight = "bold";
    text.innerText = el["name"];
    info.style.fontFamily = "Poppins";
    info.style.fontSize = "16px";
    info.innerText = el["State"];
    prix.style.fontFamily = "Poppins";
    prix.style.fontSize = "16px";
    prix.style.fontWeight = "bolder";
    prix.innerText = el["prix"];
    prix.style.float = "right";
    prix.style.marginRight = "1px";

    container.appendChild(product);
    product.appendChild(img);
    product.appendChild(text);
    product.appendChild(info);
    product.appendChild(prix);
}))
.catch((e)=> console.log(e))

isActive = null;
btns.forEach((el, i)=>{
    el.onclick = () =>{
        if(isActive == null){
            el.style.backgroundColor = "red";
            el.style.color = "#FFF";
            img[i].src = "./Images/white-check.png";
            isActive = i;
            return;
        }
        else{
            btns[isActive].style.backgroundColor = "white";
            btns[isActive].style.color = "#000";
            img[isActive].src = "./Images/red-check.png";
            el.style.backgroundColor = "red";
            el.style.color = "#FFF";
            img[i].src = "./Images/white-check.png";
            isActive = i;
            return;
        }
    }
})
