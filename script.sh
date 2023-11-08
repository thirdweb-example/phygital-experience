docker run \
    -e THIRDWEB_API_SECRET_KEY="pkqCwJnhWzh--XkXXc9c6a_7Ip4NGq5iHlwG6KQJZ30Ph7R2BfMVQOzsRtrOK0ULoSycghcFN3SNcqkfabPgUw" \
    -e ADMIN_WALLET_ADDRESS="0x39Ab29fAfb5ad19e96CFB1E1c492083492DB89d4" \
    -e POSTGRES_CONNECTION_URL="postgresql://postgres:postgres@host.docker.internal:5432/postgres?sslmode=disable" \
    -e ENABLE_HTTPS=true \
    -p 3005:3005 \
    --pull=always \
    --cpus="0.5" \
    thirdweb/engine:latest
