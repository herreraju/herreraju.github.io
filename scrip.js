scripNum = 2;
window.onload = res;
window.onresize = res;
function res()
{
    var nvht = parseInt($("#nvbr").height());
    for(var i = 1; i <= scripNum; i++)
        {
        document.getElementById(("sec" + i.toString())).style.height = ((window.innerHeight - nvht) + "px");
        document.getElementById(("sec" + i.toString())).style.top = (nvht.toString() +"px");
        }
}
// Convert a css px value to int.
function ConvertCssPxToInt(cssPxValueText) {
    var validChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    for(var i = 0; i < 9; i++){

    }
}