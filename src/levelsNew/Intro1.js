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
        "text": "Welcome to the National Park!",
        "top": "50%",
        "left": "50%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Through your visit, you'll learn about the Park and how we interact with the environment. ",
        "top": "50%",
        "left": "50%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "If you explore the entire Park, you'll become a Deputy Ranger! You can earn badges by completing challenges along the way. Keep an eye out for squirrels, which will add to your collection of badges.",
        "top": "50%",
        "left": "50%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "As you hike, you'll see examples of how human-caused climate change impacts the Park.",
        "top": "50%",
        "left": "50%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Ok!",
        "top": "55%",
        "left": "85%"
      },
      {
        "type": "chat",
        "text": "Sounds good!",
        "top": "51%",
        "left": "74%"
      }
    ],
    [
      {
        "type": "chat",
        "text": "Here's a map you can use to explore all the trails. It's important to practice navigation before heading out. Can you use your map and compass to find the trail to the mountain pass?",
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
          "description": "Find the trail!"
        }
      ]
    }
  ]
}
