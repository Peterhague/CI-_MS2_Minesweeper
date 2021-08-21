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
let titlePixelsColored = ["pixel112","pixel113","pixel114","pixel115","pixel116","pixel117","pixel124","pixel125","pixel126","pixel132","pixel133","pixel138",
"pixel139","pixel140","pixel144","pixel145","pixel146","pixel147","pixel148","pixel153","pixel154","pixel155","pixel156","pixel164","pixel165","pixel168",
"pixel169","pixel171","pixel172","pixel173","pixel174","pixel181","pixel182",
"pixel183","pixel184","pixel185","pixel211","pixel212","pixel217","pixel223","pixel224","pixel226","pixel227","pixel232","pixel233","pixel234","pixel235",
"pixel237","pixel238","pixel239","pixel240","pixel243","pixel244","pixel252","pixel253","pixel256","pixel268","pixel269","pixel270","pixel271","pixel274",
"pixel275","pixel276","pixel280","pixel281","pixel285","pixel285","pixel286","pixel310","pixel311","pixel323","pixel327","pixel332","pixel333",
"pixel335","pixel336","pixel337","pixel339","pixel340","pixel343","pixel344","pixel351","pixel352","pixel364","pixel365","pixel368","pixel369","pixel370",
"pixel375","pixel376","pixel379","pixel380","pixel410","pixel411","pixel422","pixel423","pixel427","pixel428","pixel432","pixel433","pixel436","pixel439",
"pixel440","pixel443","pixel444","pixel445","pixel446","pixel451","pixel452","pixel453","pixel464","pixel465","pixel468","pixel469","pixel475","pixel476",
"pixel479","pixel480","pixel510","pixel511","pixel515","pixel516","pixel517","pixel518","pixel522","pixel523","pixel524","pixel525","pixel526","pixel527",
"pixel528","pixel532","pixel533","pixel539","pixel540","pixel543","pixel544","pixel552","pixel553","pixel554","pixel564","pixel565","pixel568","pixel569",
"pixel575","pixel576","pixel579","pixel580","pixel610","pixel611","pixel616","pixel617","pixel621","pixel622","pixel628","pixel629","pixel632","pixel633",
"pixel639","pixel640","pixel643","pixel644","pixel654","pixel655","pixel656","pixel664","pixel665","pixel668","pixel669","pixel675","pixel676","pixel679",
"pixel680","pixel710","pixel711","pixel711","pixel711","pixel712","pixel716","pixel717","pixel721","pixel722","pixel728","pixel729","pixel732","pixel733",
"pixel739","pixel740","pixel743","pixel744","pixel745","pixel751","pixel755","pixel756","pixel764","pixel765","pixel768","pixel769","pixel775","pixel776",
"pixel780","pixel781","pixel785","pixel786","pixel788","pixel789","pixel811","pixel812","pixel813","pixel814","pixel815","pixel816","pixel817","pixel821",
"pixel822","pixel828","pixel829","pixel832","pixel833","pixel839","pixel840","pixel844","pixel845","pixel846","pixel847","pixel848","pixel851","pixel852",
"pixel853","pixel854","pixel855","pixel864","pixel865","pixel868","pixel869","pixel875","pixel876","pixel881","pixel882","pixel883","pixel884","pixel885",
"pixel888","pixel889","pixel251","pixel134"];
let titlePixels = document.getElementsByClassName("title-pixels");
/*assigns background color to the title divs based on their position to spell out a title, and coloured blue*/
for (pixel of titlePixels) {
    if (titlePixelsColored.includes(pixel.id)) {
        pixel.style.backgroundColor = "blue";
    }
}


