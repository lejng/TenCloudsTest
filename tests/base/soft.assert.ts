import {assert} from 'chai';

export class SoftAssert {
    private errors : Array<string> = []

    assertContains(fullValue: string, partValue: string, message: string){
           if(!fullValue.includes(partValue)){
               this.errors.push(`${message}, '${fullValue}' do not contains '${partValue}'`)
           }
    }

    softAssertAll(){
        if(this.errors.length != 0){
            let errorMessage = this.errors.join("\n");
            assert.fail(errorMessage);
        }
    }
}
