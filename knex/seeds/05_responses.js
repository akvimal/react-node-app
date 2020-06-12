exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        {user_id: 1, assessment_id:1,question_id:1,choices:JSON.stringify([1]),pass:false},
        {user_id: 1, assessment_id:1,question_id:2,choices:JSON.stringify([2]),pass:true},
        {user_id: 1, assessment_id:1,question_id:3,choices:JSON.stringify([2]),pass:true},
        {user_id: 1, assessment_id:1,question_id:4,choices:JSON.stringify([1]),pass:false},
        {user_id: 1, assessment_id:1,question_id:5,choices:JSON.stringify([2]),pass:true},
        {user_id: 1, assessment_id:1,question_id:6,choices:JSON.stringify([4]),pass:true},
        {user_id: 1, assessment_id:1,question_id:7,choices:JSON.stringify([2]),pass:true},
        {user_id: 1, assessment_id:1,question_id:8,choices:JSON.stringify([1,4]),pass:true},
        {user_id: 1, assessment_id:1,question_id:9,choices:JSON.stringify([1]),pass:true},
        {user_id: 1, assessment_id:1,question_id:10,choices:JSON.stringify([2]),pass:false},

        {user_id: 2, assessment_id:1,question_id:1,choices:JSON.stringify([1]),pass:false},
        {user_id: 2, assessment_id:1,question_id:2,choices:JSON.stringify([3]),pass:false},
        {user_id: 2, assessment_id:1,question_id:3,choices:JSON.stringify([2]),pass:true},
        {user_id: 2, assessment_id:1,question_id:4,choices:JSON.stringify([1]),pass:false},
        {user_id: 2, assessment_id:1,question_id:5,choices:JSON.stringify([2]),pass:true},
        {user_id: 2, assessment_id:1,question_id:6,choices:JSON.stringify([4]),pass:true},
        {user_id: 2, assessment_id:1,question_id:7,choices:JSON.stringify([2]),pass:true},
        {user_id: 2, assessment_id:1,question_id:8,choices:JSON.stringify([1,4]),pass:true},
        {user_id: 2, assessment_id:1,question_id:9,choices:JSON.stringify([1]),pass:true},
        {user_id: 2, assessment_id:1,question_id:10,choices:JSON.stringify([1]),pass:true},

        {user_id: 3, assessment_id:1,question_id:1,choices:JSON.stringify([1]),pass:false},
        {user_id: 3, assessment_id:1,question_id:2,choices:JSON.stringify([3]),pass:false},
        {user_id: 3, assessment_id:1,question_id:3,choices:JSON.stringify([1]),pass:false},
        {user_id: 3, assessment_id:1,question_id:4,choices:JSON.stringify([1]),pass:false},
        {user_id: 3, assessment_id:1,question_id:5,choices:JSON.stringify([2]),pass:true},
        {user_id: 3, assessment_id:1,question_id:6,choices:JSON.stringify([4]),pass:true},
        {user_id: 3, assessment_id:1,question_id:7,choices:JSON.stringify([2]),pass:true},
        {user_id: 3, assessment_id:1,question_id:8,choices:JSON.stringify([1,4]),pass:true},
        {user_id: 3, assessment_id:1,question_id:9,choices:JSON.stringify([2]),pass:false},
        {user_id: 3, assessment_id:1,question_id:10,choices:JSON.stringify([1]),pass:true},
      ]);
    });
};
