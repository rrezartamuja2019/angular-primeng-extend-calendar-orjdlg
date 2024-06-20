import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, Type, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/components/dynamicdialog/dynamicdialog-config';
import { DynamicDialogRef } from 'primeng/components/dynamicdialog//dynamicdialog-ref';
import { DynamicDialogInjector } from 'primeng/components/dynamicdialog/dynamicdialog-injector';

import { C9DinamicDialogComponent } from './dd.component';

@Injectable()
export class C9DialogService {

  dialogComponentRef: ComponentRef<C9DinamicDialogComponent>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) { }

    public open(componentType: Type<any>, config: DynamicDialogConfig) {
        const dialogRef = this.appendDialogComponentToBody(config);

        this.dialogComponentRef.instance.childComponentType = componentType;

        return dialogRef;
    }

    private appendDialogComponentToBody(config: DynamicDialogConfig) {
        const map = new WeakMap();
        map.set(DynamicDialogConfig, config);

        const dialogRef = new DynamicDialogRef();
        map.set(DynamicDialogRef, dialogRef);

        const sub = dialogRef.onClose.subscribe(() => {
            this.removeDialogComponentFromBody();
            sub.unsubscribe();
        });

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(C9DinamicDialogComponent);
        const componentRef = componentFactory.create(new DynamicDialogInjector(this.injector, map));

        this.appRef.attachView(componentRef.hostView);

        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);

        this.dialogComponentRef = componentRef;

        return dialogRef;
    }

    private removeDialogComponentFromBody() {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    }
}