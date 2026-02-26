input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . # . # .
        . # # # .
        # # . # #
        # # # # #
        # . # . #
        `)
    basic.showIcon(IconNames.Ghost)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showString("Guess what happen?")
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.SouthWest)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("Guess what happen?")
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.West)
})
basic.forever(function () {
	
})
