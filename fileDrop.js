var fileDropJS = {
  textarea: function(element, options){
    options = options || {};
    if ( !element ) {
      elements = document.getElementsByTags("textarea");
      for(var i=0,l=elements.length; i<l; i++ ) {
        textarea(elements[i], options);
      }
      return;
    }
    element.addEventListener('drop', fileDropJS.eventListener(options), false);
  },  
  eventListener: function(options){
    return function(evt){
      evt.preventDefault();
      evt.stopPropagation();
      
      var files = evt.dataTransfer.files;
      options["callback"] =  function(text) {
        evt.target.appendChild(document.createTextNode(text));
      };
      for (var i=0,l=files.length; i<l; i++ ) {
        fileDropJS.textFileRead(files[i], options);
      }
    }
  },
  textFileRead: function(file, options) {
    if ( window.FileReader && file.type.match(/^text/) ) {
      var fileReader = new FileReader();
      fileReader.onload = function(evt) {
        options.callback(fileReader.result);
      };
      fileReader.readAsText(file, options.encoding||'UTF-8');
    }
  }
  
};
