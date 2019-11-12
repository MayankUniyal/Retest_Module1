import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { allData } from '../type';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) { }

  getGraphData(){
    return this.apollo.watchQuery<allData>({
      query: gql`
      query {
      allUsers {
      id
      email
      name
      }
      }
      `
    })
     
  }

}
