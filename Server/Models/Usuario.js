// Usuario.js
class Estudiante {
  constructor(Id, Nombre, Email, Contraseña, ID_Universidad, Matricula, Indice, ID_Carrera) {
    this.Id = Id;
    this.Nombre = Nombre;
    this.Email = Email;
    this.Contraseña = Contraseña;
    this.ID_Universidad = ID_Universidad;
    this.Matricula = Matricula;
    this.Indice = Indice;
    this.ID_Carrera = ID_Carrera;
  }

  // Métodos getter y setter para acceder a las propiedades del estudiante

  getId() {
    return this.Id;
  }

  setId(Id) {
    this.Id = Id;
  }

  getNombre() {
    return this.Nombre;
  }

  setNombre(Nombre) {
    this.Nombre = Nombre;
  }

  getEmail() {
    return this.Email;
  }

  setEmail(Email) {
    this.Email = Email;
  }

  getContraseña() {
    return this.Contraseña;
  }

  setContraseña(Contraseña) {
    this.Contraseña = Contraseña;
  }

  getIDUniversidad() {
    return this.ID_Universidad;
  }

  setIDUniversidad(ID_Universidad) {
    this.ID_Universidad = ID_Universidad;
  }

  getMatricula() {
    return this.Matricula;
  }

  setMatricula(Matricula) {
    this.Matricula = Matricula;
  }

  getIndice() {
    return this.Indice;
  }

  setIndice(Indice) {
    this.Indice = Indice;
  }

  getIDCarrera() {
    return this.ID_Carrera;
  }

  setIDCarrera(ID_Carrera) {
    this.ID_Carrera = ID_Carrera;
  }
}

export default Estudiante;
