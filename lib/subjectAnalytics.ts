export function subjectAnalytics(
  questions:any[],
  answers:any
){

  const result:any = {};

  questions.forEach((q)=>{

    if(!result[q.subject]){

      result[q.subject] = {
        total:0,
        correct:0,
      };
    }

    result[q.subject].total++;

    if(
      answers[q.id] ===
      q.correctAnswer
    ){
      result[q.subject].correct++;
    }

  });

  return result;
}