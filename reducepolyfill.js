if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function (callback, initial) { 
      
            // Variable  result to store result 
         
            let result = initial; 
      
            for (let i = 0; i < this.length; i++) { 
                  
                // If the initialValue exists, we call 
                // the callback function on the existing 
                // element and store in result 
                if (result) { 
                    result = callback.call( undefined,
                        result, this[i], i, this); 
                      
                    // If initialValue does not exist,  
                    // we assign result to the 
                    // current element of the array 
                } 
                else { 
                    result = this[i]; 
                } 
            } 
      
            // We return result
            return result; 
        } 
    }
       
       
