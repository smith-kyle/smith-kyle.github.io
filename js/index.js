var maxPos = 20;
words = [
  {
    k: {
      nodes: [
        {
          id: 'k0',
          x: 0,
          y: 0,
          'size': 3
        },
        {
          id: 'k1',
          x: 0,
          y: maxPos * 0.5,
          'size': 2
        },
        {
          id: 'k2',
          x: 0,
          y: maxPos,
          'size': 1
        },
        {
          id: 'k3',
          x: maxPos,
          y: 0,
          'size': 3
        },
        {
          id: 'k4',
          x: maxPos,
          y: maxPos,
          'size': 2
        }
      ],
      edges: [
        {
          id: 'e0',
          source: 'k0',
          target: 'k1'
        },
        {
          id: 'e1',
          source: 'k1',
          target: 'k2'
        },
        {
          id: 'e2',
          source: 'k1',
          target: 'k3'
        },
        {
          id: 'e3',
          source: 'k1',
          target: 'k4'
        }
      ]
    },
    y: {
      nodes: [
        {
          id: 'y0',
          x: 0,
          y: 0
        },
        {
          id: 'y1',
          x: maxPos * 0.8,
          y: 0
        },
        {
          id: 'y2',
          x: maxPos * 0.4,
          y: maxPos * 0.4
        },
        {
          id: 'y3',
          x: maxPos * 0.4,
          y: maxPos
        }
      ],
      edges: [
        {
          id: 'e4',
          source: 'y0',
          target: 'y2'
        },
        {
          id: 'e5',
          source: 'y2',
          target: 'y1'
        },
        {
          id: 'e6',
          source: 'y2',
          target: 'y3'
        }
      ]
    },
    l: {
      nodes: [
        {
          id: 'l0',
          x: 0,
          y: 0
        },
        {
          id: 'l1',
          x: 0,
          y: maxPos
        },
        {
          id: 'l2',
          x: maxPos * .8,
          y: maxPos
        }
      ],
      edges: [
        {
          id: 'e7',
          source: 'l0',
          target: 'l1'
        },
        {
          id: 'e8',
          source: 'l1',
          target: 'l2'
        }
      ]
    },
    e: {
      nodes: [
        {
          id: 'e0',
          x: 0,
          y: 0
        },
        {
          id: 'e1',
          x: maxPos,
          y: 0
        },
        {
          id: 'e2',
          x: 0,
          y: maxPos * 0.5
        },
        {
          id: 'e3',
          x: maxPos,
          y: maxPos * 0.5
        },
        {
          id: 'e4',
          x: 0,
          y: maxPos
        },
        {
          id: 'e5',
          x: maxPos,
          y: maxPos
        }
      ],
      edges: [
        {
          id: 'e9',
          source: 'e0',
          target: 'e1'
        },
        {
          id: 'e10',
          source: 'e0',
          target: 'e2'
        },
        {
          id: 'e11',
          source: 'e2',
          target: 'e3'
        },
        {
          id: 'e12',
          source: 'e2',
          target: 'e4'
        },
        {
          id: 'e13',
          source: 'e4',
          target: 'e5'
        }
      ]
    }
  },
  {
    s: {
      nodes: [
        {
          id: 's0',
          x: maxPos,
          y: maxPos * 0.2
        },
        {
          id: 's1',
          x: maxPos * 0.5,
          y: 0
        },
        {
          id: 's2',
          x: 0,
          y: maxPos * 0.2
        },
        {
          id: 's3',
          x: maxPos * 0.25,
          y: maxPos * 0.35,
        },
        {
          id: 's4',
          x: maxPos * 0.5,
          y: maxPos * 0.48
        },
        {
          id: 's5',
          x: maxPos * 0.7,
          y: maxPos * 0.57
        },
        {
          id: 's6',
          x: maxPos,
          y: maxPos * 0.7
        },
        {
          id: 's7',
          x: maxPos * 0.5,
          y: maxPos
        },
        {
          id: 's8',
          x: maxPos * 0.25,
          y: maxPos * 0.9
        },
        {
          id: 's9',
          x: 0,
          y: maxPos * 0.8
        }
      ],
      edges: [
        {
          id: 'se0',
          source: 's0',
          target: 's1'
        },
        {
          id: 'se1',
          source: 's1',
          target: 's2'
        },
        {
          id: 'se2',
          source: 's2',
          target: 's3'
        },
        {
          id: 'se3',
          source: 's3',
          target: 's4'
        },
        {
          id: 'se4',
          source: 's4',
          target: 's5'
        },
        {
          id: 'se5',
          source: 's5',
          target: 's6'
        },
        {
          id: 'se6',
          source: 's6',
          target: 's7'
        },
        {
          id: 'se7',
          source: 's7',
          target: 's8'
        },
        {
          id: 'se8',
          source: 's8',
          target: 's9'
        }
      ]
    },
    m: {
      nodes: [
        {
          id: 'm0',
          x: 0,
          y: maxPos
        },
        {
          id: 'm1',
          x: 0,
          y: 0
        },
        {
          id: 'm2',
          x: maxPos * 0.5,
          y: maxPos * 0.5
        },
        {
          id: 'm3',
          x: maxPos,
          y: 0
        },
        {
          id: 'm4',
          x: maxPos,
          y: maxPos
        }
      ],
      edges: [
        {
          id: 'me0',
          source: 'm0',
          target: 'm1'
        },
        {
          id: 'me1',
          source: 'm1',
          target: 'm2'
        },
        {
          id: 'me2',
          source: 'm2',
          target: 'm3'
        },
        {
          id: 'me3',
          source: 'm3',
          target: 'm4'
        }
      ]
    },
    i: {
      nodes: [
        {
          id: 'i0',
          x: 0,
          y: 0
        },
        {
          id: 'i1',
          x: maxPos * 0.5,
          y: 0
        },
        {
          id: 'i2',
          x: maxPos,
          y: 0
        },
        {
          id: 'i3',
          x: 0,
          y: maxPos
        },
        {
          id: 'i4',
          x: maxPos * 0.5,
          y: maxPos
        },
        {
          id: 'i5',
          x: maxPos,
          y: maxPos
        }
      ],
      edges: [
        {
          id: 'ie0',
          source: 'i0',
          target: 'i1'
        },
        {
          id: 'ie1',
          source: 'i1',
          target: 'i2'
        },
        {
          id: 'ie2',
          source: 'i1',
          target: 'i4'
        },
        {
          id: 'ie3',
          source: 'i3',
          target: 'i4'
        },
        {
          id: 'ie4',
          source: 'i4',
          target: 'i5'
        }
      ]
    },
    t: {
      nodes: [
        {
          id: 't0',
          x: 0,
          y: 0
        },
        {
          id: 't1',
          x: maxPos * 0.5,
          y: 0
        },
        {
          id: 't2',
          x: maxPos,
          y: 0
        },
        {
          id: 't3',
          x: maxPos * 0.5,
          y: maxPos
        }
      ],
      edges: [
        {
          id: 'te0',
          source: 't0',
          target: 't1'
        },
        {
          id: 'te1',
          source: 't1',
          target: 't2'
        },
        {
          id: 'te2',
          source: 't1',
          target: 't3'
        }
      ]
    },
    h: {
      nodes: [
        {
          id: 'h0',
          x: 0,
          y: 0
        },
        {
          id: 'h1',
          x: 0,
          y: maxPos * 0.5
        },
        {
          id: 'h2',
          x: maxPos,
          y: 0
        },
        {
          id: 'h3',
          x: 0,
          y: maxPos
        },
        {
          id: 'h4',
          x: maxPos,
          y: maxPos * 0.5
        },
        {
          id: 'h5',
          x: maxPos,
          y: maxPos
        }
      ],
      edges: [
        {
          id: 'he0',
          source: 'h0',
          target: 'h1'
        },
        {
          id: 'he1',
          source: 'h1',
          target: 'h3'
        },
        {
          id: 'he2',
          source: 'h1',
          target: 'h4'
        },
        {
          id: 'he3',
          source: 'h2',
          target: 'h4'
        },
        {
          id: 'he4',
          source: 'h4',
          target: 'h5'
        }
      ]
    }
  }
];

