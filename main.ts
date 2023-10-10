input.onSound(DetectedSound.Loud, function () {
    led.setBrightness(255)
    beats += 1
    if (beats == 1) {
        start_time = input.runningTime()
    }
    if (beats == 8) {
        end_time = input.runningTime()
        beat_time = (end_time - start_time) / 7
        // Stop counting beats
        // 
        input.setSoundThreshold(SoundThreshold.Loud, 255)
    }
    basic.pause(20)
    led.setBrightness(0)
})
let beat_time = 0
let end_time = 0
let start_time = 0
let beats = 0
led.setBrightness(0)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
input.setSoundThreshold(SoundThreshold.Loud, 100)
basic.forever(function () {
    if (beat_time > 0) {
        while (true) {
            led.setBrightness(255)
            music.play(music.tonePlayable(880, 20), music.PlaybackMode.UntilDone)
            led.setBrightness(0)
            basic.pause(beat_time - 20)
        }
    }
})
