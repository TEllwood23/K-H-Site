const dotenv = require("dotenv");
const AWS = require("aws-sdk");
const axios = require("axios");

dotenv.config();

const s3 = new AWS.S3();
const BUCKET_NAME = process.env.S3_BUCKET_NAME;
const API_KEY = process.env.YOUTUBE_API_KEY;

exports.handler = async (event) => {
  try {
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: API_KEY,
        part: "snippet",
        q: "kieran hodgson",
        type: "video",
        maxResults: 3,
      },
    });

    const videos = response.data.items;

    const result = await s3
      .putObject({
        Bucket: BUCKET_NAME,
        Key: "videos.json",
        Body: JSON.stringify(videos),
        ContentType: "application/json",
      })
      .promise();

    console.log("Videos saved to S3:", result);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Videos saved to S3 successfully!" }),
    };
  } catch (error) {
    console.error("Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error saving videos to S3", error }),
    };
  }
};
