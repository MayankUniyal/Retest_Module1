import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { WelcomeComponent } from './welcome/welcome.component';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {

  constructor(apollo: Apollo,
    httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex' }),
      cache: new InMemoryCache()
    });
  }

}
