// let colors = [["#ff9a9e", "#fad0c4"],["#ffecd2", "#fcb69f"],["#ff9a9e", "#fecfef"],["#a1c4fd", "#c2e9fb"],["#cfd9df", "#e2ebf0"],["#fdfbfb", "#ebedee"],["#f5f7fa", "#c3cfe2"],["#667eea", "#764ba2"],["#fdfcfb", "#e2d1c3"],["#89f7fe", "#66a6ff"],["#48c6ef", "#6f86d6"],["#feada6", "#f5efef"],["#a3bded", "#6991c7"],["#13547a", "#80d0c7"],["#93a5cf", "#e4efe9"],["#434343", "#000000"],["#93a5cf", "#e4efe9"],["#ff758c", "#ff7eb3"],["#868f96", "#596164"],["#c79081", "#dfa579"],["#09203f", "#537895"],["#96deda", "#50c9c3"],["#29323c", "#485563"],["#ee9ca7", "#ffdde1"],["#1e3c72", "#2a5298"],["#ffc3a0", "#ffafbd"],["#B7F8DB", "#50A7C2"]];
// let colors = ["#237dff", "#ebff23", "#ff3623", "#3623ff", "#23ebff", "#a523ff", "#23ffa5"]
let colors = ["#6faaff"]
let hours = new Date().getSeconds()%colors.length;
// document.getElementById("logo").style["background-image"] = `linear-gradient(to right, ${colors[hours][0]}, ${colors[hours][1]}`;
// document.getElementById("logo").style["background-size"] = "400% 400%";

particlesJS("particles", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 100
      }
    },
    "color": {
      "value": colors[hours]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7260158303016908,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.5,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.3,
        "sync": false
      }
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "outwards",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "retina_detect": true
});
