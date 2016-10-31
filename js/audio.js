var dragDrop = function(drag, drop){
	var drag = document.getElementById(drag);
	var drop = document.getElementById(drop);
	drag.ondragstart = function(e){
	e.dataTransfer.setData("content", e.target.id);
	}
	drop.ondragover = function(e){
		e.preventDefault();
	}
	drop.ondrop = function(e){
		var id = e.dataTransfer.getData("content");
		e.target.appendChild(document.getElementById(id));
		var parrafo = document.getElementById("parrafo");
		parrafo.style.display="none";
	    var temporal = this.innerHTML;
		var reproductor = document.getElementById("reproductor");
		reproductor.src = "audio/" + id + ".mp3";
		reproductor.load();
		reproductor.play();
		e.target.appendChild(document.getElementById(data));

    }
};
dragDrop("drag1", "drop");
dragDrop("drag2", "drop");
dragDrop("drag3", "drop");
dragDrop("drag4", "drop");
dragDrop("drag5", "drop");
dragDrop("drag6", "drop");






