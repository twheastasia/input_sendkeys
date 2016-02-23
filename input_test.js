
casper.test.begin('test input with sendkeys function', 2, function suite(test){
    
  casper.start('test_input.html', function(){
    console.log('start test');
    test.assert(true);

  });

  casper.then(function(){
    this.sendkeys("input#ipt1", "13816512479");
  });

  casper.then(function(){
    test.assertHasText("13816512479");
  });

  casper.run(function(){
    test.done();
  });


});
