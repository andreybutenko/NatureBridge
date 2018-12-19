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
        "text": "Welcome to the Ranger Station.",
        "top": "41%",
        "left": "80%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "If you have any questions about the Park, you can look them up in this Field Guide.",
        "top": "41%",
        "left": "82%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Thanks!",
        "top": "45%",
        "left": "45%"
      },
      {
        "type": "chat",
        "text": "Great!",
        "top": "49%",
        "left": "32%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "You can access it out on the trail by clicking on it in your pack.",
        "top": "42%",
        "left": "81%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Will do.",
        "top": "45%",
        "left": "45%"
      }
    ]
  ],
  "layerSteps": [
    {
      "index": 0
    },
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
      "options": []
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