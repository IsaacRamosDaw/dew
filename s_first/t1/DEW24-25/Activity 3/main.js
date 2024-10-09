//write your JS code here:
// ej1
// Abre pestaña, 
// arg -> 1 - url
// arg -> 2 - name
// arg -> 3 - size
function ej1(){
  window.open('', '','width=200, height=100');
}

function ej2(){
  window.open('', 'MsgWindow','');
  window.document.write('hey Socio');
}

function ej3(){
  window.open('', 'MsgWindows', ''); 
  window.document.write('some other text');
}

// miriam
function ej3_miriam(){
  window.document.location.replace('https://www.google.com');
}
function ej6(){
  let window = window.open('https://www.google.com');
  window.close;
}
// miraim
function ej6_miriam(){
  let tempWindow = window.open('','tempoWindow','');
  setTimeout(() => {
    tempWindow.close;
  }, 2000);
}
function ej7(){
  let openerWindow = window.open('', '', '');
  openerWindow.opener.document.write('some window text');
}
function ej8(){
  let iframe = document.createElement('iframe');
  iframe.src = 'iframe.html';
  document.body.appendChild(iframe);
  iframe.onload = () => {
    let iframeDoc = iframe.contentDocument;
    iframeDoc.write('some text');
  }
}

function ej9(){
  let iframe2 = document.createElement('iframe');
  iframe2.src = 'iframe.html'; // Asegúrate de que existe
  document.body.appendChild(iframe2); // se añade el iframe al cuerpo del documento
  iframe.onload = () => { //cargamos el iframe
      let iframeDoc = iframe2.contentDocument || iframe2.contentWindow.document;
      console.log(iframeDoc.body.innerHTML);
  };
}
