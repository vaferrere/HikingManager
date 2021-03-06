import {NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {Hikings} from '../pages/hikings/hikings';
import {HikingDetail} from '../pages/hiking-detail/hiking-detail';
import {Steps} from '../pages/steps/steps';

// import {AgmCoreModule} from "@agm/core";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { NeutronRatingModule } from 'neutron-star-rating';

@NgModule({
    declarations: [
        MyApp,
        Hikings,
        HikingDetail,
        Steps
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        NeutronRatingModule
        // AgmCoreModule.forRoot({
        //     apiKey: 'AIzaSyBHNxJqNLAx27dFg50p_9q-0TBI1ruhlpM'
        // })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Hikings,
        HikingDetail,
        Steps
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {
}
