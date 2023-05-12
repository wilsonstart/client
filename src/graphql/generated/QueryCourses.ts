/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryCourses
// ====================================================

export interface QueryCourses_courses_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryCourses_courses_instructor {
  __typename: "Instructor";
  name: string;
}

export interface QueryCourses_courses {
  __typename: "Course";
  id: string;
  name: string;
  slug: string;
  cover: QueryCourses_courses_cover ;
  instructor: QueryCourses_courses_instructor ;
  price: number;
  promotion_price: number;
}

export interface QueryCourses_coursesConnection_values {
  __typename: "Course";
  id: string;
}

export interface QueryCourses_coursesConnection {
  __typename: "CourseConnection";
  values: (QueryCourses_coursesConnection_values | null)[] | null;
}

export interface QueryCourses {
  courses: QueryCourses_courses[];
  coursesConnection: QueryCourses_coursesConnection | null;
}

export interface QueryCoursesVariables {
  limit: number;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
