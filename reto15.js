/**
  * @param {Array<Object>} data
  * @returns {string}
  */

function drawTable(data) {
  let tabla, tableIF = '';
  const columns = Object.keys(data[0]);
  //Saber la longitud mas grande de cada columna 
  const columnSize = columns.map(key =>
    Math.max(...data.map(obj => String(obj[key]).length).concat(key.length))
  );
  //Creando símbolos por el tamaño de la columna
  columnSize.forEach(column => {
    tableIF += '+' + '-'.repeat(column + 2);
  })
  tabla = tableIF + '+' + '\n';

  columns.forEach((key, index) => {
    tabla += '| ' + key.charAt().toUpperCase() + key.substring(1) + ' '.repeat(Math.abs(columnSize[index] - key.length)) + (index == columnSize.length - 1 ? ' |' : ' ')
  }
  );

  tabla += '\n' + tableIF + '+' + '\n';

  data.forEach(obj => {
    const newLine = '|' + Object.values(obj).map((element, index) =>
      ' ' + (String(element).length < columnSize[index] ? element + ' '.repeat(columnSize[index] - String(element).length) : element) + ' '
    ).join('|') + '|'
    tabla += newLine + '\n'
  })
  tabla += tableIF + '+';


  return tabla;

}

console.log(


  drawTable([
    { name: 1, city: 54 },
    { name: 2, city: 4 }
  ])
);