import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(elRefMock );
    expect(directive).toBeTruthy();
  });
});
let elRefMock = {
  nativeElement: document.createElement('div')
};


const directive = new HighlightDirective(elRefMock);