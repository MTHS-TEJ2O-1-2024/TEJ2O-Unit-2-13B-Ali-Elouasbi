/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali Elouasbi
 * Created on: Nov 2024
 * This program turns on a certain amount of neopixel
*/

//variables
let strip = robotbit.rgb()

//setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    strip.show()
    basic.pause(1000)
    
    basic.showNumber(1)
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(1000)
   
    basic.showNumber(2)
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(1000)
    
    basic.showNumber(3)
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(1000)
    
    basic.showNumber(4)
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
