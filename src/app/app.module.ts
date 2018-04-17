import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PublisherComponent } from './video-component/publisher/publisher.component';
import { SubscriberComponent } from './video-component/subscriber/subscriber.component';
import { OpentokService } from './video-component/opentok.service';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { VideoChatComponent } from './video-component/video-chat.component';
import {routes} from './app.routing';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PublisherComponent,
    SubscriberComponent,
    VideoChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [OpentokService],
  bootstrap: [AppComponent]
})
export class AppModule { }
