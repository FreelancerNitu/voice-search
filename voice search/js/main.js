
      // Create a new instance of the SpeechRecognition object
      const recognition = new webkitSpeechRecognition();
      
      // Set the language to English
      recognition.lang = 'en-US';
      
      // Define a function to handle the recognition result
      recognition.onresult = function(event) {
        // Get the transcript of the speech recognition result
        const transcript = event.results[0][0].transcript;
        
        // Do something with the transcript, e.g. submit a search query
        document.getElementById('search-box').value = transcript;
        document.getElementById('search-form').submit();
      };
      
      // Define a function to start the speech recognition
      function startRecognition() {
        recognition.start();
      }