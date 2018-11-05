import { InComponentChangeModule } from './in-component-change.module';

describe('InComponentChangeModule', () => {
  let inComponentChangeModule: InComponentChangeModule;

  beforeEach(() => {
    inComponentChangeModule = new InComponentChangeModule();
  });

  it('should create an instance', () => {
    expect(inComponentChangeModule).toBeTruthy();
  });
});
