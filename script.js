var imageOriginal = null;
var toimageGrey = null;
var toimageRed = null;
var toimageRainbow = null;
var toimageSepia = null;
var toimageColoredVerticals = null;
var toimageAnyColor = null;
var toimageDarker = null;
var anyColor = null;
var red = null;
var green = null;
var blue = null;
var darkAmount = 1;
var imgcanvas = document.getElementById("can");

function uploadImage() {
  var fileinput = document.getElementById("finput");
  imageOriginal = new SimpleImage(fileinput);

  toimageGrey = new SimpleImage(fileinput);
  toimageRed = new SimpleImage(fileinput);
  toimageRainbow = new SimpleImage(fileinput);
  toimageSepia = new SimpleImage(fileinput);
  toimageColoredVerticals = new SimpleImage(fileinput);
  toimageAnyColor = new SimpleImage(fileinput);
  toimageDarker = new SimpleImage(fileinput);

  imageOriginal.drawTo(imgcanvas);

  var width = imageOriginal.getWidth();
  document.getElementById("WidthOutput").textContent = width;
  var height = imageOriginal.getHeight();
  document.getElementById("HeightOutput").textContent = height;
}

function imageIsLoaded(image) {
  if (image == null || !image.complete()) {
    confirm("Image not loaded!!!");
    return false;
  } else {
    var width = imageOriginal.getWidth();
    document.getElementById("WidthOutput").value = width;
    var height = imageOriginal.getHeight();
    document.getElementById("HeightOutput").value = height;
    return true;
  }
}

