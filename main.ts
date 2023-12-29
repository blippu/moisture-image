let index = 0
let moisture = 0
let myImage = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
led.setBrightness(2)
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogPin.P1)
    moisture = moisture / 3000 * 25
    index = 0
    for (let column = 4; column >=0 ; column--) {
        for (let row = 0; row <= 4; row++) {
            if (index <= moisture-1) {
                index++
                myImage.setPixel(row, column, true);
                myImage.showImage(0)
            }
        }
    }
basic.pause(3600000)
})
