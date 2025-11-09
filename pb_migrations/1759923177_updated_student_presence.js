/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3297981883")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_8YSY3H1ecu` ON `student_presence` (`classroom_code`)",
      "CREATE INDEX `idx_oqIKowfwIo` ON `student_presence` (\n  `classroom_code`,\n  `user_id`\n)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3297981883")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
