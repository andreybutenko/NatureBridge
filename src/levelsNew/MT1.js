export default {
  "background": "backgrounds/weeders_px-01.png",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/weeders.png",
        "top": "57%",
        "left": "51%",
        "size": "36%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "55%",
        "left": "31%",
        "size": "34%",
        "flip": false
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "60%",
        "left": "22%",
        "size": "35%",
        "flip": false
      }
    ],
    [],
    [
      {
        "type": "chat",
        "text": "Hi! What are you all\nworking on?",
        "top": "47%",
        "left": "41%",
        "flip": false
      }
    ],
    [
      {
        "type": "chat",
        "text": "We are removing\ninvasive species.",
        "top": "45%",
        "left": "61%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Invasive species?\nWhat are those?",
        "top": "50%",
        "left": "4%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Invasive species are plants\nthat have been brought here\nfrom another place.",
        "top": "41%",
        "left": "50%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "They take away important\nresources from native plants\nand make it harder for the natural\necosystem to develop and thrive.",
        "top": "39%",
        "left": "42%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Would you like\nto help us?",
        "top": "48%",
        "left": "64%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Sure!",
        "top": "48%",
        "left": "40%",
        "flip": false
      },
      {
        "type": "chat",
        "text": "Sure!",
        "top": "53%",
        "left": "17%",
        "flip": true
      }
    ]
  ],
  "layerSteps": [
    null,
    {
      "index": 1,
      "stepType": "Decision",
      "prompt": "As you start down the trail, you encounter a group of trail workers.",
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
      "stepType": "Click through"
    },
    {
      "index": 5,
      "stepType": "Click through"
    },
    {
      "index": 6,
      "stepType": "Click through"
    },
    {
      "index": 7,
      "stepType": "Click through"
    },
    {
      "index": 8,
      "stepType": "Decision",
      "prompt": "",
      "options": [
        {
          "layer": "9",
          "description": "Help weed!"
        }
      ],
      "nextScene": "WeedInvasive"
    }
  ]
}
