export default {
  "background": "backgrounds/basecamp_final.png",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/ranger.png",
        "top": "51%",
        "left": "36%",
        "size": "36%",
        "flip": false
      },
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "50%",
        "left": "68%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "53%",
        "left": "80%",
        "size": "35%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Great work!\nYou found the trail to the\nmountain pass!",
        "top": "33%",
        "left": "52%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Do you have any other questions\nabout the park before you go explore?",
        "top": "40%",
        "left": "53%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Great! Come in the Ranger Station\nwith me and we'll address your\nquestions.",
        "top": "31%",
        "left": "50%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Great! Just take this Ranger\Wiki, it has plenty of useful\ninformation if you're ever\ncurious.",
        "top": "28%",
        "left": "50%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Have a safe hike!",
        "top": "41%",
        "left": "51%",
        "flip": false
      }
    ]
  ],
  "layerSteps": [
    null,
    {
      "stepType": "Click through"
    },
    {
      "stepType": "Decision",
      "prompt": "You respond with:",
      "options": [
        {
          "layer": "3",
          "description": "Yes, I have questions!"
        },
        {
          "layer": "4",
          "description": "Nope, ready to go!"
        }
      ]
    },
    {
      "stepType": "Click through",
      "nextScene": "RangerStation"
    },
    {
      "stepType": "Click through",
      "highlightWiki": true
    },
    {
      "stepType": "Click through",
      "nextScene": "CompassNavigator"
    }
  ]
}
