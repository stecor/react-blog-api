import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{

  renderField(field){
    return(
      <div className="form-group">
        <label htmlFor="">{field.label}</label>
        <input className="form-control" type="text" {...field.input}/>
      </div>
    );
  }


  render(){
    return(
      <form>
        <Field label="Title for Post" name="title" component={this.renderField}/>
        <Field label="Categories" name="categories" component={this.renderField}/>
        <Field label="Post Content" name="content" component={this.renderField}/>
      </form>
    );
  }
}

function validate(values){
    const errors ={};

    //validate input from 'values'
    if(!values.title || values.title.length < 3){
      errors.title ="Enter a title that is at least 3 characters!";
    }

    if (!values.categories){
      errors.categories ="Enter some categories!";
    }

    if (!values.content){
      errors.content ="Enter some content please!";
    }


    // if errors is empty, the form is fine to submit
    // if errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(PostsNew);
