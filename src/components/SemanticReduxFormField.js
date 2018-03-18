import React from 'react'
import { Input } from 'semantic-ui-react'

// This allows any react-semantic-ui 'Field' to be used in a redux form.
// See how this is done in the `LoginForm` component
export default ({ input, label, meta: { touched, error, warning }, as: As = Input, ...props }) => (
  <div>
    <As
      {...input}
      value={input.value}
      {...props}
      onChange={
        (e, { value }) => input.onChange(value)
      }
      error={touched && error}
    />
    {touched && (warning && <span>{warning}</span>)}
  </div>
)
