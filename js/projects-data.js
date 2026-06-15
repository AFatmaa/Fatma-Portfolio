export const projects = [
  {
    title: "Recommendation Tracker",
    description: [
      "Someone recommends a film, book, or podcast. A few weeks later, you remember the recommendation but not what it was. We built this app for that exact moment.",
      "Users can save recommendations and find them again by mood, category, or the person who recommended them."
    ],
    sections: [
      {
        label: "My Contribution",
        text: "I worked on the database and backend recommendation flow, including the data structure, database connection, and API endpoints for saving and retrieving recommendations. I also contributed to authentication, validation, and connecting the different parts of the application."
      },
      {
        label: "What I Learned",
        text: "React was new to our team, so we learned it while building the project. That made this more than a final assignment, it became a real lesson in picking up a new technology together and shipping something that works."
      }
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Zod", "JWT", "Docker"],
    githubLink: "https://github.com/PratiAmalden/Recommendation-Tracker",
    liveLink: "https://recommendation-tracker.ui.hosting.codeyourfuture.io/",
    type: "team",
    image: "./assets/images/recommendation-tracker.png"
  },
  {
    title: "Real-Time Chat Application",
    description: [
      "When a message appears instantly, it feels simple. Behind it, the client and server need a way to keep talking.",
      "I built two versions of the same chat application, using Long Polling and WebSocket, to understand how real-time communication works in different ways."
    ],
    sections: [
      {
        label: "My Contribution",
        text: "I built the frontend and backend from scratch, including message and like endpoints, the long-polling request cycle, WebSocket updates, and shared frontend behaviour. I also deployed the frontend and backend separately."
      },
      {
        label: "What I Learned",
        text: "Building both versions showed me how technical choices affect responsiveness and server communication. Long Polling repeatedly asks for updates; WebSocket keeps the connection open so updates can arrive immediately."
      }
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "WebSocket"],
    githubLink: "https://github.com/AFatmaa/Chat-Application",
    liveLink: "https://afatmaa-my-chat-app-frontend.hosting.codeyourfuture.io/",
    type: "solo",
    image: "./assets/images/real-time-chat-app.png"
  },
  {
    title: "Real-Time Polling App",
    description: [
      "A vote is more interesting when you can watch the result change as people respond.",
      "I built a polling application where users vote once and see the results update live across every connected screen. It also includes separate voting, results, and admin views."
    ],
    sections: [
      {
        label: "My Contribution",
        text: [
          "I built the frontend and backend, created the WebSocket flow for live voting, and developed separate views for voting, results, and poll management.",
          "I also added the application logic needed to prevent duplicate votes and keep every connected screen synchronized."
        ]
      },
      {
        label: "What I Learned",
        text: "This project helped me move beyond simply opening a WebSocket connection. I learned how to manage shared state, send different types of messages between client and server, and keep several views synchronized as the data changed."
      }
    ],
    techStack: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "WebSocket"],
    githubLink: "https://github.com/AFatmaa/Real-Time-Polling-App",
    liveLink: "https://afatmaa-frontend-real-time-polling-app.hosting.codeyourfuture.io/",
    type: "solo",
    image: "./assets/images/real-time-polling-app.png"
  },
  {
    title: "Days Calendar",
    description: "We built a dynamic calendar that calculates and displays dates from structured data rather than hard-coded values. Users can also export the results to external calendar applications.",
    sections: [
      {
        label: "My Contribution",
        text: "I built the iCalendar export, turning the shared project data and calculations into an .ics file covering 2020 to 2030. I also worked with external descriptions and tested the shared logic."
      },
      {
        label: "What I Learned",
        text: "I learned how to build around code written by teammates, reuse shared logic, and trace errors across different parts of an application."
      }
    ],
    techStack: ["JavaScript", "Jest", "iCalendar (.ics)", "HTML/CSS"],
    githubLink: "https://github.com/Fradoka/Project-Days-Calendar",
    liveLink: "https://piscine-days-calendar-project.netlify.app/",
    type: "team",
    image: "./assets/images/days-calendar-app.png"
  },
  {
    title: "React Memory Match Game",
    description: [
      "I built this two-player card game to learn React through something more interesting than another form or to-do list.",
      "Players take turns finding matching pairs, earning points, editing their names, and starting a rematch without reloading the page."
    ],
    sections: [
      {
        label: "What I Built",
        text: "I split the interface into components and managed the game state, player turns, scores, matching logic, and winner detection in React."
      },
      {
        label: "What I Learned",
        text: "This project helped me understand how state moves through a React application: keeping shared logic in the parent, passing data and actions through props, and updating the interface when the state changes."
      }
    ],
    techStack: ["React", "JavaScript", "CSS"],
    githubLink: "https://github.com/AFatmaa/Memory-Match-Game",
    liveLink: "https://memory-match-game-f.netlify.app/",
    type: "solo",
    image: "./assets/images/memory-match-app.png"
  },
];
