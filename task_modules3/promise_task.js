// // // ket witPromise = promise((resollves, rejected) => {
// // //     executione ConvolverNoderesolved(" there is a text from the tree resolvedd")
// // // })

// // const { useOptimistic } = require("react");

// // // async = ElementInternalsasync function name (parents {
// // //     await response;
// // // })


// // //setTimeout

// // // console.log("1. starting point");
// // //     var a = "zero"

// // // setTimeout(()=>{
// // //     a = "one"
// // // }, 1000)

// // // console.log(a);

// // // call stack {LIFO}
// // //  console.log(a)
// // //  a = 0
// // //  console.log(staring point)

// // //  // task queue (FIFO)
// // //   console.log(1. staring point)
// // //   a = 0
// // //   console.log(a)
// // //   set timeout

// //   console.log("1. starting point");
// // var a = "zero"

// // setTimeout(()=>{
// //     a = "one"
    
// // }, 1000)

// // // console.log(a);
// // c = 5
// // function funca(funcb, c){
// //     return funcb(c + 2);
// // }

// // function funcb(c){
// //     return c
// // }

// // funca(funcb, 5)

// //Call stack - what am i doing right now (LIFO - last in first out)
// //Task queue -  what is ready to run (FIFO - first in first out)

// // console.log(`1 ${new Date().getSeconds()}`)
// // setTimeout(()=>{
// //     console.log(`2 ${new Date().getSeconds()}`)
// // }, 10)
// // console.log(`3 ${new Date().getSeconds()}`)
// // console.log(`4 ${new Date().getSeconds()}`)
// // console.log(`5 ${new Date().getSeconds()}`)
// // setTimeout(()=>{
// //     console.log(`6 ${new Date().getSeconds()}`)
// // }, 0)
// // console.log(`7 ${new Date().getSeconds()}`)
// // console.log(`8 ${new Date().getSeconds()}`)
// // console.log(`9 ${new Date().getSeconds()}`)
// //console.log(`10 ${new Date().getSeconds()}`)
// //   1. wake up
// //   2. shower - 3 seconds
// //   3. hubby cooks food - 5 secs
// //   4. eat breakfast - 2 secs
// //   5. get dressed - 1 sec


// // console.log(`1. wake up:  ${new Date().getSeconds()}`)

// // setTimeout(function shower(){
// //     console.log(`2. Shower: ${new Date().getSeconds()}`);
// // }, 3000)

// // setTimeout(function breakfast(){
// //     console.log(`3. Breakfast cooking: ${new Date().getSeconds()}`);
// // }, 5000)

// // setTimeout(function eat breakfast(){
// //     console.log(`4. eat breakfast: ${new Date().getSeconds()}`);
// // }, 2000)
// // setTimeout(function get dressed(){
// //     console.log(`5. get dressed: ${new Date().getSeconds()}`);
// // }, 5000)

// // creating a promise

// const myName = "Kseniia";
// const myPromise = new Promise((resolve, reject) => {
//     //setTimeout (()=>{
//         if(myName === "Kseniia") {
//             resolve("Kseniia is a student of MCA")
//         }else{
//             reject("Kseniia is not a student of MCA")
//         }
//     //}, 3000)

// })

// // console.log(myPromise)
// // function print(result){
// //     console.log(result)

// myPromise
//     .then((result) => console.log(result))
//     .catch((reject) => console.error(reject))
// You’re developing logic for a job application system. Each application moves through several asynchronous stages—submission, review, and interview invitation—and each stage updates the application object.

// // Create a jobApplication class
// // Create the following Promise-based functions:
// //  a. submitResume(application)Resolves after 1 second if resumeSubmitted is false.

// // Updates the object with resumeSubmitted: true.

// // Rejects if already submitted.

// // reviewApplication(application)

// // Resolves after 2 seconds if resume has been submitted.

// // Updates with reviewed: true.

// // Rejects if resume not submitted.

// // scheduleInterview(application)

// // Resolves after 1.5 seconds if reviewed is true.

