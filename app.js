const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {


  ffmpeg('video_answer.webm')
    .inputOptions(['-fflags', '+genpts', '-r', '24',])
    .addOutput('test.mp4')
    .on('start', (commandLine) => console.log('Spawned Ffmpeg with command: ' + commandLine))
    .on('progress', (progress) => console.log('Processing: ' + progress.currentKbps + 'kb done @ ' + progress.currentFps + ' fps'))
    .on('error', (err) => {
      console.log('An error occurred: ' + err.message)
      res.send("Sorry There is error ❌")
    })
      .on('end', () => {

        console.log('end')
        res.send("Yup It Works : ✨✨❤🐱‍🐉✔")
      })
    
    .run()
    
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// console.log('start')


  


// console.log('done')
// configuration: --enable-gpl --enable-version3 --enable-sdl2 --enable-fontconfig --enable-gnutls --enable-iconv --enable-libass --enable-libbluray --enable-libfreetype --enable-libmp3lame --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libopenjpeg --enable-libopus --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libtheora --enable-libtwolame --enable-libvpx --enable-libwavpack --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxml2 --enable-libzimg --enable-lzma --enable-zlib --enable-gmp --enable-libvidstab --enable-libvorbis --enable-libvo-amrwbenc --enable-libmysofa --enable-libspeex --enable-libxvid --enable-libaom --enable-libmfx --enable-amf --enable-ffnvcodec --enable-cuvid --enable-d3d11va --enable-nvenc --enable-nvdec --enable-dxva2 --enable-avisynth --enable-libopenmpt

// configuration: --enable-gpl --enable-version3 --enable-static --disable-debug --disable-ffplay --disable-indev=sndio --disable-outdev=sndio --cc=gcc-6 --enable-fontconfig --enable-frei0r --enable-gnutls --enable-gray --enable-libaom --enable-libfribidi --enable-libass --enable-libvmaf --enable-libfreetype --enable-libmp3lame --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libopenjpeg --enable-librubberband --enable-libsoxr --enable-libspeex --enable-libvorbis --enable-libopus --enable-libtheora --enable-libvidstab --enable-libvo-amrwbenc --enable-libvpx --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxml2 --enable-libxvid --enable-libzimg


