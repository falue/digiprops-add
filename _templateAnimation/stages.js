let stage = 0;

async function nextStage(delayMs, arguments) {
	await delay(delayMs);
	stage++;
    arguments = arguments ? arguments : "";
	playStage(stage, arguments);
}

function playStage(currentStage, arguments) {
    stage = currentStage;
    arguments = arguments ? arguments : "";
    /* console.log(currentStage); */
	executeFunctionByName("stage"+currentStage, arguments);
}


function executeFunctionByName(functionName, arguments) {   //, args * context, 
    try {
        window[functionName](...arguments.split(", "));
      } catch (error) {
          // Reset to stage 0
          stage = 0;
          playStage(stage);
          /* console.error(error); */
      }
      
    /* var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args); */
}


// https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string
/* 
async function fun1(element) {
    await delay(1000);
    scrollToTop('article');
    swap(element.id, 'img2');
    changeTitle('INSTAGRAM - Blocked Messages');
}
*/