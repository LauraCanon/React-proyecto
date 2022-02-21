export const validate = (values) => {
  console.log(values);
  let errors = {};
  if (values.services === 'none') {
    console.log('Entro Aqui');
    errors.services = 'Debes seleccionar el servicio que deseas crear';
    console.log(errors);
    return errors;
  }
};

// if (!values.name) {
//   errors.name = 'El nombre es requerido!';
// }
// if (!values.lastName) {
//   errors.lastName = 'El apellido es requerido!';
// }
// if (!values.email) {
//   errors.email = 'El email es requerido!';
// } else if (!regex.test(values.email)) {
//   errors.email = 'Introduce una dirección de correo electrónico válida';
// }
// if (!values.password) {
//   errors.password = 'La contraseña es requerida!';
// } else if (values.password.length < 4) {
//   errors.password = 'La contrasena debe tener más de 4 caracteres';
// }
