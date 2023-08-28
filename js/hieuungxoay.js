function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hasClassName(inElement, inClassName) {
    var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
    return regExp.test(inElement.className);
}

function addClassName(inElement, inClassName) {
    if (!hasClassName(inElement, inClassName))
        inElement.className = [inElement.className, inClassName].join(' ');
}

function removeClassName(inElement, inClassName) {
    if (hasClassName(inElement, inClassName)) {
        var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
        var curClasses = inElement.className;
        inElement.className = curClasses.replace(regExp, ' ');
    }
}

function toggleClassName(inElement, inClassName) {
    if (hasClassName(inElement, inClassName))
        removeClassName(inElement, inClassName);
    else
        addClassName(inElement, inClassName);
}

function toggleShape() {
    var shape = document.getElementById('shape');
    var nuoc = document.getElementById('nuoc');
    var ctn = document.getElementById('container');
    var tiaset = document.getElementById('tiaset');
    if (hasClassName(shape, 'ring')) {
        removeClassName(shape, 'ring');
        addClassName(shape, 'cube');
        nuoc.style.display = "none";
        ctn.style.top = "0px";
        tiaset.style.display = 'none';
        var mp3 = document.getElementById('penta');
        mp3.pause();

    } else {
        removeClassName(shape, 'cube');
        addClassName(shape, 'ring');
        nuoc.style.display = "block";
        ctn.style.top = "-120px";
        tiaset.style.display = 'block';
        var mp3 = document.getElementById('penta');
        sleep(2000).then(() => {
            mp3.play();
        });

    }

    var stage = document.getElementById('stage');
    if (hasClassName(shape, 'ring'))
        stage.style.webkitTransform = 'translateZ(-200px)';
    else
        stage.style.webkitTransform = '';
}