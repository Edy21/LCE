$(document).ready(function() {
  var Top = [];
  var Left = [];
  setTimeout(function(){
    for(var i =1;i<181;i++){
    var pos = $(".square:nth-of-type(" + i + ")").offset();
    Top.push(pos.top - $('.container').offset().top - 103);
    Left.push(pos.left - $('.container').offset().left - 2);

  }
}, 10)
    var clicked_square = 0;
    var clicked_overlay = 0;
    var left,top;
    $(document).on ("click", ".square", function () {
      if(clicked_square==0){
        clicked_square=1;
      var $this = $(this);
      for(var i =1;i<181;i++){
      $(".square:nth-of-type(" + i + ")")[0].style.position="absolute";
      $(".square:nth-of-type(" + i + ")")[0].style.top=Top[i-1] + "px";
     $(".square:nth-of-type(" + i + ")")[0].style.left=Left[i-1] + "px";
     console.log(Top[i-1]);
     console.log(Left[i-1]);
    }
    var x = $(this).position();
    top = x.top;
    left = x.left;
    setTimeout(function(){
          $($this).attr('id', 'clicked');
          $("#overlay").addClass("overlay");
          $("#clicked")[0].style.width="450px";
          $("#clicked")[0].style.height="80vh";
          $("#clicked")[0].style.cursor="auto";
          $("#clicked")[0].style.zIndex="5";
          $("#clicked")[0].style.top="0px";
          $("#clicked")[0].style.left="calc(50% - 200px)";
          $("#clicked .atomicNumber")[0].style.fontSize="1.4vw";
          $("#clicked .symbol")[0].style.fontSize="3vw";
          $("#clicked .name")[0].style.fontSize="1.6vw";
          $("#clicked .atomicMass")[0].style.fontSize="1.4vw";

    }, 10)

      }
      });
    $(document).on ("click", ".overlay", function () {
      if(clicked_overlay==0){
        clicked_overlay=1;
      $("#clicked")[0].style.top= top + "px";
      $("#clicked")[0].style.left= left + "px";
      $("#clicked .atomicNumber")[0].style.fontSize="0.7vw";
      $("#clicked .symbol")[0].style.fontSize="1.5vw";
      $("#clicked .name")[0].style.fontSize="0.83vw";
      $("#clicked .atomicMass")[0].style.fontSize="0.7vw";
      document.getElementById("clicked").style.width="5vw";
      document.getElementById("clicked").style.height="5vw";
      document.getElementById("clicked").style.zIndex="1";
      $("#overlay").removeClass("overlay");
      setTimeout(function(){
        for(var i =1;i<181;i++){
        $(".square:nth-of-type(" + i + ")")[0].style.position="relative";
        $(".square:nth-of-type(" + i + ")")[0].style.top="0px";
       $(".square:nth-of-type(" + i + ")")[0].style.left="0px";
      }
        $("#clicked")[0].style.cursor="pointer";
        $("#clicked").removeAttr("id");
        clicked_square=0;
        clicked_overlay=0;
     },1000);

    }
  });

  var clasa;

  $(".solid_selector").hover(function(){
    $(".solid").css("color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
  });


  $(document).on ("click", ".type", function () {
    var elemente = ($(this).html()).split(" ");

    $("." + clasa).css("transform","scale(1)");
    $("." + clasa).css("box-shadow","0 0 0");

    console.log(clasa);
    if(elemente.length == 1){
      clasa = elemente[0];
    }
    else if(elemente.length == 2){
      clasa = elemente[0] + "_" + elemente[1];
    }
    else if(elemente.length == 3){
      clasa = elemente[0] + "_" + elemente[1] + "_" + elemente[2];

    }

    $("." + clasa).css("transition","0.2s");
    $("." + clasa).css("transform","scale(1.035)");
    $("." + clasa).css("box-shadow","0 0 1rem #888686");
    $("." + clasa).css("z-index","1");

    setTimeout(function(){
      $("." + clasa).css("transition","0s");
    },210);

    });

    $(document).on ("click", ".type", function () {
      var text = $(this).text();
      $(".btn").html(text);

    });
    $(document).on('mouseenter','.solid_selector', function () {
      $(".solid").css("transition","0.2s");
      $(".solid").css("transform","scale(1.035)");
      $(".solid").css("box-shadow","0 0 1rem #ffffff");
      $(".solid").css("z-index","1");
    }).on('mouseleave','.solid_selector',  function(){
      $(".solid").css("transition","0s");
      $(".solid").css("transform","scale(1)");
      $(".solid").css("box-shadow","0 0 0");
    });
    $(document).on('mouseenter','.liquid_selector', function () {
      $(".liquid").css("transition","0.2s");
      $(".liquid").css("transform","scale(1.035)");
      $(".liquid").css("box-shadow","0 0 1rem #ffffff");
      $(".liquid").css("z-index","1");
    }).on('mouseleave','.liquid_selector',  function(){
      $(".liquid").css("transition","0s");
      $(".liquid").css("transform","scale(1)");
      $(".liquid").css("box-shadow","0 0 0");
    });
    $(document).on('mouseenter','.gas_selector', function () {
      $(".gas").css("transition","0.2s");
      $(".gas").css("transform","scale(1.035)");
      $(".gas").css("box-shadow","0 0 1rem #ffffff");
      $(".gas").css("z-index","1");
    }).on('mouseleave','.gas_selector',  function(){
      $(".gas").css("transition","0s");
      $(".gas").css("transform","scale(1)");
      $(".gas").css("box-shadow","0 0 0");
    });
    $(document).on('mouseenter','.unknown_selector', function () {
      $(".unknown").css("transition","0.2s");
      $(".unknown").css("transform","scale(1.035)");
      $(".unknown").css("box-shadow","0 0 1rem #ffffff");
      $(".unknown").css("z-index","1");
    }).on('mouseleave','.unknown_selector',  function(){
      $(".unknown").css("transition","0s");
      $(".unknown").css("transform","scale(1)");
      $(".unknown").css("box-shadow","0 0 0");
    });

  new Vue({
    el: '.container',
    data () {
      return {
        squares: [
          {atomicNumber: "1", symbol: "H", name: "Hydrogen", atomicMass: "1.00794(4)", groupBlock: "Non_Metale", state:"gas", yearDiscovered: "1766"},
          {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
          {atomicNumber: "2", symbol: "He", name: "Helium", atomicMass: "4.002602(2)", groupBlock: "Gaze_Nobile", state:"gas", yearDiscovered: "1868"},
          {atomicNumber: "3", symbol: "Li", name: "Lithium", atomicMass: "6.941(2)", groupBlock: "Metale_Alcaline", state:"solid", yearDiscovered: "1817"},
          {atomicNumber: "4", symbol: "Be", name: "Beryllium", atomicMass: "9.012182(3)", groupBlock: "Metale_Alcalino-Pamantoase",state:"solid", yearDiscovered: "1798"},
          {},{},{},{},{},{},{},{},{},{},
          {atomicNumber: "5", symbol: "B", name: "Boron", atomicMass: "10.811(7)", groupBlock: "Metaloizi",state:"solid", yearDiscovered: "1807"},
          {atomicNumber: "6", symbol: "C", name: "Carbon", atomicMass: "12.0107(8)", groupBlock: "Non_Metale",state:"solid", yearDiscovered: ""},
          {atomicNumber: "7", symbol: "N", name: "Nitrogen", atomicMass: "14.0067(2)", groupBlock: "Non_Metale",state:"gas", yearDiscovered: "1772"},
          {atomicNumber: "8", symbol: "O", name: "Oxygen", atomicMass: "15.9994(3)", groupBlock: "Non_Metale",state:"gas", yearDiscovered: "1774"},
          {atomicNumber: "9", symbol: "F", name: "Fluorine", atomicMass: "18.9984032(5)", groupBlock: "Halogeni",state:"gas", yearDiscovered: "1670"},
          {atomicNumber: "10", symbol: "Ne", name: "Neon", atomicMass: "20.1797(6)", groupBlock: "Gaze_Nobile",state:"gas", yearDiscovered: "1898"},
          {atomicNumber: "11", symbol: "Na", name: "Sodium", atomicMass: "22.98976928(2)", groupBlock: "Metale_Alcaline",state:"solid", yearDiscovered: "1807"},
          {atomicNumber: "12", symbol: "Mg", name: "Magnesium", atomicMass: "24.3050(6)", groupBlock: "Metale_Alcalino-Pamantoase",state:"solid", yearDiscovered: "1808"},
          {},{},{},{},{},{},{},{},{},{},
          {atomicNumber: "13", symbol: "Al", name: "Aluminum", atomicMass: "26.9815386(8)", groupBlock: "Metale",state:"solid", yearDiscovered: ""},
          {atomicNumber: "14", symbol: "Si", name: "Silicon", atomicMass: "28.0855(3)", groupBlock: "Metaloizi",state:"solid", yearDiscovered: "1854"},
          {atomicNumber: "15", symbol: "P", name: "Phosphorus", atomicMass: "30.973762(2)", groupBlock: "Non_Metale",state:"solid", yearDiscovered: "1669"},
          {atomicNumber: "16", symbol: "S", name: "Sulfur", atomicMass: "32.065(5)", groupBlock: "Non_Metale",state:"solid", yearDiscovered: ""},
          {atomicNumber: "17", symbol: "Cl", name: "Chlorine", atomicMass: "35.453(2)", groupBlock: "Halogeni",state:"gas",yearDiscovered: "1774"},
          {atomicNumber: "18", symbol: "Ar", name: "Argon", atomicMass: "39.948(1)", groupBlock: "Gaze_Nobile",state:"gas", yearDiscovered: "1894"},
          {atomicNumber: "19", symbol: "K", name: "Potassium", atomicMass: "39.0983(1)", groupBlock: "Metale_Alcaline",state:"solid", yearDiscovered: "1807"},
          {atomicNumber: "20", symbol: "Ca", name: "Calcium", atomicMass: "40.078(4)", groupBlock: "Metale_Alcalino-Pamantoase",state:"solid", yearDiscovered: ""},
          {atomicNumber: "21", symbol: "Sc", name: "Scandium", atomicMass: "44.955912(6)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1876"},
          {atomicNumber: "22", symbol: "Ti", name: "Titanium", atomicMass: "47.867(1)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1791"},
          {atomicNumber: "23", symbol: "V", name: "Vanadium", atomicMass: "50.9415(1)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1803"},
          {atomicNumber: "24", symbol: "Cr", name: "Chromium", atomicMass: "51.9961(6)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: ""},
          {atomicNumber: "25", symbol: "Mn", name: "Manganese", atomicMass: "54.938045(5)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1774"},
          {atomicNumber: "26", symbol: "Fe", name: "Iron", atomicMass: "55.845(2)", groupBlock: "Metale_de_tranzitie", state:"solid",yearDiscovered: ""},
          {atomicNumber: "27", symbol: "Co", name: "Cobalt", atomicMass: "58.933195(5)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: ""},
          {atomicNumber: "28", symbol: "Ni", name: "Nickel", atomicMass: "58.6934(4)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1751"},
          {atomicNumber: "29", symbol: "Cu", name: "Copper", atomicMass: "63.546(3)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: ""},
          {atomicNumber: "30", symbol: "Zn", name: "Zinc", atomicMass: "65.38(2)", groupBlock: "Metale_de_tranzitie", state:"solid",yearDiscovered: "1746"},
          {atomicNumber: "31", symbol: "Ga", name: "Gallium", atomicMass: "69.723(1)", groupBlock: "Metale",state:"solid", yearDiscovered: "1875"},
          {atomicNumber: "32", symbol: "Ge", name: "Germanium", atomicMass: "72.64(1)", groupBlock: "Metaloizi",state:"solid", yearDiscovered: "1886"},
          {atomicNumber: "33", symbol: "As", name: "Arsenic", atomicMass: "74.92160(2)", groupBlock: "Metaloizi", state:"solid",yearDiscovered: ""},
          {atomicNumber: "34", symbol: "Se", name: "Selenium", atomicMass: "78.96(3)", groupBlock: "Non_Metale",state:"solid", yearDiscovered: "1817"},
          {atomicNumber: "35", symbol: "Br", name: "Bromine", atomicMass: "79.904(1)", groupBlock: "Halogeni",state:"liquid", yearDiscovered: "1826"},
          {atomicNumber: "36", symbol: "Kr", name: "Krypton", atomicMass: "83.798(2)", groupBlock: "Gaze_Nobile",state:"gas", yearDiscovered: "1898"},
          {atomicNumber: "37", symbol: "Rb", name: "Rubidium", atomicMass: "85.4678(3)", groupBlock: "Metale_Alcaline",state:"solid", yearDiscovered: "1861"},
          {atomicNumber: "38", symbol: "Sr", name: "Strontium", atomicMass: "87.62(1)", groupBlock: "Metale_Alcalino-Pamantoase",state:"solid", yearDiscovered: "1790"},
          {atomicNumber: "39", symbol: "Y", name: "Yttrium", atomicMass: "88.90585(2)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1794"},
          {atomicNumber: "40", symbol: "Zr", name: "Zirconium", atomicMass: "91.224(2)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1789"},
          {atomicNumber: "41", symbol: "Nb", name: "Niobium", atomicMass: "92.90638(2)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1801"},
          {atomicNumber: "42", symbol: "Mo", name: "Molybdenum", atomicMass: "95.96(2)", groupBlock: "Metale_de_tranzitie", state:"solid",yearDiscovered: "1778"},
          {atomicNumber: "43", symbol: "Tc", name: "Technetium", atomicMass: "[98]", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1937"},
          {atomicNumber: "44", symbol: "Ru", name: "Ruthenium", atomicMass: "101.07(2)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1827"},
          {atomicNumber: "45", symbol: "Rh", name: "Rhodium", atomicMass: "102.90550(2)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1803"},
          {atomicNumber: "46", symbol: "Pd", name: "Palladium", atomicMass: "106.42(1)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1803"},
          {atomicNumber: "47", symbol: "Ag", name: "Silver", atomicMass: "107.8682(2)", groupBlock: "Metale_de_tranzitie", state:"solid",yearDiscovered: ""},
          {atomicNumber: "48", symbol: "Cd", name: "Cadmium", atomicMass: "112.411(8)", groupBlock: "Metale_de_tranzitie", state:"solid",yearDiscovered: "1817"},
          {atomicNumber: "49", symbol: "In", name: "Indium", atomicMass: "114.818(3)", groupBlock: "Metale",state:"solid", yearDiscovered: "1863"},
          {atomicNumber: "50", symbol: "Sn", name: "Tin", atomicMass: "118.710(7)", groupBlock: "Metale",state:"solid", yearDiscovered: ""},
          {atomicNumber: "51", symbol: "Sb", name: "Antimony", atomicMass: "121.760(1)", groupBlock: "Metaloizi",state:"solid", yearDiscovered: ""},
          {atomicNumber: "52", symbol: "Te", name: "Tellurium", atomicMass: "127.60(3)", groupBlock: "Metaloizi",state:"solid", yearDiscovered: "1782"},
          {atomicNumber: "53", symbol: "I", name: "Iodine", atomicMass: "126.90447(3)", groupBlock: "Halogeni",state:"solid", yearDiscovered: "1811"},
          {atomicNumber: "54", symbol: "Xe", name: "Xenon", atomicMass: "131.293(6)", groupBlock: "Gaze_Nobile",state:"gas", yearDiscovered: "1898"},
          {atomicNumber: "55", symbol: "Cs", name: "Cesium", atomicMass: "132.9054519(2)", groupBlock: "Metale_Alcaline",state:"solid", yearDiscovered: "1860"},
          {atomicNumber: "56", symbol: "Ba", name: "Barium", atomicMass: "137.327(7)", groupBlock: "Metale_Alcalino-Pamantoase",state:"solid", yearDiscovered: "1808"},
          {},
          {atomicNumber: "72", symbol: "Hf", name: "Hafnium", atomicMass: "178.49(2)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1923"},
          {atomicNumber: "73", symbol: "Ta", name: "Tantalum", atomicMass: "180.94788(2)", groupBlock: "Metale_de_tranzitie", state:"solid",yearDiscovered: "1802"},
          {atomicNumber: "74", symbol: "W", name: "Tungsten", atomicMass: "183.84(1)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1783"},
          {atomicNumber: "75", symbol: "Re", name: "Rhenium", atomicMass: "186.207(1)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1925"},
          {atomicNumber: "76", symbol: "Os", name: "Osmium", atomicMass: "190.23(3)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1803"},
          {atomicNumber: "77", symbol: "Ir", name: "Iridium", atomicMass: "192.217(3)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1803"},
          {atomicNumber: "78", symbol: "Pt", name: "Platinum", atomicMass: "195.084(9)", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: ""},
          {atomicNumber: "79", symbol: "Au", name: "Gold", atomicMass: "196.966569(4)", groupBlock: "Metale_de_tranzitie", state:"solid",yearDiscovered: ""},
          {atomicNumber: "80", symbol: "Hg", name: "Mercury", atomicMass: "200.59(2)", groupBlock: "Metale_de_tranzitie",state:"liquid", yearDiscovered: ""},
          {atomicNumber: "81", symbol: "Tl", name: "Thallium", atomicMass: "204.3833(2)", groupBlock: "Metale",state:"solid", yearDiscovered: "1861"},
          {atomicNumber: "82", symbol: "Pb", name: "Lead", atomicMass: "207.2(1)", groupBlock: "Metale",state:"solid", yearDiscovered: ""},
          {atomicNumber: "83", symbol: "Bi", name: "Bismuth", atomicMass: "208.98040(1)", groupBlock: "Metale",state:"solid", yearDiscovered: ""},
          {atomicNumber: "84", symbol: "Po", name: "Polonium", atomicMass: "[209]", groupBlock: "Metaloizi",state:"solid", yearDiscovered: "1898"},
          {atomicNumber: "85", symbol: "At", name: "Astatine", atomicMass: "[210]", groupBlock: "Halogeni",state:"solid", yearDiscovered: "1940"},
          {atomicNumber: "86", symbol: "Rn", name: "Radon", atomicMass: "[222]", groupBlock: "Gaze_Nobile",state:"gas", yearDiscovered: "1900"},
          {atomicNumber: "87", symbol: "Fr", name: "Francium", atomicMass: "[223]", groupBlock: "Metale_Alcaline",state:"solid", yearDiscovered: "1939"},
          {atomicNumber: "88", symbol: "Ra", name: "Radium", atomicMass: "[226]", groupBlock: "Metale_Alcalino-Pamantoase",state:"solid", yearDiscovered: "1898"},
          {},
          {atomicNumber: "104", symbol: "Rf", name: "Rutherfordium", atomicMass: "[267]", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1969"},
          {atomicNumber: "105", symbol: "Db", name: "Dubnium", atomicMass: "[268]", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1967"},
          {atomicNumber: "106", symbol: "Sg", name: "Seaborgium", atomicMass: "[271]", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1974"},
          {atomicNumber: "107", symbol: "Bh", name: "Bohrium", atomicMass: "[272]", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1976"},
          {atomicNumber: "108", symbol: "Hs", name: "Hassium", atomicMass: "[270]", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1984"},
          {atomicNumber: "109", symbol: "Mt", name: "Meitnerium", atomicMass: "[276]", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1982"},
          {atomicNumber: "110", symbol: "Ds", name: "Darmstadtium", atomicMass: "[281]", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1994"},
          {atomicNumber: "111", symbol: "Rg", name: "Roentgenium", atomicMass: "[280]", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1994"},
          {atomicNumber: "112", symbol: "Cn", name: "Copernicium", atomicMass: "[285]", groupBlock: "Metale_de_tranzitie",state:"liquid", yearDiscovered: "1996"},
          {atomicNumber: "113", symbol: "Nh", name: "Nihonium", atomicMass: "[284]", groupBlock: "Metale_de_post-tranzitie",state:"solid", yearDiscovered: "2003"},
          {atomicNumber: "114", symbol: "Fl", name: "Flerovium", atomicMass: "[289]", groupBlock: "Metale_de_post-tranzitie",state:"solid", yearDiscovered: "1998"},
          {atomicNumber: "115", symbol: "Mc", name: "Moscovium", atomicMass: "[288]", groupBlock: "Metale_de_post-tranzitie",state:"solid", yearDiscovered: "2003"},
          {atomicNumber: "116", symbol: "Lv", name: "Livermorium", atomicMass: "[293]", groupBlock: "Metale_de_post-tranzitie",state:"solid", yearDiscovered: "2000"},
          {atomicNumber: "117", symbol: "Ts", name: "Tennessine", atomicMass: "[294]", groupBlock: "Metale_de_post-tranzitie",state:"unknown", yearDiscovered: "2010"},
          {atomicNumber: "118", symbol: "Og", name: "Oganesson", atomicMass: "[294]", groupBlock: "Gaze_Nobile",state:"gas", yearDiscovered: "2002"},
          {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
          {atomicNumber: "57", symbol: "La", name: "Lanthanum", atomicMass: "138.90547(7)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1839"},
          {atomicNumber: "58", symbol: "Ce", name: "Cerium", atomicMass: "140.116(1)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1803"},
          {atomicNumber: "59", symbol: "Pr", name: "Praseodymium", atomicMass: "140.90765(2)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1885"},
          {atomicNumber: "60", symbol: "Nd", name: "Neodymium", atomicMass: "144.242(3)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1885"},
          {atomicNumber: "61", symbol: "Pm", name: "Promethium", atomicMass: "[145]", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1947"},
          {atomicNumber: "62", symbol: "Sm", name: "Samarium", atomicMass: "150.36(2)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1853"},
          {atomicNumber: "63", symbol: "Eu", name: "Europium", atomicMass: "151.964(1)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1901"},
          {atomicNumber: "64", symbol: "Gd", name: "Gadolinium", atomicMass: "157.25(3)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1880"},
          {atomicNumber: "65", symbol: "Tb", name: "Terbium", atomicMass: "158.92535(2)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1843"},
          {atomicNumber: "66", symbol: "Dy", name: "Dysprosium", atomicMass: "162.500(1)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1886"},
          {atomicNumber: "67", symbol: "Ho", name: "Holmium", atomicMass: "164.93032(2)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1878"},
          {atomicNumber: "68", symbol: "Er", name: "Erbium", atomicMass: "167.259(3)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1842"},
          {atomicNumber: "69", symbol: "Tm", name: "Thulium", atomicMass: "168.93421(2)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1879"},
          {atomicNumber: "70", symbol: "Yb", name: "Ytterbium", atomicMass: "173.054(5)", groupBlock: "Lantanide",state:"solid", yearDiscovered: "1878"},
          {atomicNumber: "71", symbol: "Lu", name: "Lutetium", atomicMass: "174.9668(1)", groupBlock: "Lantanide", state:"solid",yearDiscovered: "1907"},
          {},{},{},
          {atomicNumber: "89", symbol: "Ac", name: "Actinium", atomicMass: "[227]", groupBlock: "Actinide",state:"solid", yearDiscovered: "1899"},
          {atomicNumber: "90", symbol: "Th", name: "Thorium", atomicMass: "232.03806(2)", groupBlock: "Actinide",state:"solid", yearDiscovered: "1828"},
          {atomicNumber: "91", symbol: "Pa", name: "Protactinium", atomicMass: "231.03588(2)", groupBlock: "Actinide",state:"solid", yearDiscovered: "1913"},
          {atomicNumber: "92", symbol: "U", name: "Uranium", atomicMass: "238.02891(3)", groupBlock: "Actinide",state:"solid", yearDiscovered: "1789"},
          {atomicNumber: "93", symbol: "Np", name: "Neptunium", atomicMass: "[237]", groupBlock: "Actinide",state:"solid", yearDiscovered: "1940"},
          {atomicNumber: "94", symbol: "Pu", name: "Plutonium", atomicMass: "[244]", groupBlock: "Actinide",state:"solid", yearDiscovered: "1940"},
          {atomicNumber: "95", symbol: "Am", name: "Americium", atomicMass: "[243]", groupBlock: "Actinide",state:"solid", yearDiscovered: "1944"},
          {atomicNumber: "96", symbol: "Cm", name: "Curium", atomicMass: "[247]", groupBlock: "Actinide",state:"solid", yearDiscovered: "1944"},
          {atomicNumber: "97", symbol: "Bk", name: "Berkelium", atomicMass: "[247]", groupBlock: "Actinide",state:"solid", yearDiscovered: "1949"},
          {atomicNumber: "98", symbol: "Cf", name: "Californium", atomicMass: "[251]", groupBlock: "Actinide",state:"solid", yearDiscovered: "1950"},
          {atomicNumber: "99", symbol: "Es", name: "Einsteinium", atomicMass: "[252]", groupBlock: "Actinide",state:"solid", yearDiscovered: "1952"},
          {atomicNumber: "100", symbol: "Fm", name: "Fermium", atomicMass: "[257]", groupBlock: "Actinide",state:"solid", yearDiscovered: "1952"},
          {atomicNumber: "101", symbol: "Md", name: "Mendelevium", atomicMass: "[258]", groupBlock: "Actinide",state:"solid", yearDiscovered: "1955"},
          {atomicNumber: "102", symbol: "No", name: "Nobelium", atomicMass: "[259]", groupBlock: "Actinide",state:"solid", yearDiscovered: "1957"},
          {atomicNumber: "103", symbol: "Lr", name: "Lawrencium", atomicMass: "[262]", groupBlock: "Metale_de_tranzitie",state:"solid", yearDiscovered: "1961"}
        ],
        groupBlocks: [
          {name: 'TOATE Elementele', border: '2px solid #ffffff'},
          {name: 'Non Metale', border: '2px solid #74898b'},
          {name: 'Gaze Nobile', border: '2px solid #8E44AD'},
          {name: 'Metale Alcaline', border: '2px solid #b62616'},
          {name: 'Metale Alcalino-Pamantoase', border: '2px solid #E67E22'},
          {name: 'Metaloizi', border: '2px solid #3498DB'},
          {name: 'Halogeni', border: '2px solid #EC87BF'},
          {name: 'Metale', border: '2px solid #2ECC71'},
          {name: 'Metale de post-tranzitie', border: '2px solid #1ABC9C'},
          {name: 'Metale de tranzitie', border: '2px solid #F1C40F'},
          {name: 'Lantanide', border: '2px solid #F39C12'},
          {name: 'Actinide', border: '2px solid #ECF0F1'}
        ],
        selectedSquare: '',
        overlay: false,
      }
    },
    methods: {
      resizeSquares: function() {
        let squares = document.querySelectorAll(".square");
        squares.forEach(function(e) {
          e.style.height = e.offsetWidth + 'px';
        });
      },
      showDetails: function(square) {
        if(square.name) {
          console.log(square.name);

          this.selectedSquare = square;
        }
      },
    },

    mounted() {
      //this.resizeSquares();
      console.log(this.overlay);
    }

  });

  });
