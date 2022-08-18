export interface IGraph {
  year?: string;
  url: string;
  id?: string;
}

export interface IGraphSet {
  graph_type: string;
  graphs: IGraph[];
}

export interface IStateGraphSet {
  state: string;
  sources: IGraph[];
}
