let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut :
// b
// be
// bee
// beev
// beeve
// beever

let result = "";
for (let i = 0; i < words.length; i++) {
  result += words[i];
  console.log(result);
}
