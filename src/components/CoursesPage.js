import React, {Component} from "react";
import {connect} from "react-redux";
import * as courseActions from "../actions/courseActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import CourseList from "./course/CourseList";
import {withRouter} from "react-router-dom";

const redirectToAddCoursePage = withRouter(({history}) => {
    history.push('/blah');
    console.log('asd')
});

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
    }

    redirectToAddCoursePage() {
        console.log('redirectToAddCoursePage');
    }

    componentDidMount() {
        console.log("did mount");
        this.props.actions.loadCourses();
    }

    // courseRow(course, index) {
    //     return <div key={index}>{course.title}</div>
    // }

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input type="submit" value="Add course" className="btn btn-primary" onClick={this.redirectToAddCoursePage}/>
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