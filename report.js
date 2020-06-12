
// Users score in a Assessment
//============================
//   select r.user_name, round((r.passed/cast(a.cnt as decimal))*100,0) as score
//   from 
//   (select user_name, count(pass) as passed 
//    from responses r inner join users u on u.id = r.user_id
//    where assessment_id = 1 and pass = true group by user_name) r, 
//   (select id, json_array_length(questions) as cnt from assessments where id = 1) a

// User score in a Assessment
// ==========================
// select round((r.passed/cast(a.cnt as decimal))*100,0) as score
// from
// (select count(pass) as passed 
//  from responses 
//  where assessment_id = 1 and user_id = 3 and pass = true) r,
// (select id, json_array_length(questions) as cnt from assessments where id = 1) a

// User score in Assessments
//==========================
// select r.assessment_id, round((r.passed/cast(a.cnt as decimal))*100,0) as score
// from
// (select assessment_id, count(pass) as passed 
//  from responses 
//  where user_id = 3 and pass = true group by assessment_id) r,
// (select id, json_array_length(questions) as cnt from assessments) a
// where a.id = r.assessment_id