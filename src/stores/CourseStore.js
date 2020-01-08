import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find(course => course.slug === slug);
  }
}

const courseStore = new CourseStore();

Dispatcher.register(action => {
  switch (action.type) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      courseStore.emitChange();
      break;

    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      courseStore.emitChange();
      break;

    default:
  }
});

export default courseStore;
