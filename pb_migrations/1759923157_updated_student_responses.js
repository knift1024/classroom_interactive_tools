/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3422373381")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_u49hHve30e` ON `student_responses` (`classroom_code`)",
      "CREATE INDEX `idx_ksXgZUb9BD` ON `student_responses` (\n  `classroom_code`,\n  `student_name`\n)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3422373381")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
