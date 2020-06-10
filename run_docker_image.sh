docker run -p 8082:8080 -d \
    --env UDAGRAM_POSTGRES_USERNAME \
    --env UDAGRAM_POSTGRES_PASSWORD \
    --env UDAGRAM_POSTGRES_DB \
    --env UDAGRAM_POSTGRES_HOST \
    --env AWS_REGION \
    --env AWS_PROFILE \
    --env AWS_BUCKET \
    forsythetony/udagram_feed_api:latest
