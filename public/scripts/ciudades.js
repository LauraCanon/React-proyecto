//Codigo a Ejecutar al Cargar la Pagina
function ciudades() {
    cargar_provincias();
  }
   
  // funcion para Cargar Provincias al campo <select>
  function cargar_provincias() {
    var array = [
      "BOGOTÁ",
      "MEDELLÍN",
      "CALÍ",
      "BARRANQUILLA",
      "CARTAGENA",
      "CÚCUTA",
      "SOLEDAD",
      "IBAGUÉ",
      "BUCARAMANGA",
      "SANTA MARTA",
      "VILLAVICENCIO",
      "SOACHA",
      "PEREIRA",
      "BELLO",
      "VALLEDUPAR",
      "MONTERÍA",
      "PASTO",
      "MANIZALES",
      "BUENAVENTURA",
      "NEIVA",
      "BARRANCABERMEJA",
      "PALMIRA",
      "ARMENIA",
      "POPAYÁN",
      "SINCELEJO",
      "ITAGUI",
      "FLORIDABLANCA",
      "RIOHACHA",
      "ENVIGADO",
      "TULUÁ",
      "DOSQUEBRADAS",
      "SAN ANDRÉS DE TUMACO",
      "TUNJA",
      "GIRÓN",
      "APARTADÓ",
      "FLORENCIA",
      "URIBIA",
      "IPIALES",
      "TURBO",
      "MAICAO",
      "PIEDECUESTA",
      "YOPAL",
      "OCAÑA",
      "FUSAGASUGÁ",
      "CARTAGO",
      "FACATATIVÁ",
      "CHÍA",
      "MAGANGUÉ",
      "PITALITO",
      "CAUCASIA",
      "ZIPAQUIRÁ",
      "MALAMBO",
      "RIONEGRO",
      "LORICA",
      "JAMUNDI",
      "QUIBDÓ",
      "GUADALAJARA DE BUGA",
      "YUMBO",
      "SOGAMOSO",
      "DUITAMA",
      "GIRARDOT",
      "CIÉNAGA",
    ];
   
    // Ordena el Array Alfabeticamente, es muy facil ;)):
    array.sort();
   
    addOptions("ciudades", array);
  }
   
  // Rutina para agregar opciones a un <select>
  function addOptions(domElement, array) {
    var select = document.getElementsByName(domElement)[0];
   
    for (value in array) {
      var option = document.createElement("option");
      option.text = array[value];
      select.add(option);
    }
  }