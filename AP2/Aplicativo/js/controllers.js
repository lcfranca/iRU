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
  $scope.cadastro = function ()
  {
    //criando o usuário cadastrado.
    var rusername = document.getElementById('userName').value;
    var rmatricula = document.getElementById('matrIcula').value;
    var remail = document.getElementById('Email').value;
    var rpassword = document.getElementById('passWord').value;
    var newUser = [rusername, rmatricula, remail, rpassword];
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

  $scope.enviacadastro = function ()
  {
    //alert('Teste2');
    var rusername = document.getElementById("userName").value;
    var rmatricula = document.getElementById("matrIcula").value;
    var remail = document.getElementById("Email").value;
    var rpassword = document.getElementById("passWord").value;
    var newUser = [rusername,rmatricula,remail,rpassword];
    console.log(newUser);
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
    //criando a requisição HTTP.
      //var xhr = new XMLHttpRequest(); //trocar de XML para Json
      //var url = "server.php";
      //var newUser = [rusername,rmatricula,remail,rpassword]
      //xhr.open('POST',url,true)
      //xhr.setRequestHeader('Content-Type','application/json; charset =UTF-8')
    //enviando a requisiçã HTTP.
      //xhr.addEventList("readystatechange",processRequest,false);
      //xhr.onreadystatechange =function ()
      //{
        //if(xhr.readyState == 4 && xhr.status == 200)
        //{
          //var return_data = xhr.responseText;
          //document.getElementById('status').innerHTML = return_data;
          //alert(return_data);
        //}
      //}
      //xhr.send(JSON.stringify(newUser));
      //document.getElementById('status').innerHTML = "Processing..."
    }
}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function entrada($scope, cadastramento) {
  $scope.entrar = function (cadastramento)
  {
    //loadScript("controllers.js",enviacadastro)
    var Users = [username,matricula,email,password];
    console.log(Users);
    Users.push(newUser);
    var username = document.getElementById('username').value;
    var matricula = document.getElementById('matricula').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
      for(var i = 0; i < Users.lenght; i++) //for para comparar os dados que o usuário colocará com os dados do banco de dados
        {
          if (username == Users[i].username && matricula == Users[i].matricula && email == Users[i].email && password == Users[i].password)
          {
            alert ('Entrada confirmada com sucesso');
          }
          else
          {
            alert ('Erro na validação. Cheque novamente se os dados foram colocados de forma correta');
          }
        }
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
