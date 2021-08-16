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
        titlePixels.classList.add("title-pixels-flags");
        titlePixels.style.backgroundColor = "white";
        titlePixels.id = "pixel" + ((i*100)+x);
        titleRows.appendChild(titlePixels);
    }
    headingContainer.appendChild(titleRows);
}
let titlePixelsColored = ["pixel500","pixel600","pixel700","pixel701","pixel601","pixel501","pixel702","pixel801","pixel802","pixel803",
"pixel804","pixel805","pixel806","pixel706","pixel807","pixel707","pixel606","pixel506","pixel507","pixel607","pixel505","pixel401","pixel301",
"pixel300","pixel400","pixel201","pixel202","pixel102","pixel103","pixel104","pixel105","pixel106","pixel107","pixel207","pixel110","pixel111",
"pixel210","pixel310","pixel410","pixel510","pixel610","pixel511","pixel411","pixel311","pixel211","pixel611","pixel711","pixel712","pixel812",
"pixel813","pixel814","pixel815","pixel816","pixel716","pixel717","pixel617","pixel618","pixel517","pixel417","pixel317","pixel217","pixel117",
"pixel118","pixel218","pixel318","pixel418","pixel518","pixel221","pixel321","pixel421","pixel521","pixel621","pixel721","pixel722","pixel822",
"pixel723","pixel823","pixel824","pixel825","pixel826","pixel622","pixel522","pixel422","pixel322","pixel222","pixel122","pixel123","pixel124",
"pixel125","pixel126","pixel423","pixel424","pixel729","pixel830","pixel831","pixel832","pixel833","pixel733","pixel734","pixel634","pixel633",
"pixel632","pixel532","pixel531","pixel530","pixel431","pixel430","pixel429","pixel329","pixel330","pixel230","pixel231","pixel131","pixel132",
"pixel133","pixel234","pixel737","pixel838","pixel839","pixel840","pixel841","pixel741","pixel742","pixel642","pixel641","pixel640","pixel540",
"pixel539","pixel538","pixel439","pixel438","pixel437","pixel337","pixel338","pixel238","pixel239","pixel139","pixel140","pixel141","pixel242",
"pixel245","pixel246","pixel247","pixel248","pixel249","pixel250","pixel347","pixel447","pixel547","pixel647","pixel648","pixel548","pixel448",
"pixel348","pixel252","pixel352","pixel452","pixel552","pixel652","pixel653","pixel553","pixel453","pixel353","pixel253","pixel454","pixel455",
"pixel456","pixel356","pixel256","pixel556","pixel656","pixel657","pixel557","pixel457","pixel357","pixel257","pixel359","pixel360","pixel459",
"pixel559","pixel560","pixel460","pixel260","pixel261","pixel262","pixel263","pixel660","pixel661","pixel662","pixel663","pixel461","pixel462",
"pixel267","pixel167","pixel168","pixel367","pixel467","pixel567","pixel667","pixel767","pixel867","pixel868","pixel768","pixel668","pixel568",
"pixel468","pixel268","pixel368","pixel169","pixel170","pixel171","pixel172","pixel469","pixel470","pixel471","pixel175","pixel275","pixel375",
"pixel475","pixel675","pixel575","pixel775","pixel875","pixel876","pixel776","pixel676","pixel576","pixel476","pixel376","pixel276","pixel176",
"pixel877","pixel878","pixel879","pixel880","pixel883","pixel783","pixel683","pixel684","pixel784","pixel884","pixel584","pixel583","pixel585",
"pixel586","pixel587","pixel588","pixel589","pixel688","pixel788","pixel888","pixel889","pixel789","pixel689","pixel483","pixel484","pixel488",
"pixel489","pixel384","pixel284","pixel285","pixel388","pixel288","pixel287","pixel185","pixel186","pixel187","pixel492","pixel392","pixel592",
"pixel692","pixel792","pixel793","pixel693","pixel593","pixel493","pixel393","pixel794","pixel893","pixel894","pixel895","pixel896","pixel897",
"pixel898","pixel798","pixel698","pixel699","pixel799","pixel899","pixel597","pixel598","pixel599","pixel293","pixel294","pixel194","pixel195",
"pixel196","pixel197","pixel198","pixel199","pixel299", "pixel142","pixel837","pixel829","pixel134"]
let titlePixels = document.getElementsByClassName("title-pixels-flags");
/*assigns background color to the title divs based on their position to spell out a title. The divs in the titlePixelsColored
array are the ones spelling out the words. Additionally, certain divs are coloured differently in order to create the effect
of mini tricolour flags occupying parts of the title*/
for (pixel of titlePixels) {
    if (titlePixelsColored.includes(pixel.id)) {
        pixel.style.backgroundColor = "black";
    }
    if (pixel.id == "pixel505" || pixel.id == "pixel170" || pixel.id == "pixel187" || pixel.id == "pixel195" 
    || pixel.id == "pixel878" || pixel.id == "pixel897" || pixel.id == "pixel813" || pixel.id == "pixel429" 
    || pixel.id == "pixel431" || pixel.id == "pixel840") {
        pixel.style.backgroundColor = "green";
    }
    if (pixel.id == "pixel506" || pixel.id == "pixel171" || pixel.id == "pixel896" || pixel.id == "pixel586" 
    || pixel.id == "pixel879" || pixel.id == "pixel839" || pixel.id == "pixel104" || pixel.id == "pixel814" 
    || pixel.id == "pixel125" || pixel.id == "pixel430" || pixel.id == "pixel140") {
        pixel.style.backgroundColor = "white";
    }
    if (pixel.id == "pixel507" || pixel.id == "pixel585" || pixel.id == "pixel599" || pixel.id == "pixel587" 
    || pixel.id == "pixel185" || pixel.id == "pixel197" || pixel.id == "pixel471" || pixel.id == "pixel105" 
    || pixel.id == "pixel172" || pixel.id == "pixel141" || pixel.id == "pixel124" || pixel.id == "pixel126" 
    || pixel.id == "pixel805" || pixel.id == "pixel826" || pixel.id == "pixel634") {
        pixel.style.backgroundColor = "red";
    }
    if (pixel.id == "pixel103" || pixel.id == "pixel803" || pixel.id == "pixel632" || pixel.id == "pixel139") {
        pixel.style.backgroundColor = "blue";
    }
    if (pixel.id == "pixel815" || pixel.id == "pixel838" || pixel.id == "pixel880" || pixel.id == "pixel895") {
        pixel.style.backgroundColor = "orange";
    }
    if (pixel.id == "pixel804" || pixel.id == "pixel825" || pixel.id == "pixel633" || pixel.id == "pixel470" 
    || pixel.id == "pixel186" || pixel.id == "pixel598" || pixel.id == "pixel196") {
        pixel.style.backgroundColor = "yellow";
    }
}
