var data = []

data['screen'] = []
data['screen']['value'] = []
data['screen']['function'] = function () {
	
}
data['screen']['canvas'] = []
data['screen']['canvas']['value'] = []
data['screen']['canvas']['function'] = function () {
	document.getElementById('canvas').fillStyle = "#E5CCCC"
	document.getElementById('canvas').getContext('2d').fillRect(0, 0, document.body.clientWidth, document.body.clientHeight)
	
	document.getElementById('canvas').width = document.body.clientWidth
	document.getElementById('canvas').height = document.body.clientHeight
}
data['screen']['width'] = []
data['screen']['width']['value'] = []
data['screen']['width']['function'] = function () {
	data['screen']['width']['value'] = document.body.clientWidth
}
data['screen']['height'] = []
data['screen']['height']['value'] = []
data['screen']['height']['function'] = function () {
	data['screen']['height']['value'] = document.body.clientHeight
}
data['screen']['paint'] = []
data['screen']['paint']['value'] = []
data['screen']['paint']['function'] = function (picture, x, y) {
	document.getElementById('canvas').getContext('2d').drawImage(picture, x, y);
}

data['mouse'] = []
data['mouse']['value'] = []
data['mouse']['function'] = function () {
	
}
data['mouse']['x'] = []
data['mouse']['x']['value'] = []
data['mouse']['x']['function'] = document.addEventListener('mousemove', function(event) {
	data['mouse']['x']['value'] = event.x
})
data['mouse']['y'] = []
data['mouse']['y']['value'] = []
data['mouse']['y']['function'] = document.addEventListener('mousemove', function(event) {
	data['mouse']['y']['value'] = event.y
})
data['mouse']['left'] = []
data['mouse']['left']['click'] = []
data['mouse']['left']['click']['value'] = []
data['mouse']['left']['click']['function'] = []
data['mouse']['left']['down'] = []
data['mouse']['left']['down']['value'] = []
data['mouse']['left']['down']['function'] = document.addEventListener('mousedown', function(event) {if (event.which == 1) {
	data['mouse']['left']['click']['value'] = true
}})
data['mouse']['left']['up'] = []
data['mouse']['left']['up']['value'] = []
data['mouse']['left']['up']['function'] = document.addEventListener('mouseup', function(event) {if (event.which == 1) {
	data['mouse']['left']['click']['value'] = false
}})
data['mouse']['right'] = []
data['mouse']['right']['click'] = []
data['mouse']['right']['click']['value'] = []
data['mouse']['right']['click']['function'] = []
data['mouse']['right']['down'] = []
data['mouse']['right']['down']['value'] = []
data['mouse']['right']['down']['function'] = document.addEventListener('mousedown', function(event) {if (event.which == 3) {
	
}})
data['mouse']['right']['up'] = []
data['mouse']['right']['up']['value'] = []
data['mouse']['right']['up']['function'] = document.addEventListener('mouseup', function(event) {if (event.which == 3) {
	
}})
/*
data['mouse']['right']['contextmenu'] = []
data['mouse']['right']['contextmenu']['value'] = []
data['mouse']['right']['contextmenu']['function'] = document.addEventListener('contextmenu', function(event) {if (event.which == 3) {
	event.preventDefault()
}})
*/
data['mouse']['middle'] = []
data['mouse']['middle']['click'] = []
data['mouse']['middle']['click']['value'] = []
data['mouse']['middle']['click']['function'] = []
data['mouse']['middle']['down'] = []
data['mouse']['middle']['down']['value'] = []
data['mouse']['middle']['down']['function'] = document.addEventListener('mousedown', function(event) {if (event.which == 2) {
	data['mouse']['middle']['click']['value'] = true
}})
data['mouse']['middle']['up'] = []
data['mouse']['middle']['up']['value'] = []
data['mouse']['middle']['up']['function'] = document.addEventListener('mouseup', function(event) {if (event.which == 2) {
	data['mouse']['middle']['click']['value'] = false
}})
data['mouse']['wheel'] = []
data['mouse']['wheel']['value'] = []
data['mouse']['wheel']['function'] = document.addEventListener('wheel', function(event) {if (event.which == 2) {
	data['mouse']['wheel']['value'] = event.deltaY
}})

