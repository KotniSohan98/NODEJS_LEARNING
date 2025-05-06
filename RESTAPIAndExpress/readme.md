Coure Rating Application

//

- GET all Courses
- Get one Single Course
- Create new Course

- Get all courses
  GET /api/v1/courses

-Gets the average ratings of all the students for the course 1234
GET /api/v1/courses/courdeId/average-rating (possible)
GET /api/v1/ratings?courseId=xyz (possible - if rating is different services)

-Get one Single course
GET /api/v1/courses/:courseId

-Create new course
POST /api/v1/courses

-Adds the rating to the provided course 1234
POST /api/v1/courses/courseId/rating

-Modifies the information of the course with the provided details
PUT /api/v1/courses/courseID ==> Replace
PATCH /api/v1/courses/courseID ==>Modified
