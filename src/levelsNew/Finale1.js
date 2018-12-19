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
        "text": "Great job exploring all the trails!",
        "top": "49%",
        "left": "51%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Would you like to see the Lake? It's a great place to relax after a long adventure!",
        "top": "49%",
        "left": "51%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Great! I'll lead the way.",
        "top": "49%",
        "left": "51%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Have fun, see you soon!",
        "top": "49%",
        "left": "51%"
      }
    ]
  ],
  "layerSteps": [
    {
      "index": 0
    },
    {
      "index": 1,
      "stepType": "Click through"
    },
    {
      "index": 2,
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
      "index": 3,
      "prompt": "",
      "options": [
        {
          "description": "Let's go!"
        }
      ],
      "nextScene": "Lake"
    },
    {
      "index": 4,
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