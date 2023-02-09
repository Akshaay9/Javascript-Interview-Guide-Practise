const stringiFy = (val) => {
    return val.toString(16);
  };
  
  const rgbToHex = (r, g, b) => {
    return "#" + stringiFy(r) + stringiFy(g) + stringiFy(b);
  };
  
  console.log(rgbToHex(255, 51, 255));
  