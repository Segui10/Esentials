

function loadData(server,type,value){
  console.log("http://"+server+":8069/esential/json?"+type+"="+value);
  var xmlhttp = new XMLHttpRequest();
    var url = "http://"+server+":8069/esential/json?"+type+"="+value;
    let that=this;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return JSON.parse(this.responseText);
            console.log(1);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader('Content-Type', 'text/plain');
    xmlhttp.send();
}
  export {loadData};