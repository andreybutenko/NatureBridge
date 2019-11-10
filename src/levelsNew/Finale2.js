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
        "top": "51%",
        "left": "45%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Great! We explored all the trails and learned a lot about the park and climate change along the way!",
        "top": "53%",
        "left": "73%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Fantastic! You’ve officially earned your Deputy Ranger badges.",
        "top": "50%",
        "left": "45%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Cool!",
        "top": "55%",
        "left": "73%"
      },
      {
        "type": "chat",
        "text": "Thanks!",
        "top": "58%",
        "left": "85%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Have a safe trip home, and come visit again soon!",
        "top": "41%",
        "left": "46%"
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
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": [],
      "nextScene": "End"
    }
  ]
}
