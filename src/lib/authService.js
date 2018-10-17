import axios from 'axios';
import swal from 'sweetalert2'
// import { Redirect } from 'react-router-dom';
const baseurl = `http://localhost:3000/auth/`

export const newUser = (username,password, role, nombre, ap_paterno, ap_materno, mail )=> {
  // console.log("Dentro del newUser", username, password, role);
  return axios
  .post(`${baseurl}signup`,{username, password, role, nombre, ap_paterno, ap_materno, mail})
  .then(res => {
      
    swal({
      type: 'success',
      title: 'Usuario registrado',
      text: res.data.username
    })
    return res
  })
  .catch(error => {
    console.log(error)
  })
}


export const loginUser = (username,password) => {
  return axios
  .post(`${baseurl}login`,{username,password})
  .then(res => {
  
    swal({
      type: 'success',
      title: 'Bienvenido ',
      text: res.data.username
    })
    return res
  })
  .catch(error => {

    swal({
      type: 'error',
      title: 'Error en la autenticacion',
      text: error
    })
  
    console.log(error)
  })
}

export const logoutUser = () => {
  return axios  
  .get(`${baseurl}logout`)
  .then(localStorage.removeItem('data'))
  .then(document.location.reload())
  .then(res => {
      
    swal({
      type: 'success',
      title: 'Hasta luego',
      text: res.data.username
    })
    return res
  })
  .catch(error => {
    console.log(error)
  })
}