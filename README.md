# AngularOdometerDemo

## Odometer组件 Angular版本应用

[demo地址](https://sawyerbutton.github.io/angular-odometer-demo/odometer)

### 安装Odometer 4 angular 组件库

```bash
npm install ng2-odometer --save
```

### 引入Odometer模块

```typescript
import {NgModule, NgModuleRef, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OdometerComponent } from './odometer.component';
import {OdometerRoutingModule} from './odometer-routing.module';
import { Ng2OdometerModule} from 'ng2-odometer';
import {OdometerService} from './odometer.service';

@NgModule({
  imports: [
    CommonModule,
    OdometerRoutingModule,
    Ng2OdometerModule.forRoot()
  ],
  declarations: [OdometerComponent],
  providers: [OdometerService]
})
export class OdometerModule implements OnDestroy {
  constructor(
    private lazy: NgModuleRef<OdometerModule>,
  ) {
    console.log('OdometerModule has been created');
  }
  ngOnDestroy() {
    console.log('OdometerModule has been destroyed');
    this.lazy.destroy();
  }
}
```

### 使用Odometer组件

- 使用`<ng2-odometer></ng2-odometer>`的方式创造Odometer组件
- `[number]`是必须的属性，其代表了`Odometer`显示的最大数值
- `[config]`参数用来进行自定义配置，可选

```html
<div>
  <p>
    <ng2-odometer [number]="number$ | async" [config]="{theme: 'train-station', format: 'd', animation:'slide' }"></ng2-odometer>
  </p>
</div>
```

> 值得注意的是，可以对number属性进行修改以达到修改`Odometer`组件显示数值的效果

> 在手动模式下，`[config]="{ auto: false }`，可以更新通过更改`number`属性触发`Odometer`更新

> `observable`是一个观察者用以触发更新事件

```typescript
@Component({
   selector: 'main-element',
   template: `
        ...
        <ng2-odometer [number]="number" [config]="{ auto: false }" [observable]="observable"></ng2-odometer>
        <!-- Further content here -->
        ...
   `
})
export class MainElementComponent {
  public number: number = 1000;
  public observable: Observable<boolean>;
  private observer: Observer<boolean>;
  
  constructor() {
    this.observable = new Observable<boolean>((observer: any) => this.observer = observer).share();
 
    // Trigger odometer after 2s
    setTimeout(() => this.observer.next(true), 2000);
  }
}
```

### 组件参数

- animation: string (`slide`,`count`)

- format: string (`d`,`(.ddd),dd`,`(,ddd)`,`(,ddd).dd`,`( ddd),dd`)

- theme: string (`default`,`minima`, `digital`, `car`, `plaza`, `slot-machine`, `train-station`)

- value: number (`0`,...)

- auto: boolean (`true`,`false`)


