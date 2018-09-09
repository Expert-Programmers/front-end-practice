function Vertex(label) {
  this.label = label;
}

function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push('');
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.toString = toString;

// for dfs
  this.marked = [];
  for (let i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }

//  for dfs
  this.edgeTo = [];
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (let i = 0; i < this.vertices; i++) {
    let s = i + '->';
    for (let j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] !== undefined) {
        s += this.adj[i][j] + ' ';
      }
    }
    console.log(s);
  }
}

function dfs(v) {
  this.marked[v] = true;

  if (this.adj[v] !== undefined) {
    console.log('Visited vertex:', v);
  }

  for (let i = 0; i < this.adj[v].length; i++) {
    if (!this.marked[this.adj[v][i]]) {
      this.dfs(this.adj[v][i]);
    }
  }
}

function bfs(s) {
  let queue = [];
  this.marked[s] = true;
  queue.push(s);
  while (queue.length > 0) {
    let v = queue.shift();
    if (v === undefined) {
      console.log('Visited vertex:', v);
    }
    for (let i = 0; i < this.adj[v].length; i++) {
      if (!this.marked[this.adj[v][i]]) {
        this.marked[this.adj[v][i]] = true;
        this.edgeTo[this.adj[v][i]] = v;
        queue.push(this.adj[v][i]);
      }
    }
  }
}
