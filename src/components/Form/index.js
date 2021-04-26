import React from 'react';
import FormCheck from './Check';
import FormFile from './File';
import FormInput from './Input';
import FormLabel from './Label';
import FormFeedback from './Feedback';
import FormGroup from './Group';
import FormInputGroup from './InputGroup';
import FormSelect from './Select';


const Form = React.forwardRef((props, ref) => (
  <form
    ref={ref}
    {...props}
  />
));
Form.Group = FormGroup;
Form.Check = FormCheck;
Form.File = FormFile;
Form.Input = FormInput;
Form.InputGroup = FormInputGroup;
Form.Label = FormLabel;
Form.Feedback = FormFeedback;
Form.displayName = 'Form';
Form.Select = FormSelect;
export default Form;
