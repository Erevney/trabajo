//El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

let ejePromise = new Promise(function(Resolve, Reject) {
    
      Resolve();
      Reject();
    });
    ejePromise.then(
      function(value) {  },
      function(error) {  }
    );