var g = {
  nodes: [],
  edges: []
},
s,
state = 0,
n = 0;

var yOffset;
var xOffset = -1 * maxPos;
var lineNumber = -1;
var gridIncrement = 3;
var MARGIN_RIGHT = 5;
var MARGIN_BOTTOM = 20;
var isFirst = true;
_.forEach(words, function(word) {
  // Increment line number and reset xOffset
  lineNumber++;
  xOffset = (isFirst) ? 10 : 0;
  isFirst = false;
  _.forEach(word, function(letter) {
    xOffset += maxPos + MARGIN_RIGHT;
    yOffset = lineNumber * (maxPos + MARGIN_BOTTOM);
    // Add letter's nodes to graph
    _.forEach(letter.nodes, function(node) {
      var o = {
        id: node.id,
        letter_size: 0,
        letter_x: node.x + xOffset,
        letter_y: node.y + yOffset,
        letter_color: '#ec5148',
        grid_x: n % (7 * gridIncrement),
        grid_y: Math.floor(n / (7 * gridIncrement)),
        grid_color: '#ec5148',
        grid_size: 0
      };
      n += gridIncrement;

      ['x', 'y', 'color', 'size'].forEach(function(val) {
        o[val] = o['grid_' + val];
      });

      g.nodes.push(o);
    });

    // Add letter's edges to graph
    _.forEach(letter.edges, function(edge) {
      edge.size = Math.random() * 100;
      g.edges.push(edge);
    });
  });
});

s = new sigma({
  graph: g,
  container: 'container',
  settings: {
    enableCamera: false,
    enableHovering: false,
    mouseEnabled: false,
    drawLabels: false,
    animationsTime: 1000
  }
});

window.onload = function() {
  var prefix = 'letter_';
  sigma.plugins.animate(
    s,
    {
      x: prefix + 'x',
      y: prefix + 'y',
      color: prefix + 'color',
      size: prefix + 'size'
    }
  );
}
