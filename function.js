let but = document.querySelector("#btn");
let inp = document.querySelector("#AddNum");

let contTable = document.querySelector(".content-table");

function tableTd(cont) {
  let _ = document.createElement("th");
  _.innerText = cont;
  return _;
}

but.onclick = () => {
  let id = inp.value;

  fetch(
    `https://script.google.com/macros/s/AKfycbwLDMEf3dnqOn-r4wwfL99Z1di6QB3G0GNMs9fa7QAKAT6WNltEXjypmQ-y0S006VKN/exec?id=${id}`
  )
    .then((e) => e.json())
    .then((e) => {
      console.log(e);
      document.getElementById("studentNum").innerHTML =
        "Add.NO : " + e.Details.Adno;
      document.getElementById("studentName").innerHTML =
        "Name : " + e.Details.name;
      document.getElementById("studentClass").innerHTML =
        "Class : " + e.Details.class;
      document.getElementById("exam").innerHTML =
        "Name of Exam : " + e.Details.exam;

      let Marks = e.Marks;
    let bTable = `<thead>
      <tr>
        <th id="a">No</th>
        <th id="1">SUBJECT</th>
        <th id="2">PHASE I</th>
        <th id="3">TOTAL</th>
        <th id="4">PHASE II</th>
        <th id="5">TOTAL</th>
        <th id="6">SCORED</th>
        <th id="7">G TOTAL</th>
        <th id="8">WEIGHTAGE</th>
        <th id="9">TOTAL WEIGHTAGE</th>
         
      </tr>
    </thead>`;
      contTable.innerHTML = bTable;
      Marks.forEach((eachSub, i) => {
        let _tr = document.createElement("tr");
        _tr.append(tableTd(i + 1));
        _tr.append(tableTd(eachSub.sub));
        _tr.append(tableTd(eachSub["P1"]));
        _tr.append(tableTd(eachSub["P1T"]));
        _tr.append(tableTd(eachSub["P2"]));
        _tr.append(tableTd(eachSub["P2T"]));
        _tr.append(tableTd(eachSub["SCGT"]));
        _tr.append(tableTd(eachSub["GT"]));
        _tr.append(tableTd(Math.round(eachSub["WT"])));
        _tr.append(tableTd(eachSub["TWT"]));
        contTable.append(_tr);
      });
    });
};
