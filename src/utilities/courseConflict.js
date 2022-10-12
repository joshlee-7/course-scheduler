const parseMeetingTimes = (info) => {
  console.log(info);
  let [day, time] = info.split(" ");
  day = day.split(/(?=[A-Z])/);
  let [startTime, endTime] = time.split("-");
  let [startHour, startMin] = startTime.split(":");
  const startNum = parseInt(startHour) * 60 + parseInt(startMin);
  let [endHour, endMin] = endTime.split(":");
  const endNum = parseInt(endHour) * 60 + parseInt(endMin);
  return [day, startNum, endNum];
};

const daysOverlap = (day1, day2) => {
  return day1.some((d) => day2.includes(d));
};

const hoursOverlap = (start1, end1, start2, end2) => {
  return (
    (start1 >= start2 && end2 >= start1) ||
    (start1 <= start2 && end1 >= start2) ||
    (start1 <= start2 && end1 >= end2) ||
    (start1 >= start2 && end1 <= end2)
  );
};

const sameTerm = (term1, term2) => {
  return term1 == term2;
};

const isConflict = (course1, course2) => {
  let [day1, start1, end1] = parseMeetingTimes(course1.meets);
  let term1 = course1.term;
  let [day2, start2, end2] = parseMeetingTimes(course2.meets);
  let term2 = course2.term;

  return (
    daysOverlap(day1, day2) &&
    hoursOverlap(start1, end1, start2, end2) &&
    sameTerm(term1, term2)
  );
};

export const disableCoursesWithConflicts = (
  conflictingCourses,
  newlySelected,
  courses,
  selectedCourses
) => {
  const newConflicts = [];

  Object.entries(courses).map(([id, course]) => {
    if (
      isConflict(course, courses[newlySelected]) &&
      !conflictingCourses.includes(id) &&
      !selectedCourses.includes(id) &&
      id !== newlySelected
    ) {
      newConflicts.push(id);
    }
  });
  return newConflicts.concat(conflictingCourses);
};

export const enableCoursesWithNoConflicts = (
  conflictingCourses,
  newlyDeleted,
  courses,
  id
) => {
  return conflictingCourses.filter((conflict) => {
    return isConflict(courses[conflict], courses[id]);
  });
};
