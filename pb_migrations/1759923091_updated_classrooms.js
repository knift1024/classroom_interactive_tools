/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1799974226")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_f4QWO9xf3z` ON `classrooms` (\n  `code`,\n  `app_id`\n)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1799974226")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
