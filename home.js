



	//ouverture nav
	function openNav(){
		document.getElementById('mySidenav').style.width = "250px";
	}
	//fermeture nav
	function closeNav(){
		document.getElementById('mySidenav').style.width = "0";
	}
	//ouverture du portfolio
	function showPortfolio(){
		document.getElementById('portfolio').style.width = "100%",
		document.getElementById('portfolio').style.height = "100%",
		document.getElementById('portfolio').style.visibility = "visible",
		document.getElementById('section2').style.visibility = "hidden";
	}
	//fermeture du portfolio
	function closePortfolio(){
		document.getElementById('portfolio').style.visibility = "hidden",
		document.getElementById('portfolio').style.width = "0",
		document.getElementById('section2').style.visibility = "visible",
		document.getElementById('portfolio').style.height = "0";
	}

	function viewCV(){
		closePortfolio();
		document.getElementById('section2').style.visibility = "hidden",
		document.getElementById('view_cv').style.width = "100%",
		document.getElementById('cross-cv').style.visibility = "visible";
	}
	function closeCv(){
		document.getElementById('section2').style.visibility = "visible",
		document.getElementById('view_cv').style.width = "0",
		document.getElementById('cross-cv').style.visibility = "hidden";
	}