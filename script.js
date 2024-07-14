function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function spin() {
  // Play the sound
  wheel.play();
  // Variable initialization
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";

  // Shuffle 450 because class box1 has been added 90 degrees at the beginning. minus 40 per item so that the arrow position fits in the middle.
  // Each item has a 12.5% ​​win rate except the bicycle item which only has about a 4% chance of winning.
  // Items in the form of iPads and Samsung Tabs will never win.
  // let Sepeda = shuffle([2210]); //Possibility: 33% or 1/3

//VOITTOMAHDOLLISUUDET, millisekunnit alkureuna-päätyreuna


//  let Eivoittoa1 = shuffle([1873, 1874, 1875, 1876, 1877,	1878,	1879,	1880,	1881,	1882,	1883,	1884,	1885,	1886,	1887,	1888,	1889]);
//  let Soolopeli = shuffle([1891]);
//  let Näppäimistö1 = shuffle([1892, 1893,	1894,	1895,	1896,	1897,	1898,	1899,	1900,	1901,	1902,	1903,	1904,	1905,	1906,	1907,	1908,	1909,	1910,	1911,	1912,	1913]);
//  let Eivoittoa2 = shuffle([1915,	1916,	1917,	1918,	1919,	1920,	1921,	1922,	1923,	1924,	1925,	1926,	1927,	1928,	1929,	1930,	1931,	1932,	1933,	1934,	1935,	1936,	1937,	1938,	1939,	1940,	1941,	1942,	1943,	1944]);
//  let transkrypto200 = shuffle([1946,	1947,	1948,	1949,	1950,	1951,	1952,	1953,	1954,	1955,	1956,	1957,	1958,	1959,	1960,	1961,	1962,	1963]);
//  let transkrypto50 = shuffle([1964,	1965,	1966,	1967,	1968,	1969,	1970,	1971,	1972,	1973,	1974,	1975,	1976,	1977,	1978,	1979]);
//  let Eivoittoa3 = shuffle([1981,	1982,	1983,	1984,	1985,	1986,	1987,	1988,	1989,	1990,	1991,	1992,	1993,	1994,	1995,	1996]);
    let Reversed1 = shuffle([1998,	1999,	2000,	2001,	2002,	2003,	2004,	2005,	2006,	2007,	2008,	2009,	2010,	2011,	2012,	2013,	2014]);
    let Eivoittoa4 = shuffle([2016,	2017,	2018,	2019,	2020,	2021,	2022,	2023,	2024,	2025,	2026,	2027,	2028,	2029,	2030,	2031]);


  // Random shape
  let Hasil = shuffle([
   /*
    Eivoittoa1[0],
    Soolopeli[0], 
    Näppäimistö1[0],
    Eivoittoa2[0],
    transkrypto200[0],
    transkrypto50[0],
    Eivoittoa3[0],*/
    Reversed1[0],
    Eivoittoa4[0],
  ]);
  // console.log(Hasil[0]);

  // Retrieve the value of the selected item

  /*
  if (Eivoittoa1.includes(Hasil[0])) SelectedItem = "Ei voittoa";
  if (Soolopeli.includes(Hasil[0])) SelectedItem = "Soolopeli";
  if (Näppäimistö1.includes(Hasil[0])) SelectedItem = "Näppäimistö";
  if (Eivoittoa2.includes(Hasil[0])) SelectedItem = "Ei voittoa";
  if (transkrypto200.includes(Hasil[0])) SelectedItem = "200 transkryptoa";
  if (transkrypto50.includes(Hasil[0])) SelectedItem = "50 transkryptoa";
  if (Eivoittoa3.includes(Hasil[0])) SelectedItem = "Ei voittoa";*/
  if (Reversed1.includes(Hasil[0])) SelectedItem = "Reversed";
  if (Eivoittoa4.includes(Hasil[0])) SelectedItem = "Ei voittoa";


  // Process
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // Raise an Alert
  setTimeout(function () {
    if (Eivoittoa4.includes(Hasil[0])) {
      //EIVOITTOA4
      pikachu.play();
      Swal.fire(
        {
        imageUrl: "pikachu.gif",
        title: SelectedItem + "!",
        color: "white",
        confirmButtonColor: "#ff22e2",
        background: "transparent",
        showConfirmButton: false,
        backdrop: `
        transparent
        `
      })
    }
    if (Reversed1.includes(Hasil[0])) {
      //  REVERSED1
      squirtle.play();
      Swal.fire(
        {
        imageUrl: "squirtle.gif",
        imageHeight: 250,
        title: SelectedItem + "!",
        color: "white",
        confirmButtonColor: "#ff22e2",
        background: "transparent",
        showConfirmButton: false,
        backdrop: `
        transparent
        `
      })
    }

  }, 5500);
/*
  // Delay and set to normal state
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
*/
}
