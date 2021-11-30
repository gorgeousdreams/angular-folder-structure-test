import { Component } from '@angular/core';
import { NodeModel } from './node.model';
import { NodeService } from './node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataSource: NodeModel[] = [];

  isAddingNewNode = false;
  newNodeName = '';

  constructor(
    private nodeService: NodeService
  ) {
    this.nodeService.getNodes()
      .subscribe((data: NodeModel[]) => {
        this.dataSource = data;
      })
  }

  addNewNode() {
    this.nodeService.addNode({
      type: 'folder',
      name: this.newNodeName,
    }, 0);
    this.cancelNewNode();
  }

  cancelNewNode() {
    this.isAddingNewNode = false;
    this.newNodeName = '';
  }
}