// // Updates with interviewScheduled: true.

// // Rejects if not reviewed.

// // Chain the functions so the full flow is:

// // Submit → Review → Schedule

// // Use .then() chaining or async/await.


class JobApplication {
    constructor(name) {
        this.name = name;
        this.resumeSubmitted = true;
        this.reviewed = true;
        this.interviewScheduled = true;
    }
}
// create instance//
const jobApplication = new JobApplication("Komal")
    
    let receiveResume = new Promise ((resolve, reject) => {

        if (jobApplication.resumeSubmitted === true) {
            resolve("applicattion successfully submitted")
        }else{
            reject("Resume not submitted");
    }
});

      applicationReview = new Promise ((resolve, reject) => {
        setTimeout (()=>{
        if (jobApplication.reviewed === true) {
             resolve("applicattion successfully reviewed")
        }else{
            reject("application not reviewed");
            }
        }, 2000);
    });


    scheduleInterview = new Promise ((resolve, reject) => {

         setTimeout(() => {
            if (jobApplication.interviewScheduled === true) {
                resolve("Interview scheduled");
            } else {
                reject("application not successful");
            }
        }, 1500);
    });

     

receiveResume
  .then(result => console.log(result))
  .catch(error => console.error(error));

applicationReview
  .then(result => console.log(result))
  .catch(error => console.error(error));

scheduleInterview
  .then(result => console.log(result))
  .catch(error => console.error(error));

  //

  solution 2

  class JobApplication {
  constructor(name,position) {
    this.name = name;
    this.position = position;
    this.submission = false;
    this.review = false;
    this.interview = false;
  }
}

function submitResume(application) {
 return new Promise((resolve, reject) => {
    console.log(Submitting resume for ${application.name}...);
    setTimeout(() => {
      if (!application.submission) {
        application.submission = true;
        resolve(application);
      } else {
        reject('Resume already submitted');
      }
    }, 1000);
  });
}

function reviewApplication(application) {
  return new Promise((resolve, reject) => {
    console.log('Reviewing application...');
    setTimeout(() => {
      if (!application.review) {
        application.review = true;
        resolve(application);
      } else {
        reject('Resume is not submitted');
      }
    }, 2000);
  });
}

function scheduleInterview(application) {
  return new Promise((resolve, reject) => {
    console.log('Scheduling interview...');
    setTimeout(() => {
      if (!application.interview) {
        application.interview = true;
        resolve(application);
      } else {
        reject('Application is not reviewed');
      }
    }, 1500);
  });
}

async function applicationprocess(name,position) {
    const application = new JobApplication(name,position)

    try {
        await submitResume(application)
        console.log("Resume submitted ✅");
        await reviewApplication(application)
        console.log("Application reviewed ✅");
        await scheduleInterview(application)
        console.log(Interview scheduled ✅ for ${application.name}(${application.position}));

    } catch(e) {
        console.log("Error:", e);
    }
}

applicationprocess("Manoshree","Frontend Developer")


solution 3

class JobApplication {
    constructor(applicantName) {
        this.applicantName = applicantName;
        this.resumeSubmitted = false;
        this.resumeReviewed = false;
        this.interviewScheduled = false;
    }

    submitResume() {
        const resumeSubmittedPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.resumeSubmitted === false) {
                    console.log(`Submitting resume for ${this.applicantName}`);
                    this.resumeSubmitted = true;
                    resolve('Resume submitted');
                } else {
                    reject('Resume already submitted');
                }
            }, 1000)
        })
        return resumeSubmittedPromise;
    }

    reviewApplication() {
         const applicationReviewedPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.resumeSubmitted === true) {
                    console.log(`Reviewing application for ${this.applicantName}`);
                    this.resumeReviewed = true;
                    resolve('Resume reviewed');
                } else {
                    reject('Resume not submitted');
                }
            }, 2000)
        })
        return applicationReviewedPromise;
    }

    scheduleInterview() {
         const interviewSchedulePromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.resumeReviewed === true) {
                    console.log(`Scheduling interview for ${this.applicantName}`);
                    this.interviewScheduled = true;
                    resolve('Interview scheduled');
                } else {
                    reject('Resume not reviewed');
                }
            }, 1500)
        })
        return interviewSchedulePromise;
    }

    async jobApplicationProcess() {
        try{
            let resumeSubmit = await this.submitResume();
            console.log(resumeSubmit);
            let applicationReview = await this.reviewApplication();
            console.log(applicationReview);
            let interviewSchedule = await this.scheduleInterview();
            console.log(interviewSchedule);
        } catch(e) {
            console.log(e)
        }
        
    }
}

