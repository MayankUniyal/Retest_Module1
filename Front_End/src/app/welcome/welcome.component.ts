import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApiService } from '../service/api.service';
import { GraphqlService } from "../service/graphql.service";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private apollo: Apollo, private api: ApiService, private graphqlService: GraphqlService) { }

  allGraphData;
  idTitle: string = '';
  idCompleted : string = '';
  restData = [];
  graphQlData = [];
  toggle_combine: boolean = false;
  toggle_specific: boolean = false;
  combinedData = [];

  ngOnInit() {
    this.getRestData();
    this.getGraphQLData();
  }

  display() {
    this.combinedData = [];
    for (let i = 0; i < 10; i++) {
      let combine = {
        id: this.graphQlData[i].id,
        name: this.graphQlData[i].name,
        email: this.graphQlData[i].email,
        title: this.restData[i].title,
        completed: this.restData[i].completed,
        restId: this.restData[i].id
      };
      this.combinedData.push(combine);
    }
    this.toggle_combine = true;
  }

  getSpecificData(id: number) {
    this.api.restGetSpecificApiCall(id).subscribe((data: any) => {
      this.idTitle = data.title;
      this.idCompleted = data.completed;
    });
    this.toggle_specific = true;
  }

  getRestData() {
    this.api.restGetApiCall().subscribe((data: any) => {
      console.log(data);
      
      for (let i = 0; i < 10; i++) {
        this.restData.push(data[i]);
      }
    }
    );
  }

  getGraphQLData() {
    this.allGraphData
      = this.graphqlService.getGraphData().valueChanges
        .subscribe((data) => {
          for (let i = 0; i < 10; i++) {
            this.graphQlData.push(data.data.allUsers[i]);
          }
        });
  }
}