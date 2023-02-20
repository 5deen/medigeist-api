# Create a new template
curl --request POST 'localhost:3000/templates' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "My-First-Template"
}'