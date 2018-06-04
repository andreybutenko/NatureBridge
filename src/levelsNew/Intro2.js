export default {
  "background": "backgrounds/basecamp_final_hr.jpg",
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
        "text": "Great work! You’ll have no trouble out on the trail.",
        "top": "33%",
        "left": "52%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Do you have any other questions for me before you head out?",
        "top": "40%",
        "left": "53%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Great, come on in the Ranger Station.",
        "top": "31%",
        "left": "50%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Great, here’s a field guide you can refer to along the way.",
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
          "description": "Yes, I have questions."
        },
        {
          "layer": "4",
          "description": "No, I’m ready to get out on the trail."
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
