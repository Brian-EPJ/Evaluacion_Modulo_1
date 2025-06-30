$(document).ready(function () {
  // Validación del formulario
  $('#contactoForm').on('submit', function (e) {
    e.preventDefault();

    let nombre = $('#nombre').val().trim();
    let email = $('#email').val().trim();
    let mensaje = $('#mensaje').val().trim();

    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, completa todos los campos.');
    } else {
      // Oculta solo este formulario
      $(this).slideUp(300, function () {
        $('<div class="alert alert-success">¡Gracias por tu mensaje!</div>')
          .hide()
          .insertAfter('#contactoForm')
          .fadeIn(600);
      });
    }
  });
  
  // Test de seguridad
  $('#testSeguridad').on('submit', function (e) {
    e.preventDefault();
    let respuesta1 = $('#pregunta1').val();

    if (respuesta1 === 'correcta') {
      $('#resultadoTest')
        .hide()
        .html('<div class="alert alert-success">¡Correcto! Sabes proteger tus contraseñas.</div>')
        .fadeIn(500);
    } else {
      $('#resultadoTest')
        .hide()
        .html('<div class="alert alert-danger">Respuesta incorrecta. Intenta mejorar tu seguridad.</div>')
        .fadeIn(500);
    }
  });

  // Mostrar/ocultar sección de prácticas (efecto opcional)
  $('.list-group-item').on('click', function () {
    $(this).toggleClass('bg-success text-white');
  });
});

$(document).ready(function () {
  $('#testSeguridad').on('submit', function (e) {
    e.preventDefault();

    let correctas = 0;

    // Recorremos todas las preguntas
    for (let i = 1; i <= 6; i++) {
      let respuesta = $(`#pregunta${i}`).val();
      if (respuesta === 'correcta') {
        correctas++;
      }
    }

    let mensaje;
    if (correctas === 6) {
      mensaje = `<div class="alert alert-success">¡Excelente! Respondiste correctamente todas las preguntas (${correctas}/6).</div>`;
    } else if (correctas >= 4) {
      mensaje = `<div class="alert alert-warning">¡Bien! Pero podrías mejorar. Aciertos: ${correctas}/6</div>`;
    } else {
      mensaje = `<div class="alert alert-danger">Atención: solo ${correctas}/6 respuestas correctas. Revisa los consejos de seguridad.</div>`;
    }

    $('#resultadoTest').hide().html(mensaje).fadeIn();
  });
});
