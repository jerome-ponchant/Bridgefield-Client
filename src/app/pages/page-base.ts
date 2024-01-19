import { ModalErrorComponent } from './../components/modal/modal-error.component';
import { inject } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

export class PageBase{

    private modal : NgbModal = inject(NgbModal);

    async displayError(e: any[]){
        let ref = this.modal.open(ModalErrorComponent);
        let modal = ref.componentInstance as ModalErrorComponent;
        modal.ref = ref;
        modal.errors=e;
        return await ref.result
    }
}