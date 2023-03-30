/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  await knex('projects').insert([
    {
      project_name: "Build Sears Tower", 
      project_description: "We're gunna build a big tower in Chicago"
    },
    {
      project_name: "Build the Empire State Building" 
    },
    {
      project_name: "Assemble IKEA furniture", 
      project_description: "Put on your big boy pants... This is by far the hardest project we've undertaken"
    }
  ]);

  await knex('resources').insert([
    {
      resource_name: "concrete",
      resource_description: "it's pretty hard"
    },
    {
      resource_name: "steel",
      resource_description: "you'll probably want this"
    },
    {
      resource_name: "screwdriver"
    },
    {
      resource_name: "IKEA instructions",
      resource_description: "mostly useless probably"
    },
    {
      resource_name: "blueprints"
    },
  ]);

  await knex('tasks').insert([
    //build sears tower
    {
      project_id: 1,
      task_description: "Buy land"
    },
    {
      project_id: 1,
      task_description: "Review blueprints",
      task_notes: "This can be a quick step... They're pretty much just guidelines"
    },
    {
      project_id: 1,
      task_description: "Build it!",
      task_notes: "Easiest part."
    },
    //build empire state building
    {
      project_id: 2,
      task_description: "Arrive in Manhattan"
    },
    {
      project_id: 2,
      task_description: "Pick a random spot"
    },
    {
      project_id: 2,
      task_description: "Build wayyyy high",
      task_notes: "Like even higher than you thought was possible"
    },
    {
      project_id: 2,
      task_description: "Build even higher",
      task_notes: "Yeah, you read that right."
    },
    {
      project_id: 2,
      task_description: "Turn into an international tourist destination.",
      task_notes: "Watch the bucks roll in!"
    },
    //assemble ikea
    {
      project_id: 3,
      task_description: "Try and build it"
    },
    {
      project_id: 3,
      task_description: "Give up after way too long.",
      task_notes: "You can cry if you like."
    },
  ]);

  await knex('project_resources').insert([
    {
      project_id: 1,
      resource_id: 1
    },
    {
      project_id: 1,
      resource_id: 2
    },
    {
      project_id: 1,
      resource_id: 5
    },
    {
      project_id: 2,
      resource_id: 1
    },
    {
      project_id: 2,
      resource_id: 2
    },
    {
      project_id: 2,
      resource_id: 5
    },
    {
      project_id: 3,
      resource_id: 3
    },
    {
      project_id: 3,
      resource_id: 4
    },
  ])

};
