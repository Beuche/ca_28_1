licht=0
lampe=0
while True:
    licht=input.light_level()
    if licht<100:
        lampe=255-licht
        basic.set_led_color(__internal.__colorNumberPicker(basic.rgbw(lampe, lampe, lampe, 0)))
    else:
        basic.set_led_color(__internal.__colorNumberPicker(0x000000))
    anzeige = grove.create_display(DigitalPin.C16, DigitalPin.C17) 
    anzeige.set(7)
    anzeige.show(input.light_level())
    