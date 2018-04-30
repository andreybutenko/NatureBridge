export default {
  "background": "backgrounds/base-camp.png",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "55%",
        "left": "31%",
        "size": "35%",
        "flip": false
      },
      {
        "type": "sprite",
        "source": "characters/ranger.png",
        "top": "45%",
        "left": "48%",
        "size": "51%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "hello!",
        "top": "45%",
        "left": "38%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Hey, kid",
        "top": "36%",
        "left": "46%",
        "flip": true
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
      "stepType": "Decision",
      "prompt": "You respond with:",
      "options": [
        {
          "layer": 1,
          "description": "go back"
        }
      ]
    }
  ]
}
