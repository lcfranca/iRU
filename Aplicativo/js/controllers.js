angular.module('app.controllers', [])

.controller('bemVindoAAoIRuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.cadastro = function ()
  {
    //criando o usuário cadastrado.
    var rusername = document.getElementById("userName").value;
    var rmatricula = document.getElementById("matrIcula").value;
    var remail = document.getElementById("Email").value;
    var rpassword = document.getElementById("passWord").value;
    var newUser = [rusername,rmatricula,remail,rpassword];
    //criando a requisição HTTP.
      //var xhr =  new XMLHttpRequest(); //trocar de XML para Json
      //xhr.open('POST','localhost','Users',true)
      //xhr.setRequestHeader('Content-Type','application/json; charset =UTF-8')
    //enviando a requisiçã HTTP.
      //xhr.send(JSON.stringify(cadastro));
      //xhr.addEventList("readystatechange",processRequest,false);
      //xhr.onreadystatechange = processRequest;
      //function processRequest()
      //{
        //if(xhr.readyState == 4 && xhr.status == 200)
        //{
          //alert('Cadastro efetuado com sucesso');
        //}
      //}
    //return true;
    //enviacadastro(cadastro);
    console.log(newUser);
    return newUser;
  }
  $scope.enviacadastro = function(cadastro)
  {
    alert('Teste2');
    //criando a requisição HTTP.
      var xhr =  new XMLHttpRequest(); //trocar de XML para Json
      xhr.open('POST','localhost','Users',true)
      xhr.setRequestHeader('Content-Type','application/json; charset =UTF-8')
    //enviando a requisiçã HTTP.
      xhr.send(JSON.stringify(cadastro));
      xhr.addEventList("readystatechange",processRequest,false);
      xhr.onreadystatechange = processRequest;
      function processRequest()
      {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
          alert('Cadastro efetuado com sucesso');
        }
      }
    return true;
  }
}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.entrar = function ()
  {
    var Users = [username,matricula,email,password];
    console.log(Users);
    Users.push(newUser);
    var username = document.getElementById('username').value;
    var matricula = document.getElementById('matricula').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
      //for() for para comprar os dados que o usuário colocará com os dados do banco de dados
  }
}])

.controller('inicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
