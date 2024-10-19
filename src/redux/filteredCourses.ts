import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const URL_COURSES = "http://localhost:8000/courses";

export type Content = {
  type: string;
  data: string;
}

export type Lesson = {
  title: string;
  description: string;
  topics: string[];
  content: Content []
}

export type Modules = {
  title: string;
  lessons: Lesson [];
} | undefined

export type Course = {
  id: number;
  title: string;
  description: string;
  modules: Modules []
} | undefined

export type CoursesState = {
    course: Course;
    lessons: Lesson[];
    courses: Course[];
    searchfield: string;
    loading: boolean;
    courseId: number;
    moduleTitle: string;
    lessonTitle: string;
} | undefined

const fetchCourses = async (): Promise</*unresolved*/ any> => {
  try {
    const response = await axios.get(URL_COURSES);
    const feedbacks = response.data;
    return { feedbacks };
  } catch (error) {
    console.error(error);
  }
};

export const getCoursesAsync = createAsyncThunk(
  "feedbacks/getFeedbacksAsync",
  fetchCourses,
);

const initialState: CoursesState = {
  courses: [],
  lessons:[],
  course: {
    id: 1,
    title: "",
    description: "",
    modules: []
  },
  searchfield: "",
  loading: true,
  courseId: 1, 
  moduleTitle: "HTML Basics",
  lessonTitle: "Understanding HTML Structure"
};

export const filteredCoursesSlice = createSlice({
  name: "filteredCourses",
  initialState,
  reducers: {
    addCourseId: (state, action: PayloadAction<number>) => {
      state.courseId = action.payload
      state.course = state.courses.find((item:any) => item.id === state.courseId)
    },
    addModuleTitle: (state, action: PayloadAction<string>) => {
      state.moduleTitle = action.payload;
    },
    addLessonTitle: (state, action: PayloadAction<string>) => {
      state.lessonTitle= action.payload;
    }

  },
  extraReducers: (builder) => {
    builder.addCase(
      getCoursesAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.courses = action.payload.feedbacks;
        state.loading = false;
      },
    );
  },
});

export const { addCourseId, addModuleTitle, addLessonTitle } = filteredCoursesSlice.actions;

export default filteredCoursesSlice.reducer;
