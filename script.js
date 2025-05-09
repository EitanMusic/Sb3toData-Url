function convertToDataURL() {
    const fileInput = document.getElementById('sb3File');
    const file = fileInput.files[0];
    
    if (!file) {
      alert('Provide a file to convert');
      return;
    }
    
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const base64 = event.target.result;
      const dataUrl = base64;
      
      
      document.getElementById('dataURL').value = dataUrl;
      
    
      document.getElementById('downloadBtn').style.display = 'inline-block';
    };
  
  
    reader.readAsDataURL(file);
  }
  
  function downloadDataURL() {
    const dataUrl = document.getElementById('dataURL').value;
  
    
    const blob = new Blob([dataUrl], { type: 'text/plain' });
    const link = document.createElement('a');
    
   
    link.download = 'sb3-data-url.SURL';
  
   
    link.href = URL.createObjectURL(blob);
  
    
    link.click();
  }
  
