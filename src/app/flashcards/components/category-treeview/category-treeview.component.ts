import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Category } from '../../models/category';
import { Observable, merge, BehaviorSubject } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material';
import { SelectionChange, CollectionViewer } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-category-treeview',
  templateUrl: './category-treeview.component.html',
  styleUrls: ['./category-treeview.component.scss']
})
export class CategoryTreeviewComponent implements OnInit {
   @Input() categories: Category[] = [];
   nestedTreeControl: NestedTreeControl<Category>;
   nestedDatasource: MatTreeNestedDataSource<Category>;
   dataChange: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);

   constructor() {
     this.nestedTreeControl = new NestedTreeControl<Category>(e => e.subcategories);
     this.nestedDatasource = new MatTreeNestedDataSource();

     this.nestedDatasource.data = this.categories;

     this.dataChange.subscribe(data => this.nestedDatasource.data = data);

     this.dataChange.next(this.categories);
    }
  // getLevel = (node: DynamicFlatNode) => node.level;

  // isExpandable = (node: DynamicFlatNode) => node.expandable;

  // hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  // constructor() {
  //   this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
  //  }

  ngOnInit() {
  }

  hasChild = (_: number, nodeData: Category) => nodeData.subcategories;

  isExpanded (cat: Category) {
    return false;
  }
}
