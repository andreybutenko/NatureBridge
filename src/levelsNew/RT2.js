export default {
  "background": "backgrounds/beetle_impact.png",
  "layers": [
    [],
    [
      {
        "type": "sprite",
        "source": "squirrel.png",
        "top": "60%",
        "left": "10%",
        "size": "8%",
        "dancing": true
      },
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
    ],
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
      },
      {
        "type": "chat",
        "text": "Look! All the pine\nneedles on this\ntree are red.",
        "top": "28%",
        "left": "36%",
        "flip": true
      }
    ],
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
      },
      {
        "type": "chat",
        "text": "Yeah, I've heard that\ncan be caused by beetles\nthat attack the trees.",
        "top": "30%",
        "left": "66%",
        "flip": false
      }
    ],
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
      },
      {
        "type": "chat",
        "text": "Wow, there are\nlots of trees around\nus that also have\nred needles...",
        "top": "23%",
        "left": "33%",
        "flip": true
      }
    ]
  ],
  "layerSteps": [
    null,
    {
      "index": 1,
      "stepType": "Decision",
      "prompt": "Farther down the trail, you come to a large tree fallen just above the path.",
      "options": [
        {
          "layer": "2",
          "description": "Next"
        }
      ]
    },
    {
      "index": 2,
      "stepType": "Click through"
    },
    {
      "index": 3,
      "stepType": "Click through"
    },
    {
      "index": 4,
      "stepType": "Click through",
      "nextScene": "RT3"
    }
  ]
}
