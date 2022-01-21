exports.seed = function(knex, Promise) {
    return knex('projects').insert([   
        { project_name: "Special Super Secret", project_description: "I'm not going to tell you!", project_completed: false },
        { project_name: "Coolest Ever", project_description: "You're going to be so psyched", project_completed: true },
        { project_name: "Peace and love", project_description: "We're going to spread it!" }
    ])
  }