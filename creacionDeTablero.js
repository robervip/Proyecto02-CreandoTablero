var fila1=[1,2,3,4,5,6];
var fila2=[1,2,3,4,5,6];
var fila3=[1,2,3,4,5,6];
var fila4=[1,2,3,4,5,6];
var fila5=[1,2,3,4,5,6];
var fila6=[1,2,3,4,5,6];
var color1=["red","pink","blue","yellow","white","green"];
var color2=["green","red","pink","blue","yellow","white"];
var color3=["white","green","red","pink","blue","yellow"];
var color4=["yellow","white","green","red","pink","blue"];
var color5=["blue","yellow","white","green","red","pink"];
var color6=["pink","blue","yellow","white","green","red"];

var long1=fila1.length;
var long2=fila2.length;
var long3=fila3.length;
var long4=fila4.length;
var long5=fila5.length;
var long6=fila6.length;

var fila=(fila1,fila2,fila3,fila4,fila5,fila6);
var color=(color1,color2,color3,color4,color5,color6);
var i=0;
function IniciaTablero() {
  for (let i = 0; i < long1; i++) {
    console.log(fila1[i]+" con "+color1[i]);
  }
  for (let i = 0; i < long2; i++) {
    console.log(fila2[i]+" con "+color2[i]);
  }
  for (let i = 0; i < long3; i++) {
    console.log(fila3[i]+" con "+color3[i]);
  }
  for (let i = 0; i < long4; i++) {
    console.log(fila4[i]+" con "+color4[i]);
  }
  for (let i = 0; i < long5; i++) {
    console.log(fila5[i]+" con "+color5[i]);
  }
  for (let i = 0; i < long6; i++) {
    console.log(fila6[i]+" con "+color6[i]);
  }
}
IniciaTablero();
