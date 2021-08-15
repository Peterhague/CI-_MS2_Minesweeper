let headingContainer = document.getElementById("heading-container");
/*generates 10 rows of 100 'pixel-esque' divs and adds them to the heading container.
Each div is given a unique id so these can then be styled to give a different 'pixel-art' effect 
for each of the page's titles.*/
for (i = 0; i < 10; i++) {
    let titleRows = document.createElement("div");
    titleRows.classList.add("title-rows");
    titleRows.id = `title-row${i}`;
    for (x = 0; x < 100; x++) {
        let titlePixels = document.createElement("div");
        titlePixels.classList.add("title-pixels");
        titlePixels.style.backgroundColor = "white";
        titlePixels.id = "pixel" + ((i*100)+x);
        titleRows.appendChild(titlePixels);
    }
    headingContainer.appendChild(titleRows);
}
let titlePixelsColored = ["pixel802","pixel702","pixel803","pixel804","pixel805","pixel806","pixel706","pixel707","pixel605",
"pixel607","pixel606","pixel505","pixel504","pixel503","pixel403","pixel404","pixel302","pixel303","pixel202","pixel203","pixel204","pixel103","pixel105","pixel104",
"pixel106","pixel107","pixel207","pixel710","pixel810","pixel610","pixel510","pixel410","pixel310","pixel210","pixel110","pixel111","pixel112",
"pixel113","pixel114","pixel115","pixel215","pixel216","pixel211","pixel212","pixel311","pixel411","pixel412","pixel317","pixel316","pixel416","pixel415",
"pixel511","pixel611","pixel711","pixel811","pixel512","pixel513","pixel514","pixel515","pixel120","pixel220","pixel320","pixel420","pixel520",
"pixel620","pixel720","pixel820","pixel821","pixel823","pixel824","pixel822","pixel825","pixel721","pixel621","pixel521","pixel421","pixel321","pixel221","pixel121",
"pixel122","pixel123","pixel124","pixel125","pixel422","pixel423","pixel128","pixel228","pixel428","pixel328","pixel528","pixel628","pixel828","pixel728","pixel129",
"pixel229","pixel329","pixel429","pixel529","pixel629","pixel729","pixel829","pixel830","pixel831","pixel832","pixel833","pixel136","pixel336","pixel436","pixel836",
"pixel736","pixel636","pixel536","pixel236","pixel237","pixel137","pixel337","pixel437","pixel537","pixel637","pixel737","pixel837","pixel838","pixel839","pixel840",
"pixel841","pixel844","pixel845","pixel744","pixel644","pixel144","pixel145","pixel344","pixel444","pixel544","pixel345","pixel445","pixel545","pixel645",
"pixel745","pixel148","pixel248","pixel348","pixel548","pixel848","pixel748","pixel648","pixel448","pixel348","pixel149","pixel249","pixel349","pixel449","pixel549",
"pixel649","pixel749","pixel849","pixel350","pixel250","pixel251","pixel151","pixel253","pixel254","pixel255","pixel256","pixel152","pixel153","pixel154","pixel155",
"pixel356","pixel456","pixel656","pixel756","pixel856","pixel855","pixel755","pixel655","pixel555","pixel355","pixel455","pixel556","pixel359","pixel459","pixel559",
"pixel659","pixel759","pixel861","pixel860","pixel760","pixel260","pixel161","pixel360","pixel460","pixel560","pixel660","pixel761","pixel862","pixel863","pixel864",
"pixel162","pixel163","pixel164","pixel165","pixel261","pixel865","pixel765","pixel665","pixel564","pixel565","pixel866","pixel766","pixel666","pixel166","pixel570",
"pixel175","pixel177","pixel178","pixel176","pixel575","pixel878","pixel877","pixel876","pixel875","pixel878","pixel877","pixel475","pixel575","pixel877","pixel177",
"pixel178","pixel177","pixel279","pixel184","pixel185","pixel186","pixel187","pixel193","pixel192","pixel194","pixel196","pixel195","pixel680","pixel780","pixel380",
"pixel279","pixel479","pixel179","pixel878","pixel877","pixel876","pixel875","pixel675","pixel775","pixel275","pixel375","pixel475","pixel177","pixel178","pixel380",
"pixel780","pixel564","pixel565","pixel566","pixel266","pixel284","pixel384","pixel485","pixel484","pixel684","pixel584","pixel784","pixel884","pixel885","pixel886",
"pixel887","pixel888","pixel185","pixel184","pixel186","pixel187","pixel188","pixel485","pixel486","pixel192","pixel892","pixel792","pixel692","pixel592",
"pixel492","pixel392","pixel292","pixel194","pixel193","pixel195","pixel195","pixel893","pixel894","pixel895","pixel896","pixel493","pixel494", "pixel571", "pixel280",
"pixel576","pixel577","pixel578","pixel879","pixel567","pixel572","pixel776","pixel676","pixel476","pixel376","pixel276","pixel487","pixel785","pixel685","pixel585",
"pixel385","pixel285","pixel189","pixel889","pixel197","pixel293","pixel393","pixel495","pixel593","pixel693","pixel793","pixel897","pixel579","pixel480","pixel381",
"pixel281","pixel180","pixel880","pixel781","pixel681"]
let pixelsBlack = ["pixel202","pixel302","pixel702","pixel802","pixel105","pixel106","pixel606","pixel706","pixel806","pixel805","pixel605","pixel505","pixel111",
"pixel211","pixel311","pixel411","pixel511","pixel611","pixel711","pixel811","pixel512","pixel412","pixel212","pixel112","pixel515","pixel415","pixel215","pixel115",
"pixel216","pixel316","pixel416","pixel121","pixel221","pixel321","pixel421","pixel521","pixel621","pixel721","pixel821","pixel822","pixel422","pixel122","pixel125",
"pixel825","pixel129","pixel229","pixel329","pixel429","pixel529","pixel629","pixel729","pixel829","pixel830","pixel833","pixel137","pixel237","pixel337","pixel437",
"pixel537","pixel637","pixel737","pixel837","pixel838","pixel841","pixel145","pixel345","pixel445","pixel545","pixel645","pixel745","pixel845","pixel149","pixel249",
"pixel250","pixel350","pixel349","pixel449","pixel549","pixel649","pixel749","pixel849","pixel154","pixel254","pixel260","pixel360","pixel460",
"pixel560","pixel660","pixel760","pixel860","pixel759","pixel659","pixel559","pixel459","pixel359","pixel164","pixel165","pixel565","pixel564","pixel665","pixel765",
"pixel865","pixel864","pixel571","pixel176","pixel276","pixel376","pixel476","pixel576","pixel676","pixel776","pixel876","pixel877","pixel577","pixel177","pixel180",
"pixel280","pixel380","pixel480","pixel381","pixel281","pixel681","pixel681","pixel681","pixel680","pixel780","pixel880","pixel781","pixel185","pixel285","pixel385",
"pixel485","pixel585","pixel685","pixel785","pixel885","pixel886","pixel486","pixel186","pixel189","pixel889","pixel193","pixel194","pixel293","pixel393","pixel494",
"pixel493","pixel593","pixel693","pixel793","pixel893","pixel894","pixel897","pixel197","pixel155","pixel255","pixel355","pixel455","pixel555","pixel655","pixel755",
"pixel855"]
let titlePixels = document.getElementsByClassName("title-pixels");
/*assigns background color to the title divs based on their position to spell out a title, and colours them yellow.*/
for (pixel of titlePixels) {
    if (titlePixelsColored.includes(pixel.id)) {
        pixel.style.backgroundColor = "yellow";
    }
}
/*assigns colour of black to the divs in the pixelsBlack array to create a 'bee' like yellow and black striped effect on the 
title*/
for (pixel of titlePixels) {
    if (pixelsBlack.includes(pixel.id)) {
        pixel.style.backgroundColor = "black";
    }
}

