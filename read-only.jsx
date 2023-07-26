/* --------------------------------------
Read-Only
by Aaron Troia (@atroia)
Modified Date: 7/26/23

Description: 
Startup Script that pops up a warning if InDesign file opens as "Read-Only"
Note: This script goes in Startup Scripts folder not Scripts Panel folder.

-------------------------------------- */

#targetengine "readonly"

app.addEventListener('afterOpen', function() {
   if (app.activeDocument.readOnly === true) {
      alert("WARNING: This document is Read-Only!");
   }
});


//https://stackoverflow.com/questions/23255581/need-indesign-script-to-run-on-file-open