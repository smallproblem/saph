const name = document.getElementById('name');
name.innerText = 'hellso ddtoday';

if(module.hot){
    console.log("modudle hot");
    module.hot.accept();
}