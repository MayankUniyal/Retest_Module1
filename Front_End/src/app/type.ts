export type GraphQLData = {

    id:number;
    email:string;
    name:string;

}
export type RestData = {
    id : number;
    userId : number;
    title : string;
    completed : boolean;
}
export type allData = {
    allUsers: GraphQLData[];
}


