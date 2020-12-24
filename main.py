licht=0
lampe=0
while True:
    licht=input.light_level()
    if licht>50:
        basic.set_led_color(__internal.__colorNumberPicker(0x000000))
    else:
        basic.set_led_color(__internal.__colorNumberPicker(basic.rgbw(licht, licht, licht, 0)))