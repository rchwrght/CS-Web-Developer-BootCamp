{"filter":false,"title":"user.js","tooltip":"/Associations/models/user.js","undoManager":{"mark":51,"position":51,"stack":[[{"start":{"row":0,"column":0},"end":{"row":12,"column":46},"action":"insert","lines":["//User Model email, name","var userSchema = new mongoose.Schema({","    email: String,","    name: String,","    posts: [","        {","            type: mongoose.Schema.Types.ObjectId,","            ref: \"Post\"","        }","        ]","});","","var User = mongoose.model(\"User\", userSchema);"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["v"],"id":4}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["a"],"id":5}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["r"],"id":6}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "],"id":7}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["m"],"id":8}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["o"],"id":9}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["n"],"id":10}],[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["g"],"id":11}],[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["o"],"id":12}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["o"],"id":13}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["s"],"id":14}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["e"],"id":15}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":[" "],"id":16}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["="],"id":17}],[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":[" "],"id":18}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["r"],"id":19}],[{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["e"],"id":20}],[{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["q"],"id":21}],[{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["u"],"id":22}],[{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["i"],"id":23}],[{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["r"],"id":24}],[{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["e"],"id":25}],[{"start":{"row":0,"column":22},"end":{"row":0,"column":24},"action":"insert","lines":["()"],"id":26}],[{"start":{"row":0,"column":23},"end":{"row":0,"column":25},"action":"insert","lines":["\"\""],"id":27}],[{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["m"],"id":28}],[{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":["o"],"id":29}],[{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["n"],"id":30}],[{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"insert","lines":["g"],"id":31}],[{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"insert","lines":["o"],"id":32}],[{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["o"],"id":33}],[{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"insert","lines":["s"],"id":34}],[{"start":{"row":0,"column":31},"end":{"row":0,"column":32},"action":"insert","lines":["e"],"id":35}],[{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"insert","lines":[";"],"id":36}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":8},"action":"remove","lines":["var User"],"id":37},{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"insert","lines":["m"]}],[{"start":{"row":14,"column":1},"end":{"row":14,"column":2},"action":"insert","lines":["o"],"id":38}],[{"start":{"row":14,"column":2},"end":{"row":14,"column":3},"action":"insert","lines":["d"],"id":39}],[{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"insert","lines":["e"],"id":40}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["l"],"id":41}],[{"start":{"row":14,"column":5},"end":{"row":14,"column":6},"action":"insert","lines":["."],"id":42}],[{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"insert","lines":["e"],"id":43}],[{"start":{"row":14,"column":7},"end":{"row":14,"column":8},"action":"insert","lines":["x"],"id":44}],[{"start":{"row":14,"column":6},"end":{"row":14,"column":8},"action":"remove","lines":["ex"],"id":45},{"start":{"row":14,"column":6},"end":{"row":14,"column":12},"action":"insert","lines":["export"]}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"remove","lines":["l"],"id":46}],[{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"remove","lines":["e"],"id":47}],[{"start":{"row":14,"column":3},"end":{"row":14,"column":4},"action":"insert","lines":["u"],"id":48}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["l"],"id":49}],[{"start":{"row":14,"column":5},"end":{"row":14,"column":6},"action":"insert","lines":["e"],"id":50}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":6},"action":"remove","lines":["module"],"id":51},{"start":{"row":14,"column":0},"end":{"row":14,"column":6},"action":"insert","lines":["module"]}],[{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"insert","lines":["s"],"id":52}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":14},"end":{"row":14,"column":14},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1517675167565,"hash":"96728e7bf3eea742de1423bd59276d9410a37b8d"}