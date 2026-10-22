var text = window.document.getElementById("text")
var div = window.document.querySelector("div")

var me = {
    name: "Claudio",
    yearOld: 17,
    greet: function () { }
}

div.addEventListener("click", () => {
    console.log(`I am ${me.name} ${me.yearOld}`)
    alert("ola")
})