// items.sort((a, b) => a.value - b.value)

function renderBoston(boston, container) {
  const person = boston.data;
  const len = boston.data.length;
  // let html = '';
  for (let i = 0; i < len; i++) {
    let a = person[i][11];
    let b = person[i+1][11];
  };
  person.sort((a,b) => a - b);
  console.log(person);
  return person;

  // let moreThan100kC = 0;
  // let moreThan100kT = [];
  // let moreThan200kC = 0;
  // let moreThan200kT = [];
  // for (let i = 0; i < len; i++) {
  //   if (person[i][11] > 100000 && person [i][11] <= 200000) {
  //     moreThan100kT.push({name:person[i][8], salary:person[i][11]});
  //     // console.log(person[i][8] + ' ' + person[i][11]);
  //     moreThan100kC++;
  //     html += '<li class="post">' +
  //     '<h3>' + person[i][8] + '</h3>' +
  //     '<h4>' + person[i][11] + '</h4>'
  //   }
  //   else if (person[i][11] > 200000) {
  //     moreThan100kT.push({name:person[i][8], salary:person[i][11]});
  //     moreThan200kT.push({name:person[i][8], salary:person[i][11]});
  //   }
  // }
  // console.log(moreThan100kC);
  // console.log(moreThan200kC);
  // container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags

  // console.log(moreThan100kT);
  // console.log(moreThan200kT);
  // return moreThan100kT, moreThan200kT;
}

renderBoston(boston, document.getElementById('container'));