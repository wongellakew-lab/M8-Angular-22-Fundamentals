export interface Course {
  Id: number;
  Code: string;
  Title: string;
  MaxCapacity: number;
  EnrollmentCount: number;
}
export interface PagedResponse<T> {
  data: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export interface CourseLink {
  href: string;
  rel: string;
  method: string;
}

export interface CourseDetail extends Course {
  links: readonly CourseLink[];
}
