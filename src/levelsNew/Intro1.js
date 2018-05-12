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
        "text": "Welcome to the National Park!",
        "top": "41%",
        "left": "53%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "National Parks are here for your\nenjoyment, but it's important to be\nsafe and follow \nLeave No Trace Principles",
        "top": "33%",
        "left": "53%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Also be sure to know how to use your\nnavigation tools. Can you use your map\nand compass to find the direction to\nthe mountain pass?",
        "top": "34%",
        "left": "53%",
        "flip": false
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
    ]
  ],
  "layerSteps": [
    null,
    {
      "index": 1
    },
    {
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    null,
    null,
    {
      "index": 5,
      "stepType": "Click through"
    }
  ]
}
