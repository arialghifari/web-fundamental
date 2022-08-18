function makeTea(isCold) {
  if (isCold) {
    var tea = "Make an Ice Tea!";
  } else {
    var tea = "Make a Hot Tea!";
  }

  return tea;
}

console.log(makeTea(false));

// Or same to
function makeTea(isCold) {
  var tea;

  if (isCold) {
    tea = "Make an Ice Tea!";
  } else {
    tea = "Make a Hot Tea!";
  }

  return tea;
}

console.log(makeTea(false));
