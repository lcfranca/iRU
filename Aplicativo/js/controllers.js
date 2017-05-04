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
    var rusername;
    var rmatricula;
    var remail;
    var rpassword;
    var filtro_name =  /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ' ]+$/;
    var filtro_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var filtro_matricula = /^[0-9 /]+$/;

    /*$scope.validanome = function ()
    {*/
      caixa_name = document.querySelector('.msg-name');
      caixa_name.style.display = 'none';
      if(userName.value == "")
      {
        caixa_name.innerHTML = "<div class='alert alert-danger' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Favor preencher o nome de usuário</div>";
        caixa_name.style.display = 'block';
        //alert('Favor preencher o nome de usuario');
        return;
      }
      else
        if(!filtro_name.test(userName.value))
        {
          caixa_name.innerHTML = "<div class='alert alert-danger' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Nome de usuário pode conter apenas letras</div>";
          caixa_name.style.display = 'block';
          //alert('Nome de usuário pode conter apenas letras');
          return;
        }
        else
          {
            if (userName.value.length < 7)
            {
              caixa_name.innerHTML = "<div class='alert alert-danger' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Nome de usuário deve conter no mínimo 7 caracteres</div>";
              caixa_name.style.display = 'block';
              //alert('Nome de usuário deve conter no mínimo 7 caracteres');           
              return;
            }
            else rusername = document.getElementById("userName").value;
          }
    //}
      caixa_matricula = document.querySelector('.msg-matricula');
      caixa_matricula.style.display = 'none'; 
      if(matrIcula.value == "")
      {
        caixa_matricula.innerHTML = "<div class='alert alert-danger' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Favor preencher sua matrícula</div>";
        caixa_matricula.style.display = 'block';
        //alert('Favor preencer sua matrícula');
        return;
      }
      else
      {
        if(!filtro_matricula.test(matrIcula.value))
        {
          caixa_matricula.innerHTML = "<div class='alert alert-danger' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Preencha a matrícula apenas com números</div>";
          caixa_matricula.style.display = 'block';
          //alert('Preencha a matrícula apenas com números')
          return;
        }
        else
        {
          if(matrIcula.value.length != 10)
          {
            caixa_matricula.innerHTML = "<div class='alert alert-danger' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Matricula inválida. Matricula deve possuir 9 caracteres</div>";
            caixa_matricula.style.display = 'block';
            //alert('Escreva a matrícula por completo')
            return;
          }
          else rmatricula = document.getElementById("matrIcula").value;
        }
      }

      caixa_email = document.querySelector('.msg-email');
      caixa_email.style.display = 'none'; 
      if(Email.value == "")
      {
        caixa_email.innerHTML = "<div class='alert alert-danger' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Digite um email</div>";
        caixa_email.style.display = 'block';
        //alert('Digite um email')
        return;
      }
      else
      {
        if(!filtro_email.test(Email.value))
        {
          caixa_email.innerHTML = "<div class='alert alert-danger' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>O email não está no formato correto</div>";
          caixa_email.style.display = 'block';
          //alert ('O email não está no formato correto')
          return;
        }
        else remail = document.getElementById("Email").value;
      }

      caixa_password = document.querySelector('.msg-password');
      caixa_password.style.display = 'none'; 
      if(passWord.value == "")
      {
        caixa_password.innerHTML = "<div class='alert alert-danger' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Digite uma senha de pelo menos 6 dígitos</div>";
        caixa_password.style.display = 'block';
        //alert('Digite uma senha de pelo menos 6 dígitos')
        return;
      }
        if(passWord.value.length < 6)
        {
          caixa_password.innerHTML = "<div class='alert alert-danger' role='alert'> <span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>Senha muito curta</div>";
          caixa_password.style.display = 'block';
          //alert('Senha muito curta')
          return;
        }
        else rpassword = document.getElementById("passWord").value;

    var newUser = [rusername,rmatricula,remail,rpassword];
    var parameter = JSON.stringify({type:'newUser', username:rusername, matricula:rmatricula, email:remail, password:rpassword});
      $http.post("server.php", parameter).
        success(function(data,status,headers,config)
        {
          console.log(data);
        }).
        error(function(data,status,headers,config)
        {
          console.log("Error");
        })
        if(success=true)
        {
          alert('Bem vindo');
        }
        else
        {
          alert('Error')
        }
    }
}])

.controller('loginCtrl', ['$scope','$http','$stateParams','$state',function ($scope,$http,$stateParams,$state){ // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  $scope.entrar = function()
  {
    var filtro_matricula = /^[0-9 /]+$/;
    var ematricula = document.getElementById('matricula').value;
    var epassword = document.getElementById('password').value;
    if(matricula.value == "")
    {
      alert('Favor preencer sua matrícula');
      return;
    }
    else
      {
      if(!filtro_matricula.test(matricula.value))
        {
        alert('Preencha a matrícula apenas com números')
        return;
        }
      else
        {
        if(matricula.value.length != 10)
        {
          alert('Matricula inválida. Matricula deve possuir 9 caracteres')
          return;
        }
        else rmatricula = document.getElementById("matricula").value;
        }
      }
      if(password.value == "")
      {
        alert('Digite uma senha de pelo menos 6 dígitos')
        return;
      }
        if(password.value.length < 6)
        {
          alert('Senha muito curta')
          return;
        }
        else rpassword = document.getElementById("password").value;
        var Users = [matricula,password];
        var parameter = JSON.stringify({type:'Users',matricula:ematricula,password:epassword});
        $http.post("Login.php", parameter).
        success(function(data,status,headers,config)
        {
          if(data == true)
          {
            $state.go("menu");
          }
          else
          {
            if(data == false)
            {
              alert("Matrícula ou senha inválidas");
            }
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
