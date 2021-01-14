import {FormControl} from '@angular/forms';

export class DateFormControl extends FormControl {
  setValue(value:string|null,option:any){
    if(!value){
      super.setValue('',{...option,emitModelToViewChange:true});
      return;
    }
    if(value.match(/[^0-9|\/]/gi)){
      super.setValue(this.value,{...option,emitModelToViewChange:true});
      return;
    }
    if(value.length>5){
      super.setValue(this.value,{...option,emitModelToViewChange:true});
      return;
    }
    if(value.length ===2 && this.value.length ===3){
      super.setValue( value,{...option,emitModelToViewChange:true});
      return;
    }
    if(value.length ===2){
      super.setValue(value +'/',{...option,emitModelToViewChange:true});
     return
    }
    super.setValue(value,{...option,emitModelToViewChange:true});
  }
}
