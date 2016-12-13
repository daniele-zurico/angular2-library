import {NgModule, ModuleWithProviders} from '@angular/core';
import {HelloWorldComponent} from './HelloWorld.component';
/**
 * The Hello World component is an example how to write components in the correct way.
 *
 * @author Daniele Zurico
 */
@NgModule({
    declarations: [HelloWorldComponent],
    exports: [HelloWorldComponent]
})

export class HelloWorldModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: HelloWorldModule, providers: []};
    }
}