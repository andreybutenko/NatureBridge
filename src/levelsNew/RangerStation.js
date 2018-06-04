export default {
  "background": "backgrounds/ranger-inside.png",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/ranger.png",
        "top": "34%",
        "left": "51%",
        "size": "59%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "46%",
        "left": "21%",
        "size": "45%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Welcome to the Ranger Station!",
        "top": "28%",
        "left": "13%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Here's a Field Guide for you!\nIt has lots of useful information\nabout National Parks.",
        "top": "16%",
        "left": "3%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Remember, National Parks are here for your enjoyment,\nbut it’s important to be safe and follow the\nLeave No Trace Principles listed in your Field Guide.",
        "top": "24%",
        "left": "10%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Okay, now you're ready to go.\nHave a safe hike!",
        "top": "24%",
        "left": "30%",
        "flip": true
      }
    ]
  ],
  "layerSteps": [
    null,
    {
      "stepType": "Click through"
    },
    {
      "stepType": "Click through",
      "highlightWiki": true
    },
    {
      "stepType": "Click through"
    },
    {
      "stepType": "Decision",
      "nextScene": "CompassNavigator",
      "options": [
        {
          "description": "Continue to Trailhead"
        }
      ]
    }
  ]
}
