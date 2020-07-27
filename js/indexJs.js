$(document).ready(function(){
	
	//多幅背景图片切换
	function backgroundImageToggle(){
		var imageArray = ["pub_80.jpg","pub_81.jpg","pub_82.jpg","pub_83.jpg","pub_84.jpg","pub_85.jpg","pub_86.jpg","pub_87.jpg","pub_88.jpg","pub_89.jpg","pub_90.jpg","pub_91.jpg","pub_92.jpg","pub_93.jpg","pub_94.jpg","pub_95.jpg","pub_96.jpg","pub_97.jpg","pub_98.jpg","pub_99.jpg","pub_100.jpg"];
			imageArrayNumber = (imageArray.length)-1,
			randomBgIndex = Math.round(Math.random()*imageArrayNumber),
			toggleImage = "./images/",
			toggleImageURL = toggleImage + imageArray[randomBgIndex];
			$("body").css({"background-image":"url("+toggleImageURL+")"});
			var imageArrayNumber = (imageArray.length)-1,
				randomBgIndex = Math.round(Math.random()*imageArrayNumber),
				toggleImage = "./images/",
				toggleImageURL = toggleImage + imageArray[randomBgIndex];
			$("body").css({"background-image":"url("+toggleImageURL+")"});
	}
	
	setInterval(backgroundImageToggle,5000)

})
