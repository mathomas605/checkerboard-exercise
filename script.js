const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";
document.body.append(container);

for (let i = 0; i < 64; i++) {
  const tile = document.createElement("div");
  tile.style.width = "12.5%";
  tile.style.height = "12.5%";
  tile.style.background = "red";
  container.append(tile);

  if ((i + Math.floor(i / 8)) % 2 === 0) {
    tile.style.background = "red";
  } else {
    tile.style.background = "black";
  }
}

document.body.append(container);
console.log(document);
