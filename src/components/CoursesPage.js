import React, {Component} from "react";
import {connect} from "react-redux";
import * as courseActions from "../actions/courseActions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ''
            }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        console.log('onClickSave');
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add course</h2>
                <input type="text"
                       onChange={this.onTitleChange}
                       value={this.state.course.title}/>

                <input type="submit"
                       onClick={this.onClickSave}
                       value="Save"/>
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