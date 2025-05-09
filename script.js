function convertToDataURL() {
    const fileInput = document.getElementById('sb3File');
    const file = fileInput.files[0];
    
    if (!file) {
      alert('Please select a file to convert.');
      return;
    }
    
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const base64 = event.target.result;
      const dataUrl = base64; // File is already base64-encoded in `reader.result`
      
      // Display the data URL in the textarea
      document.getElementById('dataURL').value = dataUrl;
      
      // Show the download button
      document.getElementById('downloadBtn').style.display = 'inline-block';
    };
  
    // Read the file as a data URL (Base64)
    reader.readAsDataURL(file);
  }
  
  function downloadDataURL() {
    const dataUrl = document.getElementById('dataURL').value;
  
    // Create a Blob with the data URL content
    const blob = new Blob([dataUrl], { type: 'text/plain' });
    const link = document.createElement('a');
    
    // Set the download attribute with the filename
    link.download = 'sb3-data-url.txt';
  
    // Create an object URL for the Blob and set it as the link's href
    link.href = URL.createObjectURL(blob);
  
    // Programmatically click the link to trigger the download
    link.click();
  }
  
