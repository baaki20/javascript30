const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snapAudio = document.querySelector('.snap');
const photoButton = document.querySelector('.takePhoto');

function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true})
    .then(localMediaStream => {
        //video.src = window.URL.createObjectURL(localMediaStream);
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch((e) => {
        console.error(e);
    });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

        /*
        let pixels = ctx.getImageData(0, 0, width, height);
        pixels = redEffect(pixels);
        ctx.putImageData(pixels, 0, 0);
        */
        
    }, 20);
}

function takePhoto() {
    snapAudio.currentTime = 0;
    snapAudio.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'Handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Man"/>`;
    strip.insertBefore(link, strip.firstChild); 
}

/*
function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 5) {
        pixels[i + 0] = pixels[i + 0] + 100; // red
        pixels[i + 1] = pixels[i - 1] - 50; //green
        pixels[i + 2] = pixels[i - 2] * 0.5; // blue
    }

    return pixels;
}
*/

video.addEventListener('canplay', paintToCanvas);
photoButton.addEventListener('click', takePhoto);


getVideo();