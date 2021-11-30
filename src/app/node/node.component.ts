import { Component, OnInit, Input } from '@angular/core';
import { NodeService } from  '../node.service';
import { NodeModel } from '../node.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() data!: NodeModel;
  @Input() depth: number = 1;

  isAddingNewNode = false;
  newNodeType = '';
  newNodeName = '';

  constructor(
    private nodeService: NodeService,
  ) {}

  ngOnInit(): void {
  }

  addNewNode() {
    if (this.newNodeName) {
      this.nodeService.addNode({
        type: this.newNodeType,
        name: this.newNodeName,
        parent: this.data.id,
      }, this.depth);
    }

    this.cancelNewNode();
  }

  cancelNewNode() {
    this.isAddingNewNode = false;
    this.newNodeType = '';
    this.newNodeName = '';
  }

  removeNode() {
    this.nodeService.removeNode(this.data.id);
  }
}
