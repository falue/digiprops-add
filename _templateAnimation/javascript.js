// ANIMATION PATHS
let pathsTarget = [
    // x%, y%, speed, smoothing, delay before animation.
    [0,10, 1000, "linear", 0],
    [90,60, 2000, "ease-in-out", 1000],
    [0,0, 500, "ease-in-out", 500],
    [50,50, 2500, "ease-in", 0]
];

let initialTarget = [50,50];

resetAnimation(document.getElementById('testAnimation'), initialTarget);

// STAGES
// initial stage
async function stage0() {
    console.log("start stage0");
	//...do stuff
	await delay(500);
    console.log("end stage0");
	//...do other stuff
}

async function stage1() {
    console.log("start stage1");
	//...do stuff
	await delay(500);
    console.log("end stage1");
	//...do other stuff
}

async function stage2(test1, test2) {
    console.log("start stage2");
    console.log(test1);
    console.log(test2);
	//...do stuff
	await delay(666);
    console.log("end stage2");
	//...do other stuff
}

async function stage3(test1) {
    console.log("start stage3");
    console.log(test1);
	//...do stuff
	await delay(666);
    console.log("end stage3");
	//...do other stuff
}