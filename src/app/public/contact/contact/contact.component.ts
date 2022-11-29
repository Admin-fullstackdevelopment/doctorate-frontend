import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  nodeMailerForm! :FormGroup;

  constructor(private formBuilder:FormBuilder,private emailService:EmailService){}

  ngOnInit(){
    this.nodeMailerForm = this.formBuilder.group({
      vorname: [null, [Validators.required]],
      nachname: [null, [Validators.required]],
      email:[null,[Validators.required]],
      comment: new FormControl('', [Validators.required])
    });
  }

  sendMail(){
    alert("jjj");
    let email  = this.nodeMailerForm.value.email;
    let reqObj = {
      email:email
    }
    this.emailService.sendMessage(reqObj).subscribe(data=>{
      console.log(data);
    })
  }
}


  /* Formdata!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

   ngOnInit() {
    this.Formdata = this.formBuilder.group({
      vorname: [null, [Validators.required]],
      nachname: [null, [Validators.required]],
      email: [null, [Validators.required]],
      comment: new FormControl('', [Validators.required])
    });
  }

}
 */