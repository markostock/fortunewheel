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

  
//KULTAVOITTO

function kultanappula() {
  wheel.play();
  // Variable initialization
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";

  let Striimi24h = shuffle([2070.5]);

  let Hasil = shuffle([

  Striimi24h[0],

  ]);

  if (Striimi24h.includes(Hasil[0])) SelectedItem = "Päätä soolopeli";

      // Process
      box.style.setProperty("transition", "all ease 5s");
      box.style.transform = "rotate(" + Hasil[0] + "deg)";
      element.classList.remove("animate");
      setTimeout(function () {
        element.classList.add("animate");
      }, 5000);

          // Process
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");

  
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // Raise an Alert
  setTimeout(function () {

  if (Striimi24h.includes(Hasil[0])) {
    perusvoitto.play();
    Swal.fire(
      {
      imageUrl: "ohjain.png",
      imageHeight: 350,
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



//HOPEAVOITTO

function hopeanappula() {
  wheel.play();
  // Variable initialization
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";

  let Lahjakortti = shuffle([1890.5]);

  let Hasil = shuffle([

  Lahjakortti[0],

  ]);

  if (Lahjakortti.includes(Hasil[0])) SelectedItem = "Päätä soolopeli";

      // Process
      box.style.setProperty("transition", "all ease 5s");
      box.style.transform = "rotate(" + Hasil[0] + "deg)";
      element.classList.remove("animate");
      setTimeout(function () {
        element.classList.add("animate");
      }, 5000);

          // Process
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");

  
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // Raise an Alert
  setTimeout(function () {

  if (Lahjakortti.includes(Hasil[0])) {
    perusvoitto.play();
    Swal.fire(
      {
      imageUrl: "ohjain.png",
      imageHeight: 350,
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
  
  //Millisekunnit alkureuna-päätyreuna
  
      let Eivoittoa1 = shuffle([1873,	1874,	1875,	1876,	1877,	1878,	1879,	1880,	1881,	1882,	1883,	1884,	1885,	1886,	1887,	1888,	1889]);
      let Näppäimistö1 = shuffle([1892,	1893,	1894,	1895,	1896,	1897,	1898,	1899,	1900,	1901,	1902,	1903,	1904,	1905,	1906,	1907,	1908,	1909]);
      let Eivoittoa2 = shuffle([1911,	1912,	1913,	1914,	1915,	1916,	1917,	1918,	1919,	1920,	1921,	1922,	1923,	1924,	1925,	1926,	1927,	1928]);
      let transkrypto200 = shuffle([1930,	1931,	1932,	1933,	1934,	1935,	1936,	1937,	1938,	1939,	1940,	1941,	1942,	1943,	1944,	1945,	1946,	1947,	1948,	1949]);
      let transkrypto50 = shuffle([1951,	1952,	1953,	1954,	1955,	1956,	1957,	1958,	1959,	1960,	1961,	1962,	1963,	1964,	1965,	1966,	1967,	1968,	1969]);
      let Eivoittoa3 = shuffle([1971,	1972,	1973,	1974,	1975,	1976,	1977,	1978,	1979,	1980,	1981,	1982,	1983,	1984,	1985,	1986,	1987,	1988,	1989]);
      let Reversed1 = shuffle([1991,	1992,	1993,	1994,	1995,	1996,	1997, 1998,	1999,	2000,	2001,	2002,	2003,	2004,	2005,	2006,	2007,	2008,	2009,	2010]);
      let Eivoittoa4 = shuffle([2012,	2013,	2014,	2015,	2016,	2017,	2018,	2019,	2020,	2021,	2022,	2023,	2024,	2025,	2026,	2027,	2028,	2029,	2030]);
      let Transkrypto100 = shuffle([2032,	2033,	2034,	2035,	2036,	2037,	2038,	2039,	2040,	2041,	2042,	2043,	2044,	2045,	2046,	2047,	2048,	2049,	2050,	2051]);
      let Eivoittoa5 = shuffle([2053,	2054,	2055,	2056,	2057,	2058,	2059,	2060,	2061,	2062,	2063,	2064,	2065,	2066,	2067,	2068,	2069]);
      let Englanti5min = shuffle([2072,	2073,	2074,	2075,	2076,	2077,	2078,	2079,	2080,	2081,	2082,	2083,	2084,	2085,	2086,	2087,	2088,	2089]);
      let Eivoittoa6 = shuffle([2091,	2092,	2093,	2094,	2095,	2096,	2097,	2098,	2099,	2100,	2101,	2102,	2103,	2104,	2105,	2106,	2107,	2108]);
      let Siveyskieli5min = shuffle([2110,	2111,	2112,	2113,	2114,	2115,	2116,	2117,	2118,	2119,	2120,	2121,	2122,	2123,	2124,	2125,	2126,	2127,	2128,	2129]);
      let Uusipyöräytys1 = shuffle([2131,	2132,	2133,	2134, 2135,	2136,	2137,	2138,	2139,	2140,	2141,	2142,	2143,	2144,	2145,	2146,	2147,	2148,	2149]);
      let Lowsensitivity = shuffle([2151,	2152,	2153,	2154,	2155,	2156,	2157,	2158,	2159,	2160,	2161,	2162,	2163,	2164,	2165,	2166,	2167,	2168,	2169]);
      let Mummo5min = shuffle([2171,	2172,	2173,	2174,	2175,	2176,	2177,	2178,	2179,	2180,	2181,	2182,	2183,	2184,	2185,	2186,	2187,	2188,	2189,	2190]);
      let Eivoittoa7 = shuffle([2192,	2193,	2194,	2195,	2196,	2197,	2198,	2199,	2200,	2201,	2202,	2203,	2204,	2205,	2206,	2207,	2208,	2209,	2210]);
      let Uusipyöräytys2 = shuffle([2212,	2213,	2214,	2215,	2216,	2217,	2218,	2219,	2220,	2221,	2222,	2223,	2224,	2225,	2226,	2227,	2228,	2229,	2230,	2231]);
  
    // Random shape
    let Hasil = shuffle([
     
  
  //VOITTOMAHDOLLISUUDET 

  //ALKUPERÄISET 18
      
      Eivoittoa1[0],
      Näppäimistö1[0],
      Eivoittoa2[0],
      transkrypto200[0],
      transkrypto50[0],
      Eivoittoa3[0],
      Reversed1[0],
      Eivoittoa4[0],
      Transkrypto100[0],
      Eivoittoa5[0],
      Englanti5min[0],
      Eivoittoa6[0],
      Siveyskieli5min[0],
      Uusipyöräytys1[0],
      Lowsensitivity[0],
      Mummo5min[0],
      Eivoittoa7[0],
      Uusipyöräytys2[0],
      
  ]);
  
    // console.log(Hasil[0]);
  
    // Retrieve the value of the selected item
  
  
    if (Eivoittoa1.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Näppäimistö1.includes(Hasil[0])) SelectedItem = "Näppäimistö";
    if (Eivoittoa2.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (transkrypto200.includes(Hasil[0])) SelectedItem = "200 transkryptoa";
    if (transkrypto50.includes(Hasil[0])) SelectedItem = "50 transkryptoa";
    if (Eivoittoa3.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Reversed1.includes(Hasil[0])) SelectedItem = "Reversed";
    if (Eivoittoa4.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Transkrypto100.includes(Hasil[0])) SelectedItem = "100 transkryptoa";
    if (Eivoittoa5.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Englanti5min.includes(Hasil[0])) SelectedItem = "Englanti 5min";
    if (Eivoittoa6.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Siveyskieli5min.includes(Hasil[0])) SelectedItem = "Nörttikieli 5min";
    if (Uusipyöräytys1.includes(Hasil[0])) SelectedItem = "Uusi pyöräytys";
    if (Lowsensitivity.includes(Hasil[0])) SelectedItem = "Low Sensitivity";
    if (Mummo5min.includes(Hasil[0])) SelectedItem = "Mummo 5min";
    if (Eivoittoa7.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Uusipyöräytys2.includes(Hasil[0])) SelectedItem = "Uusi pyöräytys";
  
    // Process
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + Hasil[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function () {
      element.classList.add("animate");
    }, 5000);
  
    // Raise an Alert
    setTimeout(function () {
  
  //EI VOITTOA 1
      if (Eivoittoa1.includes(Hasil[0])) {
        eivoittoa.play();
        Swal.fire(
          {
          imageUrl: "eivoittoa.png",
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
  //NÄPPÄIMISTÖ 1
        if (Näppäimistö1.includes(Hasil[0])) {
          perusvoitto.play();
          Swal.fire(
            {
            imageUrl: "nappaimisto.png",
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
  //EI VOITTOA 2
      if (Eivoittoa2.includes(Hasil[0])) {
        eivoittoa.play();
        Swal.fire(
          {
          imageUrl: "eivoittoa.png",
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
  //TRANSKRYPTO200
        if (transkrypto200.includes(Hasil[0])) {
          transkryptot.play();
          Swal.fire(
            {
            imageUrl: "transkryptot.png",
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
  //TRANSKRYPTO 50
          if (transkrypto50.includes(Hasil[0])) {
            transkryptot.play();
            Swal.fire(
              {
              imageUrl: "transkryptot.png",
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
  //EI VOITTOA 3
          if (Eivoittoa3.includes(Hasil[0])) {
            eivoittoa.play();
            Swal.fire(
              {
              imageUrl: "eivoittoa.png",
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
  // REVERSED 1
          if (Reversed1.includes(Hasil[0])) {
            perusvoitto.play();
            Swal.fire(
              {
              imageUrl: "reversed_uno.png",
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
  //EI VOITTOA 4
          if (Eivoittoa4.includes(Hasil[0])) {
            eivoittoa.play();
            Swal.fire(
              {
              imageUrl: "eivoittoa.png",
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
  //TRANSKRYPTO 100
          if (Transkrypto100.includes(Hasil[0])) {
            transkryptot.play();
            Swal.fire(
              {
              imageUrl: "transkryptot.png",
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
  //EI VOITTOA 5
          if (Eivoittoa5.includes(Hasil[0])) {
            eivoittoa.play();
            Swal.fire(
              {
              imageUrl: "eivoittoa.png",
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
  //ENGLANTI 5min
          if (Englanti5min.includes(Hasil[0])) {
            perusvoitto.play();
            Swal.fire(
              {
              imageUrl: "englanti.gif",
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
  //EI VOITTOA 6
          if (Eivoittoa6.includes(Hasil[0])) {
            eivoittoa.play();
            Swal.fire(
              {
              imageUrl: "eivoittoa.png",
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
  //Siveyskieli 5min
          if (Siveyskieli5min.includes(Hasil[0])) {
            perusvoitto.play();
            Swal.fire(
              {
              imageUrl: "norttikieli.png",
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
  //Uusi pyöräytys 1
          if (Uusipyöräytys1.includes(Hasil[0])) {
            perusvoitto.play();
            Swal.fire(
              {
              imageUrl: "uusi_pyoraytys.png",
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
  //Low sensitivity
          if (Lowsensitivity.includes(Hasil[0])) {
            perusvoitto.play();
            Swal.fire(
              {
              imageUrl: "lowsens.png",
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
  //MUMMO 5min        
          if (Mummo5min.includes(Hasil[0])) {
            perusvoitto.play();
            Swal.fire(
              {
              imageUrl: "mummo.png",
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
  //EI VOITTOA 7
          if (Eivoittoa7.includes(Hasil[0])) {
            eivoittoa.play();
            Swal.fire(
              {
              imageUrl: "eivoittoa.png",
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
  //UUSI PYÖRÄYTYS 2        
          if (Uusipyöräytys2.includes(Hasil[0])) {
            perusvoitto.play();
            Swal.fire(
              {
              imageUrl: "uusi_pyoraytys.png",
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
      /*
      pikachu.play();
      Swal.fire(
        {
        imageUrl: "pikachu.gif",
        imageHeight: 250,
        title: SelectedItem + "!",
        color: "white",
        confirmButtonColor: "#ff22e2",
        background: "transparent",
        showConfirmButton: false,
        backdrop: `
        transparent
        `
      })*/
  //TIMER
    }, 5500);
  /*
    // Delay and set to normal state
    setTimeout(function () {
      box.style.setProperty("transition", "initial");
      box.style.transform = "rotate(90deg)";
    }, 6000);
  */
  }
