export default {
  "background": "backgrounds/basecamp_final_hr.jpg",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/ranger.png",
        "top": "51%",
        "left": "36%",
        "size": "38%",
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
        "text": "Great job exploring\nall the trails!",
        "top": "41%",
        "left": "52%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Would you like to see the Lake?\nIt's a great place to relax\nafter a long adventure!",
        "top": "36%",
        "left": "52%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Great! I'll lead the way.",
        "top": "45%",
        "left": "52%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Have fun, see you soon!",
        "top": "42%",
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
          "description": "Yes!"
        },
        {
          "layer": "4",
          "description": "No, I'd like to go back on the trail"
        }
      ]
    },
    {
      "prompt": "",
      "options": [
        {
          "description": "Let's go!"
        }
      ],
      "nextScene": "Lake"
    },
    {
      "prompt": "",
      "options": [
        {
          "description": "See you!"
        }
      ],
      "nextScene": "CompassNavigator"
    }
  ]
}
