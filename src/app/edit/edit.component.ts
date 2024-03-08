import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  editForm:FormGroup


  this.editForm = new FormGroup({
    name: new FormControl('', validators.required),
    id: new FormControl('', validators.required),
    designation: new FormControl('', validators.required),
    location: new FormControl('', validators.required),
  })
  
}
