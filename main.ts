function check_temperature () {
    if (input.temperature() > 22) {
        basic.showString("calor")
    } else {
        basic.showString("fred")
    }
}
function alarm_clock () {
    if (input.lightLevel() > 200) {
        music.setBuiltInSpeakerEnabled(true)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music.setBuiltInSpeakerEnabled(true)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.UntilDone)
    } else {
        music.setBuiltInSpeakerEnabled(false)
    }
}
basic.forever(function () {
    check_temperature()
    alarm_clock()
})
