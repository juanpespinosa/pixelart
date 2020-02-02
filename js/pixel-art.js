var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById('paleta');
var grilla = document.getElementById('grilla-pixeles');
var estadoMouse = false;
var indicador = document.getElementById('indicador-de-color');

//Generar la paleta de colores

function generarPaleta() {
  for (i = 0; i < nombreColores.length; i++) {
    let color = document.createElement("div");
    color.className += "color-paleta";
    color.style.backgroundColor = nombreColores[i];
    paleta.appendChild(color);
  }
}

// Generar la grilla en la pantalla

function generarGrilla() {
  for (i = 0; i < 1750; i++) {
    let cuadraditos = document.createElement("div");
    grilla.appendChild(cuadraditos);
  }
}

// Seleccionar color en la paleta

paleta.addEventListener('click', seleccionarColor);
grilla.addEventListener('click', pintarGrilla);
grilla.addEventListener('mousedown', mouseApretado);
grilla.addEventListener('mouseup', soltarMouse);
grilla.addEventListener('mouseover', seMueveMouse);


function seleccionarColor(e) {
  indicador.style.backgroundColor = e.target.style.backgroundColor;
}

function pintarGrilla(e) {
  e.target.style.backgroundColor = indicador.style.backgroundColor;
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicador.style.backgroundColor = colorActual;
  })
);

//Pintar en movimiento

function mouseApretado() {
  estadoMouse = true;
}

function soltarMouse() {
  estadoMouse = false;
}

function seMueveMouse(e) {
  if (estadoMouse == true) {
    e.target.style.backgroundColor = indicador.style.backgroundColor;
  }
}

//Borrar todo

$("#borrar").click(function() {
  $("#grilla-pixeles div").each(function() {
    $(this).animate({
      "background-color": "#FFFFFF"
    }, 1200);
  });
});

//SUPERHEROES

$("#batman").click(function() {
  cargarSuperheroe(batman);
});

$("#wonder").click(function() {
  cargarSuperheroe(wonder);
});

$("#flash").click(function() {
  cargarSuperheroe(flash);
});

$("#invisible").click(function() {
  cargarSuperheroe(invisible);
});

//DESCARGA

$("#guardar").click(function() {
  guardarPixelArt();
});

//CARGAR PAGINA

window.onload = function() {
  generarPaleta();
  generarGrilla();
};
