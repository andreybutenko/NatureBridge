export default {
  "background": "backgrounds/beetle_impact_hr.jpeg",
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
        "text": "Look! All the pine needles on this tree are red.",
        "top": "40%",
        "left": "59%",
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
        "text": "Yeah, I've heard that can be caused by beetles that attack the trees.",
        "top": "42%",
        "left": "65%"
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
        "text": "Wow, there are lots of trees around us that also have red needles...",
        "top": "40%",
        "left": "57%"
      }
    ],
    []
  ],
  "layerSteps": [
    {
      "index": 0
    },
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
      "nextScene": "BeetleImpact"
    }
  ]
}