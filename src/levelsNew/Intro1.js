export default {
  "background": "backgrounds/basecamp_final_hr.jpg",
  "layers": [
    [
      {
        "type": "sprite",
        "source": "characters/ranger.png",
        "top": "49%",
        "left": "37%",
        "size": "38%",
        "flip": false
      },
      {
        "type": "sprite",
        "source": "characters/main-character.png",
        "top": "50%",
        "left": "70%",
        "size": "35%",
        "flip": true
      },
      {
        "type": "sprite",
        "source": "characters/green-jacket-kid.png",
        "top": "55%",
        "left": "81%",
        "size": "35%",
        "flip": true
      }
    ],
    [
      {
        "type": "chat",
        "text": "Welcome to the national park!",
        "top": "50%",
        "left": "50%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "If you explore all the trails, you'll become a Deputy Ranger! Complete challenges and click on squirrels along the way to earn extra badges.",
        "top": "50%",
        "left": "50%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "As you hike, you'll see examples of how human-caused climate change affects the park. Do you know why the climate is changing?",
        "top": "50%",
        "left": "50%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "In our everyday activities, like driving cars, humans produce greenhouse gases that insulate the planet's atmosphere like a warm blanket. Earth's temperature increases, but other patterns change as well, like how much rain falls in different places.",
        "top": "50%",
        "left": "50%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "We'll look out for climate change impacts.",
        "top": "80%",
        "left": "85%"
      },
      {
        "type": "chat",
        "text": "Got it!",
        "top": "51%",
        "left": "74%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Here's a map you can use to explore all the trails. Before you get going, practice using your map and compass to find the trail to the mountain pass.",
        "top": "50%",
        "left": "50%"
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
      "options": []
    },
    {
      "index": 6,
      "stepType": "Decision",
      "prompt": "",
      "nextScene": "CompassTutorial",
      "highlightMap": true,
      "options": [
        {
          "description": "Practice with map and compass"
        }
      ]
    }
  ]
}
