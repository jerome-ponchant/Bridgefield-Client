import { HttpErrorResponse } from "@angular/common/http";
import { InstantiateExpr } from "@angular/compiler";
import { Component, EventEmitter, Output, inject } from "@angular/core";
import { NgbModal, NgbActiveModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ErrorDto } from "src/client/entity/ErrorDto";

@Component({
    selector: 'app-base',
    templateUrl: './modal-error.component.html',
    providers: [ NgbModal, NgbActiveModal ]
})
export class ModalErrorComponent {

    @Output()
    onError = new EventEmitter<ErrorDto>();

    private _errors: Error[] = [];
    public modal : NgbModal = inject(NgbModal);
    public activeModal : NgbActiveModal = inject(NgbActiveModal)
    private _ref?: NgbModalRef;

    public get ref(): NgbModalRef| undefined {
        return (this._ref ?? undefined);
    }
    public set ref(value: NgbModalRef | undefined) {
        this._ref = value;
    }


    public get errors(): Error[] {
        return this._errors;
    }
    public set errors(value: Error[]) {
        this._errors = value;
    }

    public addError(e: Error) {
        this.errors.push(e);
    }

    public emptyErrors(){
        this.errors=[]
    }

    translate(e:Error):String{
        if(e instanceof HttpErrorResponse )
            return e.error.localizedMessage ?? e.message;
        return e.message;
    }

    close(){
        this.ref?.close();
    }

}
