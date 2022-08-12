export interface IGraph {
  year?: string;
  url: string;
}

export interface IGraphSet {
  graph_type: string;
  graphs: IGraph[];
}