data['keyboard'] = []
data['keyboard']['value'] = []
	data['keyboard']['function'] = document.body.onkeydown = function(event) {
	console.log(event.which)
	//а
	if (event.which == 70) {
		data['text']['value'][data['text']['value']['length']] = 'а'
	}
	//б
	if (event.which == 188) {
		data['text']['value'][data['text']['value']['length']] = 'б'
	}
	//backspace
	if (event.which == 8) {
		data['text']['value']['length'] -= 1
	}
	//spacebar
	if (event.which == 32) {
		//console.log(data['text']['value'])
		data['text']['value'][data['text']['value']['length']] = ' '
	}
	//точка
	if (event.which == 191) {
		//console.log(data['text']['value'])
		data['text']['value'][data['text']['value']['length']] = '.'
	}
	//enter
	if (event.which == 13) {
		data['text']['speaker']['function']()
	}
}

data['picture'] = []
data['picture']['value'] = []
data['picture']['function'] = function () {
	
}
data['picture']['load'] = []
data['picture']['load']['value'] = []
data['picture']['load']['function'] = function () {
	if (data['picture']['load']['value'][0] == undefined) {
		for (var i = 0; i <= 3; i++) {
			data['picture']['load']['value'][i] = new Image();
			data['picture']['load']['value'][i].src = 'picture/' + i + '.png';
		}
	}
}
data['picture']['width'] = []
data['picture']['width']['value'] = 5
data['picture']['width']['function'] = function () {
	//data['picture']['width']['value'] = 100
}
data['picture']['height'] = []
data['picture']['height']['value'] = 5
data['picture']['height']['function'] = function () {
	//data['picture']['height']['value'] = 100
}

data['audio'] = []
data['audio']['value'] = []
data['audio']['function'] = function () {
	
}
data['audio']['load'] = []
data['audio']['load']['value'] = []
data['audio']['load']['function'] = function () {
	if (data['audio']['load']['value'][0] == undefined) {
		for (var i = 0; i <= 3; i++) {
			data['audio']['load']['value'][i] = new Audio()
			//data['audio']['load']['value'][i].preload = 'auto'
			data['audio']['load']['value'][i].src = 'audio/' + i + '.mp3'
			data['audio']['load']['value'][i].addEventListener('ended', function() {
				data['text']['position']['value'] += 1
				data['text']['speaker']['function']()
			}, true)
		}
	}
}

data['text'] = []
data['text']['value'] = []
data['text']['function'] = function (x) {
	//data['text']['value'][data['text']['value']['length']] = x
}
data['text']['position'] = []
data['text']['position']['value'] = 0
data['text']['position']['function'] = function () {
	
}
data['text']['screen'] = []
data['text']['screen']['value'] = []
data['text']['screen']['function'] = function () {
	for (var i = 0; i < data['text']['value']['length']; i ++) {
		if (data['text']['value'][i] == ' ') {
			data['screen']['paint']['function'](data['picture']['load']['value'][0], i * data['picture']['width']['value'], 0)
		}
		if (data['text']['value'][i] == 'а') {
			data['screen']['paint']['function'](data['picture']['load']['value'][1], i * data['picture']['width']['value'], 0)
		}
		if (data['text']['value'][i] == 'б') {
			data['screen']['paint']['function'](data['picture']['load']['value'][2], i * data['picture']['width']['value'], 0)
		}
		if (data['text']['value'][i] == '.') {
			data['screen']['paint']['function'](data['picture']['load']['value'][3], i * data['picture']['width']['value'], 0)
		}
	}
}
data['text']['speaker'] = []
data['text']['speaker']['value'] = []
data['text']['speaker']['function'] = function () {	
	for (var i = data['text']['position']['value']; i < data['text']['value']['length']; i ++) {				
		if (data['text']['value'][i] == ' ') {
			data['audio']['load']['value'][0].play()
			break
		}
		if (data['text']['value'][i] == 'а') {
			data['audio']['load']['value'][1].play()
			break
		}
		if (data['text']['value'][i] == 'б') {
			data['audio']['load']['value'][2].play()
			break
		}
		if (data['text']['value'][i] == '.') {
			data['audio']['load']['value'][3].play()
			break
		}
	}
}

data['timer'] = setInterval(function () {
	data['screen']['canvas']['function']()
	data['screen']['width']['function']()
	data['screen']['height']['function']()
	
	data['picture']['load']['function']()
	
	data['audio']['load']['function']()
	
	data['text']['screen']['function']()
}, 40)

