# Create a new template
# https://medigeist-api.5deen.repl.co/templates
# localhost:3000/templates
curl --request POST 'localhost:3000/templates' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ratio": 800, "lib": "set1", "text":"abc"
}'