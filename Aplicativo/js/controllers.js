angular.module('app.controllers', [])

.controller('bemVindoAAoIRuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('signupCtrl', ['$scope', '$http', '$stateParams',function ($scope,$http){ // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
//function ($scope,$http, $stateParams)
  $scope.enviacadastro = function ()
  {
    var rusername = document.getElementById("userName").value;
    var rmatricula = document.getElementById("matrIcula").value;
    var remail = document.getElementById("Email").value;
    var rpassword = document.getElementById("passWord").value;
    var newUser = [rusername,rmatricula,remail,rpassword];
    var filtro_name =  /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ' ]+$/;
    console.log(newUser);
    /*if(userName.value == "")
    {
      alert('Favor preencher o nome de usuario');
      return;
    }
    else(!filtro_name.test(userName.value))
    {
      alert('Nome de usuário pode conter apenas letras');
      return;
    }
    else if(matrIcula == "")
    {
      alert('Favor preencer sua matrícula');
      return;
    */
    var parameter = JSON.stringify({type:'newUser', username:rusername, matricula:rmatricula, email:remail, password:rpassword});
      $http.post("server.php", parameter).
        success(function(data,status,headers,config)
        {
          console.log(data);
        }).
        error(function(data,status,headers,config)
        {
          console.log("Error");
        });
        if(success=true)
        {
          //alert('Bem vindo');
        }
        else
        {
          alert('Error teste')
        }
    }
}])

.controller('loginCtrl', ['$scope', '$http', '$stateParams',function ($scope,$http){ // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  $scope.entrar = function ()
  {
    var ematricula = document.getElementById('matricula').value;
    var epassword = document.getElementById('password').value;
    var Users = [matricula,password];
    var parameter = JSON.stringify({type:'Users',matricula:ematricula,password:epassword});
      $http.post("Login.php", parameter).
        success(function(data,status,headers,config)
        {
          if(data == true){
            alert()
          }

        }).
        error(function(data,status,headers,config)
        {
          console.log("Error");
        });
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
