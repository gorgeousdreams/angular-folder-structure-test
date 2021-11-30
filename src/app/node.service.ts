import { Injectable } from '@angular/core';
import { NodeModel } from './node.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  nodes: NodeModel[] = [];

  constructor() { }

  getNodes(): Observable<Array<NodeModel>> {
    return of(this.nodes);
  }

  updateNodes(nodes: NodeModel[] = [], actionType: string, nodeId: string, data: any = null) {
    if (!nodes.length || !actionType) {
      return;
    }

    const rootNode = nodes.findIndex((node: NodeModel) => node.id === nodeId);

    if (rootNode > -1) {
      if (actionType === 'add') {
        nodes[rootNode].children?.push(data);
      } else {
        nodes.splice(rootNode, 1);
      }
      return;
    }

    for(let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      if (node.type === 'file') {
        continue;
      } else {
        this.updateNodes(node.children, actionType, nodeId, data);
      }
    }
  }

  addNode(node: any, depth: number) {
    const newNode: NodeModel = {
      type: node.type,
      name: node.name,
      id: Date.now().toString()
    };
    if (node.type === 'folder') {
      newNode.children = [];
    }
    if (depth === 0) {
      this.nodes.push(newNode);
    } else {
      this.updateNodes(this.nodes, 'add', node.parent, newNode);
    }
  }

  removeNode(nodeId: string) {
    this.updateNodes(this.nodes, 'remove', nodeId);
  }
}
