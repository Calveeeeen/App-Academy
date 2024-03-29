const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError{
  constructor(excessLength){
    super();
    this.name = 'MaximumLengthExceededError';
    if(excessLength){
      this.message = `Maximum length exceeded by ${excessLength}`;
    }
    else{
      this.message = "Maximum length exceeded";
    }
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
