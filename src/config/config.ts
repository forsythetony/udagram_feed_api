export const config = {
  "dev": {
    "username": process.env.UDAGRAM_POSTGRES_USERNAME,
    "password": process.env.UDAGRAM_POSTGRES_PASSWORD,
    "database": process.env.UDAGRAM_POSTGRES_DB,
    "host": process.env.UDAGRAM_POSTGRES_HOST,
    "dialect": "postgres",
    "aws_region": process.env.UDAGRAM_AWS_REGION,
    "aws_profile": process.env.UDAGRAM_AWS_PROFILE,
    "aws_media_bucket": process.env.UDAGRAM_AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }

}
