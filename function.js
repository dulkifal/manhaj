let but = document.querySelector("#btn");
let inp = document.querySelector("#AddNum");
 
but.onclick = ()=>{
    let id = inp.value

    fetch(`https://script.google.com/macros/s/AKfycbzn5plSY1gX2YVxoVeE3Xpkd5f5wKRsXwexeQuFkky2dj-nzrN6LDprT5PDdMdUpwpL/exec?id=${id}`)
    .then((e) =>e.json()).then(e=>{
        
        console.log(e);
        document.getElementById("studentNum").innerHTML = "Add.NO : " + e[0]
        document.getElementById("studentName").innerHTML ="Name : " + e[1]
        document.getElementById("studentClass").innerHTML ="Class : " + e[2]
        document.getElementById("exam").innerHTML ="Name of Exam : " + e[3]
        document.getElementById("hifz1").innerHTML = e[4]
        document.getElementById("hifz2").innerHTML = e[5]
        document.getElementById("hifz3").innerHTML = e[6]
        document.getElementById("hifz4").innerHTML = e[7]
        document.getElementById("hifz5").innerHTML = e[8]
        document.getElementById("hifz6").innerHTML = e[9]
        document.getElementById("hifz7").innerHTML = e[10]
        document.getElementById("hifz8").innerHTML = e[11]

        document.getElementById("tafseer1").innerHTML = e[12]
        document.getElementById("tafseer2").innerHTML = e[13]
        document.getElementById("tafseer3").innerHTML = e[14]
        document.getElementById("tafseer4").innerHTML = e[15]
        document.getElementById("tafseer5").innerHTML = e[16]
        document.getElementById("tafseer6").innerHTML = e[17]
        document.getElementById("tafseer7").innerHTML = e[18]
        document.getElementById("tafseer8").innerHTML = e[19]

        document.getElementById("hadees1").innerHTML = e[20]
        document.getElementById("hadees2").innerHTML = e[21]
        document.getElementById("hadees3").innerHTML = e[22]
        document.getElementById("hadees4").innerHTML = e[23]
        document.getElementById("hadees5").innerHTML = e[24]
        document.getElementById("hadees6").innerHTML = e[25]
        document.getElementById("hadees7").innerHTML = e[26]
        document.getElementById("hadees8").innerHTML = e[27]

        document.getElementById("fiqh1").innerHTML = e[28]
        document.getElementById("fiqh2").innerHTML = e[29]
        document.getElementById("fiqh3").innerHTML = e[30]
        document.getElementById("fiqh4").innerHTML = e[31]
        document.getElementById("fiqh5").innerHTML = e[32]
        document.getElementById("fiqh6").innerHTML = e[33]
        document.getElementById("fiqh7").innerHTML = e[34]
        document.getElementById("fiqh8").innerHTML = e[35]

        document.getElementById("ufiqh1").innerHTML = e[36]
        document.getElementById("ufiqh2").innerHTML = e[37]
        document.getElementById("ufiqh3").innerHTML = e[38]
        document.getElementById("ufiqh4").innerHTML = e[39]
        document.getElementById("ufiqh5").innerHTML = e[40]
        document.getElementById("ufiqh6").innerHTML = e[41]
        document.getElementById("ufiqh7").innerHTML = e[42]
        document.getElementById("ufiqh8").innerHTML = e[43]

        document.getElementById("aqeeda1").innerHTML = e[44]
        document.getElementById("aqeeda2").innerHTML = e[45]
        document.getElementById("aqeeda3").innerHTML = e[46]
        document.getElementById("aqeeda4").innerHTML = e[47]
        document.getElementById("aqeeda5").innerHTML = e[48]
        document.getElementById("aqeeda6").innerHTML = e[49]
        document.getElementById("aqeeda7").innerHTML = e[50]
        document.getElementById("aqeeda8").innerHTML = e[51]

        document.getElementById("balaga1").innerHTML = e[52]
        document.getElementById("balaga2").innerHTML = e[53]
        document.getElementById("balaga3").innerHTML = e[54]
        document.getElementById("balaga4").innerHTML = e[55]
        document.getElementById("balaga5").innerHTML = e[56]
        document.getElementById("balaga6").innerHTML = e[57]
        document.getElementById("balaga7").innerHTML = e[58]
        document.getElementById("balaga8").innerHTML = e[59]

        document.getElementById("adab1").innerHTML = e[60]
        document.getElementById("adab2").innerHTML = e[61]
        document.getElementById("adab3").innerHTML = e[62]
        document.getElementById("adab4").innerHTML = e[63]
        document.getElementById("adab5").innerHTML = e[64]
        document.getElementById("adab6").innerHTML = e[65]
        document.getElementById("adab7").innerHTML = e[66]
        document.getElementById("adab8").innerHTML = e[67]
         
        document.getElementById("urdu1").innerHTML = e[68]
        document.getElementById("urdu2").innerHTML = e[69]
        document.getElementById("urdu3").innerHTML = e[70]
        document.getElementById("urdu4").innerHTML = e[71]
        document.getElementById("urdu5").innerHTML = e[72]
        document.getElementById("urdu6").innerHTML = e[73]
        document.getElementById("urdu7").innerHTML = e[74]
        document.getElementById("urdu8").innerHTML = e[75]

        document.getElementById("english1").innerHTML = e[76]
        document.getElementById("english2").innerHTML = e[77]
        document.getElementById("english3").innerHTML = e[78]
        document.getElementById("english4").innerHTML = e[79]
        document.getElementById("english5").innerHTML = e[80]
        document.getElementById("english6").innerHTML = e[81]
        document.getElementById("english7").innerHTML = e[82]
        document.getElementById("english8").innerHTML = e[83]

        document.getElementById("tc1").innerHTML = e[84]
        document.getElementById("tc2").innerHTML = e[85]
        document.getElementById("tc3").innerHTML = e[86]
        document.getElementById("tc4").innerHTML = e[87]
        document.getElementById("tc5").innerHTML = e[88]
        document.getElementById("tc6").innerHTML = e[89]
        document.getElementById("tc7").innerHTML = e[90]
        document.getElementById("tc8").innerHTML = e[91]

        document.getElementById("history1").innerHTML = e[92]
        document.getElementById("history2").innerHTML = e[93]
        document.getElementById("history3").innerHTML = e[94]
        document.getElementById("history4").innerHTML = e[95]
        document.getElementById("history5").innerHTML = e[96]
        document.getElementById("history6").innerHTML = e[97]
        document.getElementById("history7").innerHTML = e[98]
        document.getElementById("history8").innerHTML = e[99]

        document.getElementById("it1").innerHTML = e[100]
        document.getElementById("it2").innerHTML = e[101]
        document.getElementById("it3").innerHTML = e[102]
        document.getElementById("it4").innerHTML = e[103]
        document.getElementById("it5").innerHTML = e[104]
        document.getElementById("it6").innerHTML = e[105]
        document.getElementById("it7").innerHTML = e[106]
        document.getElementById("it8").innerHTML = e[107]

    
    });
}