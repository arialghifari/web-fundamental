let imageFigureElement = document.querySelector("image-figure");

// Jika tidak tersedia pada DOM maka akan dibuat secara sintaksis
if (!imageFigureElement) {
  imageFigureElement = document.createElement("image-figure");
  document.body.appendChild(imageFigureElement);
}

// Mengubah atau menambahkan nilai attribute caption
setTimeout(() => {
  imageFigureElement.setAttribute("caption", "Gambar 1");
}, 1000);

// Menghapus imageFigureElement dari DOM
setTimeout(() => {
  imageFigureElement.remove();
}, 3000);
