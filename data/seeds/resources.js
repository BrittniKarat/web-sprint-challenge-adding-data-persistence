exports.seed = function(knex, Promise) {
    return knex('resources').insert([   
        { resource_name: "Secret Files", resource_description: "Rare secret files that make the project great" },
        { resource_name: "Great juice", resource_description: "Not made from grapes, made from great!" }
    ])
  }
  