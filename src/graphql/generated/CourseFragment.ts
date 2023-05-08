/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CourseFragment
// ====================================================

export interface CourseFragment_cover {
  __typename: "UploadFile";
  url: string;
}

export interface CourseFragment_instructor {
  __typename: "Instructor";
  name: string;
}

export interface CourseFragment {
  __typename: "Course";
  id: string;
  name: string;
  slug: string | null;
  cover: CourseFragment_cover | null;
  instructor: CourseFragment_instructor | null;
  price: number;
  promotion_price: number | null;
}
