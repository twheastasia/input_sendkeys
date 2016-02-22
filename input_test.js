
casper.test.begin('test input with sendkeys function', 1, function suite(test){
    
  casper.start('test_input.html', function(){
    console.log('start test');
    test.assert(true);

  });

  casper.then(function(){

  });

  casper.run(function(){
    test.done();
  });


});
