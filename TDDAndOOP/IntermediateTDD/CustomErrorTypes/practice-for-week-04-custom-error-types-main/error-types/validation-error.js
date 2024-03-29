// Your code here
class ValidationError extends Error{
  constructor(message){
    super(message || 'Invalid input');
    this.name = "ValidationError";
    Error.captureStackTrace(this, ValidationError)

  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
