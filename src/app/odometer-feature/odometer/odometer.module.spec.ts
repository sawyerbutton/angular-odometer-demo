import { OdometerModule } from './odometer.module';

describe('OdometerModule', () => {
  let odometerModule: OdometerModule;

  beforeEach(() => {
    odometerModule = new OdometerModule();
  });

  it('should create an instance', () => {
    expect(odometerModule).toBeTruthy();
  });
});
