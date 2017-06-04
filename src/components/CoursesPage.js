import React, {Component} from "react";
import {connect} from "react-redux";
import * as courseActions from "../actions/courseActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import CourseList from "./course/CourseList";

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>
    }

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
                <h2>Add course</h2>
            </div>
        );
    }
}

CoursesPage.propsType = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    // createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);