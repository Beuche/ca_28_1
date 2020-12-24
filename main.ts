let licht = 0
let lampe = 0
while (true) {
    licht = input.lightLevel()
    if (licht > 50) {
        basic.setLedColor(__internal.__colorNumberPicker(0x000000))
    } else {
        basic.setLedColor(__internal.__colorNumberPicker(basic.rgbw(licht, licht, 255, 0)))
    }
    
}