let janeDoe = new JobApplication("Jane Doe");
janeDoe.jobApplicationProcess();

solution 4

Hyejin — 11:10
// #Team: Ellie and Hyejin
// Submit → Review → Schedule
// You’re developing logic for a job application system. 
// Each application moves through several asynchronous stages—submission, review,
// and interview invitation—and each stage updates the application object.

// 1. Create a jobApplication class
class jobApplication {
    constructor(name) {
        this.name = name;
        this.resumeSubmitted = false;
        this.reviewed = false;
        this.scheduled = false;
    }
}

// 2. Create the following Promise-based functions:
// a. submitResume(application)
//  i. Resolves after 1 second if resumeSubmitted is false.
//  ii. Updates the object with resumeSubmitted: true.
//  iii. Rejects if already submitted.
function submitResume(application) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (application.resumeSubmitted) {  // true
                reject("Resume already submitted.");
            } else {  // false 
                console.log(1 Submitting resume for ${application.name});
                application.resumeSubmitted = true;
                console.log("Resume submitted ✅");
                resolve(application);
            }
        }, 1000);
    });
}

// b. reviewApplication(application)
//   i. Resolves after 2 seconds if resume has been submitted.
//   ii. Updates with reviewed: true.
//   iii. Rejects if resume not submitted.
function reviewApplication(application) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!application.resumeSubmitted) {  // true
                reject("2 Resume is not submitted.");
            } else {  // false
                application.reviewed = true;
                console.log("2 Reviewing application...\nApplication reviewed ✅");
                resolve(application);
            }
        }, 2000);
    });
}
// c. scheduleInterview(application)
//       i. Resolves after 1.5 seconds if reviewed is true.
//       ii. Updates with interviewScheduled: true.
//       iii. Rejects if not reviewed.
function scheduleInterview(application) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!application.reviewed) {  // true
                reject("Application is not reviewed.");
            } else {  // false
                application.scheduled = true;
                console.log(3 Scheduling interview...\nInterview scheduled ✅ for ${application.name} (Frontend Developer));
                resolve(application);
            }
        }, 1500);
    });
}

// 3. Chain the functions so the full flow is:
//   a. Submit → Review → Schedule
// 4. Use .then() chaining or async/await.
async function goApplication(application) {
    try {
        console.log("--------------Welcome to goApplication--------------");
        await submitResume(application);
        await reviewApplication(application);
        await scheduleInterview(application);
        console.log("\nAll steps for " + application.name + " is completed..\n");
    } catch (error) {
        console.error(Error occurred: ${error});
    }
}

const application = new jobApplication("Ellie");
goApplication(application);

// For failure test
setTimeout(() => goApplication(application, 2), 5000);



    const pauseAndThink = (message, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
};

const brainstormDinner = async () => {
  try {
    console.log("I have to decide what's for dinner...");

    await pauseAndThink("Should I make salad...?", 1000);
    await pauseAndThink("Should I make ramen...?", 1000);
    await pauseAndThink("Should I make eggs...?", 1000);
    await pauseAndThink("Should I make chicken...?", 1000);

    return "beans";
  } catch (error) {
    console.log("Oops! Something went wrong:", error);
    return "takeout"; // fallback if error happens
  }
};

const decideDinner = async () => {
  const dinner = await brainstormDinner();
  console.log(`I'm going to make ${dinner} for dinner!`);
};

decideDinner();
