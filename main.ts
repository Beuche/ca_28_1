let anzeige: grove.TM1637;
let licht = 0
let lampe = 0
while (true) {
    licht = input.lightLevel()
    if (licht < 100) {
        lampe = 255 - licht
        basic.setLedColor(__internal.__colorNumberPicker(basic.rgbw(lampe, lampe, lampe, 0)))
    } else {
        basic.setLedColor(__internal.__colorNumberPicker(0x000000))
    }
    
    anzeige = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
    anzeige.set(7)
    anzeige.show(input.lightLevel())
}
