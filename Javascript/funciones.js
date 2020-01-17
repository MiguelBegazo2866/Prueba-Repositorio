function LeerSetear(){
    var elem = document.getElementById("centro");
    var theCSSprop = getComputedStyle(elem, null).getPropertyValue('height');
    var superior = (String(parseInt(theCSSprop.substring(0,(theCSSprop.length - 2))) - 16)).concat('px');
    document.getElementById("demo").innerHTML = theCSSprop;
    document.getElementById('pie').style.top = superior;
}
  