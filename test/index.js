require('rx').config.longStackSupport = true;
describe("Falcor", function() {
    require("./Model.spec.js");
    require("./integration");
});

