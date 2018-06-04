export default {
  "background": "backgrounds/no_music_hr.jpeg",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "52%",
        "left": "66%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "60%",
        "left": "76%",
        "size": "35%",
        "flip": true
      }
    ],
    [
      {
        "type": "sprite",
        "source": "squirrel.png",
        "top": "80%",
        "left": "26%",
        "size": "8%",
        "dancing": true
      }
    ],
    [],
    [],
    [],
    [
      {
        "type": "chat",
        "text": "Loud music and noises\ncan ruin the outdoor experience\nfor you and for others on the trail.",
        "top": "41%",
        "left": "27%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Oops! Sorry!",
        "top": "54%",
        "left": "83%",
        "flip": false
      }
    ],
    [
      {
        "type": "sprite",
        "source": "characters/brown-jacket-kid.png",
        "top": "29%",
        "left": "53%",
        "size": "17%",
        "flip": false
      }
    ],
    [
      {
        "type": "sprite",
        "source": "characters/brown-jacket-kid.png",
        "top": "34%",
        "left": "54%",
        "size": "27%",
        "flip": false
      },
      {
        "type": "chat",
        "text": "Hi! Would you mind not playing\nthat music? I'm trying to enjoy\nthe natural sounds of this trail...",
        "top": "17%",
        "left": "58%",
        "flip": false
      }
    ],
    [
      {
        "type": "sprite",
        "source": "characters/brown-jacket-kid.png",
        "top": "34%",
        "left": "54%",
        "size": "27%",
        "flip": false
      },
      {
        "type": "chat",
        "text": "Sorry about that!\nWe'll turn it off!",
        "top": "39%",
        "left": "75%",
        "flip": false
      }
    ],
    [
      {
        "type": "sprite",
        "source": "characters/brown-jacket-kid.png",
        "top": "34%",
        "left": "54%",
        "size": "27%",
        "flip": false
      },
      {
        "type": "chat",
        "text": "Enjoy the rest\nof your hike!",
        "top": "48%",
        "left": "80%",
        "flip": false
      }
    ]
  ],
  "layerSteps": [
    null,
    {
      "index": 1,
      "stepType": "Click through"
    },
    {
      "index": 2,
      "stepType": "Decision",
      "prompt": "As you set off down the trail, you notice the quiet of the woods",
      "options": [
        {
          "layer": "3",
          "description": "Next"
        }
      ]
    },
    {
      "index": 3,
      "stepType": "Decision",
      "prompt": "Then your ears start to adjust and you hear birds... wind rustling in the trees... the sound of your own footsteps...",
      "options": [
        {
          "layer": "4",
          "description": "Next"
        }
      ]
    },
    {
      "index": 4,
      "stepType": "Decision",
      "prompt": "Suddenly a blast of loud music! Your friend has started playing a song out of their phone speakers.",
      "options": [
        {
          "layer": "5",
          "description": "\"Hey! Stop playing that music.\""
        },
        {
          "layer": "7",
          "description": "Join in on the dance party."
        }
      ]
    },
    {
      "index": 5,
      "stepType": "Click through"
    },
    {
      "index": 6,
      "stepType": "Click through",
      "nextScene": "HT2"
    },
    {
      "index": 7,
      "stepType": "Click through"
    },
    {
      "index": 8,
      "stepType": "Click through"
    },
    {
      "index": 9,
      "stepType": "Click through"
    },
    {
      "index": 10,
      "stepType": "Click through",
      "nextScene": "HT2"
    }
  ]
}
