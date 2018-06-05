export default {
  "background": "backgrounds/ranger-inside.png",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/ranger.png",
        "top": "42%",
        "left": "66%",
        "size": "50%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "45%",
        "left": "35%",
        "size": "48%",
        "flip": false
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "50%",
        "left": "23%",
        "size": "48%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Welcome to the\nRanger Station.",
        "top": "28%",
        "left": "57%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "If you have any\nquestions about the\nPark, you can look them \nup in this Field Guide.",
        "top": "19%",
        "left": "45%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Thanks!",
        "top": "38%",
        "left": "45%",
        "flip": false
      },
      {
        "type": "chat",
        "text": "Great!",
        "top": "40%",
        "left": "15%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "You can access\nit out on the\ntrail by clicking\non it in your pack.",
        "top": "18%",
        "left": "55%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Will do.",
        "top": "36%",
        "left": "48%",
        "flip": false
      }
    ]
  ],
  "layerSteps": [
    null,
    {
      "index": 1,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 2,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": [],
      "highlightWiki": true
    },
    {
      "index": 3,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 4,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 5,
      "stepType": "Decision",
      "prompt": "",
      "options": [
        {
          "layer": 1,
          "description": "Head back outside"
        }
      ],
      "nextScene": "CompassNavigator"
    }
  ]
}
