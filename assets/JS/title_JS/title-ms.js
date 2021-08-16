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
let titlePixelsColored = ["pixel102", "pixel103", "pixel202", "pixel302", "pixel402", "pixel302", "pixel502", "pixel602", "pixel702", "pixel802",
 "pixel803", "pixel703", "pixel603", "pixel503", "pixel403", "pixel303", "pixel203", "pixel104", "pixel204", "pixel205", "pixel305", "pixel306",
 "pixel307", "pixel406", "pixel208", "pixel207", "pixel209", "pixel109", "pixel108", "pixel110", "pixel210", "pixel309", "pixel409", "pixel509", "pixel609",
 "pixel709", "pixel809", "pixel810", "pixel610", "pixel410", "pixel310", "pixel510", "pixel710", "pixel113", "pixel114", "pixel313", "pixel413", "pixel513", "pixel613", "pixel713", "pixel813", "pixel814", "pixel714", "pixel614", "pixel414", "pixel314",
 "pixel514", "pixel517", "pixel617", "pixel717", "pixel817", "pixel818", "pixel718", "pixel518", "pixel618", "pixel418", "pixel318", "pixel317", "pixel417",
 "pixel217", "pixel118", "pixel117", "pixel219", "pixel218", "pixel319", "pixel220", "pixel120", "pixel121", "pixel122", "pixel123", "pixel223", "pixel224",
 "pixel324", "pixel325", "pixel424", "pixel524", "pixel424", "pixel624", "pixel724", "pixel824", "pixel825", "pixel725", "pixel625", "pixel525",
 "pixel425", "pixel428", "pixel328", "pixel228", "pixel628", "pixel528", "pixel728", "pixel729", "pixel629", "pixel229", "pixel329",
 "pixel429", "pixel529", "pixel829", "pixel830", "pixel831", "pixel832", "pixel833", "pixel129", "pixel130", "pixel131", "pixel132",
 "pixel133", "pixel430", "pixel431", "pixel133", "pixel437", "pixel336", "pixel337", "pixel437", "pixel438", "pixel238", "pixel237", "pixel138", "pixel140", "pixel139", "pixel241", "pixel537", "pixel538", "pixel539",
 "pixel639", "pixel640", "pixel641", "pixel741", "pixel740", "pixel840", "pixel839", "pixel838", "pixel736", "pixel837", "pixel244", "pixel344", "pixel444",
 "pixel544", "pixel545", "pixel445", "pixel345", "pixel245", "pixel145", "pixel445", "pixel546", "pixel646", "pixel645", "pixel746", "pixel846", "pixel847",
 "pixel747", "pixel748", "pixel648", "pixel649", "pixel650", "pixel750", "pixel751", "pixel851", "pixel852", "pixel752", "pixel652", "pixel653", "pixel552",
 "pixel553", "pixel554", "pixel453", "pixel353", "pixel253", "pixel153", "pixel254", "pixel354", "pixel454", "pixel357", "pixel358", "pixel457",
 "pixel557", "pixel657", "pixel757", "pixel758", "pixel658", "pixel558", "pixel458", "pixel257", "pixel258", "pixel159", "pixel160", "pixel158",
 "pixel161", "pixel162", "pixel459", "pixel460", "pixel858", "pixel859", "pixel860", "pixel861", "pixel862", "pixel465", "pixel365",
 "pixel265", "pixel266", "pixel366", "pixel466", "pixel566", "pixel666", "pixel766", "pixel565", "pixel665", "pixel765",
 "pixel867", "pixel866", "pixel869", "pixel870", "pixel868", "pixel467", "pixel468", "pixel167", "pixel166", "pixel168", "pixel170", "pixel169", "pixel273",
 "pixel274", "pixel174", "pixel374", "pixel373", "pixel474", "pixel473", "pixel573", "pixel673", "pixel773", "pixel873", "pixel874", "pixel774",
 "pixel674", "pixel574", "pixel175", "pixel176", "pixel177", "pixel275", "pixel178", "pixel278", "pixel279", "pixel379", "pixel380", "pixel479", "pixel478",
 "pixel578", "pixel577", "pixel576", "pixel575", "pixel574", "pixel475", "pixel383", "pixel283", "pixel284", "pixel384", "pixel484", "pixel584", "pixel684",
 "pixel784", "pixel783", "pixel683", "pixel583", "pixel483", "pixel884", "pixel885", "pixel886", "pixel887", "pixel888", "pixel184",
 "pixel185", "pixel187", "pixel186", "pixel188", "pixel485", "pixel486", "pixel191", "pixel291", "pixel391", "pixel491", "pixel192", "pixel292", "pixel392",
 "pixel492", "pixel592", "pixel591", "pixel691", "pixel791", "pixel892", "pixel891", "pixel792", "pixel692", "pixel193", "pixel194", "pixel195", "pixel295",
 "pixel296", "pixel396", "pixel397", "pixel496", "pixel495", "pixel595", "pixel594", "pixel594", "pixel593", "pixel695", "pixel696", "pixel796", "pixel797",
 "pixel897", "pixel141", "pixel836", "pixel137", "pixel128", "pixel828", "pixel157", "pixel857", "pixel865", "pixel165", "pixel173", "pixel183", "pixel883",
 "pixel144", "pixel154", "pixel549", "pixel124", "pixel225", "pixel236", "pixel898"]
let titlePixels = document.getElementsByClassName("title-pixels");
/*assigns background color to the title divs based on their position to spell out a title, and coloured at random*/
for (pixel of titlePixels) {
    if (titlePixelsColored.includes(pixel.id)) {
        pixel.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    }
}
