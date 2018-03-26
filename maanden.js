const maanden = [
  'januari',
  'februari',
  'maart',
  'april',
  'mei',
  'juni',
  'juli',
  'augustus',
  'september',
  'oktober',
  'november',
  'december'
];

for(let i=0; i<maanden.length; i++) {
  console.log(maanden[i]);
  // let stukjeHtml = '<li>' + maanden[i] + '</li>';
  // document.getElementById('maanden').innerHTML += stukjeHtml;
  let listItem = document.createElement('li');
  listItem.innerHTML = maanden[i];
  document.getElementById('maanden').appendChild(listItem);
}
