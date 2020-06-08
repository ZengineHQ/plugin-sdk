import React, { useState } from 'react';

import CheckboxField from '../../src/molecules/CheckboxField';
import CheckboxGroupField from '../../src/molecules/CheckboxGroupField';
import Form from '../../src/util/Form';
import NumberField from '../../src/molecules/NumberField';
import PageTitle from '../../src/atoms/PageTitle';
import RadioGroupField from '../../src/molecules/RadioGroupField';
import SectionHeader from '../../src/atoms/SectionHeader';
import SelectField from '../../src/molecules/SelectField';
import TextAreaField from '../../src/molecules/TextAreaField';
import TextField from '../../src/molecules/TextField';
import useSyntaxHighlighter from '../../.storybook/useSyntaxHighlighter';

export default {
  title: 'Templates',
  parameters: {
    options: {
      showPanel: false
    }
  }
};

export const AllFormFields = () => {
  const organOpts = ['Heart', 'Kidneys', 'Liver', 'Spleen'];
  const sportOpts = ['Baseball', 'Basketball', 'Football', 'Hockey', 'Soccer'];
  const dinoOpts = ['Triceratops', 'Tyrannosaurus Rex', 'Ankylosaurus', 'Velociraptor', 'Parasaurolophus'];
  const turtleOpts = ['Donatello', 'Leonardo', 'Michelangelo', 'Rafael'];

  const [values, setValues] = useState({});

  const handleSubmit = data => {
    setValues(data);
  };

  return (
    <>
      <PageTitle>The following form contains all of the available field molecules</PageTitle>

      <p>They are displayed in alphabetical order with no additional formatting.</p>

      <hr />

      <Form onSubmit={ handleSubmit }>

        <TextField
          label="Name"
          name="name"
          placeholder="What be your name fool?"
          required
          help="This is a tough one you might need to figure it out on your own..."
        />

        <CheckboxField
          label="I agree to receive spam emails from you"
          name="marketing"
          required
          help="No hard feelings..."
        />

        <NumberField
          label="How many wishes would you like"
          name="wishes"
          help="Just pick a number, you're not actually getting any..."
          required
        />

        <RadioGroupField
          label="Favorite sport"
          options={ sportOpts }
          name="sport"
          required
          help="Snarky help text"
        />

        <SelectField
          label="Favorite organ"
          options={ organOpts }
          name="organ"
          required
          help="This is a single-value, regular select box.  Don't worry I won't tell your other organs they're not the favorite..."
        />

        <TextAreaField
          label="Message"
          name="message"
          placeholder="Type in something thoughtful"
          required
          resizable={ false }
          help="This is a non-resizable text-area"
        />

        <CheckboxGroupField
          name="dino"
          label="Which dinosaurs you would like to be?"
          help="There's really no right answer..."
          required={ true }
          options={ dinoOpts }
        />

        <SelectField
          label="Favorite Ninja Turtle"
          name="turtle"
          multiple
          required
          placeholder=""
          options={ turtleOpts }
          help="This is a multiple-value select field. Splinter isn't a turtle, stop insisting."
        />

      </Form>

      <hr />

      <SectionHeader>Submit the form to see the values:</SectionHeader>

      <pre>
        { useSyntaxHighlighter(JSON.stringify(values, null, 1)) }
      </pre>
    </>
  );
}
