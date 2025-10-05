import { TestBed } from '@angular/core/testing';
import { ViewPortService } from './viewport.service';

describe('viewPortService', () => {
  let service: ViewPortService;

  const testCallFake = (matches: boolean) => {
    return (query: string) => ({
      matches: matches,
      media: query,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false as any,
      onchange: null,
    });
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPortService);
  });

  it('should viewPort service has created', () => {
    expect(service).toBeTruthy();
  });

  it('should viewPort is "Desktop"', () => {
    spyOn(window, 'matchMedia').and.callFake(
      testCallFake(false)
    );
    service.updateBreakpoints();
    const mockResult = service.isAdaptiveSize;
    expect(mockResult.getValue().TABLET).toBeFalse();
  });

  it('should viewPort is "Tablet"', () => {
    spyOn(window, 'matchMedia').and.callFake(
      testCallFake(true)
    );
    service.updateBreakpoints();
    const mockResult = service.isAdaptiveSize;
    expect(mockResult.getValue().TABLET).toBeTruthy();
  });
});
