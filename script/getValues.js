class Inputinfo {
    constructor(name , director , image){
        this.name = name ;
        this.director = director;
        this.image = image;
    }
    alerts(){
        if(this.name == '' || this.director == '' || this.image == ''){
            console.log("sehv");
            let newalert = document.createElement("div");
            newalert.className = "alert alert-danger";
            newalert.textContent = "siz ad director veya link hissesini bos biraxmisiz"
            alert_place.prepend(newalert);
        }
        else{
            const alertdel = document.getElementById('alert');
            while (alertdel.firstElementChild !== null) {
                alertdel.firstElementChild.remove();
            }
        }
    }
    deletealert(){
        const alertdel = document.getElementById('alert');
            while (alertdel.firstElementChild !== null) {
                alertdel.firstElementChild.remove();
            }
    }
}
class Filims {
    constructor(name , director , image){
        this.name = name ;
        this.director = director;
        this.image = image;
    }
    addfilim(){
        if(this.name == '' || this.director == '' || this.image == ''){
            console.log(" filim duz daxil olmadi ");
        }
        else{
            let filim = document.createElement("ul");
            filim.className = "list-group list-group-horizontal";
            filim.innerHTML = `
            <li class="list-group-item"><img src="${this.image}" alt="sekil"></li>
            <li class="list-group-item">${this.name}</li>
            <li class="list-group-item">${this.director}</li>
            `;
            filim_area.prepend(filim);
        }
    }
    filimdelete(){
        const filimdel = document.getElementById('filimler');
        while (filimdel.firstElementChild !== null) {
            filimdel.firstElementChild.remove();
        }
    }
    clearvaluesinput() {
        filim_name.value = "";
        filim_image.value = "";
        director_name.value = "";
    }
}
