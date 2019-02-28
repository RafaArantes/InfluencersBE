const express = require("express");
const router = express.Router();
const influencersRepo = require("../repository/influencers.js");
const httpHelper = require("../helper/http_functions");

router.get("/", (req, res, next) => {
  const influencersRepository = new influencersRepo.InfluencersRepository();
  influencersRepository.readAll(httpHelper.defaultMongoListCallback(res));
});

router.post(
  "/",
  (req, res, next) => {
    const influencersRepository = new influencersRepo.InfluencersRepository();
    const influencers = req.body.influencers;
    influencersRepository.create(
      influencers,
      httpHelper.defaultMongoCallback(res, "Cliente criado com sucesso")
    );
  }
);

module.exports = router;
