export default {
  "background": "backgrounds/pickaxe_hr.jpeg",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "55%",
        "left": "35%",
        "size": "35%",
        "flip": false
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "61%",
        "left": "25%",
        "size": "35%",
        "flip": false
      },
      {
        "type": "sprite",
        "source": "characters/hammer.png",
        "top": "76%",
        "left": "63%",
        "size": "19%"
      }
    ],
    [],
    [],
    [
      {
        "type": "chat",
        "text": "Cool! Look at that!",
        "top": "53%",
        "left": "42%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "I wish we could take it home and show our friends!",
        "top": "59%",
        "left": "30%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Oh no, we shouldn't actually take an old artifact home with us!",
        "top": "59%",
        "left": "30%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "We need to leave it so others can enjoy it after us!",
        "top": "59%",
        "left": "30%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Well maybe we can at least take this rock home to remember the place where we saw the pick axe?",
        "top": "55%",
        "left": "45%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "No, we can't take anything home with us. But we can take plenty of pictures!",
        "top": "59%",
        "left": "30%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "We need to leave it so others can enjoy it after us.",
        "top": "55%",
        "left": "43%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Well maybe we can at least take this rock home to remember the place where we saw the pick axe?",
        "top": "59%",
        "left": "31%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "No, we can't take anything home with us. But we can take plenty of pictures!",
        "top": "55%",
        "left": "44%"
      }
    ],
    [],
    []
  ],
  "layerSteps": [
    {
      "index": 0
    },
    {
      "index": 1,
      "stepType": "Decision",
      "prompt": "You see something glistening just off the trail.",
      "options": [
        {
          "layer": "2",
          "description": "Next"
        }
      ]
    },
    {
      "index": 2,
      "stepType": "Decision",
      "prompt": "It's an old mining relic -- a small pick axe.",
      "options": [
        {
          "layer": "3",
          "description": "Next"
        }
      ]
    },
    {
      "index": 3,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 4,
      "stepType": "Decision",
      "prompt": "You respond with:",
      "options": [
        {
          "layer": "5",
          "description": "\"Yeah, I have plenty of room in my pack if you want to throw it in!\""
        },
        {
          "layer": "9",
          "description": "\"Not so fast! I don't think we should take an old artifact home with us...\""
        }
      ]
    },
    {
      "index": 5,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 6,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 7,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 8,
      "stepType": "Decision",
      "prompt": "",
      "options": [
        {
          "description": "Take a picture and continue walking."
        }
      ]
    },
    {
      "index": 9,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 10,
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    },
    {
      "index": 11,
      "stepType": "Decision",
      "prompt": "",
      "options": [
        {
          "description": "Take a picture and continue walking."
        }
      ],
      "nextScene": "HT3"
    }
  ]
}
