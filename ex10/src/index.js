function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Ma",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Mahir Hasic",
      title: "My first album",
      release_year: 2020,
      id: 1,
      formats: {
        1: "CD",
        2: "MP3",
        3: "WAVE",
      },
      gold: false,
    },
  };

  return myMusic;
}

console.log(myFunction()[2]);

module.exports = myFunction;
