var k = 100;
var r = 0.05;
var kn = 0;
var n = 0;
var forskel = 0;
for (n = 0; n <= 10; n++)
{

kn = k * Math.pow((1+r), n)

forskel = kn - k;
document.write("<tr>" + "<td class =" + "renteD" + ">" + n + "</td>" + "<td class =" + "renteD" + ">" + kn + "</td>" + "<td class =" + "renteD" + ">" + forskel + "</td>" + "</tr>");
}