import { BsModalRef } from 'ngx-bootstrap/modal';

import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
})
export class AlertModalComponent implements OnInit{
//  titulo: string;
//  msg: string;

  @Input() titulo = 'Titulo';
  @Input() msg = 'Mensagem';
  @Input() msgBtnFechar = 'OK';

  constructor(public modalRef: BsModalRef) {} //BsModalRef para acessar as propriedades do modal

  ngOnInit(){

  }

  fecharModal(){
    this.modalRef.hide();
  }
}