function makeGray() {
  if (
    imageOriginal !== null &&
    toimageGrey !== null &&
    imageIsLoaded(toimageGrey)
  ) {
    for (var pixel of toimageGrey.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
    toimageGrey.drawTo(imgcanvas);
  } else {
    alert("Please, download the picture!");
  }
}

function makeRed() {
  if (
    imageOriginal !== null &&
    toimageRed !== null &&
    imageIsLoaded(toimageRed)
  ) {
    for (var pixel of toimageRed.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if (avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(avg * 2 - 255);
        pixel.setBlue(avg * 2 - 255);
      }
    }
    toimageRed.drawTo(imgcanvas);
  } else {
    alert("Please, download the picture!");
  }
}

function makeRainbow() {
  if (
    imageOriginal !== null &&
    toimageRainbow !== null &&
    imageIsLoaded(toimageRainbow)
  ) {
    var height = toimageRainbow.getHeight();
    var height7 = height / 7;

    for (var pixel of toimageRainbow.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

      if (pixel.getY() <= height7) {
        if (avg < 128) {
          pixel.setRed(avg * 2);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
        if (avg >= 128) {
          pixel.setRed(255);
          pixel.setGreen(avg * 2 - 255);
          pixel.setBlue(avg * 2 - 255);
        }
      } else if (pixel.getY() <= height7 * 2) {
        if (avg < 128) {
          pixel.setRed(avg * 2);
          pixel.setGreen(avg * 0.8);
          pixel.setBlue(0);
        }
        if (avg >= 128) {
          pixel.setRed(255);
          pixel.setGreen(1.2 * avg - 51);
          pixel.setBlue(avg * 2 - 255);
        }
      } else if (pixel.getY() <= height7 * 3) {
        if (avg < 128) {
          pixel.setRed(avg * 2);
          pixel.setGreen(avg * 2);
          pixel.setBlue(0);
        }
        if (avg >= 128) {
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(avg * 2 - 255);
        }
      } else if (pixel.getY() <= height7 * 4) {
        if (avg < 128) {
          pixel.setRed(0);
          pixel.setGreen(avg * 2);
          pixel.setBlue(0);
        }
        if (avg >= 128) {
          pixel.setRed(avg * 2 - 255);
          pixel.setGreen(255);
          pixel.setBlue(avg * 2 - 255);
        }
      } else if (pixel.getY() <= height7 * 5) {
        if (avg < 128) {
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(avg * 2);
        }
        if (avg >= 128) {
          pixel.setRed(avg * 2 - 255);
          pixel.setGreen(avg * 2 - 255);
          pixel.setBlue(255);
        }
      } else if (pixel.getY() <= height7 * 6) {
        if (avg < 128) {
          pixel.setRed(avg * 0.8);
          pixel.setGreen(0);
          pixel.setBlue(avg * 2);
        }
        if (avg >= 128) {
          pixel.setRed(1.2 * avg - 51);
          pixel.setGreen(avg * 2 - 255);
          pixel.setBlue(255);
        }
      } else if (pixel.getY() <= height7 * 7) {
        if (avg < 128) {
          pixel.setRed(avg * 1.6);
          pixel.setGreen(0);
          pixel.setBlue(avg * 1.6);
        }
        if (avg >= 128) {
          pixel.setRed(0.4 * avg + 153);
          pixel.setGreen(avg * 2 - 255);
          pixel.setBlue(0.4 * avg + 153);
        }
      }
    }
    toimageRainbow.drawTo(imgcanvas);
  } else {
    alert("Please, download the picture!");
  }
}

function makeSepia() {
  if (
    imageOriginal !== null &&
    toimageSepia !== null &&
    imageIsLoaded(toimageSepia)
  ) {
    for (var pixel of toimageSepia.values()) {
      var tr =
        0.393 * pixel.getRed() +
        0.769 * pixel.getGreen() +
        0.189 * pixel.getBlue();
      var tg =
        0.349 * pixel.getRed() +
        0.686 * pixel.getGreen() +
        0.168 * pixel.getBlue();
      var tb =
        0.272 * pixel.getRed() +
        0.534 * pixel.getGreen() +
        0.131 * pixel.getBlue();

      pixel.setRed(tr > 255 ? 255 : tr);
      pixel.setGreen(tg > 255 ? 255 : tg);
      pixel.setBlue(tb > 255 ? 255 : tb);
    }
    toimageSepia.drawTo(imgcanvas);
  } else {
    alert("Please, download the picture!");
  }
}

function makeColoredVerticals() {
  if (
    imageOriginal !== null &&
    toimageColoredVerticals !== null &&
    imageIsLoaded(toimageColoredVerticals)
  ) {
    var width = toimageColoredVerticals.getWidth();
    var width3 = width / 3;

    for (var pixel of toimageColoredVerticals.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

      if (pixel.getX() <= width3) {
        pixel.setRed(avg * 2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else if (pixel.getX() <= width3 * 2) {
        pixel.setRed(0);
        pixel.setGreen(avg * 2);
        pixel.setBlue(0);
      } else if (pixel.getX() <= width3 * 3) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(avg * 2);
      }
    }
    toimageColoredVerticals.drawTo(imgcanvas);
  } else {
    alert("Please, download the picture!");
  }
}

function makeAnyColor() {
  if (
    imageOriginal !== null &&
    toimageAnyColor !== null &&
    imageIsLoaded(toimageAnyColor)
  ) {
    if (anyColor !== null) {
      console.log("Applying color filter...");
      for (var pixel of toimageAnyColor.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if (avg < 128) {
          pixel.setRed((red / 127.5) * avg);
          pixel.setGreen((green / 127.5) * avg);
          pixel.setBlue((blue / 127.5) * avg);
        } else {
          pixel.setRed((2 - red / 127.5) * avg + 2 * red - 255);
          pixel.setGreen((2 - green / 127.5) * avg + 2 * green - 255);
          pixel.setBlue((2 - blue / 127.5) * avg + 2 * blue - 255);
        }
      }
      toimageAnyColor.drawTo(imgcanvas);
      console.log("Filter applied.");
    } else {
      alert("Choose your color!!!");
    }
  } else {
    alert("Please, download the picture!");
  }
}

function doColor() {
  var colorInput = document.getElementById("clr");
  var color = colorInput.value;
  anyColor = color;
  convertHexToRGB(anyColor);
  console.log("Selected color: ", anyColor);
  console.log("RGB values: ", red, green, blue);
}

function makeDarker() {
  if (
    imageOriginal !== null &&
    toimageDarker !== null &&
    imageIsLoaded(toimageDarker)
  ) {
    for (var pixel of toimageDarker.values()) {
      pixel.setRed(pixel.getRed() * (1 - darkAmount / 100));
      pixel.setGreen(pixel.getGreen() * (1 - darkAmount / 100));
      pixel.setBlue(pixel.getBlue() * (1 - darkAmount / 100));
    }
    toimageDarker.drawTo(imgcanvas);
  } else {
    alert("Please, download the picture!");
  }
}

function reset() {
  if (imageOriginal !== null) {
    imageOriginal.drawTo(imgcanvas);

    toimageGrey = new SimpleImage(imageOriginal);
    toimageRed = new SimpleImage(imageOriginal);
    toimageRainbow = new SimpleImage(imageOriginal);
    toimageSepia = new SimpleImage(imageOriginal);
    toimageColoredVerticals = new SimpleImage(imageOriginal);
    toimageAnyColor = new SimpleImage(imageOriginal);
    toimageDarker = new SimpleImage(imageOriginal);
  } else {
    alert("Please, download the picture!");
  }
}

function amountDark(amount) {
  darkAmount = amount;
  document.getElementById("sizeOutput").textContent = amount;
}

//Converter HEX to RGB

function hex2rgb() {
  var hex = document.getElementById("hex-color").value;
  if (hex !== null) {
    hex = hex.replace("#", "");
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    document.getElementById("rgb-color").value =
      "rgb(" + r + "," + g + "," + b + ")";
    anyColor = hex;
    red = r;
    green = g;
    blue = b;
  }
}

function convertHexToRGB(color) {
  var pattern_color = "^#([A-Fa-f0-9]{6})$";
  if (color.match(pattern_color)) {
    var hex_color = color.replace("#", ""),
      r = parseInt(hex_color.substring(0, 2), 16),
      g = parseInt(hex_color.substring(2, 4), 16),
      b = parseInt(hex_color.substring(4, 6), 16);
    red = r;
    green = g;
    blue = b;
    console.log("Converted Hex to RGB:", red, green, blue);
  } else {
    alert("Error Color Format");
  }
}

function makeColorBox() {
  var colorBox = document.getElementById("color-box");
  var color = document.getElementById("hex-color").value;
  colorBox.style.backgroundColor = color;
}
