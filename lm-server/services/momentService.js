let moments = [
    {
        "id": 1,
        "title": "It's begginning to look a lot like Christmas.",
        "nickname": "Walt Disney World",
        "content": "jkljklgugui jk jio jl o hyuhydftydf hjnkhuiyhuj kljdrtdrb ghnjk opi. jkljklgugui jk jio jl o hyuhydftydf hjnkhuiyhuj kljdrtdrb ghnjk opi. jkljklgugui jk jio jl o hyuhydftydf hjnkhuiyhuj kljdrtdrb ghnjk opi. jkljklgugui jk jio jl o hyuhydftydf hjnkhuiyhuj kljdrtdrb ghnjk opi.",
        "likes": 25,
        "comments": 39
      },
      {
        "id": 2,
        "title": "Party cake design - Soocake.",
        "nickname": "Yakitori",
        "content": "jkljklgugui jk jio jl o hyuhydftydf hjnkhuiyhuj kljdrtdrb ghnjk opi.",
        "likes": 8,
        "comments": 3
      },
      {
        "id": 3,
        "title": "Today's pics.",
        "nickname": "yellowstonenps",
        "content": "jkljklgugui jk jio jl o hyuhydftydf hjnkhuiyhuj kljdrtdrb ghnjk opi.",
        "likes": 108,
        "comments": 97
      }
]

const getMoments = function() {
    return new Promise((resolve, reject) => {
        resolve(moments);
    });
};

const getMoment = function(id) {
    return new Promise((resolve, reject) => {
        resolve(moments.find(moment => moment.id === id));
    });
};

const addMoment = function(newMoment) {
    return new Promise((resolve, reject) => {
        if (moments.find(moment => moment.title === newMoment.title && moment.nickname === newMoment.nickname)) {
            reject("Opps...you've already post this moment.");
        } else {
            newMoment.id = moments.length + 1;
            moments.push(newMoment);
            resolve(newMoment);
        }
    });
};

module.exports = {
    getMoments,
    getMoment,
    addMoment
}