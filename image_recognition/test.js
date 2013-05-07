var indicator = null;
var lastNode = null;
var slideshowState = {};

function onViperReady() {
	viper.setLoggingEnabled(true);
	//viper.setBrowserBounce(false);
	//viper.setTrackingLostAnimationEnabled(false);
	viper.setHtmlResolution(6000); // 6000 px per meter, or 1000 px per 16.667 cm
	


	
	var observer = {
		onMapCreatedWithImage : function(imageId) {
			var elemId = imageId + "_node";
			
			// Show found node, hide the others
			var nodes = document.getElementsByClassName("node");
			for (var i in nodes) {
				var node = nodes[i];
				if (node.id == elemId) {
					onNodeFound(node.id);
					node.style.display = "block";
				}
				else {
					node.style.display = "none";
				}
			}
		},
		
		onMapDiscarded : function() {
			// Map was discarded
		},
		
		onTrackingLost : function() {
			// Tracking was lost
			onNodeLost();
		},
		
		onTrackingDisabled : function() {
			onNodeLost();
		}
		
	}
	
	viper.setObserver(observer);
}

function onAppLoaded() {
	indicator = document.getElementById("indicator");
	
	showInfobox();
}

function onNodeLost() {
	indicator.className = "";
	
	if (lastNode == "p2_ballinvasion") {
		stopSlideshow();
	}
}

function onNodeFound(nodeId) {
	lastNode = nodeId;
	indicator.innerHTML = "Found " + nodeId;
	indicator.className = "visible";
	
	// Add a custom action to this specific node
	if (nodeId == "p2_ballinvasion_node") {
		startSlideshow();
	}
}

function startSlideshow() {
	var elem = document.getElementById("ballinvasion_slideshow"); 
	var images = elem.getElementsByTagName("img");
	
	// Restore
	if (slideshowState.timerId) {
		clearInterval(slideshowState.timerId);
	}
					
	for (var i in images) {
		var n = images[i];
		n.className = "";
	}
	
	// Set an interval
	var timerId = setInterval(function() {
							  
		var currentIndex = slideshowState.currentIndex;
		
		if (currentIndex < 0) {
			clearInterval(slideshowState.timerId);
			return;
		}
		var n = slideshowState.images[currentIndex];
		n.className = "hidden";
		slideshowState.currentIndex--;
	}, 1500);
	
	// Create a global state structure		
	slideshowState = {
		elem : elem,
		images : images,
		count : images.length,
		currentIndex : images.length-1,
		timerId : timerId,
	}				
}

function stopSlideshow() {
	if (slideshowState.timerId) {
		clearInterval(slideshowState.timerId);
	}
}

function showInfobox() {
	// Shows a little infobox containing some basic information on what this web app is all about
	//common.showStartupInfo($("#appinfo").html(), onStartupInfoDone);
	onStartupInfoDone();
}

function onStartupInfoDone() {
	// This will initiate the SLAM initialization. When a map is created,
	// onMapCreated in the callback structure will be called.
	
	viper.log("begin.......onStartupInfoDone...");
	viper.log("begin..333...");
	//添加target图片
	var targetImages = [
	"testimg1"			
	];
	
	
	for (var i in targetImages) {
		viper.log("begin..111...");
		var id = targetImages[i];
		var value = document.getElementById(id);
		viper.log("onStartupInfoDone:"+viper.activateReferenceImage(id));
	}
	viper.log("begin..222...");
	
	viper.requireRealityMap();
}


function findfun1() {
	
viper.log("begin..findfun1...");



	var targetImages = [				
	"testimg1"					
	];

	if(viper.deactivateReferenceImage){

		viper.log("viper:deactivateReferenceImage............");
		// 	viper.deactivateReferenceImage(id);
	}
	
	

	for (var i in targetImages) {
		var id = targetImages[i];
		viper.log("fun1:"+id);	


		var value = document.getElementById(id);
		viper.log("before:"+value.href);
		value.href = "http://jackwee.github.io/pointcloud/333.jpg";
		viper.log("after:"+value.href);					
		viper.activateReferenceImage(id);
		
	}
	
	//viper.requireRealityMap();
}
function findfun2() {
	
viper.log("begin..findfun2...");

	var targetImages = [				
	"testimg1"							
	];
	
	for (var i in targetImages) {
		/*var id = targetImages[i];	
		viper.log("fun2:"+id);	

		var value = document.getElementById(id);	
		viper.log("before:"+value.href);
		value.href = "http://jackwee.github.io/pointcloud/222.jpg";
		viper.log("after:"+value.href);					
		viper.activateReferenceImage(id);*/
	}
	
	//viper.requireRealityMap();
}

function resetButton() {
	
viper.log("begin..resetButton...");
viper.log(viper.getDeviceName());
viper.deactivateAllReferenceImages();
viper.resetRealityMap();
}

//每次打印10条属性
var number=0;
function log10(objectToLog){
	
	viper.log("number:==================================================================="+number);
	number += 10;
	var indexNum = 0;
	
//打印viper中所有属性
for (var i in objectToLog) {
	if ((indexNum >= (number - 10)) &&(indexNum < number)){
	viper.log(i);
	viper.log(objectToLog[i]);
	viper.log("..........................");
	};
	indexNum++;
	
};

	

}

//有86个属性
function logViper(){
	log10(viper);
}


