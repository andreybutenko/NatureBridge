export default {
  "background": "backgrounds/basecamp_final.png",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/ranger.png",
        "top": "52%",
        "left": "27%",
        "size": "41%",
        "flip": false
      },
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "53%",
        "left": "69%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "59%",
        "left": "81%",
        "size": "35%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "How was your day?",
        "top": "45%",
        "left": "47%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Great! We explored all the \ntrails and learned a lot\n along the way!",
        "top": "41%",
        "left": "47%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Fantastic! \nYou’ve officially \nearned your \nDeputy Ranger badges.",
        "top": "38%",
        "left": "46%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Cool!",
        "top": "46%",
        "left": "64%",
        "flip": true
      },
      {
        "type": "chat",
        "text": "Thanks!",
        "top": "51%",
        "left": "84%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Have a safe trip home,\nand come visit again soon!",
        "top": "41%",
        "left": "46%",
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
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": [],
      "nextScene": "End"
    }
  ]
}
