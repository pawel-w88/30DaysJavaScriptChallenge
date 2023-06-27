// try {
//     // code that may throw an error
//   } catch (err) {
//     // code to be executed if an error occurs
//   } finally {
//     // code to be executed regardless of an error occurs or not
//   }

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log(err)
  };
  // ReferenceError: fistName is not defined

  try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  };

/**
 * Name of the error ReferenceError
Error message fistName is not defined
In any case I will be executed
 */
