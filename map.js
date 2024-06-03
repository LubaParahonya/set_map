export class ErrorRepository {
    constructor(){
        this.error = new Map();
       
    }

   setErr(code, description){
       return this.error.set(this, {
           code,
           description
       })
   } 


    translate(code){
        if(this.error.has(code)){
            return this.error.get(this).description
        }
        return 'Unknown error'

    }
}