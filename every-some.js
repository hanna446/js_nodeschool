goodUsers = [{ name: "u1", id: 1}, { name: "u2", id: 2}, { name: "u3", id: 3}, { name: "u4", id: 4}, { name: "u5", id: 5}]

submittedUsers = [{ name: "u3", id: 3}, { name: "u4", id: 4}] // valid

submittedUsers = [{ name: "u3", id: 3}, { name: "u76", id: 76}, { name: "u4", id: 4}] // non-valid

// recibo la lista de usuarios validos
module.exports = function checkUsersValid(goodUsers) {
    // retorno la funcion que recibe la lista de usuarios a comparar
    return function(submittedUsers) {
    // reviso que todos los usuarios de la lista a comparar cumplan el siguente criterio
      return submittedUsers.every(function(submittedUser) {
        // si algun usuario de la lista de usuarios validos
        return goodUsers.some(function(goodUser) {
        // tiene un id igual a uno de los usuarios de la lista
          return goodUser.id === submittedUser.id //retorna verdadero
        })
      })
      // en ultimas si todos los usuarios de la lista a comparar retornaron true, toda la funcion retorna true
    }
  }
