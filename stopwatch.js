sec=0;
let mini=0;
hrs=0;

let id=null;
// function display()
// {
// }
function start()
{

clearInterval(id);
id=setInterval(run,1)
}
function run(){
    sec++;
    document.getElementById("ids").innerHTML=sec;
    if(sec==59) { 
        sec=0;Minfun();
    }
function Minfun(){
    mini++;
    document.getElementById("idm").innerHTML=mini;
    if(mini==59){
        hourtime();
        mini=0;
}
}
function hourtime(){
    hrs++;
    document.getElementById("idh").innerHTML=hrs;
}
}

function stop(){
    clearInterval(id);
    sec=0;
    mini=0;
    hrs=0;
}
