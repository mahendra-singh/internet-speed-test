    SomApi.account = "SOM56898b03137f4";   //your API Key here
    SomApi.domainName = "mahendra.com.au";      //your domain or sub-domain here
    SomApi.config.sustainTime = 4;
    SomApi.onTestCompleted = onTestCompleted;
    SomApi.onError = onError;
    SomApi.onProgress = onProgress;

    // var msgDiv = document.getElementById("msg");

    SomApi.startTest();

    function onProgress(progress) {
      $("#progress").text(progress.type);
      $("#pass").text(progress.pass);
      $("#percentage").text(progress.percentDone + "%");
      $("#current").text(progress.currentSpeed + " Mbps");
      console.debug(progress);
      }

    function onTestCompleted(testResult) {

        $('.progressing').fadeOut('fast');
        $('.complete').fadeIn();

        var chartDownload = c3.generate({
            bindto: "#download",
            data: {
                columns: [
                    ['data', testResult.download]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
               label: {
                   format: function(value, ratio) {
                       return value;
                   },
                   show: true // to turn off the min/max labels.
               },
               min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
               max: 50, // 100 is default
               units: ' Mbps',
               width: 10 // for adjusting arc thickness
            },
            color: {
                pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
                threshold: {
                    unit: 'value', // percentage is default
                    max: 50, // 100 is default
                    values: [5, 15, 30, 50]
                }
            },
            size: {
                height: 60
            }
        });

        var chartUpload = c3.generate({
            bindto: "#upload",
            data: {
                columns: [
                    ['data', testResult.upload]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
               label: {
                   format: function(value, ratio) {
                       return value;
                   },
                   show: true // to turn off the min/max labels.
               },
               min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
               max: 5, // 100 is default
               units: ' Mbps',
               width: 10 // for adjusting arc thickness
            },
            color: {
                pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
                threshold: {
                    unit: 'value', // percentage is default
                    max: 5, // 100 is default
                    values: [0, 1, 2, 5]
                }
            },
            size: {
                height: 60
            }
        });

        $("#latency").text(testResult.latency+" ms");
        $("#testServer").text(testResult.testServer);

        $(".copyDataResult").html("Download: "   +testResult.download +"Mbps <br/>"+"Upload: "     +testResult.upload   +"Mbps <br/>"+"Latency: "    +testResult.latency  +"ms <br/>"+"Jitter: "     +testResult.jitter   +"ms <br/>"+"Test Server: "+testResult.testServer +"<br/>"+"IP: "         +testResult.ip_address +"<br/>"+"Hostname: "   +testResult.hostname +"<br/>");


        // copy clipboard

        $(".copyData").on('click',function(ev){
          var data = $(".copyDataResult");
          var bkp = data.value;
          console.log('data value',bkp);
          data.select();
          document.execCommand('copy');
          data.value = bkp;
        });


        // var copyClipboardBtn = document.querySelector('.copyData');

        // copyClipboardBtn.addEventListener('click', function(event) {
        //   // Select the div text
        //   var data = document.querySelector('.copyDataResult');
        //   var range = document.createRange();
        //   range.selectNode(data);
        //   window.getSelection().addRange(range);

        //   try {
        //     // Now that we've selected the anchor text, execute the copy command
        //     var successful = document.execCommand('copy');
        //     var msg = successful ? 'successful' : 'unsuccessful';
        //     console.log('Copy command was ' + msg);
        //   } catch(err) {
        //     console.log('Oops, unable to copy');
        //   }

        //   // Remove the selections - NOTE: Should use
        //   // removeRange(range) when it is supported
        //   window.getSelection().removeAllRanges();
        // });



    }

    function onError(error) {
        $('.checkInternetConnection').text("Error "+ error.code + ": "+error.message).show();
    }





