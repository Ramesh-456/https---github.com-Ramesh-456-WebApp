import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  addProductFormGroup!:FormGroup;
  constructor(private fb:FormBuilder){
this.addProductFormGroup = fb.group({
  productName:null,
  images: this.fb.array([])
})
  }

  get imageArray() {
    return this.addProductFormGroup.get('images') as FormArray;
  }

  addImage(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageArray.push(this.fb.control(reader.result));
    };
    reader.readAsDataURL(file);
  }

  removeImage(index: number) {
    this.imageArray.removeAt(index);
  }

  saveProduct(){
    console.log(this.addProductFormGroup.value);
    
  }
}
