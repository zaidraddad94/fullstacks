var obj = {

}

var  asyncMap = async function(tasks, callback){
  //Your code here
 var arr =[]
 
  for(var i = 0 ; i<tasks.length  ; i++){

   await tasks[i](function (x) {
      console.log(x)

      console.log(arr.push (x))
       console.log( "xx",arr)

       // if (i==(tasks.length-1)){
       // 	callback(arr)
       // }
    })
    
  }
  console.log(  "zaid" ,arr)
    callback(arr)

};   



function wait2For2(callback){
      setTimeout(function () {
        callback(2);
      }, 200);
    }

    function wait3For1(callback){
      setTimeout(function() {
        callback(1);
      }, 300);
    }
var res;
    asyncMap([wait2For2, wait3For1], function(arr){
      res = arr;
      /* This should work regardless of order because of
       * the time it takes to execute these 2 functions
       */
      
    });

    console.log('ddd',res)