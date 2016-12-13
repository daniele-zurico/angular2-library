import {
    async,
    TestBed
} from '@angular/core/testing';

import {HelloWorldComponent} from './HelloWorldComponent';

describe('Testing Hello World Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [],
            declarations: [HelloWorldComponent]
        });
    });

    it('Should contain hello world text', async(() => {
        const fixture = TestBed.createComponent(HelloWorldComponent);
        fixture.detectChanges();

        let compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('h1').textContent).toContain('Hello World');
    }));
});