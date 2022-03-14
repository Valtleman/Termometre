input.onButtonPressed(Button.A, function () {
    serial.writeLine("" + (input.temperature()))
    serial.writeLine("celsius")
    basic.showString("" + (input.temperature()))
    basic.showString("celsius")
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() >= 25) {
        serial.writeLine("No fa falta jaqueta")
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        serial.writeLine("¡Agafa la jaqueta!")
        basic.showLeds(`
            . # # # .
            # # # # #
            . . # . .
            # . # . .
            # # # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() >= 25) {
        serial.writeLine("" + (input.temperature()))
        basic.showIcon(IconNames.Happy)
    } else {
        serial.writeLine("" + (input.temperature()))
        basic.showIcon(IconNames.Sad)
    }
})
