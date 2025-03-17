import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent {
  productCreate!:FormGroup;
  selectedFile:any[] = [];
  uploadedFiles : any[]=[];
  constructor(private fb:FormBuilder,private apiCall:ApiCallService){
    this.productCreate =fb.group({
      productType:'',
      productPrice:null,
      productName:'',
      // isDefault:false,
      imageInput:'',
      productImages: this.fb.array([])
    }) 
    
  }

  submit(){
    let criteria=this.productCreate.value;
    delete criteria['imageInput']
    delete criteria['productImages']

    let formData = new FormData();
    formData.append("requestDatas",JSON.stringify(criteria));
    for (let index = 0; index < this.selectedFile.length; index++) {
      formData.append("file",this.selectedFile[index]) ;
    }
    const reqUrl = "product/uploadImage";
const criteriaValue = this.productCreate.value;
let responseObservable = this.apiCall.postRequest(this.apiCall.mergeUrlWithApiUrl(reqUrl),formData);
responseObservable.subscribe((response:any)=>{
    console.log(response)
  })
  }
  reset() {
    this.productCreate.reset();
  }

  get imageArray() {
    return this.productCreate.get('productImages') as FormArray;
  }

  addImage(event:any) {
    this.selectedFile = event.target.files;
    
  }
  uploadImage(){
    if(this.selectedFile){
      this.uploadedFiles.push(this.selectedFile)
    }
    if (this.selectedFile && this.selectedFile.length > 0) {
      for (let i = 0; i < this.selectedFile.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          const empGroup = this.fb.group({
            productImage:this.fb.control(reader.result) ,
          });
          this.imageArray.push(empGroup);
    
        };
        reader.readAsDataURL(this.selectedFile[i]);
      }
    }
    // this.productCreate.controls['imageInput'].reset();
    // const reader = new FileReader();
    // reader.onload = () => {
    //   const empGroup = this.fb.group({
    //     productImage:this.fb.control(reader.result) ,
    //   });
    //   this.imageArray.push(empGroup);
    //   this.productCreate.controls['imageInput'].reset();
    //   // this.selectedFile = undefined;

    // };
    // if(this.selectedFile){
    //   Array.from(this.selectedFile).forEach(eachFile => {
    //     reader.readAsDataURL(eachFile);
    //   });
      
    // }
   
  }
  removeImage(index: number) {
    this.imageArray.removeAt(index);
  }
  private convertToFormData(userInfo:any): FormData {
		const formData = new FormData();
		for (const key of Object.keys(userInfo)) {
			const value = userInfo[key];
			formData.append(key, value);
		}
		return formData;
	}

  onUpload(event:any){
    console.log(event);
    
  }
}
