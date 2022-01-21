exports.seed = function(knex, Promise) {
    return knex('tasks').insert([   
        { task_description: "Go to the secret place", task_notes: "The secret place will be revealed at 12am.", project_id: 1 },
        { task_description: "Be great for 1 hour", task_notes: "You can be great for longer if you need.", project_id: 2, task_completed: true }
    ])
  }
  