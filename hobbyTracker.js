const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];
// This section uses an Array to categorize each day dedicated to a hobby, how many minuites was dedicated to it, and the overall mood during the activity.
// Sets up for the functions to draw information from.

function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0);
}
// Serves as a way to chart down the total amount of time across all forms of hobbies.
// Uses an addition formula for function totalTime(log) to find the result of the sum.

function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby);
  return [...new Set(names)];
}
// This section selects which hobby was used the most across the week.
// Defines the number of hobbies and describing them.

function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}
// Serves to define which hobby lasted more than 30 minutes throughout the week.
// Counts how many days have passed the 30 minute threshold.

function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length;
}
// This section counts how many days had "relaxed" as the overall mood.
// Displays the answer with only a number.

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

/* Everything within this code works well; however, function (longSessions) is having issues with finding how many days have passed the 30 minute threshold. A solution to this issue would be:
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30).length); */

console.log("Focused sessions:", countMood(hobbyLog, "focused"));