import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';
import { Routes, RouterModule, UrlHandlingStrategy, UrlTree } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common'

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree) {
    //this tells that only '/' and  '/child' routes will be handled by Angular. rest AngularJS will handle /phones routes as defined in its config
    return url.toString() === '/' || url.toString() === '/child';
  }
  extract(url: UrlTree) { return url; }
  merge(url: UrlTree, whole: UrlTree) { return url; }
}

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'child', pathMatch: 'full' },
      { path: 'child', component: ChildComponent }
    ])
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '!' },
    // use hash location strategy
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // use custom url handling strategy
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  ngDoBootstrap() { }
}