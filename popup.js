function toggleExtension(){
    let color = document.getElementById("slider round").getPropertyValue('background-color')
    if(color === "#c3c3c3"){
        console.log("Disabled")
        return document.getElementById("switchText").textContent="Enable";
    }
    else{
        console.log("Enabled")
        return document.getElementById("switchText").textContent="Disable";
    }
//     chrome.browserAction.disable(
//     tabId?:
//     number,
//     callback?:
//     function,
//   )
}

document.getElementById("slider").addEventListener("click", toggleExtension(document.getElementById("slider round").getPropertyValue('background-color'),document.getElementById("switchText").textContent))

