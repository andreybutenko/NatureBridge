export default {
  "background": "backgrounds/pickaxe.png",
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
      }
    ],
    [],
    [],
    [
      {
        "type": "chat",
        "text": "Cool! \nLook at that!",
        "top": "50%",
        "left": "12%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "I wish we could take\nit home and show \nour friends!",
        "top": "45%",
        "left": "4%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Oh no, we shouldn't\nactually take an old\nartifact home with us!",
        "top": "47%",
        "left": "2%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "We need to leave it\nso others can enjoy \nit after us!",
        "top": "46%",
        "left": "5%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Well maybe we can at least\ntake this rock home to remember\nthe place where we saw the pick axe?",
        "top": "43%",
        "left": "44%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Nope, we can't take\nanything home with us. \nNot even a rock!",
        "top": "46%",
        "left": "2%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "We need to leave it so others\ncan enjoy it after us.",
        "top": "45%",
        "left": "46%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "Well maybe we can\nat least take this\nrock home to remember\nthe place where we saw\nthe pick axe?",
        "top": "40%",
        "left": "2%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Nope, we can't take anything\nhome with us. Not even a rock!",
        "top": "45%",
        "left": "45%",
        "flip": false
      }
    ]
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
          "description": "Yeah, I have plenty of room in my pack if you want to throw it in!\""
        },
        {
          "layer": "9",
          "description": "\"Not so fast! I don't think we should take an old artifact home with us...\""
        },
        {
          "layer": 1
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
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
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
      "stepType": "Click through",
      "prompt": "You respond with:",
      "options": []
    }
  ]
}
