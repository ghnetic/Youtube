//let cardContainer;

var videos = [{
    "title": "Expectations",
    "text": "Lauren Jauregui\n19.7 M vistas| Hace 3 meses",
    "src": "video/y2mate.com - lauren_jauregui_expectations_official_video_RHXdA-ZkEsw_720p.mp4 ",
    "icon": "fas fa-music"
    
}, {
    "title": "Lo Siento",
    "text": "Beret ft.Sofia Reyes\n1.5 k vistas| Hace 2 semanas",
    "src": "video/y2mate.com - beret_lo_siento_feat_sofia_reyes_videoclip_oficial_li_smPIZOZs_720p.mp4 ",
    "icon": "fas fa-check-circle"
}, {
    "title": "Que tienes tu",
    "text": "Dvicio\n108.9 M vistas| Hace 5 años",
    "src": "video/y2mate.com - dvicio_que_tienes_tu_ft_jesus_reik_mau_y_ricky_video_oficial_jlyzTiMSLPc_720p.mp4 ",
    "icon": "fas fa-check-circle"
}, {
    "title": "Work From Home",
    "text": "Fifth Harmony\n99.9 M Vistas| Hace 1 año ",
    "src": "video/y2mate.com - fifth_harmony_work_from_home_ft_ty_dolla_ign_5GL9JoH4Sws_720p.mp4",
    "icon": "fas fa-music"
}];

document.addEventListener(
    "DOMContentLoaded", ListaVideos);

function crearVideos(videos,cardContainer) {

    let card = document.createElement("div");
    card.className = "card m-1";
    card.setAttribute("style","width:15rem");


    let video = document.createElement("video");
    video.className = "mx-auto";
    video.width = "230";
    video.height = "140";
    video.setAttribute("controls",true);

    let source = document.createElement("source");
    source.type = "video/mp4";
    source.src = videos.src;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    cardBody.setAttribute("style","padding-rigth:5px; padding-left:5px");

    let title = document.createElement("h5");
    title.innerText = videos.title;
    title.className = "card-title";

    let text = document.createElement("p");
    text.innerText = videos.text;
    text.className = "card-text";
    if(videos.icon){
        let icon = document.createElement("i");
        icon.className=videos.icon;
        text.appendChild(icon);
    }

    cardBody.appendChild(video);
    cardBody.appendChild(title);
    cardBody.appendChild(text);

    video.appendChild(source);

    card.appendChild(cardBody);
    cardContainer.appendChild(card);

}

function ListaVideos() {
    let listaContenedores = [{id:"#card-container",listaRepro:videos},{id:"#recomendado",listaRepro:videos}];
    for (const contenedor of listaContenedores) {
        
        cardContainer = document.querySelector(contenedor.id);
    contenedor.listaRepro.forEach((video) => {
        crearVideos(video,cardContainer);
    });
    }
    
};

