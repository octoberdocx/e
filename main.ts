input.onButtonPressed(Button.A, function () {
    Fail = 0
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Fail)
    basic.pause(500)
})
let Fail = 0
Fail = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        Fail += 1
        basic.showNumber(Fail)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.clearScreen()
    }
})
