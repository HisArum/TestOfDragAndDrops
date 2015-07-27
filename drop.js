var dropJS = {
  
  eventListener: function(evt){
    var files = fileDropList(evt);
    for(var i=0,l=files.length; i<l; i++ ) {
      files[l]
    }
  },
  fileDropList: function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    
    return evt.dataTransfer.files;
  },
  textFileRead: function(file, onload) {
    if ( window.FileReader && file.type.match(/^text/) ) {
      var fileReader = new FileReader();
      fileReader.onload = onload;
      fileReader.readAsText(file);
    }
  }
};
