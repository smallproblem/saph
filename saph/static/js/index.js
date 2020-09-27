import './name';
import './count';
import '../css/sample.css'

const name = document.getElementById('name');
const counter = document.getElementById('counter');
let count = 0;

name.innerText = "hey,";
setInterval(() => counter.innerText = ++count, 1000)

if(module.hot){
    console.log("module hot");
    module.hot.accept();
}