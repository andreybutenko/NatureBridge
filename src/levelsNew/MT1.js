export default {
  "background": "backgrounds/weeders_hr.jpeg",
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
        "text": "Hi! What are you all working on?",
        "top": "55%",
        "left": "36%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "We are removing invasive species.",
        "top": "56%",
        "left": "84%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Invasive species? What are those?",
        "top": "60%",
        "left": "27%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Invasive species are plants that have been brought here from another place.",
        "top": "57%",
        "left": "85%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "They take away important resources from native plants and make it harder for the natural ecosystem to develop and thrive.",
        "top": "57%",
        "left": "85%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Most of the native species here have been used for things like food and medicine by the Native Americans who lived on these lands for thousands of years.",
        "top": "55%",
        "left": "37%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Yes! By removing invasive species, we can help preserve the ecosystem that has existed for so long",
        "top": "57%",
        "left": "85%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Would you like to help us?",
        "top": "57%",
        "left": "85%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Sure!",
        "top": "55%",
        "left": "40%"
      },
      {
        "type": "chat",
        "text": "Sure!",
        "top": "60%",
        "left": "28%"
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
      "index": 7,
      "stepType": "Click through"
    },
    {
      "index": 7,
      "stepType": "Click through"
    },
    {
      "index": 10,
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