function loadTemplate(urlTemplate,callback,method='GET',params='',cached=true) {
    cached = false;
    if (CACHE_TEMPLATES.has(urlTemplate)) {
      return callback(CACHE_TEMPLATES.get(urlTemplate));
    }else {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          if (cached) {
            CACHE_TEMPLATES.set(urlTemplate,this.responseText);
          }
          callback(this.responseText);
        }
        if (this.status === 401) {
          if (urlTemplate === 'api/login') {
            $('#loginAlert').show().fadeOut(8000);
          }
        }
      };
      if (method === 'GET' && params) {
        urlTemplate += '?' + params;
      }
      xhttp.open(method, urlTemplate, true);
      if (method === 'POST') {
        if (urlTemplate.match(/api\/save/g)) {
          xhttp.setRequestHeader('Content-Type', 'application/json');
        }else if (urlTemplate === 'api/uploadImage') {
          console.log('uploading image'); //No special content-type
        }else if (urlTemplate === 'api/uploadPDF') {
          var loading = document.getElementById("loading");
              loading.style.display = "block";
          console.log('uploading PDF'); //No special content-type
        }else {
          xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
      }
      xhttp.send(params);
    }
  }

  export {loadTemplate};