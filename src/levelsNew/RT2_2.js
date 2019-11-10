export default {
  "background": "backgrounds/beetle_impact_hr.jpeg",
  "layers": [
    [],
    [
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "42%",
        "left": "57%",
        "size": "24%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "44%",
        "left": "59%",
        "size": "26%",
        "flip": true
      }
    ]
  ],
  "layerSteps": [
    null,
    {
      "stepType": "Decision",
      "prompt": "",
      "options": [
        {
          "layer": "1",
          "description": "Continue"
        }
      ],
      "journalEntry": "In the past, mountain pine beetles have played an important role in the forest by attacking old, weak trees, which helps healthy trees to grow even stronger. Because of climate change, more beetles can survive the shorter, warmer winters, and with more beetles, more trees are attacked. Unhealthy forests cannot absorb as much CO2 from the atmosphere, which will increase the impacts of climate change further. The natural, delicate ecosystem has been tipped out of balance by these changes in climate. Do you think these types of impacts are enough motivation for lawmakers to fight for climate change policies inside and outside of national parks? Why or why not?",
      "nextScene": "RT3"
    },
  ]
}
