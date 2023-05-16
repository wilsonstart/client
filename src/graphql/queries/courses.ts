import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { CourseFragment } from 'graphql/fragments/course'
import {
  QueryCourses,
  QueryCoursesVariables
} from 'graphql/generated/QueryCourses'

export const QUERY_COURSES = gql`
  query QueryCourses($limit: Int, $start: Int, $where: JSON, $sort: String) {
    courses(limit: $limit, start: $start, where: $where, sort: $sort) {
      ...CourseFragment
    }

    coursesConnection(where: $where) {
      values {
        id
      }
    }
  }
  ${CourseFragment}
`

export const QUERY_COURSE_BY_SLUG = gql`
  query QueryCourseBySlug($slug: String!) {
    courses(where: { slug: $slug }) {
      id
      name
      slug
      short_description
      description
      price
      duration
      lesson
      cover {
        url
      }
      category {
        name
      }
      course_type {
        name
        slug
      }
      instructor {
        name
      }
      curriculum {
        module
        content {
          name
          description
          video {
            url
          }
          file {
            url
          }
        }
      }
      updated_at
    }
  }
`

export function useQueryCourses(
  options?: QueryHookOptions<QueryCourses, QueryCoursesVariables>
) {
  return useQuery<QueryCourses, QueryCoursesVariables>(QUERY_COURSES, options)
}
