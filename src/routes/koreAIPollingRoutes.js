const pollingController = require("../controller/pollingController");
const router = require("express").Router()


router.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.get(
    "/polling/:id",
    function(req, res) {
        pollingController.getPollingData(req.params.id,res)
      }
)

module.exports = router