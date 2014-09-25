var setStatus = function(status){
    $("#status").text(status);
}


// Top-level continuation
var topK = function(x){
    console.log(x);
};

// Global store
var globalStore = {};

// Update link data, signal reordering and rerendering
var processLinkScores = function(scores){          
    // Update link data
    for (var i=0; i < scores.length; i++) {
        linkData[i].score = scores[i];
    }
    // Rerender list of links
    linkList.setProps({links: linkData});
}

// Run inference to get new link scores
var runPredictor = function(){
    setStatus("Running predictor...");
    var start = new Date().getTime();
    console.log(pastUsers.concat([currentUser]));
    predict(
        globalStore,
        function(store, scores){
            var end = new Date().getTime();
            var time = end - start;
            console.log((time / 1000).toString() + " seconds");
            setStatus("Predictor done.");
            processLinkScores(scores);
            console.log(scores)
        },
        "", // address
        numLinks,
        numUserTypes,
        pastUsers.concat([currentUser]))
}      

// Load, compile and evaluate model code
setStatus("Loading model code...");
$.ajax({
    url: "models/rerank.wppl",
    success: function (modelCode){          
        setStatus("Compiling model...");
        var compiled = webppl.compile(modelCode, true);
        setStatus("Evaluating model...")
        eval.call(window, compiled);              
        runPredictor();
    }
});
