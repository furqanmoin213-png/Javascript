let name = "Furqan";
let num = 1122;


//its output is 1 because of the way JavaScript handles objects and the exponentiation operator. When you use the exponentiation operator (**) with an object, JavaScript tries to convert the object to a primitive value. In this case, both {} are converted to NaN (Not-a-Number) because they cannot be converted to a meaningful number.
//When you perform NaN ** NaN, the result is 1 because any number (including NaN) raised to the power of 0 is 1. However, since both operands are NaN, JavaScript treats it as if you are raising NaN to the power of 0, which results in 1.