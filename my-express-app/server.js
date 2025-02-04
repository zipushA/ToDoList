[
    {
      "cursor": "WNZmwP3nfadsMmJxZjB1czczOXAzYjhn",
      "service": {
        "autoDeploy": "yes",
        "branch": "main",
        "createdAt": "2025-02-03T18:27:22.273738Z",
        "dashboardUrl": "https://dashboard.render.com/web/srv-cuggl2bqf0us739p3b8g",
        "id": "srv-cuggl2bqf0us739p3b8g",
        "name": "ToDoListServer",
        "notifyOnFail": "default",
        "ownerId": "tea-cufqnolds78s73fnoj90",
        "repo": "https://github.com/zipushA/ToDoList",
        "rootDir": "./TodoApi",
        "serviceDetails": {
          "buildPlan": "starter",
          "env": "docker",
          "envSpecificDetails": {
            "dockerCommand": "",
            "dockerContext": ".",
            "dockerfilePath": "Dockerfile"
          },
          "healthCheckPath": "",
          "maintenanceMode": {
            "enabled": false,
            "uri": ""
          },
          "numInstances": 1,
          "openPorts": null,
          "plan": "free",
          "previews": {
            "generation": "off"
          },
          "pullRequestPreviewsEnabled": "no",
          "region": "singapore",
          "runtime": "docker",
          "sshAddress": "srv-cuggl2bqf0us739p3b8g@ssh.singapore.render.com",
          "url": "https://todolistserver-xit0.onrender.com"
        },
        "slug": "todolistserver-xit0",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "web_service",
        "updatedAt": "2025-02-04T14:58:04.890905Z"
      }
    },
    {
      "cursor": "fdjvLDp1qKVqbXRzdnFyYzczZnUzM29n",
      "service": {
        "autoDeploy": "yes",
        "branch": "main",
        "createdAt": "2025-02-02T21:55:39.467763Z",
        "dashboardUrl": "https://dashboard.render.com/static/srv-cufujmtsvqrc73fu33og",
        "id": "srv-cufujmtsvqrc73fu33og",
        "name": "ToDoListClient",
        "notifyOnFail": "default",
        "ownerId": "tea-cufqnolds78s73fnoj90",
        "repo": "https://github.com/zipushA/ToDoList",
        "rootDir": "./client/ToDoListReact",
        "serviceDetails": {
          "buildCommand": "npm run build",
          "buildPlan": "starter",
          "previews": {
            "generation": "off"
          },
          "publishPath": "build",
          "pullRequestPreviewsEnabled": "no",
          "url": "https://todolistclient-a8qv.onrender.com"
        },
        "slug": "todolistclient-a8qv",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "static_site",
        "updatedAt": "2025-02-04T15:00:54.352342Z"
      }
    }
  ]