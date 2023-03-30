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

};
