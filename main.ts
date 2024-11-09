input.onGesture(Gesture.TiltLeft, function () {
    media.sendCode(media.keys(media._MediaKey.previous))
    basic.showLeds(`
        # . . # .
        # . # # .
        # # # # .
        # . # # .
        # . . # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    media.sendCode(media.keys(media._MediaKey.next))
    basic.showLeds(`
        . # . . #
        . # # . #
        . # # # #
        . # # . #
        . # . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    media.sendCode(media.keys(media._MediaKey.vol_up))
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(400)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    media.sendCode(media.keys(media._MediaKey.playPause))
    basic.showLeds(`
        # . . . #
        # # . # #
        # # # # #
        # # . # #
        # . . . #
        `)
    basic.pause(400)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    media.sendCode(media.keys(media._MediaKey.stop))
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    media.sendCode(media.keys(media._MediaKey.vol_down))
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(400)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
	
})
music.play(music.stringPlayable("E D E F G A F C ", 206), music.PlaybackMode.InBackground)
media.startMediaService()
basic.showString("MUSIC")
