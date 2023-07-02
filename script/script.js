let alert_place = document.getElementsByClassName("alert_place")[0];
let filim_area  = document.getElementsByClassName("filim_area")[0];
let filim_name = document.getElementsByClassName('form-control')[0];
let director_name = document.getElementsByClassName('form-control')[1];
let filim_image = document.getElementsByClassName('form-control')[2];
let addfilim = document.getElementsByClassName('btn-primary')[0];
let deletefilims = document.querySelectorAll('.btn-primary')[1];
addfilim.addEventListener('click' , addfunc);
deletefilims.addEventListener('click' , delfunc);
function addfunc(){
    let examination = new Inputinfo(filim_name.value , director_name.value , filim_image.value);
    
    examination.alerts();
        
    let filim = new Filims(filim_name.value , director_name.value , filim_image.value);

    filim.addfilim();

    filim.clearvaluesinput();
}
function delfunc() {
    let examination = new Inputinfo(filim_name.value , director_name.value , filim_image.value);

    examination.deletealert();

    let filim = new Filims(filim_name.value , director_name.value , filim_image.value);

    filim.filimdelete();
}