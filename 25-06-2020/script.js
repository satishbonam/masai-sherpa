var list = [];
var result = document.getElementById("result");

// function Item(name, category, qty) {
//   (this.name = name), (this.category = category), (this.qty = Number(qty));
// }

function getInput() {
  var name = document.getElementById("name");
  var category = document.getElementById("category");
  var qty = document.getElementById("qty");

  checkItem({
    name: name.value,
    category: category.value,
    qty: Number(qty.value),
  });

  name.value = "";
  category.value = "";
  qty.value = "";
}

function checkItem(item) {
  var flag = false;

  list.forEach(function (ele) {
    if (ele.name == item.name) {
      flag = true;
      ele.qty += Number(item.qty);
    }
  });

  if (!flag) {
    list.push(item);
  }
  display(list);
}

function display(list) {
  result.innerHTML = "";
  var table = document.createElement("table");
  var tHead = document.createElement("thead");
  table.setAttribute("border", 1);

  [("Name", "Category", "Qty")].forEach(function (ele) {
    var th = document.createElement("th");
    th.textContent = ele;
    tHead.append(th);
  });

  var tBody = document.createElement("tbody");

  list.forEach(function (item) {
    tBody.append(row(item));
  });
  table.append(tBody);
  result.append(table);
}

function row(item) {
  var tr = document.createElement("tr");

  for (var key in item) {
    var td = document.createElement("td");
    td.textContent = item[key];
    tr.append(td);
  }
  return tr;
}
